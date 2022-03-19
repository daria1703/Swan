import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Splash from './Screens/Splash'

const App = () => (
  <View style={styles.container}>
    <Splash/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // image: {
  //   flex: 1,
  //   justifyContent: "center"
  // },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0"
  // }
});

export default App;