import React, { useState } from "react";
import { View, Button, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import logo from '../logo.png'
// import image from '../assets/img/n1.jpg';

export default function Cart({ navigation }) {

    const [choice, setChoice] = useState([
        { name: 'Bracelet', id: '1', price: '$ 50.00', image: require('../assets/img/star.png') },
        { name: 'Rings', id: '2', price: '$ 250.00', image: require('../assets/img/ring.png') },
        { name: 'Necklaces', id: '3', price: '$ 125.00', image: require('../assets/img/necklace.png') },
        { name: 'Earrings', id: '4', price: '$ 200.00', image: require('../assets/img/earring.png') },
    ]);

    return (
        <View style={styles.body}>
            <View style={styles.myCartContainer}>
                <TouchableOpacity style={styles.boxIcon} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/img/left-arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.myCartText}>My cart</Text>
            </View>
            <SafeAreaView>
                <ScrollView style={styles.list}>

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
                                    <Text style={styles.textCounter}>0.1</Text>
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
                </ScrollView>
            </SafeAreaView>
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

    boxIcon: {

        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    icon: {
        width: 18,
        height: 18,
        tintColor: '#000000'
    },
    myCartContainer: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    myCartText: {
        fontSize: 15,
        fontFamily: 'Merriweather-Bold',
        marginLeft: 110,
        color: '#303030'
    },
    list: {
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    productCard: {
        width: '334',
        height: '100',

    },
    
    counter: {
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 115
    },
    
    textCardTttle: {
        marginTop: 10,
        fontFamily: 'NunitoSans-Regular',
        lineHeight: 19,
        fontSize: 14,
        color: '#606060'
    },
    textCardPrice: {
        fontFamily: 'NunitoSans-Regular',
        lineHeight: 19,
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#303030'
    },
    imgBox: {
        width: 118,
        height: 118,
        marginTop: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: '100%',
        width: '100%'
    },
    card: {
        height: 120,
        width: 334,
        // backgroundColor: 'green',
        flexDirection: 'row',
        shadowColor: '#8A959E',
        elevation: 0.5,
    },
    cardTextContainer: {
        // backgroundColor: 'yellow',
        height: 120,
        
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 40,
    },
    iconBox2: {
        width: 25,
        height: 25,
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon2: {
        width: 12,
        height: 12,
        tintColor: '#000000'
    },
    textCounter: {
        fontWeight: '600',
        fontFamily: 'NunitoSans-Regular',
        lineHeight: 25,
        fontSize: 17,
        color: '#000000',
        marginLeft: 15,
        marginRight: 15
    },
    cardTextTitle:{
        marginTop: 4,
        marginLeft: 2,
        color: '#000000',
        fontSize: 15,
    },
    cardTextPrice:{
        fontSize: 15,
        marginLeft: 2,
        fontWeight: '600',
        color: '#000000',
    },
    buttonCrossContainer:{
        height: '100%',
        width: '100%',
        marginLeft: 80,
    },
    icon3: {
        width: 12,
        height: 12,
        tintColor: '#000000'
    },
    iconBox3: {
        width: 25,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});