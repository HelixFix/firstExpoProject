import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View, Text } from "react-native";
import Button from "../Components/Button";

export default class AccueilUtilisateur extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    // function Welcome(props) {
    //   return <h1>Hello, {props.name}</h1>;
    //   }

    return (
      <View style={styles.container}>
        <Title title = "Vous êtes connecté" />
        

        <Text style = {{ width: "60%", textAlign: "center" }}>
          Bienvenu sur notre application d'inscription connexion
          {"\n"}
        </Text>

        <Button
          color   = "#841584"
          title   = "Déconnexion"
          onPress = {() => navigate("HomePage")}
        />
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
