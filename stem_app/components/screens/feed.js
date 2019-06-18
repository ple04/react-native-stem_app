import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, navigate, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-ionicons';
import AvView from '../util/AvView';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

  constructor(props) {
    super(props);
    this.state = {
      sortModalVisible: false,
    }
  }

  setModalVisible(sortModalVisible) {
    this.setState({ sortModalVisible })
  }

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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("FriendProfile")} style={{ fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}><Text style={{ top: 20, fontWeight: 'bold' }}>{item.username}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ sortModalVisible: true })} hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
                <Icon name="md-more" size={30} color="#C5C7C6" style={{ alignSelf: 'flex-end', lineHeight: 60, marginRight: 15 }} />
              </TouchableOpacity>
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
                <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800', marginLeft: 37 }}>{item.likes}</Text>
                <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800', marginLeft: 100 }}>{item.loops}</Text>
                <Text style={{ fontSize: 14, color: "#C5C7C6", fontWeight: '800', marginLeft: 100 }}>{item.comments}</Text>
              </View>
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.sortModalVisible}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}>
              <TouchableWithoutFeedback onPress={() => {
                this.setModalVisible(!this.state.sortModalVisible);
              }}>
                <View
                  style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)', flexDirection: "column", justifyContent: "space-around", alignContent: "center" }}>
                  <View style={{
                    width: wp('95%'),
                    flexDirection: "column",
                    backgroundColor: 'rgb(248,249,250)',
                    justifyContent: "space-around",
                    margin: wp("20%"),
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'rgb(248,249,250)',
                    position: 'absolute',
                    bottom: 0,
                    marginLeft: hp('1.2%'),

                  }}>
                    <View style={{ flexDirection: "row", backgroundColor: 'rgb(248,249,250)', justifyContent: "space-around" }}>
                      <View style={{ alignItems: 'center', flexDirection: "column", backgroundColor: 'rgb(248,249,250)' }}>
                        <TouchableHighlight onPress={() => {
                          this.setState({ sortModalVisible: false })
                        }}
                          style={{ borderBottomColor: "#E7E8E9", borderBottomWidth: wp('.2%') }}>
                          <Text style={styles.modalText}>Send Message</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                          this.setState({ sortModalVisible: false })
                        }}
                          style={{ borderBottomColor: "#E7E8E9", borderBottomWidth: wp('.2%') }}>
                          <Text style={styles.modalText}>Unfollow</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                          this.setState({ sortModalVisible: false })
                        }}
                          style={{ borderBottomColor: "#E7E8E9", borderBottomWidth: wp('.2%') }}>
                          <Text style={{
                            fontSize: hp('2.5%'),
                            color: "#4A90E2",
                            fontWeight: '300',
                            margin: 5,
                            alignSelf: 'center',
                            color: 'red',
                          }}>Block</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                          this.setState({ sortModalVisible: false })
                        }}
                          style={{ borderBottomColor: "#E7E8E9", borderBottomWidth: wp('.2%') }}>
                          <Text style={{
                            fontSize: hp('2.5%'),
                            color: "#4A90E2",
                            fontWeight: '300',
                            margin: 5,
                            alignSelf: 'center',
                            color: 'red',
                          }}>Report</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                  <TouchableHighlight onPress={() => {
                    this.setState({ sortModalVisible: false })
                  }}
                    style={{
                      alignSelf: 'center',
                      width: wp('95%'),
                      position: 'absolute',
                      bottom: 30,
                      borderWidth: 1,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      marginLeft: hp('10%'),
                      borderColor: 'rgb(248,249,250)',
                    }}>
                    <Text style={styles.modalText}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        )}
      />
    )
  }
}
const styles = StyleSheet.create({
  modalText: {
    fontSize: hp('2.5%'),
    color: "#4A90E2",
    fontWeight: '300',
    margin: 5,
    alignSelf: 'center',
  }
})
