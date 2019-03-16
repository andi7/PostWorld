import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import SwiperPage from './modules/SwiperPage';
import { Dot, ActiveDot } from './modules/SwiperPagination';
import { images } from '../../theme';
import styles from './styles';

class Onboarding extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;

    AsyncStorage.getItem('@onboardingDone')
      .then(value => {
        if (value) {
          navigation.navigate('SignUp');
          SplashScreen.hide();
        } else {
          SplashScreen.hide();
        }
      })
      .catch(err => {
        console.log(err);

        SplashScreen.hide();
      });
  }

  signIn = () => {
    AsyncStorage.setItem('@onboardingDone', 'true');
    this.props.navigation.navigate('SignIn');
  };

  signUp = () => {
    AsyncStorage.setItem('@onboardingDone', 'true');
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper dot={Dot} activeDot={ActiveDot}>
          <SwiperPage
            image={images.intro1}
            header="Welcome to Postworld"
            description="One app for sharing and discovering what your city is all about. "
          />

          <SwiperPage
            image={images.intro2}
            header="Local and social"
            description="Local conversations, events, restaurants, bars, and more - all powered by the community and you."
          />

          <SwiperPage
            image={images.intro3}
            header="Discover your world"
            description="Share and explore points of interest along an interactive map of your city - or whereever you happen to be. "
          />
        </Swiper>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={this.signUp}>
            <Text style={styles.footerButtonLabel}>GET STARTED</Text>
          </TouchableOpacity>

          <View style={styles.footerSeparator} />

          <TouchableOpacity style={styles.footerButton} onPress={this.signIn}>
            <Text style={styles.footerButtonLabel}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Onboarding;
