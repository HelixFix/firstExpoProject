import React from "react";
import Title from "../Components/Title";
import { StyleSheet, View, Text, Alert } from "react-native";
import Button from "../Components/Button";
import TexteInput from "../Components/TexteInput";
import EmailInput from "../Components/EmailInput";
import { emailValidator, nameValidator } from "../core/utils";

export default class AccueilUtilisateur extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name    : "",
      email   : "",
    };
  }

  alerte() {
    Alert.alert("Erreur", "Veuillez remplir correctement les champs", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }


  onEditPressed() {
    console.log("click");
    //console.log(this.props);

    const emailError = emailValidator(this.state.email);
    const nameError  = nameValidator(this.state.name);

    if (nameError || emailError) {
      this.alerte();
      return;
    }

    const formData = new FormData();
      formData.append("id", this.props.route.params.userID);
      formData.append("name", this.state.name);
      formData.append("mail", this.state.email);

      // POST request
      fetch("http://jdevalik.fr/api/userinfo.php", {
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
    const { navigate } = this.props.navigation;

    

    return (
      <View style={styles.container}>
        <Title title = "Vous êtes connecté" />
        

        <Text style = {{ width: "60%", textAlign: "center" }}>
          Bienvenu {this.props.route.params.userID} sur notre application d'inscription connexion
          {"\n"}
        </Text>

        <TexteInput
          placeholder      = {this.props.route.params.username}
          autoCompleteType = "name"
          textContentType  = "name"
          autoCompleteType = "name"
          value            = {this.state.name}
          onChangeText     = {(text) => this.setState({ name: text })}
        />

        <EmailInput
          placeholder  = {this.props.route.params.email}
          value        = {this.state.email}
          onChangeText = {(text) => this.setState({ email: text })}
        />

        <Button
          color   = "#841584"
          title   = "Modifier"
          onPress = {() => this.onEditPressed()}
        />

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
