import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  card: {
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D088'
  },

  topRow: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avatar: {
    height: 37,
    width: 37,
    borderRadius: 12
  },

  userName: {
    marginLeft: 7,
    color: '#5882F2',
    fontSize: 12,
    fontFamily: fonts.MontserratMedium
  },

  dots: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    marginRight: 5
  },

  postText: {
    color: 'black',
    fontSize: 12,
    fontFamily: fonts.WorkSansLight,
    marginLeft: 60,
    marginRight: 47,
    marginBottom: 8
  },

  postImage: {
    flex: 1,
    height: null,
    width: '100%'
  },

  footerRow: {
    flexDirection: 'row',
    height: 32,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  locationIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  },

  locationText: {
    color: 'black',
    opacity: 0.5,
    fontSize: 9,
    fontFamily: fonts.MontserratRegular,
    marginLeft: 5
  },

  commentsIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain'
  },

  commentsText: {
    color: 'black',
    opacity: 0.5,
    fontSize: 11,
    fontFamily: fonts.MontserratLight,
    marginLeft: 6
  },

  likesIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain'
  },

  likesText: {
    color: 'black',
    fontSize: 11,
    fontFamily: fonts.MontserratMedium,
    marginHorizontal: 9
  }
});
