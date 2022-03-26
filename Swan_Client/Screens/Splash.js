import React from "react"; 
import { View, Button , Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import image from '../zdj_splash.png';
import Login from "./Login";
import Registration from "./Registration";

const Splash = ({navigation}) => {
  
    return (
        <ImageBackground source={image} style={styles.body}>
            <Text style={styles.text1}>THE SWAN</Text>
            <Text style={styles.text2}>HOUSE</Text>
            <Text style={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque pretium pretium. Sed fermentum, felis vitae lacinia fauc.</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.btntext}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: null,
      height: null,
      
    },
    text: {
      color: '#ffffff',
      fontSize: 20,
    },
    text1:{
      color: '#F5F5F5',
      lineHeight: 30.47,
      letterSpacing: 1.5,
      fontSize: 24,
      // weight: 600,
      fontFamily: 'Gelasio-SemiBold',
      position: 'absolute',
      width: 200,
      height: 30,
      left: 40,
      top: 231,
      
    },
    text2:{
      // color: '#999999',
      // fontSize: 30,
      // fontFamily: 'Gelasio-SemiBold',
      // marginRight: 215,
      color: '#999999',
      lineHeight: 38,
      letterSpacing: 1.5,
      fontSize: 30,
      // weight: 700,
      fontFamily: 'Gelasio-SemiBold',
      position: 'absolute',
      width: 150,
      height: 38,
      left: 40,
      top: 276,
    },
    text3:{
      color: '#ffffff',
      position: 'absolute',
      width: 286,
      height: 160,  
      left: 59,
      // style: 'normal',
      top: 384,
      lineHeight: 35,
      fontFamily: 'NunitoSans-Regular',
      // weight: 400,
      fontSize: 18,
      marginTop: 30,
      textAlign: 'justify',
    },
    btn:{
      height: 54,
      width: 159,
      backgroundColor: '#013946',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      position: 'absolute',
      top: 650,
    },
    btntext:{
      color: '#ffffff',
      fontSize: 18,
      fontFamily: 'Gelasio-SemiBold',
    }
  });

export default Splash