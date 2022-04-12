import React, { useState } from "react";
import { View, Button, Text, Image, ScrollView, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, TextInput, BackHandler } from 'react-native'
import { back } from "react-native/Libraries/Animated/Easing";
import logo from '../logo.png'

export default function Notification({navigation}){

    const [notification, setProduct] = useState([
        { id: '1', image: require('../assets/img/b1.jpg'), title: 'Your order #123456789 has been confirmed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'New', name:'success'},
        { id: '2', image: require('../assets/img/r1.jpg'), title: 'Your order #123456789 has been canceled', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: null, name:'canceled'},
        { id: '3', image: require('../assets/img/n1.jpg'), title: 'Discover hot sale jewelery this week', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'HOT!', name:'success'},
        { id: '4', image: require('../assets/img/e1.jpg'), title: 'Your order #123456789 has been shipped successfully', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: null, name:'canceled'},
        { id: '5', image: require('../assets/img/b1.jpg'), title: 'Your order #123456789 has been confirmed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'New', name:'success' },
        { id: '6', image: require('../assets/img/r1.jpg'), title: 'Your order #123456789 has been canceled', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'HOT!', name:'success'},
        { id: '7', image: require('../assets/img/n1.jpg'), title: 'Your order #123456789 has been shipped successfully', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'New', name:'success'},
        { id: '8', image: require('../assets/img/e1.jpg'), title: 'Your order #123456789 has been confirmed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: null, name:'canceled'},
        { id: '9', image: require('../assets/img/b1.jpg'), title: 'Your order #123456789 has been canceled', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'HOT!', name:'success'},
        { id: '28', image: require('../assets/img/r1.jpg'), title: 'Your order #123456789 has been shipped successfully', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: 'New', name:'success'},
        { id: '90', image: require('../assets/img/n1.jpg'), title: 'Your order #123456789 has been confirmed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.', lable: null, name:'canceled'},

    ]);

    return (
        <View style={styles.body}>
            <View style={styles.notificationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image style={styles.icon} source={require('../assets/img/serch.png')} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.textNotification}>Notification</Text>
                </View>
            </View>
            <SafeAreaView>
                <ScrollView>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={notification}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.imgBox} onPress={() => navigation.navigate('Product')}>
                        <Image
                            style={styles.img}
                            source={require('../assets/img/b1.jpg')}
                        />
                    </TouchableOpacity>
                    <View style={styles.notificationTextContainer}>
                        <Text style={styles.notificationTitle}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={[
                            styles.textColor,
                            { color: item.lable == 'New' ? 'green' : 'red' }
                          ]}>{item.lable}</Text>
                    </View>
                </View>
            </View>
                        )}
                    />
                    <View style={styles.save}>

                    </View>
                </ScrollView>
            </SafeAreaView>



            {/* <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.imgBox} onPress={() => navigation.navigate('Product')}>
                        <Image
                            style={styles.img}
                            source={require('../assets/img/b1.jpg')}
                        />
                    </TouchableOpacity>
                    <View style={styles.notificationTextContainer}>
                        <Text style={styles.notificationTitle}>Your order #123456789 has been confirmed</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text>
                        <Text style={styles.textColor}>New</Text>
                    </View>
                </View>
            </View> */}
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
    notificationContainer: {
        display: 'flex',
        alignItems: 'center',
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
        marginRight: 80
    },
    textNotification: {
        fontFamily: 'Gelasio-SemiBold',
        fontSize: 18,
        color: '#303030',
        
    },

    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
    },

    cardContainer: {
        justifyContent: 'center',
        marginTop: 2,
        height: 120,
    },
    card: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow'
    },
    imgBox: {
        width: 100,
        height: 100,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    notificationTitle: {
        marginLeft: 10,
        color: '#242424',
        fontSize: 12,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '700',
        width: 290,
    },
    description: {
        color: '#808080',
        fontSize: 10,
        marginRight: 80,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '400',
        marginLeft: 10,
    },
    notificationTextContainer:{
        height: 100,
        width: 360
    },
    textColor:{
        fontSize: 14,
        color: 'green',
        marginLeft: 255,
        fontFamily: 'NunitoSans-Regular',
        fontWeight: '700'
    },
    save:{
        height: 95,
        backgroundColor:'#ffffff'
    }

});