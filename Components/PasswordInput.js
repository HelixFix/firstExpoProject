import React, { Component } from "react";
import { TextInput } from "react-native";

export default class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <TextInput
        label="Password"
        returnKeyType="done"
        value={this.state.email}
        onChangeText={text => this.setState({ email: text})}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin:10, width: "60%"}}
        autoCompleteType="password"
        textContentType="password"
        keyboardType="default"
        placeholder="  Password"
        secureTextEntry={true}
      />
    );
  }
}
