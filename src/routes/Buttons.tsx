import { AppBar } from 'mai-ui/dist/components/appbar';
import { Button } from 'mai-ui/dist/components/buttons';
import { View, ViewContent } from 'mai-ui/dist/components/view';
import { SelectablePriority } from 'mai-ui/dist/enums';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

function Buttons() {
  const { selectedId } = useListNav({
    // Need to check if button is disabled here
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  return (
    <View>
      <Statusbar text="Buttons" />
      <ViewContent>
        <Button
          text="Button 1"
          selectable={{
            priority: SelectablePriority.Low,
            id: 'button1',
            selected: selectedId === 'button1',
          }}
        />
        <Button
          text="Button 2"
          selectable={{
            priority: SelectablePriority.Low,
            id: 'button2',
            selected: selectedId === 'button2',
          }}
        />
        <Button
          text="Button 3"
          selectable={{
            priority: SelectablePriority.Low,
            id: 'button3',
            selected: selectedId === 'button3',
          }}
        />
        <Button
          text="Disabled Button"
          selectable={{
            priority: SelectablePriority.Low,
            id: 'button4',
            selected: selectedId === 'button4',
          }}
          disabled={true}
        />
      </ViewContent>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Buttons;
