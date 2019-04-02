import { StyleSheet } from 'react-native';

import { fonts, colors } from 'theme';

export default StyleSheet.create({
  postModal: {
    height: 220,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10
  },

  postModalHeader: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  postModalSubmit: {
    width: 70,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#5A79FD',
    alignItems: 'center',
    justifyContent: 'center'
  },

  postModalSubmitText: {
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratMedius
  },

  postModalContent: {
    flex: 1,
    color: '#3B3B3B',
    fontSize: 10,
    fontFamily: fonts.MontserratMedius,
    marginHorizontal: 30,
    marginVertical: 5
  },

  postModalFooter: {
    height: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
