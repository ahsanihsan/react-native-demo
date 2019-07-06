import React, {Component} from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Layout from './Components/Layout/Layout';

interface Props {}
export default class App extends Component<Props> {
  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        accent: 'white',
      },
    };
    return (
      <PaperProvider theme = {theme}>
          <Layout header = "Login"/>
      </PaperProvider>
    );
  }
}