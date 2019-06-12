/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';


type Props = {};
export default class VideoScreen extends Component<Props> {

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <CameraKitCameraScreen
      style={{
        flex: 1,
        backgroundColor: 'white'}}
      actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
      onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
      flashImages={{
        on: require('../images/flashOn.png'),
        off: require('../images/flashOff.png'),
        auto: require('../images/flashAuto.png')
      }}
      cameraFlipImage={require('../images/cameraFlipIcon.png')}
      captureButtonImage={require('../images/cameraButton.png')}
    />
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