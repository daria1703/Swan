import React, { useState } from "react";
import {View, Button, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native'
import logo from '../logo.png'

export default function Login({navigation}){
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('***');
    return(
        <View style={styles.body}>
            <View style={styles.logoview}>
                <Image
                    style={styles.logostyle}
                    source={require('../logo.png')}
                />
                <View style={styles.line}></View>
                <View style={styles.line2}></View>
            </View>
                <Text style={styles.textHello}>Hello!</Text>
                <Text style={styles.textWelcome}>WELCOME BACK</Text>
                <View style={styles.inputContent}>
                <Text style={styles.textInput}>Email: </Text>
                <TextInput style={styles.input} />
                <Text style={styles.textInput}>Password: </Text>
                <TextInput style={styles.input} />
                <Text style={styles.forgottPass}>Forgot Password</Text>
                <TouchableOpacity style={styles.btn} 
                onPress={() => navigation.navigate('Registration')} 
                >
                <Text style={styles.btntext}>Log in</Text>
                </TouchableOpacity>
                <Text style={styles.signupText}>Sign up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
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
    logostyle:{
        width: 106,
        height:106,
        top:45,
        alignItems: 'center',
        position: 'absolute',
    },
    btnlogo:{
        backgroundColor: '#ffffff'
    },
    logoview:{
        position:'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        
    },
    line:{
        width: 105,
        height: 1,
        backgroundColor: '#BDBDBD',
        top: 97,
        right: 70,
    },
    line2:{
        width: 105,
        height: 1,
        backgroundColor: '#BDBDBD',
        top: 97,
        left: 70,
    },
    textHello:{
        fontFamily: 'Merriweather-Regular',
        fontSize: 30,
        lineHeight: 45,
        letterSpacing: 1,
        color: '#909090',
        bottom: 5,
        right: 120
    },
    textWelcome:{
        fontFamily: 'Merriweather-Bold',
        fontSize: 24,
        lineHeight: 45,
        letterSpacing: 1,
        color: '#013946',
        bottom: 10,
        right: 55
    },
    inputContent:{
        width: 345,
        height: 437,
        backgroundColor: '#ffffFf',
        top: 30,
        shadowOpacity: 100,
        shadowColor: '#8A959E',
        elevation: 5
    },
    textInput:{
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
        lineHeight: 19,
        color: '#909090',
        top: 30,
        left: 15
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        margin: 20
    },
    forgottPass:{
        color: '#242424',
        fontSize: 18,
        fontFamily: 'NunitoSans-Regular',
        lineHeight: 24.5,
        textAlign: 'center',
        top: 25
    },
    btn:{
        height: 50,
        width: 285,
        left: 30,
        backgroundColor: '#013946',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        position: 'absolute',
        top: 310,
      },
      btntext:{
        color: '#ffffff'
      },
      signupText:{
        color: '#242424',
        top: 140,
        fontFamily: 'NunitoSans-Regular',
        fontSize: 18,
        textAlign: 'center'
      }
    
  });


// export default Login