import React, { Component } from 'react'

import { View, ScrollView, Image, Text, Dimensions, StatusBar } from 'react-native'

import { Header, Body, Footer, FooterTab, Button, Content, Title, Left, Right, StyleProvider } from 'native-base'

import LinearGradient from 'react-native-linear-gradient'

import styles from './style'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

const { width, height } = Dimensions.get('window')

import logo from '../../assets/img/logo.png'

import event_off from '../../assets/img/event_off.png';
import event_on from '../../assets/img/event_on.png';
import ticket_off from '../../assets/img/ticket_off.png';
import ticket_on from '../../assets/img/ticket_on.png'
import more_off from '../../assets/img/more_off.png';
import more_on from '../../assets/img/more_on.png';
import EventsScreen from './events';
import { REG_FONT } from '../../assets/variables';
import TicketsScreen from './ticket';
import MoreScreen from './more';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      selectedTab:'event'
    }
  }

  toggleTab1() {
    this.setState({
      selectedTab: "event",
      tab1: true,
      tab2: false,
      tab3: false,
    });
  }

  toggleTab2() {
    this.setState({
      selectedTab: "ticket",
      tab1: false,
      tab2: true,
      tab3: false,
    });
  }

  toggleTab3() {
    this.setState({
      selectedTab: "more",
      tab1: false,
      tab2: false,
      tab3: true,
    });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case "event":
        return <EventsScreen navigation={this.props.navigation} ref={(c) => this.Peleas = c} {...this.props} />;
        break;
      case "ticket":
        return <TicketsScreen navigation={this.props.navigation} ref={(c) => this.Peleadores = c} {...this.props} />;
        break;
      case "more":
        return <MoreScreen navigation={this.props.navigation} />;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <View style={{ width, height: height - StatusBar.currentHeight }}>
          <LinearGradient colors={['#538EDC', '#45DCD4']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
            <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', height: 70 }}>
              <Image source={logo} resizeMethod='resize' resizeMode='center' style={{ height: 60 }} />

            </View>
            {this.renderSelectedTab()}
            <Footer footerDefaultBg='white'>
              <FooterTab locked={true} style={{ backgroundColor: 'white' }} tabActiveBgColor='#fff'>
                <Button style={styles.footer_btn}
                  active={this.state.tab1}
                  onPress={() => this.toggleTab1()}
                >
                  <Image source={this.state.tab1 ? event_on : event_off} />
                  <Text style={{ fontFamily: REG_FONT, fontSize: 12, color: this.state.tab1 ? '#4A90E27F' : '#0007' }}>Event</Text>
                </Button>
                <Button style={styles.footer_btn}
                  active={this.state.tab2}
                  onPress={() => this.toggleTab2()}
                >
                  <Image source={this.state.tab2 ? ticket_on : ticket_off} />
                  <Text style={{ fontFamily: REG_FONT, fontSize: 12, color: this.state.tab2 ? '#4A90E27f' : '#0007' }}>My Ticket</Text>
                </Button>
                <Button style={styles.footer_btn}
                  active={this.state.tab3}
                  onPress={() => this.toggleTab3()}
                >
                  <Image source={this.state.tab3 ? more_on : more_off} />
                  <Text style={{ fontFamily: REG_FONT, fontSize: 12, color: this.state.tab3 ? '#4A90E27f' : '#0007' }}>More</Text>
                </Button>
              </FooterTab>
            </Footer>
          </LinearGradient>
        </View>
      </StyleProvider>
    )
  }
}