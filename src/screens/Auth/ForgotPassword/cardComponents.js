import React, { Component } from 'react'

import { View, TextInput, Text, TouchableOpacity, Dimensions, } from 'react-native'

import { Card, Icon, CheckBox, } from 'native-base'

import { Dropdown } from 'react-native-material-dropdown'
import CodePin from 'react-native-pin-code';


import styles from './style'

const { width, height } = Dimensions.get("window");

const Ages = [{ value: '10-20' }, { value: '20-30' }, { value: '30-40' }, { value: '40-50' }, { value: '50+' }]

const Locations = [{ value: 'Seoul' }, { value: 'Daejeon' }, { value: 'Jeonju' }, { value: 'Busan' }, { value: 'Jaeju' }, { value: 'Daegu' }]






class CardComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }
  render() {
    return (
      <Card style={styles.card}>
        <Text style={{ color: '#9C9C9C', fontFamily: 'NanumGothicBold', fontSize: 16, marginTop: 20 }}>
          Please enter your e-mail address or phone number that you used for the sign up. We will send 5-digit verification code.
        </Text>
        <View style={[styles.input_view, { borderBottomColor: /*this.state.email_focus ?*/ '#4A90E2' /*: '#D9D9D9'*/, marginTop: 30 }]}>
          <TextInput
            value={this.state.phone}
            onChangeText={(phone) => { this.setState({ phone: phone }) }}
            // onFocus={() => { this.setState({ email_focus: true }) }}
            // onBlur={() => { this.setState({ email_focus: false }) }}
            placeholder={'E-mail or phone number'}
            keyboardType={'number-pad'}
            placeholderTextColor={/*this.state.email_focus ?*/ '#4A90E2'/* : '#D9D9D9'*/}
            underlineColorAndroid='transparent'
            style={[styles.input, { color: /*this.state.email_focus ?*/ '#4A90E2' /* : '#D9D9D9'*/ }]}
          />
        </View>
      </Card>
    )
  }
}

class CardComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: '00000'
    }
  }
  render() {
    return (
      <Card style={styles.card}>
        <CodePin
          ref={ref => this.ref = ref}
          code={this.state.pincode}
          number={5}
          success={() => this.verify_Code()}
          obfuscation
          text={''}
          error={''}
          containerStyle={{ width: width - 120, height: 80, justifyContent: 'center', margin: 0 }}
          containerPinStyle={{ justifyContent: 'center', height: 80, width: width - 120, paddingTop: 0, }}
          pinStyle={{ borderColor: '#FAC369', backgroundColor: '#FFF5E5', borderWidth: 1, width: 80, height: 40, marginRight: 5, marginLeft: 5, marginTop: -80 }}
          textStyle={{ fontSize: 16, fontFamily: 'NanumGothic' }}
          keyboardType="numeric"
        />
        <Text style={{ fontFamily: 'NanumGothicBold', fontSize: 16, color: '#9C9C9C', marginBottom: 40 }}>
          Enter 5 digit verification code that we sent you in e-mail.
        </Text>
        <Text style={{ fontFamily: 'NanumGothicBold', fontSize: 14, color: '#50E3C2' }}>
          Send again to fairfree@gmail.com
        </Text>
      </Card>
    )
  }
}

class CardComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass_show: false,
      email_focus: false,
      pass_focus: false,
      email: '',
      password: '',
      readiness: false
    }
  }
  render() {
    return (
      <Card style={styles.card}>
        
        <View style={[styles.input_view, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: this.state.pass_focus ? '#4A90E2' : '#D9D9D9' }]}>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => { this.setState({ password: password }) }}
            onFocus={() => { this.setState({ pass_focus: true }) }}
            onBlur={() => { this.setState({ pass_focus: false }) }}
            placeholder={'new password'}
            placeholderTextColor={this.state.pass_focus ? '#4A90E2' : '#D9D9D9'}
            underlineColorAndroid='transparent'
            secureTextEntry={!this.state.pass_show}
            style={[styles.input, { color: this.state.pass_focus ? '#4A90E2' : '#D9D9D9', flex: 1 }]}
          />
          <Icon
            name={this.state.pass_show ? 'eye-off' : 'eye'}
            type='Feather'
            onPress={() => { this.state.pass_show = !this.state.pass_show; this.forceUpdate() }}
            style={{ color: '#D9D9D9' }}
          />
        </View>
        <View style={[styles.input_view, { borderBottomColor: this.state.email_focus ? '#4A90E2' : '#D9D9D9' }]}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => { this.setState({ email: email }) }}
            onFocus={() => { this.setState({ email_focus: true }) }}
            onBlur={() => { this.setState({ email_focus: false }) }}
            placeholder={'confirm password'}
            placeholderTextColor={this.state.email_focus ? '#4A90E2' : '#D9D9D9'}
            underlineColorAndroid='transparent'
            style={[styles.input, { color: this.state.email_focus ? '#4A90E2' : '#D9D9D9' }]}
          />
        </View >
      
      </Card>
    )
  }
}



export default {
  CardComponent1: CardComponent1,
  CardComponent2: CardComponent2,
  CardComponent3: CardComponent3,
}