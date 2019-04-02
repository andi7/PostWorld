import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import { images, colors } from 'theme';
import PostsActions from 'models/posts';

import styles from './styles';

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

  submitPost = () => {
    const { tag, onSubmit } = this.props;
    const { text } = this.state;

    if (onSubmit) {
      onSubmit();
    }

    this.props.dispatch(PostsActions.createPost(tag, text));
  };

  render() {
    const { tag, fullscreen, onClose } = this.props;
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

          <TouchableOpacity style={styles.postModalSubmit} onPress={this.submitPost}>
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

        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
          <View style={styles.postModalFooter}>
            <TouchableOpacity onPress={this.openImagePicker}>
              <Image source={images.camera} style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect()(CreatePost);
