import React from "react";
import Title from "../Components/Title";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";

export default class Connexion extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        
        <Title title = "Connexion" />

        <EmailInput />

        <PasswordInput />

        {/* <TouchableOpacity onPress={() => navigate("LoginScreen")}>
          <Text color = "#ff5c5c">Connexion</Text>


        </TouchableOpacity> */}

        <Button color = "#841584" title = "Connexion" />

        <Button color = "#ff5c5c" title = "Inscription" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: "#fff",
    alignItems     : "center",
    justifyContent : "center",
  },
});
