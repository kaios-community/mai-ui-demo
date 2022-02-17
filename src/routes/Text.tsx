import { AppBar } from 'mai-ui/dist/components/appbar';
import { Typography } from 'mai-ui/dist/components/Typography';
import { View, ViewContent } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

function Text() {
  const { selectedId } = useListNav({
    onSelect: (id) => console.log(`selected ${id}`),
  });

  return (
    <View>
      <Statusbar text="Typography" />
      <ViewContent>
        <Typography type="subtitle">Colors</Typography>
        <Typography color="primary">Here's a small bit of primary text</Typography>
        <Typography color="secondary">Here's a small bit of secondary text</Typography>
        <Typography color="accent">Here's a small bit of accent text</Typography>

        <Typography type="subtitle">Sizes</Typography>
        <Typography type="caption">Here's a small bit of caption text</Typography>
        <Typography type="body">Here's a small bit of body text</Typography>
        <Typography type="bodyStrong">Here's a small bit of strong body text</Typography>
        <Typography type="bodyLarge">Here's a small bit of large body text</Typography>
        <Typography type="titleSmall">Title Small</Typography>
        <Typography type="subtitle">Subtitle</Typography>
        <Typography type="title">Title</Typography>
        <Typography type="titleLarge">Title Large</Typography>

        <Typography type="subtitle">Other</Typography>
        <Typography type="body">
          You can even use the typography component{' '}
          <Typography display="inline" padding="none" color="accent">
            inline
          </Typography>{' '}
          to style certain text{' '}
          <Typography display="inline" padding="none" decoration="underline">
            differently
          </Typography>
          .
        </Typography>
      </ViewContent>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Text;
