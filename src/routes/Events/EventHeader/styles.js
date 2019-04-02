import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18
  },

  tagContainer: {
    width: '16%',
    height: 35
  },

  tag: {
    height: 35,
    width: '100%',
    resizeMode: 'contain'
  },

  logo: {
    height: 35,
    width: 35,
    resizeMode: 'contain'
  }
});
