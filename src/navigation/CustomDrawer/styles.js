import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  avatarIcon: {
    height: 80,
    width: 80,
    borderRadius: 15
  },

  avatarName: {
    marginTop: 6,
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.MontserratMedium
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  stat: {
    width: '50%',
    alignItems: 'center',
    marginVertical: 5
  },

  statName: {
    color: '#313131',
    fontSize: 14,
    fontFamily: fonts.MontserratRegular
  },

  statValue: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.MontserratRegular
  },

  drawerItemsContainer: {
    flex: 2,
    paddingBottom: '10%'
  },

  drawerItem: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 20
  },

  drawerItemName: {
    color: '#212121',
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    marginRight: 10
  },

  drawerItemIcon: {
    height: 42,
    width: 42,
    resizeMode: 'contain'
  },

  arrowIcon: {
    height: 21,
    width: 13,
    resizeMode: 'contain',
    marginLeft: 20,
    marginBottom: 20,
    transform: [
      {
        rotate: '180deg'
      }
    ]
  }
});
