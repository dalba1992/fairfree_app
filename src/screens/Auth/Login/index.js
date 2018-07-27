import React, { Component } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

import LinearGradient from 'react-native-linear-gradient'

import styles from './style'

import logo from '../../../assets/img/logo.png'
import loginForm from '../../../assets/img/loginform.png'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass_show: false
    }
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient colors={['#538EDC', '#45DCD4']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.welcome_text}>Welcome to Fairfree.</Text>
          <Text style={styles.sub_text}>Login or sign up to continue.</Text>
          <ImageBackground source={loginForm} style={styles.input_form} resizeMethod='resize' resizeMode='cover'>
            <View style={[styles.input_view,]}>
              <TextInput
                placeholder={'E-mail or phone number'}
                placeholderTextColor='#4A90E2'
                underlineColorAndroid='transparent'
                style={styles.input}
              />
            </View>
            <View style={[styles.input_view, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <TextInput
                placeholder={'password'}
                placeholderTextColor='#4A90E2'
                underlineColorAndroid='transparent'
                secureTextEntry={!this.state.pass_show}
                style={[styles.input, { flex: 1 }]}
              />
              <Icon
                name={this.state.pass_show ? 'eye-off' : 'eye'}
                type='Feather'
                onPress={() => { this.state.pass_show = !this.state.pass_show; this.forceUpdate() }}
                style={styles.eye_icon}
              />
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.login_btn} onPress={() => { }}>
            <Text style={styles.login_btn_txt}>Login</Text>
          </TouchableOpacity>
          <View style={styles.forgot_view}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
              <Text style={styles.forgot_text}>Forgot password?</Text>
            </TouchableOpacity>
            <Text style={styles.forgot_text}>   |   </Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }}  >
              <Text style={styles.forgot_text}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView >
    )
  }
}