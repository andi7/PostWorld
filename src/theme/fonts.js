import { Platform } from 'react-native';

export default {
  MontserratRegular: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular',
  MontserratMedium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  MontserratSemiBold: Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold',
  MontserratBold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat-Bold',
  Amazonas: Platform.OS === 'ios' ? 'Amazonas' : 'Amazonas'
};
