import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { images } from 'theme';

import styles from './styles';

const CreatePost = ({ onSubmit, onClose }) => (
  <View style={styles.postModal}>
    <View style={styles.postModalHeader}>
      <TouchableOpacity onPress={onClose}>
        <Image source={images.close} style={[styles.closeIcon, { tintColor: '#5A79FD' }]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.postModalSubmit} onPress={onSubmit}>
        <Text style={styles.postModalSubmitText}>POST</Text>
      </TouchableOpacity>
    </View>

    <TextInput style={styles.postModalContent} placeholder="What’s happening in Omaha?" multiline />

    <View style={styles.postModalFooter}>
      <Image source={images.camera} style={styles.cameraIcon} />
    </View>
  </View>
);

export default CreatePost;
