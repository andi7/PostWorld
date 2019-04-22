import { StyleSheet } from 'react-native';

import { colors, fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  eventImage: {
    margin: 8,
    borderRadius: 8
  },

  generalInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  dateContainer: {
    alignItems: 'center'
  },

  monthText: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold
  },

  dayText: {
    marginTop: 8,
    color: '#3B3B3B',
    fontSize: 18,
    fontFamily: fonts.MontserratBold
  },

  likeIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain'
  },

  likeText: {
    marginLeft: 9,
    color: '#7F7F7F',
    fontSize: 12,
    fontFamily: fonts.MontserratRegular
  },

  detailsContainer: {
    marginTop: 20,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D0'
  },

  detailsTitle: {
    color: '#000000',
    fontSize: 12,
    fontFamily: fonts.AvenirNext,
    marginBottom: 8
  },

  detailsText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: fonts.AvenirNext,
    fontWeight: '600'
  }
});
