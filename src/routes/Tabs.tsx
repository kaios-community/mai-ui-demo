import { AppBar } from 'mai-ui/dist/components/appbar';
import { List, ListItem } from 'mai-ui/dist/components/list';
import { Typography } from 'mai-ui/dist/components/Typography';
import { View, ViewTab, ViewTabBar } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { route } from 'preact-router';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

type Props = {
  tabId: 'info' | 'list' | 'text' | 'tab4' | 'tab5';
};

function Tabs({ tabId }: Props) {
  const { selectedId } = useListNav({
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  return (
    <View>
      <Statusbar text="Tabs" />
      <ViewTabBar
        tabs={[
          { id: 'info', label: 'info' },
          { id: 'list', label: 'list' },
          { id: 'text', label: 'text' },
          { id: 'tab4', label: 'tab4' },
          { id: 'tab5', label: 'tab5' },
        ]}
        selectedId={tabId}
        onChange={(tabId) => route(`/tabs/${tabId}`, true)}
      />
      <ViewTab tabId="info" activeTabId={tabId}>
        <Typography>
          Tabs allow you to have multiple views in a screen.{' '}
          <Typography display="inline" color="accent" padding="none">
            Left
          </Typography>{' '}
          and{' '}
          <Typography display="inline" color="accent" padding="none">
            Right
          </Typography>{' '}
          d-pad buttons are used to switch between tabs.
        </Typography>
      </ViewTab>
      <ViewTab tabId="list" activeTabId={tabId}>
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
      <ViewTab tabId="text" activeTabId={tabId}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nulla non ex tristique
          commodo. Mauris sed enim odio. Fusce vel augue nec augue lobortis convallis. Donec vitae
          lacus non est bibendum tempor vel at risus. Etiam at nisl ut lectus lobortis faucibus. Ut
          blandit metus ac dolor elementum, ut feugiat justo vehicula. In placerat interdum velit,
          at tempor velit. Etiam consequat purus eu augue luctus vehicula. Aenean sit amet nibh sed
          lacus maximus pharetra vel eget sem. Sed laoreet hendrerit enim.
        </Typography>
      </ViewTab>
      <ViewTab tabId="tab4" activeTabId={tabId}>
        <Typography>Tab 4 content</Typography>
      </ViewTab>
      <ViewTab tabId="tab5" activeTabId={tabId}>
        <Typography>Tab 5 content</Typography>
      </ViewTab>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Tabs;
