import { Platform } from 'react-native';

export default {
  MontserratRegular: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular',
  MontserratMedium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  MontserratSemiBold: Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold',
  MontserratBold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat-Bold',
  MontserratLight: Platform.OS === 'ios' ? 'Montserrat-Light' : 'Montserrat-Light',
  WorkSansLight: Platform.OS === 'ios' ? 'WorkSans-Light' : 'WorkSans-Light',
  Amazonas: Platform.OS === 'ios' ? 'Amazonas' : 'Amazonas',
  AvenirNext: Platform.OS === 'ios' ? 'AvenirNextLTPro-Regular' : 'AvenirNextLTPro-Regular'
};
