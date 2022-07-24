import { connectComponent } from '@api/settings';
import { Plug } from '@core/components/Icons';
import { Flex } from '@components/discord';
import * as Toasts from '@api/toasts';
import Manager from './Manager';

class Plugins extends Manager {
   constructor(props) {
      super(props, 'plugins');

      this.state = {
         search: '',
         breadcrumbs: [],
         settings: {
            entity: null,
            client: null
         }
      };
   }

   componentWillMount() {
      const forceUpdate = this.forceUpdate.bind(this, null);

      window.powercord && powercord.pluginManager.on('updated', forceUpdate);
      window.BdApi && BdApi.Plugins.on('updated', forceUpdate);
      window.unbound && unbound.managers.plugins.on('updated', forceUpdate);
   }

   componentWillUnmount() {
      const forceUpdate = this.forceUpdate.bind(this, null);

      window.powercord && powercord.pluginManager.off('updated', forceUpdate);
      window.BdApi && BdApi.Plugins.off('updated', forceUpdate);
      window.unbound && unbound.managers.plugins.off('updated', forceUpdate);
   }

   override getAddons() {
      const addons = {
         unbound: [...unbound.managers.plugins.entities.values()],
         powercord: [],
         bd: []
      };

      if (window.powercord) {
         addons.powercord.push(...powercord.pluginManager.addons);
      }

      if (window.BdApi) {
         addons.bd.push(...BdApi.Plugins.getAll());
      }

      return { addons, count: Object.values(addons).flat().length };
   }

   override onReload() {
      const missing = {
         unbound: [],
         powercord: []
      };

      if (window.unbound) {
         const payload = unbound.managers.plugins.loadMissing();
         missing.unbound.push(...payload.loaded);
      }

      if (window.powercord) {
         const payload = powercord.pluginManager.loadAll(true, false);
         missing.powercord.push(...payload);
      }

      const res = Object.entries(missing).flatMap(([client, addons]) => {
         if (!addons.length) return;
         const content = [];

         for (const addon of addons) {
            const name = this.resolve(addon, 'name');

            content.push(<Flex
               direction={Flex.Direction.HORIZONTAL}
               align={Flex.Align.CENTER}
               wrap={Flex.Wrap.NO_WRAP}
            >
               {client === 'powercord' ? <Plug
                  width={12}
                  height={12}
               /> : null} {name}
            </Flex>);
         }

         return content;
      }).filter(Boolean) as any as JSX.Element;

      if (!(res as any as []).length) return;

      Toasts.open({
         title: 'Missing plugins found:',
         icon: 'CheckmarkCircle',
         color: 'var(--info-positive-foreground)',
         content: () => res
      });
   }
}

export default connectComponent(Plugins, 'plugins-manager');