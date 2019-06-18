
import React from 'react'
import { Text, View, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Input = (props) => {
  return (
    <View style={styles.viewStyles} >
      <Text style={styles.textStyles}> {props.label} </Text>
      <TextInput value={props.value} style={styles.textInputStyles}
        placeholder={props.placeholder}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText} 
      />
    </View>
  )
}

const styles = {
  viewStyles: {
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: wp('1%'),
        textAlign: 'left',
        width: wp('70%'),
        height: hp('5%'),
        padding: wp('2%'),
        fontSize: hp('2%'),
        margin: wp('3%')
  },
  textStyles: {
    flex: 1,
    fontSize: 20
  },
  textInputStyles: {
    height: 50,
    flex: 2
  }
}

export default Input;