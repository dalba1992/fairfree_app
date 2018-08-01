import React, { Component } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import { Container, Icon, Card } from 'native-base'

import LinearGradient from 'react-native-linear-gradient'

import styles from './style'

import logo from '../../../assets/img/logo.png'
import loginForm from '../../../assets/img/loginform.png'
import cardComponents from './cardComponents';



const { width, height } = Dimensions.get('window');
const ForgotSteps = [
  {
    title: 'Forgot password.',
    subtitle: 'Account',
    card: <cardComponents.CardComponent1 />,
  },
  {
    title: 'Verification.',
    subtitle: 'Verification',
    card: <cardComponents.CardComponent2 />,
  },
  {
    title: 'Reset password.',
    subtitle: 'Verification',
    card: <cardComponents.CardComponent3 />,
  },
];


export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowStep: 0
    }
  }
  backward() {
    this.state.nowStep--;
    this.forceUpdate();
  }
  forward() {
    this.state.nowStep++;
    this.forceUpdate();
  }
  resetPassword() {

  }
  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
        <Text style={styles.title}>{ForgotSteps[this.state.nowStep].title}</Text>
        <Text style={styles.sub_title}>Step {this.state.nowStep + 1} of 3 - {ForgotSteps[this.state.nowStep].subtitle}</Text>
        <View style={styles.status_bar}>
          <View style={styles.now_status} width={(width - 40) / 3 * (this.state.nowStep + 1)} />
        </View>
        {ForgotSteps[this.state.nowStep].card}
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', }}>
          <TouchableOpacity onPress={() => { this.backward() }} disabled={this.state.nowStep == 0} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 120, height: 60 }}>
            <Icon name='ios-arrow-round-back' style={{ color: '#97B5D8' }} />
            <Text style={{ color: '#97B5D8' }}> back</Text>
          </TouchableOpacity>
          {
            this.state.nowStep != 2 ?
              <TouchableOpacity onPress={() => { this.forward() }} style={{ width: 120, height: 60 }}>
                <LinearGradient colors={['#54AACF', 'white']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 120, height: 60, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: 'white' }}>Next</Text>
                </LinearGradient>
              </TouchableOpacity> :
              <TouchableOpacity onPress={() => { this.resetPassword() }} style={{ width: 170, height: 60 }}>
                <LinearGradient colors={['#5AB985', '#33EBAE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 170, height: 60, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: 'white' }}>Complete</Text>
                </LinearGradient>
              </TouchableOpacity>
          }
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 30, marginTop: 50, justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
            <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothic-Regular' }}>Log in</Text>
          </TouchableOpacity>
          <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothic' }}>   |    </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }}  >
            <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothicBold' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    )
  }
}