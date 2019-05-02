import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import { images, colors } from 'theme';
import { DynamicHeightImage } from 'components';
import PostsActions from 'models/posts';

import styles from './styles';

class CreatePost extends React.Component {
  state = {
    text: '',
    image: null,
    imageData: null
  };

  openImagePicker = () => {
    ImagePicker.showImagePicker(
      { title: 'Select Image', maxHeight: 500, maxWidth: 500 },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          console.log('Response = ', response);

          const source = { uri: response.uri };

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({ image: source, imageData: response.data });
        }
      }
    );
  };

  submitPost = () => {
    const { tag, onSubmit } = this.props;
    const { text, imageData } = this.state;

    if (onSubmit) {
      onSubmit();
    }

    this.props.dispatch(PostsActions.createPost(tag, text, imageData));
  };

  render() {
    const { fullscreen, onClose } = this.props;
    const { text, image } = this.state;

    return (
      <View style={[styles.postModal, fullscreen && styles.postModalFull]}>
        <SafeAreaView style={{ flex: 1 }}>
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

          <ScrollView style={{ flex: 1 }}>
            <TextInput
              style={styles.postModalContent}
              value={text}
              onChangeText={val => this.setState({ text: val })}
              placeholder="What’s happening in Omaha?"
              multiline
            />

            <DynamicHeightImage source={image} style={styles.postModalContentImage} />
          </ScrollView>

          <KeyboardAvoidingView behavior="position">
            <View style={styles.postModalFooter}>
              <TouchableOpacity style={{ width: 24 }} onPress={this.openImagePicker}>
                <Image source={images.camera} style={styles.cameraIcon} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = ({ map }) => ({
  fullscreen: !map.isActive
});

export default connect(mapStateToProps)(CreatePost);
