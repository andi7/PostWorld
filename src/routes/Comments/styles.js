import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  composer: {
    width: '100%',
    height: 78,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D088',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },

  composerInput: {
    height: 36,
    flex: 1,
    borderWidth: 1,
    borderColor: '#3B3B3BC0',
    borderRadius: 8,
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    color: '#3B3B3BC0',
    paddingHorizontal: 15
  },

  submit: {
    width: 34,
    height: 28,
    resizeMode: 'contain',
    marginLeft: 9
  }
});
