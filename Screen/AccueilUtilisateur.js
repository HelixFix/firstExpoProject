import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View, Text} from "react-native";
import Button from "../Components/Button";


export default class AccueilUtilisateur extends React.Component {
  render() {

    return (
      <View style={styles.container}>

        <Title title = "Vous êtes connecté" />

        <Text style={{  width: "60%", textAlign: "center" }} >
        Bienvenu sur notre application d'inscription connexion
        {"\n"}
        </Text>

        <Button color = "#841584" title = "Déconnexion" />

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
