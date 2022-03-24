import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import logo from '../logo.png'
import Profile from './Profile'
import Settings from './Settings';
import Notification from './Notification';
import Home from './Home';
import Favourite from './Favourite';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    height: 70,
                    backgroundColor: '#ffffff'
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{ 
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                            source={require('../assets/img/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#013946' : '#909090'
                            }}
                        />
                    </View>
                ),
                }} />
            <Tab.Screen name="Favourite" component={Favourite} options={{ 
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                            source={require('../assets/img/favourite.png')}
                            resizeMode='contain'
                            style={{
                                width: 23,
                                height: 23,
                                top: 1,
                                tintColor: focused ? '#013946' : '#909090'
                            }}
                        />
                    </View>
                ),
                }} />
            <Tab.Screen name="Notification" component={Notification} options={{ 
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                            source={require('../assets/img/bell.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#013946' : '#909090'
                            }}
                        />
                    </View>
                ),
                }} />
            <Tab.Screen name="Profile" component={Profile} options={{ 
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                            source={require('../assets/img/user.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#013946' : '#909090'
                            }}
                        />
                    </View>
                ),
                }} />
        </Tab.Navigator>
        
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

export default TabNavigation;
