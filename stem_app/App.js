/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import FeedScreen from './screens/feed';
import ProfileScreen from './screens/profile';
import VideoScreen from './screens/video';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Nav />
    );
  }
}

const FeedStackNav = createStackNavigator({
  Home: {
    screen: FeedScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
        style={styles.stemlogo}
          source={require('./images/stem_logo.png')}
        />
      ),
      
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  }
});


const VideoStackNav = createStackNavigator({
  Home: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
        style={styles.stemlogo}
          source={require('./images/stem_logo.png')}
        />
      ),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  }
});


const ProfileStackNav = createStackNavigator({
  Home: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
        style={styles.stemlogo}
          source={require('./images/stem_logo.png')}
        />
      ),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  }
});


const Nav = createAppContainer(createBottomTabNavigator({
  Feed: {
    screen: FeedStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
      ({tintColor}) => <Icon name="ios-images" style={{marginTop: 9}} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor:'#3CC581'
      }
    },
  },
  
  Video: {
    screen: VideoStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
      ({tintColor}) => <Icon name="md-videocam" style={{marginTop: 9}} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor:'#3CC581'
      }
    },
  },

  Profile: {
    screen: ProfileStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
      ({tintColor}) => <Icon name="md-contact" style={{marginTop: 9}} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor:'#3CC581'
      }
    },
  },
}));

const styles = StyleSheet.create({
  stemlogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    bottom: 5,
    resizeMode: 'contain',
  },
});