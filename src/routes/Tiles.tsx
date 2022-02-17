import { AppBar } from 'mai-ui/dist/components/appbar';
import { Grid } from 'mai-ui/dist/components/grid';
import { Tile, TileContent } from 'mai-ui/dist/components/tiles';
import { Typography } from 'mai-ui/dist/components/Typography';
import { View, ViewContent } from 'mai-ui/dist/components/view';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { MdCached } from 'react-icons/md';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';
import { Icon } from '../ui-components/icon';

function Tiles() {
  const { selectedId } = useListNav({
    onSelect: (id) => console.log(`selected ${id}`),
  });

  return (
    <View>
      <Statusbar text="Tiles" />
      <ViewContent>
        <Grid>
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile1',
              selected: selectedId === 'tile1',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Typography>front text</Typography>
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile2',
              selected: selectedId === 'tile2',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile3',
              selected: selectedId === 'tile3',
            }}
          />
          <Tile
            width={2}
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Typography>wide tile</Typography>
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile4',
              selected: selectedId === 'tile4',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile5',
              selected: selectedId === 'tile5',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile6',
              selected: selectedId === 'tile6',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile7',
              selected: selectedId === 'tile7',
            }}
          />
          <Tile
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile8',
              selected: selectedId === 'tile8',
            }}
          />
          <Tile
            width={3}
            frontContent={
              <TileContent contentH="center" contentV="center">
                <Icon icon={<MdCached />} size="42" />
              </TileContent>
            }
            backContent={
              <TileContent>
                <Typography>back text</Typography>
              </TileContent>
            }
            selectable={{
              id: 'tile9',
              selected: selectedId === 'tile9',
            }}
          />
        </Grid>
      </ViewContent>
      <AppBar appMenuContent={<AppMenu />} />
    </View>
  );
}

export default Tiles;
