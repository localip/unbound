import { findByDisplayName } from '@webpack';
import { Locale } from '@webpack/common';
import { create } from '@patcher';

import Plugins from '@core/panels/Plugins';
import General from '@core/panels/General';
import Themes from '@core/panels/Themes';

const Patcher = create('unbound-settings');

const SettingsView = findByDisplayName('SettingsView');

export function initialize() {
  if (!SettingsView?.prototype?.getPredicateSections) return;

  const unpatch = Patcher.before(SettingsView.prototype, 'getPredicateSections', () => {
    if (window.PCInternals) {
      PCInternals.SettingsRenderer.filterItems = () => false;
      unpatch();
    }
  });

  Patcher.after(SettingsView.prototype, 'getPredicateSections', (_, args, res) => {
    if (!res?.length) return;

    const connections = res.findIndex(r => r.label === Locale.Messages.APP_SETTINGS);
    if (connections < 0) return;

    res.splice(connections, 0,
      {
        label: 'Unbound',
        section: 'HEADER'
      },
      {
        label: 'General',
        section: 'Unbound',
        element: General
      },
      {
        label: 'Plugins',
        section: 'Unbound Plugins',
        element: Plugins
      },
      {
        label: 'Themes',
        section: 'Unbound Themes',
        element: Themes
      },
      {
        section: 'DIVIDER'
      }
    );
  });
}

export function shutdown() {
  Patcher.unpatchAll();

  if (window.PCInternals) {
    PCInternals.SettingsRenderer.filterItems = () => true;
  }
}