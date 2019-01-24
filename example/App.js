/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  ActionSheetIOS
} from 'react-native';
import { DropdownRadio } from './src/RNContinueComponents';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    // alert(DropdownRadio)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._onPress} style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <DropdownRadio />
      </View>
    );
  }

  _onPress = () => {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://img.alicdn.com/imgextra/i4/3012913363/O1CN019Atedv1aiISIDHVIb_!!3012913363.jpg_200x200.jpg'
    },
    (err) => {
      alert(err)
    },
    (code, msg) => {
      alert(code + msg)
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
