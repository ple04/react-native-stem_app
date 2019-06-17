import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, navigation, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class LoginScreen extends Component {

    render() {
        return (<View style={{ backgroundColor: "#3CC581", width: '100%', height: '100%' }} >
            <Image source={require('../images/stem_logo.png')} style={styles.vmalogo} />
            <View style={styles.loginBox}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textBox}>Email</Text>
                    <TextInput style={styles.inputStyle} />
                    <Text style={styles.textBox}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.inputStyle} />
                    <View >
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('mainApp')} hitSlop={{ top: 50, bottom: 50, left: 100, right: 100 }}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
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
        textAlign: 'center',
        width: wp('70%'),
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