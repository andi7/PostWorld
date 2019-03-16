import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ colors, children, ...props }) => (
  <TouchableOpacity style={styles.button} onPress={this.finishSignUp} {...props}>
    <LinearGradient
      colors={colors}
      style={styles.button}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 10,
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22
  }
});

export { GradientButton };
