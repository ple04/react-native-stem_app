import React, {Component} from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const phoneSize = () => {
    if(width<=800)
       return true
    else 
       return false
  }