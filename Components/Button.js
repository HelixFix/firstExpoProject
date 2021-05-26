import React, { Component } from "react";
import { View, Button, StyleSheet} from "react-native";
import Connexion from '../Screen/Connexion';

export default class ButtonInscr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    const { color } = this.props;
    return (
      <View>
        <Button style={styles.Button}
          //onPress={() => navigation.navigate('WallScreen')}
          title={ title }
          color={ color }
          text
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
   margin: 10,
  },
});