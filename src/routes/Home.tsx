import { AppBar } from 'mai-ui/dist/components/appbar';
import { Typography } from 'mai-ui/dist/components/Typography';
import { View, ViewContent } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

function Home() {
  const { selectedId } = useListNav({
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  return (
    <View>
      <Statusbar text="MaiUI" />
      <ViewContent>
        <Typography>Hello.</Typography>
        <Typography>
          Welcome! MaiUI is a UI component library for KaiOS. This app serves as a demo of all the
          different features and components. Press{' '}
          <Typography display="inline" color="accent" padding="none">
            SoftLeft
          </Typography>{' '}
          to get started.
        </Typography>
      </ViewContent>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Home;
