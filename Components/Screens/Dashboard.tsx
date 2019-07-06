import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import { Card, TextInput, Button, Title} from 'react-native-paper';
import { loginStyles } from '../Styles/login';

export default class Dashboard extends Component {
  render() {
    return (
      <Layout header = "Dashboard">
          <Card style = {loginStyles.loginFormContent}>
              <Title>This is Dashboard</Title>
          </Card>
      </Layout>
    );
  }
}