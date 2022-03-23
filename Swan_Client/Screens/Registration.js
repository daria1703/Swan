import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'

export default function Registration({ navigation }) {

    return (
        <View style={styles.body}>
            <View style={styles.logoview}>
                <Image
                    style={styles.logostyle}
                    source={require('../logo.png')}
                />
                <View style={styles.line}></View>
                <View style={styles.line2}></View>
            </View>
            <Text style={styles.textWelcome}>WELCOME</Text>
            <View style={styles.inputContent}>
                <Text style={styles.textInput}>Name: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput}>Email: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput}>Password: </Text>
                <TextInput style={styles.input} />

                <Text style={styles.textInput}>Confirm Password: </Text>
                <TextInput style={styles.input} />

                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.alreadyAccountContainer}>
                    <Text style={styles.alreadyAccount}>Already have account?</Text>
                    <TouchableOpacity style={styles.btnSignIn}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.btntextSignIn}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },

    text: {
        color: '#ffffff',
        fontSize: 20,
    },
    logostyle: {
        width: 106,
        height: 106,
        top: 45,
        alignItems: 'center',
        position: 'absolute',
    },
    btnlogo: {
        backgroundColor: '#ffffff',
    },
    logoview: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    line: {
        width: 105,
        height: 1,
        backgroundColor: '#BDBDBD',
        top: 97,
        right: 70,
    },
    line2: {
        width: 105,
        height: 1,
        backgroundColor: '#BDBDBD',
        top: 97,
        left: 70,
    },
    textWelcome: {
        fontFamily: 'Merriweather-Bold',
        fontSize: 24,
        lineHeight: 45,
        letterSpacing: 1,
        color: '#013946',
        top: 15,
        // bottom: 30,
        right: 100
    },
    inputContent: {
        width: 345,
        height: 570,
        backgroundColor: '#ffffFf',
        top: 30,
        shadowOpacity: 100,
        shadowColor: '#8A959E',
        elevation: 5
    },
    textInput: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
        lineHeight: 19,
        color: '#909090',
        top: 30,
        left: 15
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        margin: 20
    },
    forgottPass: {
        color: '#242424',
        fontSize: 18,
        fontFamily: 'NunitoSans-Regular',
        lineHeight: 24.5,
        textAlign: 'center',
        top: 25
    },
    btn: {
        height: 50,
        width: 285,
        left: 30,
        backgroundColor: '#013946',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        position: 'absolute',
        top: 460,
    },
    btntext: {
        color: '#ffffff'
    },
    alreadyAccount: {
        color: '#808080',
        top: 90,
        lineHeight: 19,
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
        left: 60
    },


    btnSignIn: {
        width: 70,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: 55,
        left: 215,
    },

    btntextSignIn:{
        fontWeight: 'bold',
        color: '#000000',
    }

});

