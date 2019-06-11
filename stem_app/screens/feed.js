import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-ionicons';
import AvView from './util/AvView'

const data = [{
  key: 1,
  username: 'james',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
  avatarUrl: 'https://unsplash.it/100?image=1005',
  saying: 'its a cold season shawn',
  likes: '122',
  loops: '12',
  comments: '123',

}, {
  key: 2,
  username: 'jennifer',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg',
  avatarUrl: 'https://unsplash.it/100?image=1027',
  saying: 'Its baking season',
  likes: '122',
  loops: '12',
  comments: '123',
}, {
  key: 3,
  username: 'cathy',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  avatarUrl: 'https://unsplash.it/100?image=996',
  saying: 'hundred shot',
  likes: '122',
  loops: '12',
  comments: '123',
}, {
  key: 4,
  username: 'zack',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg',
  avatarUrl: 'https://unsplash.it/100?image=856',
  saying: 'grass is always greener',
  likes: '122',
  loops: '12',
  comments: '123',
}, {
  key: 5,
  username: 'luke',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg',
  avatarUrl: 'https://unsplash.it/100?image=669',
  saying: 'let it snow',
  likes: '122',
  loops: '12',
  comments: '123',
}, {
  key: 6,
  username: 'anna',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  avatarUrl: 'https://unsplash.it/100?image=823',
  saying: 'do you smell the flower?',
  likes: '122',
  loops: '12',
  comments: '123',
}, {
  key: 7,
  username: 'ken',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg',
  avatarUrl: 'https://unsplash.it/100?image=550',
  saying: 'oldtown road',
  likes: '122',
  loops: '12',
  comments: '123',
}]

export default class FeedScreen extends Component {
  render() {
    return (
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
              <Text style={{ fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}>{item.username}</Text>
              <Icon name="md-more" size={30} color="#C5C7C6" style={{ lineHeight: 60, marginRight: 15 }} />
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
    )
  }
}