import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { InputWithSuffix, GradientButton } from '../../components';
import styles from './styles';

import { images, colors } from '../../theme';
import { validate } from '../../utils/email';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false
  };

  byEmail = () => {
    this.props.navigation.navigate('EnterUsername');
  };

  byFacebook = () => {};

  render() {
    const { email, password, showPassword } = this.state;
    const emailValid = validate(email);

    return (
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />

        <Text style={styles.title}>postworld</Text>

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
          <Text style={styles.signText}>SIGN UP WITH EMAIL</Text>
        </GradientButton>

        <GradientButton colors={[colors.primary, colors.primary]}>
          <Text style={styles.signText}>SIGN UP WITH FACEBOOK</Text>
        </GradientButton>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.footerTextHighlight} onPress={() => console.log('now')}>
            Sign in
          </Text>
        </Text>
      </View>
    );
  }
}

export default SignUp;
