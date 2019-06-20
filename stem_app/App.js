/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, navigate } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import FeedScreen from './components/screens/feed';
import ProfileScreen from './components/screens/profile';
import VideoScreen from './components/screens/video';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FriendProfileScreen from './components/screens/friendProfile';
import SettingScreen from './components/screens/setting';
import LoginScreen from './components/screens/login';
import SignupScreen from './components/screens/signup';
import ContactScreen from './components/screens/contact';
import MessageScreen from './components/screens/message';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

type Props = {};
export default class App extends Component<Props> {

  state = { loggedIn: null };

  componentDidMount() {
    SplashScreen.hide();

    let config = {
      apiKey: "AIzaSyANanFaw3HkzRi2gfQGetEw7PZb38tetnk",
      authDomain: "stemapp-d0db8.firebaseapp.com",
      databaseURL: "https://stemapp-d0db8.firebaseio.com",
      projectId: "stemapp-d0db8",
      storageBucket: "stemapp-d0db8.appspot.com",
      messagingSenderId: "203953989673",
      appId: "1:203953989673:web:ed3015ec6f1dc8c1"
    };
    firebase.initializeApp(config);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Nav />
    );
  }
}

const LoginStackNav = createStackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: null,
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },
  signup: {
    screen: SignupScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: null,
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-round-back" color='white' size={35} style={{ marginLeft: 25 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },
});

const FeedStackNav = createStackNavigator({
  Home: {
    screen: FeedScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("contact")}>
          <Icon name="md-person-add" color='white' size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <Icon name="md-paper-plane" color='white' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },
  FriendProfile: {
    screen: FriendProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("contact")}>
          <Icon name="md-person-add" color='white' size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <Icon name="md-paper-plane" color='white' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },

  contact: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-round-back" color='white' size={35} style={{ marginLeft: 20 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <Icon name="md-paper-plane" color='white' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>),
    })
  },
  message: {
    screen: MessageScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-round-back" color='white' size={35} style={{ marginLeft: 25 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },
  initialRouteName: 'FeedScreen',
});


const VideoStackNav = createStackNavigator({
  Home: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  initialRouteName: 'VideoScreen',
});


const ProfileStackNav = createStackNavigator({
  Home: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("contact")}>
          <Icon name="md-person-add" color='white' size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <Icon name="md-paper-plane" color='white' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
    })
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          style={styles.stemlogo}
          source={require('./components/images/stem_logo.png')}
        />
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-round-back" color='white' size={35} style={{ marginLeft: 20 }} />
        </TouchableOpacity>),
      headerStyle: {
        backgroundColor: '#3CC581',
        borderBottomWidth: 0,
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <Icon name="md-paper-plane" color='white' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>),
    })
  },
  initialRouteName: 'ProfileScreen',
});


const tabNav = createAppContainer(createBottomTabNavigator({
  Feed: {
    screen: FeedStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
        ({ tintColor }) => <Icon name="ios-images" style={{ marginTop: 9 }} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor: '#3CC581'
      }
    },
  },

  Video: {
    screen: VideoStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
        ({ tintColor }) => <Icon name="md-videocam" style={{ marginTop: 9 }} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor: '#3CC581'
      }
    },
  },

  Profile: {
    screen: ProfileStackNav,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon:
        ({ tintColor }) => <Icon name="md-contact" style={{ marginTop: 9 }} color={tintColor} size={30} />,
      tabBarOptions: {
        style: {
          height: 50,
        },
        labelStyle: { fontSize: 10 },
        activeTintColor: '#3CC581'
      }
    },
  },
}));

const Nav = createAppContainer(createStackNavigator({
  home: {
    screen: LoginStackNav,
    navigationOptions: {
      header: null
    },
  },
  mainApp: {
    screen: tabNav,
    navigationOptions: {
      header: null
    },
  },
}));



const styles = StyleSheet.create({
  stemlogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? hp('5%') : hp('8%'),
    resizeMode: 'contain',
    flex: 1,
    marginBottom: hp('1.5%')
  },
});