import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  card: {
    width: '100%',
    height: 147,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: '#D2D2D088',
    paddingLeft: 18,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    color: '#5A79FD',
    fontSize: 15,
    fontFamily: fonts.MontserratBold,
    marginBottom: 5,
    width: '95%'
  },

  offerText: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.WorkSansLight,
    marginBottom: 9,
    height: 46,
    textAlign: 'center'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },

  clockIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 7
  },

  locationIcon: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
    marginRight: 7
  },

  detailsText: {
    color: '#7F7F7F',
    fontSize: 12,
    fontFamily: fonts.WorkSansLight
  },

  eventImage: {
    height: 111,
    width: 142,
    resizeMode: 'contain',
    borderRadius: 12,
    marginLeft: 17
  },

  likeIcon: {
    width: 18,
    height: 17,
    resizeMode: 'contain'
  },

  likeText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: fonts.MontserratRegular
  }
});
