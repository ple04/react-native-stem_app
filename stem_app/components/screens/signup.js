import React, { Component } from 'react';
 import { Platform, StyleSheet, Text, View, Input, TextInput, TouchableOpacity, navigation, Image } from 'react-native';
 import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 import * as firebase from "firebase";



  export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          errorMessage: "",
        };
      }
      SignUp = (email, password) => {
        try {
          firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user => { 
                     console.log(user);
               });
    } catch (error) {
          console.log(error.toString(error));
        }
      };

      render() {
         return (<View style={{ backgroundColor: "#3CC581", width: '100%', height: '100%' }} >
             <Image source={require('../images/stem_logo.png')} style={styles.vmalogo} />
             <View style={styles.loginBox}>
                 <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                     <TextInput placeholder="E-mail" style={styles.inputStyle} onChangeText={email => this.setState({ email })}/>
                     <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputStyle} onChangeText={password => this.setState({ password })}/>
                     <View >
                         <TouchableOpacity style={styles.loginButton} onPress={() => {this.props.navigation.navigate("login"); this.SignUp(this.state.email, this.state.password)}} hitSlop={{ top: 50, bottom: 50, left: 100, right: 100 }}>
                             <Text style={styles.loginText}>Finish</Text>
                         </TouchableOpacity>
                     </View>
                 </View>
             </View>
         </View>);
     }
 }

  const styles = {
     loginTitle: {
         alignSelf: 'flex-start',
         fontSize: hp('2.5%'),
         marginLeft: 20,
         marginBottom: 10,
         color: "white",
         fontWeight: '600'

      },
     inputStyle: {
         borderBottomWidth: 0.5,
         borderColor: 'white',
         borderRadius: wp('1%'),
         textAlign: 'left',
         width: wp('70%'),
         padding: wp('2%'),
         fontSize: hp('2%'),
         margin: wp('3%'),
         color: 'white'
     },
     vmalogo: {
         height: Platform.OS === 'ios' ? hp('7%') : hp('12%'),
         resizeMode: 'contain',
         marginBottom: 40,
         alignSelf: 'center',
         marginTop: 60,

      },
     loginBox: {
         alignContent: 'center',
         justifyContent: 'center',
         justifySelf: 'center',
         alignSelf: 'center',
         width: 300,
         height: 270,
     },
     textBox: {
         alignSelf: 'flex-start',
         fontSize: hp('1.5%'),
         marginLeft: 20,
         color: "white",
         fontWeight: '600',
         bottom: -5
     },
     loginButton: {
         backgroundColor: 'white',
         width: wp('70%'),
         height: wp('10%'),
         alignContent: 'center',
         justifyContent: 'center',
         borderRadius: wp('1%'),
         marginTop: 30,
     },
     loginText: {
         alignSelf: 'center',
         color: '#3CC581',
         fontWeight: '600'

      }

 
  } 