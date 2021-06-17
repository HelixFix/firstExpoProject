import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View, Text, Alert } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import TexteInput from "../Components/TexteInput";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../core/utils";

export default class Inscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name    : "",
      email   : "",
      password: "",
    };
  }

  alerte() {
    Alert.alert("Erreur", "Veuillez remplir correctement les champs", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }

  onSignUpPressed() {
    console.log("click");

    //console.log(this.props);

    const nameError     = nameValidator(this.state.name);
    const emailError    = emailValidator(this.state.email);
    const passwordError = passwordValidator(this.state.password);

    //var user = [];

    if (nameError || emailError || passwordError) {
      this.alerte();
      return;
    } else {
      const formData = new FormData(); // Stock les données
      formData.append("name", this.state.name);
      formData.append("mail", this.state.email);
      formData.append("password", this.state.password);

      // POST request
      fetch("http://jdevalik.fr/api/insertuser.php", {
        method : "POST",     // Request Type
        body   : formData,   // post data
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((Response) => Response.json())
        .then((json) => {
          console.log(json);
          console.log('Je print json');
          if (json == false) {
            Alert.alert(
              "Erreur",
              "Le-mail saisi existe déja. Veuillez saisir une autre adresse mail ou récupérer votre mot de passe",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          } else {
            this.props.navigation.navigate("LoginScreen");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Title title="Inscription" />

        <TexteInput
          placeholder      = "Nom"
          autoCompleteType = "name"
          textContentType  = "name"
          autoCompleteType = "name"
          value            = {this.state.name}
          onChangeText     = {(text) => this.setState({ name: text })}
        />

        <EmailInput
        placeholder  = "Email"
        value        = {this.state.email}
        onChangeText = {(text) => this.setState({ email: text })}
        />

        <PasswordInput
          value        = {this.state.password}
          onChangeText = {(text) => this.setState({ password: text })}
        />

        <Button
          color   = "#841584"
          title   = "Inscription"
          onPress = {() => this.onSignUpPressed()}
        />

        <Text>
          Déjà inscrit ?
          <Text
            style   = {styles.innerText}
            onPress = {() => navigate("LoginScreen")}
          >
            {" "}
            Connectez-vous
          </Text>
        </Text>
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
  innerText: {
    color     : "#841584",
    fontWeight: "bold",
  },
});

