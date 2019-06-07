/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import FeedScreen from './screens/feed';
import ProfileScreen from './screens/profile';
import VideoScreen from './screens/video';
import Icon from 'react-native-ionicons';

type Props = {};
export default class App extends Component<Props> {
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
        <Text>Stem</Text>
      ),
      headerStyle: {
        backgroundColor: '#fff',
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
        <Text>Stem</Text>
      ),
      headerStyle: {
        backgroundColor: '#fff',
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
        <Text>Stem</Text>
      ),
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
      },
    })
  }
});


const Nav = createAppContainer(createBottomTabNavigator({
  Feed: {
    screen: FeedStackNav,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon:
        <Icon name="md-home" color="#637182" size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },

      }
    },
  },
  
  Video: {
    screen: VideoStackNav,
    navigationOptions: {
      tabBarLabel: 'Capture',
      tabBarIcon:
        <Icon name="ios-videocam" color="#637182" size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },

      }
    },
  },

  Profile: {
    screen: ProfileStackNav,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon:
        <Icon name="md-contact" color="#637182" size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },

      }
    },
  },
}));
