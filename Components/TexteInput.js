import React, { Component } from "react";
import { TextInput } from "react-native";

export default class TexteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    const { autoCompleteType, textContentType, placeholder } = this.props;

    return (
      <TextInput
        label         = "Nom"
        returnKeyType = "next"
        value         = {this.state.text}
        onChangeText  = {(text) => this.setState({ text: text })}
        style         = {{
          height     : 40,
          borderColor: "gray",
          borderWidth: 1,
          margin     : 10,
          width      : "60%",
          padding    : 10,
        }}
        autoCompleteType = {autoCompleteType}
        textContentType  = {textContentType}
        keyboardType     = "default"
        placeholder      = {placeholder}
      />
    );
  }
}