import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { fonts } from 'theme';

const InputWithSuffix = ({ wrapperStyle, suffix, valid, ...props }) => (
  <View style={[styles.wrapper, wrapperStyle]}>
    <TextInput {...props} style={[styles.textInput, props.style]} />

    {suffix ||
      (valid !== undefined && (
        <View style={[styles.check, { backgroundColor: valid ? 'lightgreen' : 'red' }]} />
      ))}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    marginBottom: 5,
    height: 40,
    width: '100%',
    backgroundColor: '#F1F1F1C0',
    borderRadius: 20
  },

  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    fontFamily: fonts.MontserratMedium
  },

  check: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginLeft: 10
  }
});

export default InputWithSuffix;
