import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, AsyncStorage, TouchableOpacity, navigation, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from '../Firebase/input';
import * as firebase from 'firebase';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Firebase from '../Firebase/firebase'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', errorMessage: null, userData: {} };
    }

    componentDidMount() {
        this.getToken();
     }
     

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('mainApp'))
            .catch(error => this.setState({ errorMessage: error.message }))
            
    }

    async storeToken(user) {
        try {
           await AsyncStorage.setItem("userData", JSON.stringify(user));
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async getToken(user) {
        try {
          let userData = await AsyncStorage.getItem("userData");
          let data = JSON.parse(userData);
          console.log(data);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }

    render() {
        return (<View style={{ backgroundColor: "#3CC581", width: '100%', height: '100%' }} >
            <Image source={require('../images/stem_logo.png')} style={styles.vmalogo} />
            <View style={styles.loginBox}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textBox}>Email</Text>
                    <Input
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                    <Text style={styles.textBox}>Password</Text>
                    <Input
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
                        <Text style={styles.loginText}>
                            LOGIN
                             </Text>
                    </TouchableOpacity>

                    <Text style={styles.errorTextStyle}>
                        {this.state.errorMessage}
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.signup} onPress={() => this.props.navigation.navigate("signup")}>
                    <Text style={styles.signupText}>
                        Sign up
                             </Text>
                </TouchableOpacity>
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
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: wp('1%'),
        textAlign: 'left',
        width: wp('90%'),
        padding: wp('2%'),
        fontSize: hp('2%'),
        margin: wp('3%')
    },
    vmalogo: {
        height: Platform.OS === 'ios' ? hp('12%') : hp('12%'),
        resizeMode: 'contain',
        marginTop: hp('15%'),
        marginBottom: 10,
        alignSelf: 'center',

    },
    loginBox: {
        alignContent: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        bottom: hp('3%'),
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
        marginTop: 15,
    },
    loginText: {
        alignSelf: 'center',
        color: '#3CC581',
        fontWeight: '600'

    },
    signup: {
        alignSelf: "center",
        position: 'absolute',
        top: hp('18%'),
        backgroundColor: "rgba(255,255,255,0.3)",
        width: wp('110%'),
        height: wp('30%'),
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: wp('1%'),
        borderWidth: wp('.05%'),
        borderColor: "rgba(255,255,255,0.5)"
    },
    signupText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: hp('2.5%'),
        paddingBottom: hp('7%')

    },


} 