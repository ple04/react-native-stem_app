/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';

type Props = {};
export default class FriendProfileScreen extends Component<Props> {

  
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{
          paddingTop: 20,
          width: '100%',
          borderBottomWidth: 0.5,
          borderBottomColor: "#E2E5E4",
        }}>
          <View>
            <View style={{ flexDirection:'row', alignItems:'center', top: -20, marginLeft: 30, }}>
              <Icon name="md-contact" color='grey' size={100} />
              <View>
              <Text style={{marginLeft: 15}}>Addie </Text>
              <Text style={{marginLeft: 15}}>"Put your saying in this box"</Text>
              </View>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center', top: -30, marginLeft: 32 }}>
                <Text style={{fontWeight:'600', fontSize: 15, color: "#C5C7C6"}}>Followers</Text>
                <Text style={{fontWeight:'600', fontSize: 15, marginLeft:55, color: "#C5C7C6"}}>Following</Text>
                <Text style={{fontWeight:'600', fontSize: 15, marginLeft:55, color: "#C5C7C6"}}>Captures</Text>
              </View>
              <View style={{ flexDirection:'row', alignItems:'center', top: -25, marginLeft: 35, }}>
                <Text style={{fontWeight:'200', marginLeft:15}}>1231</Text>
                <Text style={{fontWeight:'200', marginLeft:100}}>423</Text>
                <Text style={{fontWeight:'200', marginLeft:95}}>125</Text>
              </View>
          </View>
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