import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";

export default function App() {
    
  return (
    <View style={styles.container}>
      <Title title="Connexion" />

     <EmailInput/>

     <PasswordInput/>

      <Button color="#841584" title="Connexion" onPress="<HomePage/>" />

      <Button color="#ff5c5c" title="Inscription" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});