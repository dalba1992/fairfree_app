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
        <View style={[styles.input_view, { borderBottomColor: this.state.email_focus ? '#4A90E2' : '#D9D9D9' }]}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => { this.setState({ email: email }); this.props.onValueChage(this.state.email, this, state.password, this.state.readiness) }}
            onFocus={() => { this.setState({ email_focus: true }) }}
            onBlur={() => { this.setState({ email_focus: false }) }}
            placeholder={'E-mail or phone number'}
            placeholderTextColor={this.state.email_focus ? '#4A90E2' : '#D9D9D9'}
            underlineColorAndroid='transparent'
            style={[styles.input, { color: this.state.email_focus ? '#4A90E2' : '#D9D9D9' }]}
          />
        </View >
        <View style={[styles.input_view, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: this.state.pass_focus ? '#4A90E2' : '#D9D9D9' }]}>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => { this.setState({ password: password }); this.props.onValueChage(this.state.email, this, state.password, this.state.readiness) }}
            onFocus={() => { this.setState({ pass_focus: true }) }}
            onBlur={() => { this.setState({ pass_focus: false }) }}
            placeholder={'password'}
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
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <CheckBox checked={this.state.readiness} color='#D9D9D9' onPress={() => { this.state.readiness = !this.state.readiness; this.forceUpdate();; this.props.onValueChage(this.state.email, this, state.password, this.state.readiness) }} />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ color: '#D9D9D9', fontSize: 16 }}>{'I have read and agree to'}</Text>
            <TouchableOpacity onPress={() => { }} style={{ flexWrap: 'wrap' }}>
              <Text style={{ color: '#99C8FF', fontSize: 16 }}>{'terms of service & privacy policies'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    )
  }
}

class CardComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'male'
    }
  }
  renderAccessory = () => {
    return (
      <Icon name='triangle-down' style={{ color: '#4A90E2', fontSize: 15 }} type='Octicons' />
    )
  }
  render() {
    return (
      <Card style={styles.card}>
        <View style={[styles.input_view, { borderBottomColor: /*this.state.email_focus ?*/ '#4A90E2' /*: '#D9D9D9'*/ }]}>
          <TextInput
            value={this.state.name}
            onChangeText={(name) => { this.setState({ name: name }) }}
            // onFocus={() => { this.setState({ email_focus: true }) }}
            // onBlur={() => { this.setState({ email_focus: false }) }}
            placeholder={'Name'}
            placeholderTextColor={/*this.state.email_focus ?*/ '#4A90E2'/* : '#D9D9D9'*/}
            underlineColorAndroid='transparent'
            style={[styles.input, { color: /*this.state.email_focus ?*/ '#4A90E2' /* : '#D9D9D9'*/ }]}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: '#9C9C9C', fontFamily: 'NanumGothicBold', fontSize: 16 }}>Age and gender</Text>
          <Dropdown
            data={Ages}
            dropdownOffset={{ top: 5, left: 10, bottom: 0 }}
            dropdownPosition={0}
            style={{ paddingHorizontal: 10, }}
            itemCount={5}
            pickerStyle={{ backgroundColor: 'white', }}
            underlineColorAndroid='transparent'
            textColor='black'
            itemColor='black'
            itemTextStyle={{ fontFamily: 'NanumGothic', fontSize: 16 }}
            renderAccessory={this.renderAccessory}
            onChangeText={(text, id) => { this.setState({ age: text }); }}
          />
        </View>
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#A2A2A2', marginTop: 5 }}>
          <TouchableOpacity onPress={() => { this.setState({ gender: 'male' }) }} style={[this.state.gender == 'male' ? { backgroundColor: '#4A90E2' } : { backgroundColor: 'transparent' }, { width: (width - 120) / 2, height: 40, justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[this.state.gender == 'male' ? { color: 'white' } : { color: 'black' }, { fontFamily: 'NanumGothicBold', fontSize: 16 }]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.setState({ gender: 'female' }) }} style={[this.state.gender == 'female' ? { backgroundColor: '#4A90E2' } : { backgroundColor: 'transparent' }, { width: (width - 120) / 2, height: 40, justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[this.state.gender == 'female' ? { color: 'white' } : { color: 'black' }, { fontFamily: 'NanumGothicBold', fontSize: 16 }]}>Female</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#9C9C9C', fontFamily: 'NanumGothicBold', fontSize: 16 }}>Location</Text>
          <Dropdown
            data={Locations}
            dropdownOffset={{ top: 5, left: 10, bottom: 0 }}
            dropdownPosition={0}
            style={{ paddingHorizontal: 10, }}
            pickerStyle={{ backgroundColor: 'white', }}
            underlineColorAndroid='transparent'
            textColor='black'
            itemColor='black'
            itemTextStyle={{ fontFamily: 'NanumGothic', fontSize: 16 }}
            renderAccessory={this.renderAccessory}
            onChangeText={(text, id) => { this.setState({ age: text }); }}
          />
        </View>
      </Card>
    )
  }
}

class CardComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }
  render() {
    return (
      <Card style={styles.card}>
        <Text style={{ color: '#9C9C9C', fontFamily: 'NanumGothicBold', fontSize: 16, marginTop: 20 }}>We will send you a one time sms message. This may take up to 1-minute.</Text>
        <View style={[styles.input_view, { borderBottomColor: /*this.state.email_focus ?*/ '#4A90E2' /*: '#D9D9D9'*/, marginTop: 30 }]}>
          <TextInput
            value={this.state.phone}
            onChangeText={(phone) => { this.setState({ phone: phone }) }}
            // onFocus={() => { this.setState({ email_focus: true }) }}
            // onBlur={() => { this.setState({ email_focus: false }) }}
            placeholder={'phone number'}
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

class CardComponent4 extends React.Component {
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
          pinStyle={{ borderColor: '#B8E986', backgroundColor: '#F6FFED', borderWidth: 1, width: 80, height: 40, marginRight: 5, marginLeft: 5, marginTop: -80 }}
          textStyle={{ fontSize: 16, fontFamily: 'NanumGothic-Regular' }}
          keyboardType="numeric"
        />
        <Text style={{ fontFamily: 'NanumGothic-Bold', fontSize: 16, color: '#9C9C9C', marginBottom: 40 }}>Enter 5 digit verification code that we sent you in sms.</Text>
        <Text style={{ fontFamily: 'NanumGothic-Bold', fontSize: 14, color: '#50E3C2' }}>Send again to 010-123-4567</Text>
      </Card>
    )
  }
}

export default {
  CardComponent1: CardComponent1,
  CardComponent2: CardComponent2,
  CardComponent3: CardComponent3,
  CardComponent4: CardComponent4
}