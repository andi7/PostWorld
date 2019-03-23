import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const IconButton = ({ icon, iconStyle, style, children, ...params }) => (
  <TouchableOpacity {...params} style={[styles.button, style]}>
    <Image source={icon} style={iconStyle} />

    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { IconButton };
