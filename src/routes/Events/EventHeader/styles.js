import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  tagContainer: {
    height: '100%',
    width: '15%'
  },

  tag: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },

  logo: {
    height: 35,
    width: 35,
    resizeMode: 'contain'
  }
});
