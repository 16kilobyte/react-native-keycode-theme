import React, { Component } from 'react';
import { Input, withStyles } from 'react-native-ui-kitten';

import { FormInputProps } from './interfaces';
import styles from './styles';

class FormInput extends Component<FormInputProps> {
  public render() {
    const {
      label,
      value,
      isSecure,
      keyboardType,
      placeholder,
      hasError,
      errorText,
      onChangeText,
      themedStyle,
    } = this.props;

    return (
      <Input
        label={label ? label : ' '}
        value={value}
        secureTextEntry={isSecure}
        status={hasError ? 'danger' : undefined}
        caption={hasError ? errorText : undefined}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        style={themedStyle.container}
        labelStyle={themedStyle.label}
        textStyle={themedStyle.text}
      />
    );
  }
}

export default withStyles(FormInput, styles);
