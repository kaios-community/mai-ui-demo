import { SelectableBase } from 'mai-ui/dist/components/SelectableBase';
import { Tile, TileContent } from 'mai-ui/dist/components/tiles';
import { Typography } from 'mai-ui/dist/components/Typography';
import { useView } from 'mai-ui/dist/contexts';
import { SelectablePriority } from 'mai-ui/dist/enums';
import { useListNav } from 'mai-ui/dist/hooks';
import { Fragment, h } from 'preact';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import {
  MdExpandLess,
  MdHome,
  MdList,
  MdOutlineApps,
  MdOutlineTableChart,
  MdSettings,
  MdSmartButton,
  MdTextFields,
  MdTextFormat,
} from 'react-icons/md';
import { useSettings } from '../contexts/SettingsProvider';
import { ListLayout } from '../models';
import { Icon } from '../ui-components/icon';
import styles from './AppMenu.module.css';

interface AppMenuProps {
  onClose?: () => void;
}

export function AppMenu(props: AppMenuProps): h.JSX.Element {
  const { settings } = useSettings();
  const view = useView();

  useEffect(() => {
    view.setHomeMenuOpen(true);
    return () => view.setHomeMenuOpen(false);
  }, []);

  function handleSelect(id?: string): void {
    console.log('select', id);

    let pageRoute = '/';

    switch (id) {
      case 'home':
        pageRoute = '/home';
        break;
      case 'lists':
        pageRoute = '/lists/basic';
        break;
      case 'appbar':
        pageRoute = '/appbar';
        break;
      case 'tabs':
        pageRoute = '/tabs/info';
        break;
      case 'typography':
        pageRoute = '/typography';
        break;
      case 'buttons':
        pageRoute = '/buttons';
        break;
      case 'forms':
        pageRoute = '/forms/checkbox';
        break;
      case 'tiles':
        pageRoute = '/tiles';
        break;
      case 'settings':
        pageRoute = '/settings/display';
        break;
    }

    route(pageRoute);
  }

  const { selectedId } = useListNav({
    priority: SelectablePriority.Medium,
    onSelect: handleSelect,
  });

  return (
    <div className={styles.root}>
      <Typography type="bodyLarge">MaiUI Demo</Typography>
      {settings.homeMenuLayout === ListLayout.Grid ? (
        <div className={styles.grid}>
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdHome />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>home</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'home',
              shortcut: '1',
              selected: selectedId === 'home',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdList />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>lists</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'lists',
              shortcut: '2',
              selected: selectedId === 'lists',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdExpandLess />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>appbar</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'appbar',
              shortcut: '3',
              selected: selectedId === 'appbar',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdOutlineTableChart />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>tabs</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'tabs',
              shortcut: '4',
              selected: selectedId === 'tabs',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdTextFields />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>text</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'typography',
              shortcut: '5',
              selected: selectedId === 'typography',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdSmartButton />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>buttons</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'buttons',
              shortcut: '6',
              selected: selectedId === 'buttons',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdTextFormat />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>forms</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'forms',
              shortcut: '7',
              selected: selectedId === 'forms',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdOutlineApps />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>tiles</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'tiles',
              shortcut: '8',
              selected: selectedId === 'tiles',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdSettings />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>settings</Typography>
              </TileContent>
            }
            selectable={{
              priority: SelectablePriority.Medium,
              id: 'settings',
              shortcut: '9',
              selected: selectedId === 'settings',
            }}
          />
        </div>
      ) : (
        <div className={styles.list}>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="home"
            shortcut="1"
            selected={selectedId === 'home'}
          >
            <Icon icon={<MdHome />} />
            <span>1</span>
            Home
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="lists"
            shortcut="2"
            selected={selectedId === 'lists'}
          >
            <Icon icon={<MdList />} />
            <span>2</span>
            Lists
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="appbar"
            shortcut="3"
            selected={selectedId === 'appbar'}
          >
            <Icon icon={<MdExpandLess />} />
            <span>3</span>
            Appbar
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="tabs"
            shortcut="4"
            selected={selectedId === 'tabs'}
          >
            <Icon icon={<MdOutlineTableChart />} />
            <span>4</span>
            Tabs
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="typography"
            shortcut="5"
            selected={selectedId === 'typography'}
          >
            <Icon icon={<MdTextFields />} />
            <span>5</span>
            Typography
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="buttons"
            shortcut="6"
            selected={selectedId === 'buttons'}
          >
            <Icon icon={<MdSmartButton />} />
            <span>6</span>
            Buttons
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="forms"
            shortcut="7"
            selected={selectedId === 'forms'}
          >
            <Icon icon={<MdTextFormat />} />
            <span>7</span>
            Forms
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="tiles"
            shortcut="8"
            selected={selectedId === 'tiles'}
          >
            <Icon icon={<MdOutlineApps />} />
            <span>8</span>
            Tiles
          </SelectableBase>
          <SelectableBase
            className={styles.row}
            priority={SelectablePriority.Medium}
            id="settings"
            shortcut="9"
            selected={selectedId === 'settings'}
          >
            <Icon icon={<MdSettings />} />
            <span>9</span>
            Settings
          </SelectableBase>
        </div>
      )}
    </div>
  );
}
