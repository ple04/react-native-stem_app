/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import AvView from '../util/AvView';

const data = [{
    key: 1,
    username: 'Addie',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',

}, {
    key: 2,
    username: 'Shawn',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 3,
    username: 'Jon',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 4,
    username: 'Lu',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 5,
    username: 'Addie',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 6,
    username: 'Leddy',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 7,
    username: 'Eddie',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 8,
    username: 'Bob',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
}, {
    key: 9,
    username: 'Bran',
    avatarUrl: 'https://unsplash.it/100?image=1005',
    loops: '12',
},
]

type Props = {};
export default class ContactScreen extends Component<Props> {


    render() {
        return (
            <ScrollView>
                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
                                source={{ uri: item.avatarUrl }}
                            />
                            <Text style={{ fontSize: 14, color: 'black', fontWeight: '800' }}>{item.username}</Text>
                            <View
                                style={{
                                    alignSelf: 'center',
                                    flex: 1,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    alignContent: 'flex-end',
                                }}>
                                <Icon name="ios-add-circle-outline" size={27} color="#C5C7C6" style={{ marginBottom: 6, marginRight: 20 }} />
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
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