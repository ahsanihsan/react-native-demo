import React, {Component} from 'react';
import { Text } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Router from './Navigator/routes';

interface Props {}

export default class App extends Component<Props> {
  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#002b44',
        accent: 'white',
      },
    };
    return (
      <PaperProvider theme = {theme}>
          <Router/>
      </PaperProvider>
    );
  }
}