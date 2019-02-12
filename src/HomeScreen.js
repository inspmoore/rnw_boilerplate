import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Your browser will automatically refresh as soon as you save the fil sse."
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Web universal app!
      </Text>
      <Text style={styles.instructions}>
        This component is shared between web and react environment. To see how
        it works, just edit the HomeScreen.js
      </Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomeScreen;
