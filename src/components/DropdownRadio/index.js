/**
 * 下拉单选组件
 */

import React, { PureComponent } from 'react';
import {
  Picker
} from 'react-native';

export default class DropdownRadio extends PureComponent {

  state = {
    language: java
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
  }

}