import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const IconButton = ({ icon, iconStyle, iconPosition = 'left', style, children, ...params }) => (
  <TouchableOpacity {...params} style={[styles.button, style]}>
    {iconPosition === 'left' && <Image source={icon} style={iconStyle} />}

    {children}

    {iconPosition === 'right' && <Image source={icon} style={iconStyle} />}
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
