import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

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

const CreatePost = ({ tag, onSubmit, onClose }) => (
  <View style={styles.postModal}>
    <View style={styles.postModalHeader}>
      <TouchableOpacity onPress={onClose}>
        <Image source={images.close} style={[styles.closeIcon, { tintColor: colors.primary }]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.postModalSubmit} onPress={onSubmit}>
        <Text style={styles.postModalSubmitText}>POST</Text>
      </TouchableOpacity>
    </View>

    <TextInput style={styles.postModalContent} placeholder="What’s happening in Omaha?" multiline />

    <View style={styles.postModalFooter}>
      <Image source={images.camera} style={styles.cameraIcon} />

      <Image source={getIconForTag(tag)} style={styles.tagIcon} />
    </View>
  </View>
);

export default CreatePost;
