import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'
import img from '../assets/img/n1.jpg';

export default function Product({navigation}) {

    return (
        <View style={styles.body}>
             <TouchableOpacity style={styles.boxIcon} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/img/bag.png')} />
                </TouchableOpacity>
            <Image style={styles.img} source={img} />
            <Text>Product</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },

    img:{
        width: 330,
        height: 330,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: 'yellow',
    },
    boxIcon:{
        margin: 40,
        width: 50,
        height: 50,
        borderRadius: 6,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(138, 149, 158, 0.2)',
        shadowOpacity: '20%',
        
    }


});