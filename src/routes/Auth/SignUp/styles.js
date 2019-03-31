import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center'
  },

  logo: {
    height: 94,
    width: 88,
    resizeMode: 'contain'
  },

  title: {
    color: 'black',
    fontSize: 36,
    fontFamily: fonts.Amazonas,
    marginTop: 10
  },

  showPasswordButton: {
    width: 45,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#21212160',
    borderRadius: 5
  },

  showPasswordText: {
    color: 'black',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  error: {
    color: 'red'
  },

  signText: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.MontserratMedium
  },

  footerText: {
    marginTop: 15,
    color: '#7F7F7F',
    fontSize: 12,
    fontFamily: fonts.MontserratMedium
  },

  footerTextHighlight: {
    fontFamily: fonts.MontserratSemiBold,
    textDecorationLine: 'underline'
  }
});
