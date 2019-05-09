import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  header: {
    maxWidth: '60%',
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    fontFamily: fonts.MontserratMedium,
    marginBottom: 10
  },

  subHeader: {
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.AvenirNextMedium
  },

  businessImage: {
    height: 135,
    width: 135,
    resizeMode: 'contain'
  },

  description: {
    width: '80%',
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontFamily: fonts.AvenirNextMedium
  },

  button: {
    height: 48,
    width: 200,
    backgroundColor: '#5AD380',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: fonts.AvenirNextMedium
  }
});
