import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Components/Button";
import Title from "../Components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Connexion/Inscription" />

      <StatusBar style="auto" />

      <Button color="#841584" title="Connexion" onPress="<HomePage/>" />

      <Button color="#ff5c5c" title="Inscription" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: "#fff",
    alignItems     : "center",
    justifyContent : "center",
  },
});
