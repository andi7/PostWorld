import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  marker: {
    height: 64,
    width: 56,
    resizeMode: 'contain'
  },

  markerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.CooperStdBlack,
    marginTop: -40
  }
});
