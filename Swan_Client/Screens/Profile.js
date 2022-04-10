import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'

export default function Profile({ navigation }) {

    const [card, setCard] = useState([
        { title: 'My orders', id: '1', description: 'Already have 10 orders' },
        { title: 'Shopping Addresses', id: '2', description: '03 Addresses' },
        { title: 'Payment Method', id: '3', description: 'You have 2 cards' },
        { title: 'My revirew', id: '4', description: 'Reviews for 5 items' },
        { title: 'Settings', id: '5', description: 'Notification, Passwords' },

    ]);

    return (
        <View style={styles.body}>
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image style={styles.icon} source={require('../assets/img/serch.png')} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.textProfile}>Profile</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
                    <Image style={styles.icon2} source={require('../assets/img/log-out.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.userContainer}>
                <View style={styles.userCard}>
                    <TouchableOpacity style={styles.imgBox} onPress={() => navigation.navigate('Product')}>
                        <Image
                            style={styles.img}
                            source={require('../assets/img/kitty.jpg')}
                        />
                    </TouchableOpacity>
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userName}>Kitten Electrocuted</Text>
                        <Text style={styles.userGmail}>kittene2008@gamil.com</Text>
                    </View>
                </View>
            </View>
            <FlatList
            style={styles.list}
                keyExtractor={(item) => item.id}
                data={card}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardDescription}>{item.description}</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <TouchableOpacity style={styles.imgBox2}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../assets/img/right-arrow.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    profileContainer: {
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
    icon2: {
        width: 20,
        height: 26,
        margin: 26,
    },
    textProfile: {
        fontFamily: 'Gelasio-SemiBold',
        fontSize: 18,
        color: '#303030'
    },

    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
    },
    userCard: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    userContainer: {
        justifyContent: 'center',
        marginTop: 2,
        height: 120,
    },
    imgBox: {
        width: 100,
        height: 100,
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 40
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 90
    },
    img2: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    userName: {
        marginTop: 4,
        marginLeft: 2,
        color: '#000000',
        fontSize: 20,
        marginRight: 40,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '700'
    },
    userGmail: {
        marginTop: 4,
        marginLeft: 2,
        color: '#808080',
        fontSize: 15,
        marginRight: 80,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '400'
    },
    cardContainer: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 350,
        height: 90,
        flexDirection: 'row',
        shadowColor: '#8A959E',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 1,
    },
    imgBox2: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 5,
        lineHeight: 24,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '700'
    },
    cardDescription: {
        color: '#808080',
        fontSize: 13,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '400'
    },
    list:{
    },
    cardTextContainer:{
    }
    
});