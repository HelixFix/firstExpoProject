import React from "react";
import Title from "../Components/Title";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import TexteInput from "../Components/TexteInput";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../core/utils";
import { connect } from "react-redux";
import * as SQLite from 'expo-sqlite'

class Inscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name    : "",
      email   : "",
      password: "",
    };
  }



  

  render() {
    const { navigate } = this.props.navigation;

    const db = SQLite.openDatabase("database.db");
    // console.log(db);

    function alerte() {
      Alert.alert("Erreur", "Veuillez remplir correctement les champs", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    function onSignUpPressed(state) {
      console.log("click");
      console.log(db);
      //console.log(this.props);
  
      const nameError     = nameValidator(state.name);
      const emailError    = emailValidator(state.email);
      const passwordError = passwordValidator(state.password);
      //var user = [];
  
      if (nameError || emailError || passwordError) {
        alerte();
        return;
      } 
      // else { // Méthode redux
      //   const action = {
      //     type : "ADD_USER",
      //     value: {
      //       name    : this.state.name,
      //       email   : this.state.email,
      //       password: this.state.password,
      //     },
      //   };
  
      //   this.props.dispatch(action);
      //   this.props.navigation.navigate("LoginScreen");
      // }
      else { // Méthode SQLite
        db.transaction (
          tx => {
            tx.executeSql("insert into user (name, mail, mdp) values (?, ?, ?)", [state.name, state.email, state.password])
          }
        );
        navigate("LoginScreen");
      }
    }

    return (
      <View style={styles.container}>
        <Title title = "Inscription" />

        <TexteInput
          placeholder      = "Nom"
          autoCompleteType = "name"
          textContentType  = "name"
          autoCompleteType = "name"
          value            = {this.state.name}
          onChangeText     = {(text) => this.setState({ name: text })}
        />

        <EmailInput
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
          onPress = {() => onSignUpPressed(this.state)}
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

const mapStateToProps = (state) => {
  return state;
};

// React autorise uniquement un export default par page
export default connect(mapStateToProps)(Inscription);
