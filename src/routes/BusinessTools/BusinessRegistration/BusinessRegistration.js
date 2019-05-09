import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class BusinessRegistration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.notice}>
          Posts that you make will populate on the map at the given address. Use post type “Promo”
          to share your stuff!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BusinessRegistration;
