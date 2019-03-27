import { Platform } from 'react-native';

export default {
  MontserratRegular: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Roboto',
  MontserratMedium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Roboto',
  MontserratSemiBold: Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Roboto',
  MontserratBold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto',
  MontserratLight: Platform.OS === 'ios' ? 'Montserrat-Light' : 'Roboto',
  WorkSansLight: Platform.OS === 'ios' ? 'WorkSans-Light' : 'Roboto',
  Amazonas: Platform.OS === 'ios' ? 'Amazonas' : 'Roboto',
  AvenirNext: Platform.OS === 'ios' ? 'AvenirNextLTPro-Regular' : 'Roboto'
};
