import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import logo from '../logo.png'
import Box from '../Components/Box'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    return (
        <View style={styles.body}>
            <View style={styles.serchAndeTC}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../assets/img/serch.png')} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.textSwan}>THE SWAN</Text>
                    <Text style={styles.textHouse}>HOUSE</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../assets/img/bag.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.rowChoice}>
                <View style={styles.choiceBox}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            style={styles.icon2}
                            source={require('../assets/img/star.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Popular</Text>
                </View>
                <View style={styles.choiceBox}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            style={styles.icon2}
                            source={require('../assets/img/ring.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Rings</Text>
                </View>
                <View style={styles.choiceBox}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            style={styles.icon2}
                            source={require('../assets/img/bracelet.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Bracelet</Text>
                </View>
                <View style={styles.choiceBox}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            style={styles.icon2}
                            source={require('../assets/img/necklace.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Necklaces</Text>
                </View>
                <View style={styles.choiceBox}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            style={styles.icon2}
                            source={require('../assets/img/earring.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Earrings</Text>
                </View>
            </View>

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

    title: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        backgroundColor: 'yellow'

    },

    rowChoice: {
        // backgroundColor: 'blue',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textSwan: {
        fontFamily: 'Gelasio-SemiBold',
        fontSize: 18,
        color: '#303030'
    },

    textHouse: {
        fontFamily: 'Gelasio-SemiBold',
        fontSize: 18,
        color: '#013946'
    },

    serchAndeTC: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        marginTop: 40,
        height: 60,
        flexDirection: 'row',

    },

    icon: {
        width: 40,
        height: 40,
        margin: 20
    },

    icon2: {
        width: 30,
        height: 30,
    },

    iconBox: {
        width: 44,
        height: 44,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconText: {
        color: '#000000',
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
        textAlign: 'center'
    },

    choiceBox: {
        // backgroundColor: 'red',
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },


});