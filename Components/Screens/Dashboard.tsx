import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import { Card, TextInput, Button, Title, List, Divider} from 'react-native-paper';
import { loginStyles } from '../Styles/login';
import { users } from '../data.helper';
import { ScrollView, View } from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <Layout header = "Users" navigation = {this.props.navigation}>
          <Card style = {loginStyles.cardScroll}>
              <ScrollView keyboardShouldPersistTaps = "always">
                {
                  users.map(item => {
                    return(
                        <List.Item
                          key = {item.id}
                          title = {item.username}
                          description={item.designation}
                          onPress = {() => this.props.navigation.navigate("ProfileScreen", {id: item.id})}
                          left={props => <List.Icon color = "#002b44" icon="person" />}
                          right={props => <List.Icon color = "#002b44" icon="arrow-forward" />}
                        />
                    )
                  })
                }
              </ScrollView>
          </Card>
      </Layout>
    );
  }
}