/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import AvView from '../util/AvView';

const data = [{
  key: 1,
  username: 'Addie',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
  avatarUrl: 'https://unsplash.it/100?image=1005',
  saying: 'its a cold season shawn',
  likes: '122',
  loops: '12',
  comments: '123',

}, {
  key: 3,
  username: 'Addie',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  avatarUrl: 'https://unsplash.it/100?image=1005',
  saying: 'hundred shot',
  likes: '122',
  loops: '12',
  comments: '123',
},{
  key: 6,
  username: 'Addie',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  avatarUrl: 'https://unsplash.it/100?image=1005',
  saying: 'do you smell the flower?',
  likes: '122',
  loops: '12',
  comments: '123',
}]

type Props = {};
export default class ProfileScreen extends Component<Props> {

  
  render() {
    return (
      <ScrollView>
        <View style={{
          paddingTop: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: "#E2E5E4",
        }}>
          <View>
            <View style={{ flexDirection:'row', alignItems:'center', top: -20, marginLeft: 20, }}>
              <Icon name="md-contact" color='grey' size={100} />
              <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")} style={{left:15, width: 250, borderRadius:3, borderWidth: 1, borderColor:"#DBDBDB" }}>
              <Text style={{alignSelf:'center', margin: 5}}>Edit Profile</Text>
              </TouchableOpacity>
              <Text style={{marginLeft: 15, marginTop: 10}}>Addie </Text>
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
        <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
              <Image
                style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
                source={{ uri: item.avatarUrl }}
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate("FriendProfile")} style={{ fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}><Text style={{  top: 20, fontWeight: 'bold'}}>{item.username}</Text>
              </TouchableOpacity>
              <Icon name="md-more" size={30} color="#C5C7C6" style={{ alignSelf: 'flex-end', lineHeight: 60, marginRight: 15 }} />
            </View>
            <AvView type={item.type} source={item.source} />
            <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
              <Icon name="ios-heart-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 15 }} />
              <Icon name="ios-text-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
              <Icon name="ios-send-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
              <View style={{ flex: 1 }} />
              <Icon name="ios-bookmark-outline" size={34} color="black" style={{ marginTop: 12, marginRight: 15 }} />
            </View>
            <View style={{ marginTop: -40, marginBottom: 20, paddingLeft: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '800' }}>{item.username}</Text>
                <Text style={{ fontSize: 14, color: 'black' }}> {item.saying}</Text>
              </View>
              <View>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>{'X MINUTES AGO'}</Text>
              </View>
            </View>
            <View style={{ marginTop: -15, marginBottom: 20, paddingLeft: 15 }}>
              <View style={{ flexDirection: 'row' }}>
              <Icon name="ios-heart-empty" size={24} color="#C5C7C6" style={{ marginTop: 12, marginLeft: 40 }} />
              <Icon name="ios-infinite" size={24} color="#C5C7C6" style={{ marginTop: 12, marginLeft: 100 }} />
              <Icon name="md-create" size={24} color="#C5C7C6" style={{ marginTop: 12, marginLeft: 100 }} />  
              </View>
            </View>
            <View style={{ marginTop: -15, marginBottom: 20, paddingLeft: 15 }}>
              <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800',marginLeft: 37  }}>{item.likes}</Text>
              <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800',marginLeft: 100  }}>{item.loops}</Text>
              <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800',marginLeft: 100  }}>{item.comments}</Text>
              </View>
            </View>
          </View>
        )}
      />
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