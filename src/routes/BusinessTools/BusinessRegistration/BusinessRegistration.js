import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { images } from 'theme';

import styles from './styles';

const LineInput = ({ label }) => (
  <View style={styles.lineInputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>

    <TextInput style={styles.lineInput} />
  </View>
);

class BusinessRegistration extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.notice}>
          Posts that you make will populate on the map at the given address. Use post type “Promo”
          to share your stuff!
        </Text>

        <View style={styles.subContainer}>
          <Image source={images.logo} style={styles.logoIcon} />

          <TextInput placeholder="Business Name Here" style={styles.nameInput} />
        </View>

        <View style={styles.subContainer}>
          <LineInput label="Street Address" />
          <LineInput label="City" />
          <LineInput label="Zip Code" />
        </View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>Choose Category</Text>

          <ModalDropdown
            options={['Restaurant', 'Bar', 'Other']}
            style={styles.modalDropdown}
            dropdownStyle={styles.dropdownStyle}
            renderRow={(option, index) => (
              <View style={styles.dropdownRow}>
                <Text style={[styles.dropdownRowText, index === 2 && { marginBottom: 0 }]}>
                  {option}
                </Text>
              </View>
            )}
            renderSeparator={() => null}
            adjustFrame={style => ({ ...style, top: style.top + 10, right: style.right - 20 })}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BusinessRegistration;
