import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class Footer extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'music', title: 'Music', icon: 'queue-music' },
            { key: 'albums', title: 'Albums', icon: 'album' },
            { key: 'recents', title: 'Recents', icon: 'history' },
        ],
    };

    _handleIndexChange = (index: number) => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });
  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
