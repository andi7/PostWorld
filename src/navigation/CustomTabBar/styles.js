import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  modal: {
    margin: 0
  },

  gradient: {
    height: 111,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },

  title: {
    marginTop: 7,
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },

  tag: {
    marginHorizontal: 13,
    alignItems: 'center'
  },

  tagIcon: {
    height: 35,
    width: 56,
    resizeMode: 'contain'
  },

  tagText: {
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  closeIcon: {
    height: 11,
    width: 11,
    resizeMode: 'contain'
  },

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
  }
});
