import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 30 : 10,
    left: 20
  },

  backIcon: {
    width: 13,
    height: 21,
    resizeMode: 'contain',
    tintColor: 'white'
  }
});
