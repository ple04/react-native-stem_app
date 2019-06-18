import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, navigation, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from '../Firebase/input';
import firebase from 'firebase';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '' };
    }

    onButtonPress() {
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((error) => {
                        let errorCode = error.code
                        let errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            this.onLoginFailure.bind(this)('Weak password!')
                        } else {
                            this.onLoginFailure.bind(this)(errorMessage)
                        }
                    });
            });
    }
    onLoginSuccess() {
        this.setState({
            email: '', password: '', error: '', loading: false
        })
    }
    onLoginFailure(errorMessage) {
        this.setState({ error: errorMessage, loading: false })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator size={"small"} />
                </View>
            )
        } else {
            return (
                <TouchableOpacity style={styles.loginButton} onPress={this.onButtonPress.bind(this)} hitSlop={{ top: 50, bottom: 50, left: 100, right: 100 }}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            )
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
                        value={this.state.email}
                        secureTextEntry={false}
                        onChangeText={email => this.setState({ email })} />
                    <Text style={styles.textBox}>Password</Text>
                    <Input 
                        style={styles.inputStyle}
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })} />

                    {this.renderButton()}

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
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