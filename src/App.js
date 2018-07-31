import React, { Component } from "react";
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native'

import LoginScreen from './screens/Auth/Login'
import SignupScreen from "./screens/Auth/Signup";
import ForgotPasswordScreen from "./screens/Auth/ForgotPassword";
import HomeScreen from "./screens/Home";
export default class SetUP extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: ''
    }
  }



  render() {
    const Nav1 = createStackNavigator({
      Login: { screen: LoginScreen }, 
      Signup:{ screen:SignupScreen},
      ForgotPassword:{screen:ForgotPasswordScreen},
      Home:{screen:HomeScreen}
    }, {
        headerMode: 'none',
        initialRouteName: 'Home',
        navigationOptions: {
          headerVisible: false,
        }
      })
    return (
      <Nav1 />
    )
  }
}