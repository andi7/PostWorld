import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { images } from 'theme';

import styles from './styles';

class BusinessLanding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.header}>Business tools for the locals</Text>
          <Text style={styles.suHeader}>Free tools to help your business grow</Text>
        </View>

        <Image source={images.business} style={styles.businessImage} />

        <Text style={styles.description}>
          {
            'Gain instant access to promotion posting \n\nShare your specials, happy hours, and other promotions \n\nEngage with your community on one local platform'
          }
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BusinessRegistration')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BusinessLanding;
