import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  card: {
    width: '100%',
    height: 116,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: '#D2D2D088',
    paddingLeft: 18,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    color: '#212121',
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
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

  goingIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
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
