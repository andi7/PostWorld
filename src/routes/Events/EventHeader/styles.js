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
    height: 35,
    borderRadius: 12
  },

  tag: {
    height: 24,
    resizeMode: 'contain',
    tintColor: '#000',
    opacity: 0.5
  },

  tagActive: {
    tintColor: '#fff',
    opacity: 1
  },

  logo: {
    height: 35,
    width: 35,
    resizeMode: 'contain'
  }
});
