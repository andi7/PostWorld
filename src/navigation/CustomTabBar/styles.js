import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  modal: {
    margin: 0
  },

  gradient: {
    height: 111,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },

  title: {
    marginTop: 7,
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  tagsList: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },

  tagContainer: {
    marginHorizontal: 13,
    alignItems: 'center'
  },

  tag: {
    height: 35,
    width: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tagIcon: {
    height: 24,
    resizeMode: 'contain'
  },

  tagText: {
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  closeIcon: {
    height: 11,
    width: 11,
    resizeMode: 'contain'
  }
});
