import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <View>
        <Text style={styles.titleText}>
          {title}
          {"\n"}
          {"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize  : 20,
    fontWeight: "bold",
    color     : "#800080",
    fontWeight: "bold",
    fontSize  : 25,
  },
});
