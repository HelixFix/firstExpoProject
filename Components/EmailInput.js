import React, { Component } from "react";
import { TextInput } from "react-native";

export default class EmailInput extends Component {
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
        label="Email"
        returnKeyType="next"
        value={this.state.email}
        onChangeText={text => this.setState({ email: text})}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin:10, width: "60%"}}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="  Email"
        autoCompleteType="email"
      />
    );
  }
}
