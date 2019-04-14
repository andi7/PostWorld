import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  loadingMore: {
    marginVertical: 10
  },

  postListHeader: {
    height: 26,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#D2D2D0',
    marginBottom: 6
  },

  headerIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain'
  },

  headerIconActive: {
    tintColor: colors.primary
  },

  headerText: {
    marginLeft: 4,
    color: '#3B3B3B',
    opacity: 0.62,
    fontSize: 6,
    fontFamily: fonts.MontserratSemiBold
  },

  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#D2D2D0'
  }
});
