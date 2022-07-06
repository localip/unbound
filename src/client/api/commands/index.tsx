import { createLogger } from '@common/logger';
import { bulk, filters } from '@webpack';
import { classnames } from '@utilities';
import { create } from '@patcher';
import React from 'react';

const Logger = createLogger('API', 'Commands');
const Patcher = create('unbound-commands');

import Icon from './components/SectionIcon';

const [
  CommandsStore,
  Icons,
  SearchStore,
  Classes,
  SectionIcon,
  ApplicationCommandItem,
  ChannelApplicationIcon
] = bulk(
  filters.byProps('getBuiltInCommands'),
  filters.byProps('getApplicationIconURL'),
  filters.byProps('useSearchManager'),
  m => !m.mask && m.icon && m.selectable && m.wrapper,
  filters.byDisplayName('ApplicationCommandDiscoverySectionIcon', false),
  filters.byDisplayName('ApplicationCommandItem', false),
  m => m.type?.displayName === 'ChannelApplicationIcon'
);

export const commands = new Map();
export const section = {
  id: 'unbound',
  type: 0,
  name: 'Unbound',
  icon: 'https://github.com/unbound-mod.png'
};

export function initialize() {
  try {
    Patcher.before(ChannelApplicationIcon, 'type', (_, [props]) => {
      if (!props.section && props.command.__unbound) {
        props.section = section;
      }
    });
  } catch (e) {
    Logger.error('Failed to patch ChannelApplicationIcon: ', e);
  }

  try {
    Patcher.before(ApplicationCommandItem, 'default', (_, [props]) => {
      if (!props.section && props.command.__unbound) {
        props.section = section;
      }
    });
  } catch (e) {
    Logger.error('Failed to patch ApplicationCommandItem: ', e);
  }

  try {
    Patcher.instead(SectionIcon, 'default', (self, args, orig) => {
      const [props] = args;
      const isSmall = props.selectable === void 0;

      if (props.section.id === section.id) {
        const metadata = classnames(Classes.wrapper, props.selectable && Classes.selectable, props.selectable && props.isSelected && Classes.selected);

        return (
          <div className={metadata}>
            <Icon
              width={props.width}
              height={props.height}
              className={classnames(Classes.icon, props.className)}
              style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                padding: !isSmall ? '4px' : 0,
                paddingBottom: !isSmall ? '1px' : 0
              }}
            />
          </div>
        );
      }

      return orig.apply(self, args);
    });
  } catch (e) {
    Logger.error('Failed to patch ApplicationCommandDiscoverySectionIcon: ', e);
  }

  try {
    CommandsStore.BUILT_IN_SECTIONS['unbound'] = section;
  } catch (e) {
    Logger.error('Failed to push section to BUILT_IN_SECTIONS: ', e);
  }

  try {
    Patcher.instead(Icons, 'getApplicationIconURL', (self, args, orig) => {
      if (args[0]?.id === section.id) {
        return section.icon;
      }

      return orig.apply(self, args);
    });
  } catch (e) {
    Logger.error('Failed to patch getApplicationIconURL: ', e);
  }

  try {
    Patcher.instead(SearchStore.default, 'getApplicationSections', (_, args, orig) => {
      try {
        const res = orig.apply(self, args) ?? [];

        if (!res.find(r => r.id === section.id)) {
          res.push(section);
        };

        return res;
      } catch {
        return [];
      }
    });
  } catch (e) {
    Logger.error('Failed to patch getApplicationSections: ', e);
  }

  try {
    Patcher.after(SearchStore.default, 'getQueryCommands', (_, [, , query], res) => {
      if (!query || query.startsWith('/')) return;
      res ??= [];

      for (const command of commands.values()) {
        if (!~command.name?.indexOf(query) || res.some(e => e.__unbound && e.id === command.id)) {
          continue;
        }

        try {
          res.unshift(command);
        } catch {
          // Discord calls Object.preventExtensions on the result when switching channels
          // Therefore, re-making the result array is required.
          res = [...res, command];
        }
      }
    });
  } catch (e) {
    Logger.error('Failed to patch getQueryCommands: ', e);
  }

  try {
    Patcher.after(SearchStore, 'useSearchManager', (_, [, type], res) => {
      if (type !== 1 || !commands.size) return;

      if (!res.sectionDescriptors?.find?.(s => s.id === section.id)) {
        res.sectionDescriptors ??= [];
        res.sectionDescriptors.push(section);
      }

      if ((!res.filteredSectionId || res.filteredSectionId === section.id) && !res.activeSections.find(s => s.id === section.id)) {
        res.activeSections.push(section);
      }

      const cmds = [...commands.values()];
      if (cmds.some(c => !res.commands?.find?.(r => r.id === c.id))) {
        res.commands ??= [];

        // De-duplicate commands
        const collection = [...res.commands, ...cmds];
        res.commands = [...new Set(collection).values()];
      }

      if ((!res.filteredSectionId || res.filteredSectionId === section.id) && !res.commandsByActiveSection.find(r => r.section.id === section.id)) {
        res.commandsByActiveSection.push({
          section: section,
          data: [...cmds.values()]
        });
      }

      const active = res.commandsByActiveSection.find(r => r.section.id === section.id);
      if ((!res.filteredSectionId || res.filteredSectionId === section.id) && active && active.data.length === 0 && commands.size !== 0) {
        active.data = [...commands.values()];
      }

      /*
       * Filter out duplicate built-in sections due to a bug that causes
       * the getApplicationSections path to add another built-in commands
       * section to the section rail
       */

      const builtIn = res.sectionDescriptors.filter(s => s.id === '-1');
      if (builtIn.length > 1) {
        res.sectionDescriptors = res.sectionDescriptors.filter(s => s.id !== '-1');
        res.sectionDescriptors.push(builtIn.find(r => r.id === '-1'));
      }
    });
  } catch (e) {
    Logger.error('Failed to patch useSearchManager: ', e);
  }
};

export function shutdown() {
  try {
    delete CommandsStore.BUILT_IN_SECTIONS['unbound'];
  } catch (e) {
    Logger.error('Failed to remove section from BUILT_IN_SECTIONS: ', e);
  }

  Patcher.unpatchAll();
}

export function register(options) {
  const { command, executor, ...cmd } = options;
  if (!command) return;

  commands.set(command, {
    type: 3,
    target: 1,
    id: command,
    name: command,
    applicationId: section.id,
    options: [],
    __unbound: true,
    listed: true,
    dmPermission: true,
    execute: () => { },
    ...cmd
  });
}

export function unregister(id) {
  commands.delete(id);
};