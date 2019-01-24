/**
 * 下拉单选组件
 */

import React, { PureComponent } from 'react';
import {
  Picker,
  PickerIOS
} from 'react-native';

export default class DropdownRadio extends PureComponent {

  state = {
    language: 'java'
  }

  render() {
    return (
      <PickerIOS
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <PickerIOS.Item label="Java" value="java" />
        <PickerIOS.Item label="JavaScript" value="js" />
      </PickerIOS>
    )
  }

}