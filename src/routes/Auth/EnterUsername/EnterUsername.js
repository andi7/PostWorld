import React from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import { InputWithSuffix, GradientButton } from 'components';
import { images, colors } from 'theme';
import AuthActions from 'models/auth';

import styles from './styles';

class EnterUsername extends React.Component {
  state = {
    avatar: null,
    username: '',
    localError: ''
  };

  onChange = (field, val) => {
    this.setState({ [field]: val, localError: '' });
  };

  openAvatarPicker = () => {
    ImagePicker.showImagePicker({ title: 'Select Avatar' }, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({ avatar: source });
      }
    });
  };

  finishSignUp = () => {
    const { avatar, username } = this.state;
    const email = this.props.navigation.getParam('email');
    const password = this.props.navigation.getParam('password');

    if (username.trim() === '') {
      this.setState({ localError: 'Please enter a valid username!' });
      return;
    }

    if (username.length < 3) {
      this.setState({ localError: 'Username must be at least 3 characters long!' });
      return;
    }

    this.props.signUpByEmail(email, password, username, avatar);
  };

  render() {
    const { avatar, username, localError } = this.state;
    const { loading } = this.props;
    const usernameValid = username.trim() !== '' && username.length >= 3;

    return (
      <View style={{ flex: 1 }}>
        <Image source={images.logo} style={styles.logo} />

        <View style={styles.container}>
          <TouchableOpacity onPress={this.openAvatarPicker}>
            <Image source={avatar || images.user} style={styles.avatarImage} />
          </TouchableOpacity>

          <Text style={styles.uploadText} onPress={this.openAvatarPicker}>
            Upload profile photo
          </Text>

          <InputWithSuffix
            value={username}
            onChangeText={val => this.onChange('username', val)}
            valid={usernameValid}
          />

          <Text style={{ color: 'red' }}>{localError}</Text>

          <GradientButton
            disabled={loading}
            colors={colors.blueGradient}
            onPress={this.finishSignUp}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.signText}>Join the world</Text>
            )}
          </GradientButton>
        </View>
      </View>
    );
  }
}

const mapsStateToProps = ({ auth: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = dispatch => ({
  signUpByEmail: (...p) => dispatch(AuthActions.signUpByEmail(...p))
});

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(EnterUsername);
