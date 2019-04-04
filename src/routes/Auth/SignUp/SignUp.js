import React from 'react';
import { View, Image, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { images, colors, gradients } from 'theme';
import { InputWithSuffix, GradientButton } from 'components';
import { validate } from 'utils/email';
import AuthActions from 'models/auth';

import styles from './styles';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    localError: '',
    showPassword: false,
    mode: this.props.navigation.getParam('mode', 'SIGN IN')
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
    const { mode, email, username, password } = this.state;

    if (
      (mode === 'SIGN IN' && username.trim() === '') ||
      (mode === 'SIGN UP' && email.trim() === '') ||
      password.trim() === ''
    ) {
      this.setState({ localError: 'Please fill all fields!' });
      return;
    }

    if (mode === 'SIGN UP' && !validate(email)) {
      this.setState({ localError: 'This email is not valid!' });
      return;
    }

    if (mode === 'SIGN IN' && username.length < 3) {
      this.setState({ localError: 'Username must be at least 3 characters long!' });
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
      this.props.signInByEmail(username, password);
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
    const { email, username, password, showPassword, localError, mode } = this.state;
    const emailValid = validate(email);
    const usernameValid = username.length > 3;

    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image source={images.logo} style={styles.logo} />

            <Text style={styles.title}>postworld</Text>
          </View>

          {mode !== 'none' && (
            <React.Fragment>
              {mode === 'SIGN IN' ? (
                <InputWithSuffix
                  placeholder="Username"
                  value={username}
                  onChangeText={val => this.onChange('username', val)}
                  valid={usernameValid}
                  autoCapitalize="none"
                />
              ) : (
                <InputWithSuffix
                  placeholder="Email"
                  value={email}
                  onChangeText={val => this.onChange('email', val)}
                  valid={emailValid}
                  autoCapitalize="none"
                />
              )}

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

              <GradientButton
                style={styles.signButton}
                onPress={this.byEmail}
                {...gradients.lightBlue}
              >
                <Text style={styles.signText}>{mode} WITH EMAIL</Text>
              </GradientButton>

              <GradientButton
                style={styles.signButton}
                colors={[colors.primary, colors.primary]}
                onPress={this.byFacebook}
              >
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
