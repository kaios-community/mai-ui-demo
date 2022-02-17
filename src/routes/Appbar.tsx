import { AppBar } from 'mai-ui/dist/components/appbar';
import { Typography } from 'mai-ui/dist/components/Typography';
import { View, ViewContent } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

function Appbar() {
  const [settings, setSettings] = useState<any>({
    option1: 'opt1',
    option2: 'opt1',
  });

  const { selectedId } = useListNav({
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  function setSetting(key: string, val: string): void {
    setSettings({
      ...settings,
      [key]: val,
    });
  }

  return (
    <View>
      <Statusbar text="Appbar" />
      <ViewContent>
        <Typography>
          The appbar lives at the bottom of every screen. You can press{' '}
          <Typography color="accent" display="inline" padding="none">
            SoftLeft
          </Typography>{' '}
          to open the global app menu or{' '}
          <Typography color="accent" display="inline" padding="none">
            SoftRight
          </Typography>{' '}
          to view available options and actions.
        </Typography>

        <Typography type="subtitle">Options</Typography>
        <Typography>
          Options are usually screen-specific settings; things that don't quite make sense to have
          in the global app settings screen. To change an option, highlight it and press{' '}
          <Typography color="accent" display="inline" padding="none">
            Left
          </Typography>{' '}
          or{' '}
          <Typography color="accent" display="inline" padding="none">
            Right
          </Typography>{' '}
          on the d-pad.
        </Typography>

        <Typography type="subtitle">Actions</Typography>
        <Typography>
          Screen-specific functions. Like lists, you can use the number keys to quickly select an
          action.
        </Typography>
      </ViewContent>
      <AppBar
        appMenuContent={<AppMenu />}
        options={[
          {
            id: 'option1',
            label: 'Option 1',
            currentValue: settings.option1,
            options: [
              { id: 'opt1', label: 'opt1' },
              { id: 'opt2', label: 'opt2' },
              { id: 'opt3', label: 'opt3' },
            ],
          },
          {
            id: 'option2',
            label: 'Option 2',
            currentValue: settings.option2,
            options: [
              { id: 'opt1', label: 'opt1' },
              { id: 'opt2', label: 'opt2' },
              { id: 'opt3', label: 'opt3' },
            ],
          },
        ]}
        actions={[
          {
            id: 'action1',
            label: 'Action 1',
            actionFn: () => console.log('selected action1'),
          },
          {
            id: 'action2',
            label: 'Action 2',
            actionFn: () => console.log('selected action2'),
          },
          {
            id: 'action3',
            label: 'Action 3',
            actionFn: () => console.log('selected action3'),
          },
        ]}
        onOptionChange={(id, value) => setSetting(id, value as string)}
      />
    </View>
  );
}

export default Appbar;
