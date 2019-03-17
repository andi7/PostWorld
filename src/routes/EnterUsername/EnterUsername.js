import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { InputWithSuffix, GradientButton } from '../../components';
import styles from './styles';

import { images, colors } from '../../theme';

class EnterUsername extends React.Component {
  state = {
    avatar: null,
    username: ''
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
    this.props.navigation.navigate('Feed');
  };

  render() {
    const { avatar, username } = this.state;

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
            onChangeText={val => this.setState({ username: val })}
            valid={username.trim() !== ''}
          />

          <GradientButton colors={colors.blueGradient} onPress={this.finishSignUp}>
            <Text style={styles.signText}>Join the world</Text>
          </GradientButton>
        </View>
      </View>
    );
  }
}

export default EnterUsername;
