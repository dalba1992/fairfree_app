import React, { Component } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import { Container, Icon, Card } from 'native-base'

import LinearGradient from 'react-native-linear-gradient'

import styles from './style'

import logo from '../../../assets/img/logo.png'
import loginForm from '../../../assets/img/loginform.png'
import cardComponents from './cardComponents';


// import { CardComponent1, CardComponent2, CardComponent3, CardComponent4 } from './cardComponents'

const { width, height } = Dimensions.get('window');



export default class SignupScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.SignupSteps = [
      {
        title: 'Sign up.',
        subtitle: 'Login Setup',
        card: <cardComponents.CardComponent1 onValueChange={(email, password, readiness) => { this.setState({ email: email, password: password, readiness: readiness }) }} />,
      },
      {
        title: 'Information.',
        subtitle: 'Personal Information',
        card: <cardComponents.CardComponent2 />,
      },
      {
        title: 'Verification.',
        subtitle: 'SMS Verification',
        card: <cardComponents.CardComponent3 />,
      },
      {
        title: 'Last step.',
        subtitle: 'Verification Code',
        card: <cardComponents.CardComponent4 />,
      },
    ];
    this.state = {
      nowStep: 0,

      email:'',
      password:'',
      readiness:false,


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
  complete() {

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.SignupSteps[this.state.nowStep].title}</Text>
        <Text style={styles.sub_title}>Step {this.state.nowStep + 1} of 4 - {this.SignupSteps[this.state.nowStep].subtitle}</Text>
        <View style={styles.status_bar}>
          <View style={styles.now_status} width={(width - 40) / 4 * (this.state.nowStep + 1)} />
        </View>
        {this.SignupSteps[this.state.nowStep].card}
        <View style={styles.btn_view}>
          <TouchableOpacity onPress={() => { this.backward() }} disabled={this.state.nowStep == 0} style={styles.back_btn}>
            <Icon name='ios-arrow-round-back' style={styles.back_btn_txt} />
            <Text style={styles.back_btn_txt}> back</Text>
          </TouchableOpacity>
          {
            this.state.nowStep != 3 ?
              <TouchableOpacity onPress={() => { this.forward() }} style={{ width: 120, height: 60 }}>
                <LinearGradient colors={['#2370AE', '#75D1E5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 120, height: 60, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: 'white' }}>Next</Text>
                </LinearGradient>
              </TouchableOpacity> :
              <TouchableOpacity onPress={() => { this.complete() }} style={{ width: 170, height: 60 }}>
                <LinearGradient colors={['#5AB985', '#33EBAE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 170, height: 60, alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ color: 'white' }}>Complete</Text>
                </LinearGradient>
              </TouchableOpacity>
          }
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 30, marginTop: 50, justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }} >
            <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothic-Regular' }}>Forgot password?</Text>
          </TouchableOpacity>
          <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothic-Regular' }}>   |    </Text>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}  >
            <Text style={{ color: '#717171', fontSize: 18, fontFamily: 'NanumGothic-Bold' }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    )
  }
}