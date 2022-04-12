import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'

export default function Favourite({ navigation }) {

    return (
        <View style={styles.body}>
            <View style={styles.favouritesContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image style={styles.icon} source={require('../assets/img/serch.png')} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.textFavourite}>Favourites</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image style={styles.icon2} source={require('../assets/img/bag.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.imgBox} onPress={() => navigation.navigate('Product')}>
                        <Image
                            style={styles.img}
                            source={require('../assets/img/b1.jpg')}
                        />
                    </TouchableOpacity>

                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTextTitle}>Bracelet</Text>
                        <Text style={styles.cardTextPrice}>$ 50.00</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.iconBox2}>
                                <Image
                                    style={styles.icon2}
                                    source={require('../assets/img/add.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textCounter}>01</Text>
                            <TouchableOpacity style={styles.iconBox2}>
                                <Image
                                    style={styles.icon2}
                                    source={require('../assets/img/minus.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonCrossContainer}>
                        <TouchableOpacity style={styles.iconBox3}>
                            <Image
                                style={styles.icon3}
                                source={require('../assets/img/cancel.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    favouritesContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        marginTop: 20,
        marginBottom: 10,
        height: 60,
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 30,
        margin: 30,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
    },
    textFavourite: {
        fontFamily: 'Gelasio-SemiBold',
        fontSize: 18,
        color: '#303030'
    },
    icon2: {
        width: 20,
        height: 24,
        margin: 26,
    },

});