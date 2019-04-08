import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  postModalFull: {
    height: '100%',
    width: '100%',
    paddingTop: 20
  },

  postModal: {
    height: 220,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    paddingTop: 10
  },

  postModalHeader: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  postModalSubmit: {
    width: 70,
    height: 20,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  postModalSubmitText: {
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratMedius
  },

  postModalContent: {
    width: '100%',
    color: '#3B3B3B',
    fontSize: 10,
    fontFamily: fonts.MontserratMedius,
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
    resizeMode: 'contain'
  },

  tagIcon: {
    height: 24,
    width: 27,
    resizeMode: 'contain',
    tintColor: colors.primary
  },

  closeIcon: {
    height: 11,
    width: 11,
    resizeMode: 'contain'
  }
});
