import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ colors, start, end, children, style, ...props }) => (
  <TouchableOpacity onPress={this.finishSignUp} style={[style, styles.button]} {...props}>
    <LinearGradient colors={colors} start={start} end={end} style={styles.gradient}>
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden'
  },

  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { GradientButton };
