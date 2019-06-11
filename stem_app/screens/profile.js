/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ProfileScreen extends Component<Props> {

  
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{
          paddingTop: 20,
          width: '100%',
          borderBottomWidth: 0.5,
          borderBottomColor: "#E2E5E4",
        }}>
        <View style={{marginLeft:115, width: 250, borderRadius:3, borderWidth: 1, borderColor:"#DBDBDB" }}>
        <Text style={{alignSelf:'center', margin: 5}}>Edit Profile</Text>
        </View>
          <View>
            <View style={{ flexDirection:'row', alignItems:'center', top: -30, marginLeft: 20, }}>
              <Icon name="md-contact" color='grey' size={100} />
              <View>
              <Text style={{marginLeft: 15, marginTop: 10}}>Username</Text>
              <Text style={{marginLeft: 15}}>"Put your saying in this box"</Text>
              </View>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center', top: -30, marginLeft: 32 }}>
                <Text style={{fontWeight:'800', color: "#C5C7C6"}}>Followers</Text>
                <Text style={{fontWeight:'800', marginLeft:55, color: "#C5C7C6"}}>Following</Text>
                <Text style={{fontWeight:'800', marginLeft:55, color: "#C5C7C6"}}>Captures</Text>
              </View>
              <View style={{ flexDirection:'row', alignItems:'center', top: -25, marginLeft: 35, }}>
                <Text style={{fontWeight:'200', marginLeft:15}}>1231</Text>
                <Text style={{fontWeight:'200', marginLeft:100}}>423</Text>
                <Text style={{fontWeight:'200', marginLeft:95}}>125</Text>
              </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', height: 500, width: '100%' }}>
        <View style={{width: 125, height: 123, backgroundColor: 'powderblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'skyblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flexDirection: 'row', width: '100%', bottom: 375 }}>
        <View style={{width: 125, height: 123, backgroundColor: 'powderblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'skyblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flexDirection: 'row', width: '100%', bottom: 373 }}>
        <View style={{width: 125, height: 123, backgroundColor: 'powderblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'skyblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flexDirection: 'row', width: '100%', bottom: 371 }}>
        <View style={{width: 125, height: 123, backgroundColor: 'powderblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'skyblue'}} />
        <View style={{marginLeft: 2, width: 123, height: 123, backgroundColor: 'steelblue'}} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});