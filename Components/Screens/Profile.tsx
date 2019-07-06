import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import { Card, ActivityIndicator, Avatar, Divider, List} from 'react-native-paper';
import { loginStyles } from '../Styles/login';
import { users } from '../data.helper';
import { Text, View } from 'react-native';

export default class Profile extends Component {
  state = {
    isLoading: true,
    currentUser: ''
  }
  componentDidMount(){
    let id = this.props.navigation.state.params.id 
    if(id){
      let userList = users
      let currentUser = userList.find(item => item.id === id)
      if(currentUser){
        setTimeout(() => {
          this.setState({ currentUser, isLoading: false })
        }, 1000)
      }
    }else{
      this.props.navigation.goBack()
    }
  }

  render() {
      const { currentUser } = this.state
      return (
        <Layout header = "Profile">
            {
              this.state.isLoading ?
                <ActivityIndicator animating={true} style = {{ flex: 1, alignItems: 'center' }} />
              :
                <Card style = {loginStyles.cardScroll}>
                  <View  style = {{alignItems: "center", marginTop: 10, marginBottom: 10}} >
                    <Avatar.Image size={100} source={{uri: currentUser.image}}/>
                  </View>
                  <Divider/>
                  <List.Item
                    key = {1}
                    title = "Name"
                    right={props => <Text style = {{marginTop: 10}}>{currentUser.username}</Text>}
                  />
                  <List.Item
                    key = {2}
                    title = "Designation"
                    right={props => <Text style = {{marginTop: 10}}>{currentUser.designation}</Text>}
                  />
                  <List.Item
                    key = {3}
                    title = "Phone"
                    right={props => <Text style = {{marginTop: 10}}>{currentUser.phoneNumber}</Text>}
                  />
                </Card>
            }
        </Layout>
      );
  }
}