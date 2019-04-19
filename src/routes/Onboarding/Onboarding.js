import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import { images } from 'theme';
import StartupActions from 'models/startup';

import SwiperPage from './modules/SwiperPage';
import { Dot, ActiveDot } from './modules/SwiperPagination';
import styles from './styles';

class Onboarding extends React.Component {
  componentDidMount() {
    this.props.startup();
  }

  signIn = () => {
    AsyncStorage.setItem('@onboardingDone', 'true');
    this.props.navigation.navigate('SignUp', { mode: 'SIGN IN' });
  };

  signUp = () => {
    AsyncStorage.setItem('@onboardingDone', 'true');
    this.props.navigation.navigate('SignUp', { mode: 'SIGN UP' });
  };

  render() {
    const { loading } = this.props;

    if (loading) {
      return <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} />;
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ startup }) => ({ loading: startup.loading });
const mapDispatchToProps = dispatch => ({ startup: () => dispatch(StartupActions.startup()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding);
