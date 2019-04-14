import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  card: {
    height: 116,
    paddingLeft: 18,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D034',
    marginVertical: 6,
    marginHorizontal: 5,
    shadowOpacity: 1,
    shadowColor: '#D2D2D0',
    shadowOffset: { height: 1 },
    shadowRadius: 1,
    elevation: 3
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    color: '#5882F2',
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
    marginRight: 7
  },

  detailsText: {
    color: '#7F7F7F',
    fontSize: 12,
    fontFamily: fonts.WorkSansLight
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
    marginLeft: 8,
    fontSize: 12,
    fontFamily: fonts.MontserratRegular
  }
});
