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
    fontFamily: fonts.MontserratMedium,
    marginTop: -15
  },

  postText: {
    color: 'black',
    fontSize: 12,
    fontFamily: fonts.WorkSansLight,
    marginLeft: 60,
    marginRight: 47,
    marginBottom: 8,
    marginTop: -20
  },

  footerRow: {
    flexDirection: 'row',
    height: 32,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  timeText: {
    color: '#3B3B3B',
    fontSize: 10,
    fontFamily: fonts.MontserratLight
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
