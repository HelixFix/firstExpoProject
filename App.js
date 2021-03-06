import React from "react";
import HomePage from "./Screen/HomePage.js";
import Connexion from "./Screen/Connexion";
import MotDePasseOublie from "./Screen/MotDePasseOublie"
import Inscription from "./Screen/Inscription";
import AccueilUtilisateur from "./Screen/AccueilUtilisateur";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Store from "./Store/ConfigStore";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name = "HomePage" component       = {HomePage} />
          <Stack.Screen name = "LoginScreen" component    = {Connexion} />
          <Stack.Screen name = "ForgotPW" component       = {MotDePasseOublie} />
          <Stack.Screen name = "UserHomePage" component   = {AccueilUtilisateur} />
          <Stack.Screen name = "Registerscreen" component = {Inscription} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
