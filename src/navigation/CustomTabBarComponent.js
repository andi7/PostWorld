import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BottomTabBar } from 'react-navigation';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts, images } from 'theme';

class CustomTabBarComponent extends React.Component {
  state = { modalVisible: false };

  onTabPress = config => {
    if (config.route.key === 'ModalCustomButton') {
      this.setState({ modalVisible: true });
    } else {
      this.props.onTabPress(config);
    }
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <React.Fragment>
        <BottomTabBar {...this.props} onTabPress={this.onTabPress} />

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          onBackButtonPress={() => this.setState({ modalVisible: false })}
          style={styles.modal}
        >
          <LinearGradient
            style={styles.gradient}
            colors={colors.blueGradient}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.title}>Choose Post Type</Text>

            <TouchableOpacity>
              <Image source={images.close} style={styles.closeIcon} />
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },

  gradient: {
    height: 111,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },

  title: {
    marginTop: 7,
    color: 'white',
    fontSize: 10,
    fontFamily: fonts.MontserratBold
  },

  closeIcon: {
    height: 11,
    width: 11,
    resizeMode: 'contain'
  }
});

export default CustomTabBarComponent;
