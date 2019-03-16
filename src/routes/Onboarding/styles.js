import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../theme';

export default StyleSheet.create({
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary
  },

  footerButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footerButtonLabel: {
    fontSize: 12,
    color: 'white',
    fontFamily: fonts.MontserratMedium
  },

  footerSeparator: {
    height: 35,
    width: 3,
    backgroundColor: 'white'
  }
});
