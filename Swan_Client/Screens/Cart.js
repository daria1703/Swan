import React, { useState } from "react";
import { View, Button, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import logo from '../logo.png'
// import image from '../assets/img/n1.jpg';

export default function Cart({ navigation }) {

    const [product, setProduct] = useState([
        { name: 'Bracelet', id: '1', price: '$ 50.00', image: require('../assets/img/b1.jpg') },
        { name: 'Ring', id: '2', price: '$ 250.00', image: require('../assets/img/r1.jpg') },
        { name: 'Necklace', id: '3', price: '$ 125.00', image: require('../assets/img/n1.jpg') },
        { name: 'Earrings', id: '4', price: '$ 200.00', image: require('../assets/img/e1.jpg') },
        { name: 'Bracelet', id: '5', price: '$ 50.00', image: require('../assets/img/b1.jpg') },
        { name: 'Ring', id: '6', price: '$ 250.00', image: require('../assets/img/r1.jpg') },
        { name: 'Necklace', id: '7', price: '$ 125.00', image: require('../assets/img/n1.jpg') },
        { name: 'Earrings', id: '8', price: '$ 200.00', image: require('../assets/img/e1.jpg') },
        { name: 'Bracelet', id: '9', price: '$ 50.00', image: require('../assets/img/b1.jpg') },
        { name: 'Ring', id: '28', price: '$ 250.00', image: require('../assets/img/r1.jpg') },
        { name: 'Necklace', id: '90', price: '$ 125.00', image: require('../assets/img/n1.jpg') },

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
                    <FlatList
                        style={styles.list}
                        keyExtractor={(item) => item.id}
                        data={product}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                    <TouchableOpacity style={styles.imgBox} onPress={() => navigation.navigate('Product')}>
                                        <Image
                                            style={styles.img}
                                            source={item.image}
                                        />
                                    </TouchableOpacity>

                                    <View style={styles.cardTextContainer}>
                                        <Text style={styles.cardTextTitle}>{item.name}</Text>
                                        <Text style={styles.cardTextPrice}>{item.price}</Text>
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
                        )}
                    />
                    <View style={styles.rowContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} />
                        </View>
                        <TouchableOpacity style={styles.iconBox4}>
                            <Image
                                style={styles.icon4}
                                source={require('../assets/img/right-arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowContainer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.total}>
                                Total:
                            </Text>
                            <Text style={styles.price}>
                                $ 375.00
                            </Text>
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Check out</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.saveContainer}>
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
        width: 334,
        height: 100,
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
        marginTop: 2,
        height: 120,
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
    cardTextTitle: {
        marginTop: 4,
        marginLeft: 2,
        color: '#000000',
        fontSize: 15,
    },
    cardTextPrice: {
        fontSize: 15,
        marginLeft: 2,
        fontWeight: '600',
        color: '#000000',
    },
    buttonCrossContainer: {
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
    inputContainer: {
        elevation: 0.5,
        shadowColor: '#8A959E',
        height: 50,
        width: 284,

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        margin: 20,
        color: '#000000',
    },
    saveContainer: {
        height: 60,
        backgroundColor: '#ffffff',
    },
    rowContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconBox4: {
        width: 50,
        height: 50,
        backgroundColor: '#013946',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon4: {
        width: 18,
        height: 18,
        tintColor: '#ffffff'
    },
    totalContainer: {
        height: 50,
        width: 284,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total: {
        fontSize: 20,
        color: '#000000',
    },
    price: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '500'
    },
    btn: {
        height: 60,
        width: 300,
        backgroundColor: '#013946',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        // position: 'absolute',

    },

    btntext: {
        color: '#ffffff',
        fontFamily: 'NunitoSans-Regular',
        fontSize: 18,
    },
    btnContainer: {
        isplay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
});