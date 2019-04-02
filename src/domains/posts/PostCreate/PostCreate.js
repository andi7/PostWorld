import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { images, colors } from 'theme';

import styles from './styles';

const getIconForTag = tag => {
  switch (tag) {
    case 'food':
      return images.tagFood;
    case 'general':
      return images.tagGeneral;
    case 'art':
      return images.tagArt;
    default:
      return null;
  }
};

class CreatePost extends React.Component {
  state = {
    text: '',
    image: null
  };

  openImagePicker = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Response = ', response);

        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({ image: source });
      }
    });
  };

  render() {
    const { tag, fullscreen, onSubmit, onClose } = this.props;
    const { text } = this.state;

    return (
      <View style={[styles.postModal, fullscreen && styles.postModalFull]}>
        <View style={styles.postModalHeader}>
          <TouchableOpacity onPress={onClose}>
            <Image
              source={images.close}
              style={[styles.closeIcon, { tintColor: colors.primary }]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.postModalSubmit} onPress={onSubmit}>
            <Text style={styles.postModalSubmitText}>POST</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.postModalContent}
          value={text}
          onChangeText={val => this.setState({ text: val })}
          placeholder="What’s happening in Omaha?"
          multiline
        />

        <View style={styles.postModalFooter}>
          <TouchableOpacity onPress={this.openImagePicker}>
            <Image source={images.camera} style={styles.cameraIcon} />
          </TouchableOpacity>

          <Image source={getIconForTag(tag)} style={styles.tagIcon} />
        </View>
      </View>
    );
  }
}

export default CreatePost;
