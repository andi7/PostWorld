import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  card: {
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

  topRow: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  avatar: {
    height: 37,
    width: 37,
    borderRadius: 12
  },

  userName: {
    marginLeft: 6,
    color: '#5882F2',
    fontSize: 12,
    fontFamily: fonts.MontserratMedium
  },

  dots: {
    height: 5,
    width: 19,
    resizeMode: 'contain',
    marginRight: 9,
    paddingVertical: 10
  },

  postText: {
    marginTop: -22,
    color: 'black',
    fontSize: 12,
    fontFamily: fonts.AvenirNext,
    marginLeft: 60,
    marginRight: 58,
    marginBottom: 4
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
    color: '#3B3B3BC0',
    fontSize: 9,
    fontFamily: fonts.MontserratLight,
    marginLeft: 5
  },

  commentsIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain'
  },

  commentsText: {
    color: '#3B3B3BC0',
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
    fontSize: 11,
    fontFamily: fonts.MontserratLight,
    marginHorizontal: 9
  }
});
