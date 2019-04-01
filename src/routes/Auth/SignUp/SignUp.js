import React from 'react';
import { View, Image, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { images, colors } from 'theme';
import { InputWithSuffix, GradientButton } from 'components';
import { validate } from 'utils/email';
import AuthActions from 'models/auth';

import styles from './styles';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    localError: '',
    showPassword: false,
    mode: this.props.navigation.getParam('mode', 'SIGN UP')
  };

  onChange = (field, value) => {
    this.setState({ [field]: value, localError: '' });
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
    const { mode, email, password } = this.state;

    if (email.trim() === '' || password.trim() === '') {
      this.setState({ localError: 'Please fill all fields!' });
      return;
    }

    if (!validate(email)) {
      this.setState({ localError: 'This email is not valid!' });
      return;
    }

    if (password.length < 8) {
      this.setState({ localError: 'Password must be at least 8 characters long!' });
      return;
    }

    if (mode === 'SIGN UP') {
      this.props.navigation.navigate('EnterUsername', {
        email,
        password
      });
    }

    if (mode === 'SIGN IN') {
      this.props.signInByEmail(email, password);
    }
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
    const { email, password, showPassword, localError, mode } = this.state;
    const emailValid = validate(email);

    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image source={images.logo} style={styles.logo} />

            <Text style={styles.title}>postworld</Text>
          </View>

          {mode !== 'none' && (
            <React.Fragment>
              <InputWithSuffix
                placeholder="Email"
                value={email}
                onChangeText={val => this.onChange('email', val)}
                valid={email.trim() !== '' ? emailValid : undefined}
                autoCapitalize="none"
              />

              <InputWithSuffix
                placeholder="Password"
                value={password}
                onChangeText={val => this.onChange('password', val)}
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

              <Text style={styles.error}>{localError}</Text>

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
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ auth: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = dispatch => ({
  signInByEmail: (...p) => dispatch(AuthActions.signInByEmail(...p))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
