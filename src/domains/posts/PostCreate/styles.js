import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  postModalFull: {
    height: '100%',
    width: '100%',
    paddingTop: 20
  },

  postModal: {
    height: '65%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    paddingTop: 10,
    overflow: 'hidden'
  },

  postModalHeader: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  },

  postModalSubmit: {
    width: 70,
    height: 26,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  postModalSubmitText: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.MontserratBold
  },

  postModalContent: {
    width: '100%',
    color: '#3B3B3BC0',
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    marginHorizontal: 30,
    marginVertical: 5,
    minHeight: 75
  },

  postModalContentImage: {
    width: '100%',
    marginVertical: 10
  },

  postModalFooter: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 5,
    height: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopColor: '#000',
    borderTopWidth: StyleSheet.hairlineWidth
  },

  cameraIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: '#AAAAAA'
  },

  tagIcon: {
    height: 24,
    width: 27,
    resizeMode: 'contain',
    tintColor: colors.primary
  },

  closeIcon: {
    height: 13,
    width: 13,
    resizeMode: 'contain'
  }
});
