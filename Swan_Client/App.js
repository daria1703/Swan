import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from './Screens/Splash'
import Login from './Screens/Login'
import Registration from "./Screens/Registration";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

