import { StyleSheet } from 'react-native';

import { fonts } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  subContainer: {
    width: '100%',
    alignItems: 'center'
  },

  notice: {
    width: '80%',
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.AvenirNextMedium
  },

  logoIcon: {
    height: 38,
    width: 35,
    resizeMode: 'contain',
    marginBottom: 5
  },

  nameInput: {
    width: '60%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F1F1C0',
    fontSize: 14,
    color: '#3B3B3B',
    fontFamily: fonts.AvenirNextMedium,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  lineInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7
  },

  inputLabel: {
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.AvenirNextMedium,
    width: '40%',
    textAlign: 'right',
    marginRight: 20
  },

  lineInput: {
    width: '40%',
    marginRight: '20%',
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderColor: '#00000080'
  },

  modalDropdown: {
    width: '40%',
    height: 30,
    marginRight: '20%',
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dropdownStyle: {
    height: 66,
    width: 130,
    borderWidth: 0
  },

  dropdownRow: {
    height: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },

  dropdownRowText: {
    fontSize: 12,
    color: 'black',
    fontFamily: fonts.AvenirNextMedium
  },

  button: {
    height: 48,
    width: 200,
    backgroundColor: '#5AD380',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: fonts.AvenirNextMedium
  }
});
