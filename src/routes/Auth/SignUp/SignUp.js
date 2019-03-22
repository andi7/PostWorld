import React from 'react';
import { View, Image, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

import { images, colors } from 'theme';
import { InputWithSuffix, GradientButton } from 'components';
import { validate } from 'utils/email';

import styles from './styles';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
    mode: this.props.navigation.getParam('mode', 'SIGN UP')
  };

  changeMode = () => {
    const nextMode = this.state.mode === 'SIGN UP' ? 'SIGN IN' : 'SIGN UP';

    LayoutAnimation.easeInEaseOut();
    this.setState({ mode: 'none' }, () => {
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ mode: nextMode });
      }, 400);
    });
  };

  byEmail = () => {
    this.props.navigation.navigate('EnterUsername');
  };

  byFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
          this.props.navigation.navigate('EnterUsername');
        }
      },
      error => {
        console.log(`Login fail with error: ${error}`);
      }
    );
  };

  render() {
    const { email, password, showPassword, mode } = this.state;
    const emailValid = validate(email);

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={images.logo} style={styles.logo} />

          <Text style={styles.title}>postworld</Text>
        </View>

        {mode !== 'none' && (
          <React.Fragment>
            <InputWithSuffix
              value={email}
              onChangeText={val => this.setState({ email: val })}
              valid={email.trim() !== '' ? emailValid : undefined}
            />

            <InputWithSuffix
              value={password}
              onChangeText={val => this.setState({ password: val })}
              secureTextEntry={!showPassword}
              suffix={
                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={() => this.setState({ showPassword: !showPassword })}
                >
                  <Text style={styles.showPasswordText}>{showPassword ? 'HIDE' : 'SHOW'}</Text>
                </TouchableOpacity>
              }
            />

            <GradientButton colors={colors.blueGradient} onPress={this.byEmail}>
              <Text style={styles.signText}>{mode} WITH EMAIL</Text>
            </GradientButton>

            <GradientButton colors={[colors.primary, colors.primary]} onPress={this.byFacebook}>
              <Text style={styles.signText}>{mode} WITH FACEBOOK</Text>
            </GradientButton>

            <Text style={styles.footerText}>
              {mode === 'SIGN UP' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Text style={styles.footerTextHighlight} onPress={this.changeMode}>
                {mode === 'SIGN UP' ? 'Sign in' : 'Sign up'}
              </Text>
            </Text>
          </React.Fragment>
        )}
      </View>
    );
  }
}

export default SignUp;
