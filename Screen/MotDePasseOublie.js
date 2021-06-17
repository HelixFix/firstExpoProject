import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View, Alert } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import { emailValidator, passwordValidator } from "../core/utils";


export default class MotDePasseOublie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email   : "",
      password: "",
    };
  }

  alerte() {
    Alert.alert("Erreur", "Veuillez remplir correctement les champs", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }

  onPWChangePressed() {
    console.log("click");
    //console.log(this.props);

    const emailError    = emailValidator(this.state.email);
    const passwordError = passwordValidator(this.state.password);


    if (emailError || passwordError) {
      alerte();
      return;
    }


    const formData = new FormData();
    formData.append("mail", this.state.email);
    formData.append("password", this.state.password);

    // POST request
    fetch("http://jdevalik.fr/api/updateuser.php", {
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
          "Le-mail saisi n'existe pas",
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

  render() {
    //const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Title title = "Nouveau mot de passe" />

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
          title   = "Modifier"
          onPress = {() => this.onPWChangePressed()}
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
  innerText: {
    color     : "#841584",
    fontWeight: "bold",
  },
});

