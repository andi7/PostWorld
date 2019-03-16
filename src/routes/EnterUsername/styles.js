import { StyleSheet } from 'react-native';

import { fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  logo: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 70,
    width: 70,
    resizeMode: 'contain'
  },

  avatarImage: {
    height: 90,
    width: 90,
    borderRadius: 45
  },

  uploadText: {
    color: '#313131',
    fontSize: 12,
    fontFamily: fonts.MontserratMediumm,
    textDecorationLine: 'underline',
    marginTop: 10
  },

  signText: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.MontserratMedium
  }
});
