import { AppBar } from 'mai-ui/dist/components/appbar';
import { List, ListItem } from 'mai-ui/dist/components/list';
import { View, ViewTab, ViewTabBar } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { route } from 'preact-router';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

type Props = {
  tabId: 'basic' | 'simple' | 'shortcuts' | 'detailed' | 'images';
};

function Lists({ tabId }: Props) {
  const { selectedId } = useListNav({
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  return (
    <View>
      <Statusbar text="Lists" />
      <ViewTabBar
        tabs={[
          { id: 'basic', label: 'basic' },
          { id: 'simple', label: 'simple' },
          { id: 'shortcuts', label: 'shortcuts' },
          { id: 'detailed', label: 'detailed' },
          { id: 'images', label: 'images' },
        ]}
        selectedId={tabId}
        onChange={(tabId) => route(`/lists/${tabId}`, true)}
      />
      <ViewTab tabId="basic" activeTabId={tabId}>
        <List>
          {new Array(10).fill(1).map((a, i) => (
            <ListItem
              key={i}
              primaryText={`Primary Text ${i + 1}`}
              selectable={{
                id: `basic_${i + 1}`,
                selected: selectedId === `basic_${i + 1}`,
              }}
            />
          ))}
        </List>
      </ViewTab>
      <ViewTab tabId="simple" activeTabId={tabId}>
        <List>
          {new Array(10).fill(1).map((a, i) => (
            <ListItem
              key={i}
              primaryText={`Primary Text ${i + 1}`}
              secondaryText="Secondary Text"
              selectable={{
                id: `simple_${i + 1}`,
                selected: selectedId === `simple_${i + 1}`,
              }}
            />
          ))}
        </List>
      </ViewTab>
      <ViewTab tabId="shortcuts" activeTabId={tabId}>
        <List>
          {new Array(10).fill(1).map((a, i) => (
            <ListItem
              key={i}
              primaryText={`Primary Text ${i + 1}`}
              secondaryText="Secondary Text"
              selectable={{
                id: `shortcuts_${i + 1}`,
                selected: selectedId === `shortcuts_${i + 1}`,
                shortcut: i + 1,
              }}
            />
          ))}
        </List>
      </ViewTab>
      <ViewTab tabId="detailed" activeTabId={tabId}>
        <List>
          {new Array(10).fill(1).map((a, i) => (
            <ListItem
              key={i}
              primaryText={`Primary Text ${i + 1}`}
              secondaryText="Secondary Text"
              accentText="Accent Text"
              selectable={{
                id: `detailed_${i + 1}`,
                selected: selectedId === `detailed_${i + 1}`,
              }}
            />
          ))}
        </List>
      </ViewTab>
      <ViewTab tabId="images" activeTabId={tabId}>
        <List>
          {new Array(10).fill(1).map((a, i) => (
            <ListItem
              key={i}
              imageUrl="https://place-hold.it/32x32&text="
              primaryText={`Primary Text ${i + 1}`}
              secondaryText="Secondary Text"
              selectable={{
                id: `images_${i + 1}`,
                selected: selectedId === `images_${i + 1}`,
              }}
            />
          ))}
        </List>
      </ViewTab>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Lists;
