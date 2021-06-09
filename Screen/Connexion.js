import React from "react";
import Title from "../Components/Title";
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Button from "../Components/Button";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import { emailValidator, passwordValidator } from "../core/utils";


export default class Connexion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email   : "",
      password: "",
    };
  }

  
  // console.log(db);

  // Méthode SQLite
   alerte() {
      Alert.alert("Erreur", "Veuillez remplir correctement les champs", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

   onLoginPressed() {
      const emailError    = emailValidator(this.state.email);
      const passwordError = passwordValidator(this.state.password);
  
      if (emailError || passwordError) {
        this.alerte();
        return;
      } 
      const formData = new FormData();
      formData.append("mail", this.state.email);
      formData.append("password", this.state.password);

      // POST request
      fetch("http://jdevalik.fr/api/getuser.php", {
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
        if (json != false) {
            this.props.navigation.navigate("UserHomePage", {
                username: json.name,
                email: json.pseudo,
                userID: json.id,
              });
        } else {
            Alert.alert(
                "Erreur",
                "Le-mail ou le mot de passe est incorrect",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Title title = "Connexion" />

        <EmailInput
          placeholder  = "Email"
          value        = {this.state.email}
          onChangeText = {(text) => this.setState({ email: text })}
        />

        <PasswordInput
          value        = {this.state.password}
          onChangeText = {(text) => this.setState({ password: text })}
        />

        {/* <TouchableOpacity onPress={() => navigate("LoginScreen")}>
          <Text color = "#ff5c5c">Connexion</Text>
        </TouchableOpacity> */}

        <Button
          color   = "#841584"
          title   = "Connexion"
          onPress = {() => this.onLoginPressed()}
        />

        <Button
          color   = "#ff5c5c"
          title   = "Inscription"
          onPress = {() => navigate("Registerscreen")}
        />

        <Text style = {styles.innerText} onPress = {() => navigate("ForgotPW")}>
          Mot de passe oublié ?
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

// // React autorise uniquement un export default par page
// export default connect(mapStateToProps)(Connexion);
