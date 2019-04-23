import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  card: {
    height: 116,
    paddingLeft: 18,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D034',
    marginVertical: 6,
    shadowOpacity: 1,
    shadowColor: '#D2D2D0',
    shadowOffset: { height: 1 },
    shadowRadius: 1,
    elevation: 3
  },

  title: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    marginBottom: 5,
    width: '95%'
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

  groupIcon: {
    height: 21,
    width: 21,
    resizeMode: 'contain',
    marginRight: 7,
    tintColor: '#3B3B3B',
    opacity: 0.75
  },

  detailsText: {
    color: 'black',
    fontSize: 14,
    fontFamily: fonts.AvenirNextRegular
  },

  eventImage: {
    height: 80,
    width: 92,
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
    color: '#3B3B3BC0',
    marginLeft: 8,
    fontSize: 12,
    fontFamily: fonts.MontserratMedium
  },

  likeTextActive: {
    color: '#FF6464',
    fontFamily: fonts.MontserratBold
  }
});
