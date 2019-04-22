import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  eventsHeader: {
    flexDirection: 'row',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    right: 0,
    left: 0,
    height: 50
  },

  backButton: {
    marginLeft: 20
  },

  backIcon: {
    width: 13,
    height: 21,
    resizeMode: 'contain',
    tintColor: 'white'
  }
});
