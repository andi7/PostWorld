import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  notice: {
    width: '80%',
    textAlign: 'center',
    fontSize: 14,
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
