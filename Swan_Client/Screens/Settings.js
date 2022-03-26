import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'

export default function Settings(){

    return (
        <View style={styles.body}>
            <Text>Settings</Text>
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


});