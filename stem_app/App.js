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
        <Text style={{ color: 'white', fontSize:30}}>Stem</Text>
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
        <Text style={{ color: 'white', fontSize:30}}>Stem</Text>
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
        <Text style={{ color: 'white', fontSize:30}}>Stem</Text>
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
      tabBarLabel: 'Feed',
      tabBarIcon:
      ({tintColor}) => <Icon name="md-home" color={tintColor} size={30} />,
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
      tabBarLabel: 'Feed',
      tabBarIcon:
      ({tintColor}) => <Icon name="md-videocam" color={tintColor} size={30} />,
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
      tabBarLabel: 'Feed',
      tabBarIcon:
      ({tintColor}) => <Icon name="md-contact" color={tintColor} size={30} />,
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
