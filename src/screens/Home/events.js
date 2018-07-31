import React, { Component } from 'react'
import { ScrollView, Image, Text, View, Dimensions } from 'react-native'
import { Card, Icon, Header, Item, Button, Input } from 'native-base'

// import DashedBorder from 'react-native-dashed-border'

import dummy1 from '../../assets/img/dummy/1.png'
import dummy2 from '../../assets/img/dummy/2.png'
import dummy3 from '../../assets/img/dummy/3.png'
import dummy4 from '../../assets/img/dummy/4.png'
import dummy5 from '../../assets/img/dummy/5.png'

import { REG_FONT, BOLD_FONT, EXTRA_FONT } from '../../assets/variables'

const { width, height } = Dimensions.get('window')


const events = [
  { img: dummy1, title: '2018 Busan Baby Fair', subtitle: '4th Annual Busan Baby Fair', period: '2018.09.01 - 09.07', loc: 'Bexco Hall B', view: 7318, like: 65, preprice: 7500, saverate: 100, active: true },
  { img: dummy2, title: 'Seoul Toy Festival', subtitle: 'Kids’ Toy Festival 2018', period: '2018.09.01 - 09.07', loc: 'Bexco Hall B', view: 14124, like: 143, preprice: 7500, saverate: 30, active: false },
  { img: dummy3, title: 'Daegu Art Fair', subtitle: '4th Annual Busan Baby Fair', period: '2018.09.01 - 09.07', loc: 'Bexco Hall B', view: 7318, like: 65, preprice: 7500, saverate: 100, active: true },
  { img: dummy4, title: 'World Light Festival', subtitle: '4th Annual Busan Baby Fair', period: '2018.09.01 - 09.07', loc: 'Bexco Hall B', view: 14124, like: 143, preprice: 7500, saverate: 30, active: false },
  { img: dummy5, title: 'World Light Festival', subtitle: '4th Annual Busan Baby Fair', period: '2018.09.01 - 09.07', loc: 'Bexco Hall B', view: 14124, like: 143, preprice: 7500, saverate: 100, active: false }
]

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: 'all',
      searchCon:''
    }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: BOLD_FONT, fontSize: 18, color: this.state.searchOption == 'all' ? 'white' : '#fff7', marginRight: 10, borderBottomColor: 'white', borderBottomWidth: this.state.searchOption == 'all' ? 2 : 0, width: 70, textAlign: 'center' }} onPress={() => { this.setState({ searchOption: 'all' }) }}>All</Text>
            <Text style={{ fontFamily: BOLD_FONT, fontSize: 18, color: this.state.searchOption == 'active' ? 'white' : '#fff7', marginRight: 10, borderBottomColor: 'white', borderBottomWidth: this.state.searchOption == 'active' ? 2 : 0, width: 70, textAlign: 'center' }} onPress={() => { this.setState({ searchOption: 'active' }) }}>Active</Text>
            <Text style={{ fontFamily: BOLD_FONT, fontSize: 18, color: this.state.searchOption == 'coming' ? 'white' : '#fff7', marginRight: 10, borderBottomColor: 'white', borderBottomWidth: this.state.searchOption == 'coming' ? 2 : 0, width: 70, textAlign: 'center' }} onPress={() => { this.setState({ searchOption: 'coming' }) }}>Coming</Text>
          </View>
          <Icon name='ios-options' style={{ color: this.state.searchOption == 'name' ? '#fff' : '#fff7' }} onPress={() => { this.setState({ searchOption: 'name', searchCon:'' }) }} />
        </View>
        <ScrollView style={{ flex: 1, }}>
          {this.state.searchOption == 'name' ? <View searchBar rounded style={{ backgroundColor: 'white', borderRadius: 30, borderBottomColor: 'transparent', borderWidth: 0 }} >
            <Item style={{ borderBottomWidth: 0 }}>
              <Input value={this.state.searchCon} placeholder="Search" underlineColorAndroid='transparent' style={{ borderBottomColor: 'transparent', marginLeft: 20 }} onChangeText={(text)=>{this.setState({searchCon:text})}}/>
              <Icon name="ios-search" style={{ color: '#4A8DB5', marginRight: 20 }} />
            </Item>
          </View> : null}
          {events.map((event, index) => {
            if (this.state.searchOption == 'all') {
              return (
                <Card key={index} style={{ backgroundColor: 'white', height: 120, flexDirection: 'row' }}>
                  <Image source={event.img} resizeMethod='resize' resizeMode='cover' style={{ height: 120, width: 100 }} />
                  <View style={{ width: (width - 140) * 0.7, borderRightWidth: 1, borderStyle: 'dashed', borderRadius: 0.5, padding: 10, borderColor:'#dedede' }}>
                    <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: EXTRA_FONT, color: '#3C504C', paddingBottom: 5, flexWrap: 'wrap', flex: 1 }}>{event.title}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: REG_FONT, color: '#1072E4', paddingBottom: 10, flexWrap: 'wrap', flex: 1 }}>{event.subtitle}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                      <Icon name='clock' type='EvilIcons' style={{ fontSize: 16 }} />
                      <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.period}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                      <Icon name='location' type='EvilIcons' style={{ fontSize: 16 }} />
                      <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.loc}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name='eye' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                      <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#F5A623' }}>{event.view}</Text>
                      <Icon name='heart' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                      <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#4A90E2' }}>{event.like}</Text>
                    </View>

                  </View>
                  {/* <Dash style={{width:1, height:120, flexDirection:'column', }} dashColor='#dedede'/> */}
                  <View style={{ paddingVertical: 10, paddingLeft: 5 }}>
                    <Text style={{ marginBottom: 35, fontSize: 10, color: event.active ? '#7ED321' : '#F5A623', borderWidth: 1, borderColor: event.active ? '#7ed321' : '#F5A623', borderRadius: 5, paddingHorizontal: 5,textAlign:'center'}}>{event.active ? 'Active' : 'D-15'}</Text>
                    <Text style={{ marginBottom: 3, textDecorationLine: 'line-through', fontSize: 12, fontFamily: REG_FONT, color: '#979797', textDecorationColor: '#979797', }}>₩{event.preprice}</Text>
                    <Text style={{ marginBottom: 3, fontFamily: BOLD_FONT, fontSize: 9, color: '#F5A623' }}>save {event.saverate}%</Text>
                    <Text style={{ fontFamily: BOLD_FONT, color: '#4A90E2', fontSize: 14, }}>{event.preprice * (100 - event.saverate) / 100 != 0 ? '₩' + event.preprice * (100 - event.saverate) / 100 : 'FREE'}</Text>
                  </View>
                </Card>
              );
            } else if (this.state.searchOption == 'active') {
              if (event.active) {
                return (
                  <Card key={index} style={{ backgroundColor: 'white', height: 120, flexDirection: 'row' }}>
                    <Image source={event.img} resizeMethod='resize' resizeMode='cover' style={{ height: 120, width: 100 }} />
                    <View style={{ width: (width - 140) * 0.7, borderRightWidth: 1, borderStyle: 'dashed', borderRadius: 0., padding: 10, borderColor:'#dedede' }}>
                      <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: EXTRA_FONT, color: '#3C504C', paddingBottom: 5, flexWrap: 'wrap', flex: 1 }}>{event.title}</Text>
                      <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: REG_FONT, color: '#1072E4', paddingBottom: 10, flexWrap: 'wrap', flex: 1 }}>{event.subtitle}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                        <Icon name='clock' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.period}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                        <Icon name='location' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.loc}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='eye' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#F5A623' }}>{event.view}</Text>
                        <Icon name='heart' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#4A90E2' }}>{event.like}</Text>
                      </View>

                    </View>
                    {/* <Dash style={{width:1, height:120, flexDirection:'column', }} dashColor='#dedede'/> */}
                    <View style={{ paddingVertical: 10, paddingLeft: 5 }}>
                      <Text style={{ marginBottom: 35, fontSize: 10, color: event.active ? '#7ED321' : '#F5A623', borderWidth: 1, borderColor: event.active ? '#7ed321' : '#F5A623', borderRadius: 5, paddingHorizontal: 5,textAlign:'center' }}>{event.active ? 'Active' : 'D-15'}</Text>
                      <Text style={{ marginBottom: 3, textDecorationLine: 'line-through', fontSize: 12, fontFamily: REG_FONT, color: '#979797', textDecorationColor: '#979797', }}>₩{event.preprice}</Text>
                      <Text style={{ marginBottom: 3, fontFamily: BOLD_FONT, fontSize: 9, color: '#F5A623' }}>save {event.saverate}%</Text>
                      <Text style={{ fontFamily: BOLD_FONT, color: '#4A90E2', fontSize: 14, }}>{event.preprice * (100 - event.saverate) / 100 != 0 ? '₩' + event.preprice * (100 - event.saverate) / 100 : 'FREE'}</Text>
                    </View>
                  </Card>
                );
              } else { return null; }
            } else if (this.state.searchOption == 'coming') {
              if (!event.active) {
                return (
                  <Card key={index} style={{ backgroundColor: 'white', height: 120, flexDirection: 'row' }}>
                    <Image source={event.img} resizeMethod='resize' resizeMode='cover' style={{ height: 120, width: 100 }} />
                    <View style={{ width: (width - 140) * 0.7, borderRightWidth: 1, borderStyle: 'dashed', borderRadius: 0.5, padding: 10, borderColor:'#dedede' }}>
                      <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: EXTRA_FONT, color: '#3C504C', paddingBottom: 5, flexWrap: 'wrap', flex: 1 }}>{event.title}</Text>
                      <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: REG_FONT, color: '#1072E4', paddingBottom: 10, flexWrap: 'wrap', flex: 1 }}>{event.subtitle}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                        <Icon name='clock' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.period}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                        <Icon name='location' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.loc}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='eye' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#F5A623' }}>{event.view}</Text>
                        <Icon name='heart' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#4A90E2' }}>{event.like}</Text>
                      </View>

                    </View>
                    {/* <Dash style={{width:1, height:120, flexDirection:'column', }} dashColor='#dedede'/> */}
                    <View style={{ paddingVertical: 10, paddingLeft: 5 }}>
                      <Text style={{ marginBottom: 35, fontSize: 10, color: event.active ? '#7ED321' : '#F5A623', borderWidth: 1, borderColor: event.active ? '#7ed321' : '#F5A623', borderRadius: 5, paddingHorizontal: 5,textAlign:'center' }}>{event.active ? 'Active' : 'D-15'}</Text>
                      <Text style={{ marginBottom: 3, textDecorationLine: 'line-through', fontSize: 12, fontFamily: REG_FONT, color: '#979797', textDecorationColor: '#979797', }}>₩{event.preprice}</Text>
                      <Text style={{ marginBottom: 3, fontFamily: BOLD_FONT, fontSize: 9, color: '#F5A623' }}>save {event.saverate}%</Text>
                      <Text style={{ fontFamily: BOLD_FONT, color: '#4A90E2', fontSize: 14, }}>{event.preprice * (100 - event.saverate) / 100 != 0 ? '₩' + event.preprice * (100 - event.saverate) / 100 : 'FREE'}</Text>
                    </View>
                  </Card>
                );
              } else { return null; }
            } else {
              if (event.title.indexOf(this.state.searchCon)>=0 && this.state.searchCon){
                return(
                  <Card key={index} style={{ backgroundColor: 'white', height: 120, flexDirection: 'row' }}>
                    <Image source={event.img} resizeMethod='resize' resizeMode='cover' style={{ height: 120, width: 100 }} />
                    <View style={{ width: (width - 140) * 0.7, borderRightWidth: 1, borderStyle: 'dashed', borderRadius: 0.5, padding: 10, borderColor:'#dedede' }}>
                      <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: EXTRA_FONT, color: '#3C504C', paddingBottom: 5, flexWrap: 'wrap', flex: 1 }}>{event.title}</Text>
                      <Text numberOfLines={1} style={{ fontSize: 11, fontFamily: REG_FONT, color: '#1072E4', paddingBottom: 10, flexWrap: 'wrap', flex: 1 }}>{event.subtitle}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                        <Icon name='clock' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.period}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                        <Icon name='location' type='EvilIcons' style={{ fontSize: 16 }} />
                        <Text style={{ fontSize: 12, fontFamily: REG_FONT }}>{event.loc}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='eye' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#F5A623' }}>{event.view}</Text>
                        <Icon name='heart' type='EvilIcons' style={{ fontSize: 16, color: '#F5A623' }} />
                        <Text style={{ fontSize: 11, fontFamily: REG_FONT, color: '#4A90E2' }}>{event.like}</Text>
                      </View>

                    </View>
                    {/* <Dash style={{width:1, height:120, flexDirection:'column', }} dashColor='#dedede'/> */}
                    <View style={{ paddingVertical: 10, paddingLeft: 5 }}>
                      <Text style={{ marginBottom: 35, fontSize: 10, color: event.active ? '#7ED321' : '#F5A623', borderWidth: 1, borderColor: event.active ? '#7ed321' : '#F5A623', borderRadius: 5, paddingHorizontal: 5,textAlign:'center' }}>{event.active ? 'Active' : 'D-15'}</Text>
                      <Text style={{ marginBottom: 3, textDecorationLine: 'line-through', fontSize: 12, fontFamily: REG_FONT, color: '#979797', textDecorationColor: '#979797', }}>₩{event.preprice}</Text>
                      <Text style={{ marginBottom: 3, fontFamily: BOLD_FONT, fontSize: 9, color: '#F5A623' }}>save {event.saverate}%</Text>
                      <Text style={{ fontFamily: BOLD_FONT, color: '#4A90E2', fontSize: 14, }}>{event.preprice * (100 - event.saverate) / 100 != 0 ? '₩' + event.preprice * (100 - event.saverate) / 100 : 'FREE'}</Text>
                    </View>
                  </Card>
                )
              }
            }
          }
          )}
        </ScrollView>
      </View >
    )
  }
}