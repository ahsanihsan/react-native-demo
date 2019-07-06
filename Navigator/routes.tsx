import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Components/Screens/Login";
import Dashboard from "../Components/Screens/Dashboard";
import Profile from "../Components/Screens/Profile";


const AppNavigator = createStackNavigator({
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    DashboardScreen: {
        screen: Dashboard,
        navigationOptions: {
          title: 'Dashboard',
          header: null
        },
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        header: null
      },
  }
});

const Router = createAppContainer(AppNavigator)

export default Router;