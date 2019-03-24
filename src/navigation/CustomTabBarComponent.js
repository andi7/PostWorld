import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BottomTabBar } from 'react-navigation';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts, images } from 'theme';

class CustomTabBarComponent extends React.Component {
  state = { tagModal: false, postModal: false, tag: null };

  onTabPress = config => {
    if (config.route.key === 'ModalCustomButton') {
      this.setState({ tagModal: true });
    } else {
      this.props.onTabPress(config);
    }
  };

  onTagPress = tag => {
    this.setState({ tagModal: false, postModal: true, tag });
  };

  render() {
    const { tagModal, postModal } = this.state;

    console.log(postModal);

    return (
      <React.Fragment>
        <BottomTabBar {...this.props} onTabPress={this.onTabPress} />

        <Modal
          isVisible={tagModal}
          onBackdropPress={() => this.setState({ tagModal: false })}
          onBackButtonPress={() => this.setState({ tagModal: false })}
          style={styles.modal}
        >
          <LinearGradient
            style={styles.gradient}
            colors={colors.blueGradient}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.title}>Choose Post Type</Text>

            <View style={styles.tagsContainer}>
              <TouchableOpacity style={styles.tag} onPress={() => this.onTagPress('food')}>
                <Image source={images.tagFood} style={styles.tagIcon} />

                <Text style={styles.tagText}>Food & Drink</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tag} onPress={() => this.onTagPress('general')}>
                <Image source={images.tagGeneral} style={styles.tagIcon} />

                <Text style={styles.tagText}>General</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tag} onPress={() => this.onTagPress('art')}>
                <Image source={images.tagArt} style={styles.tagIcon} />

                <Text style={styles.tagText}>Art</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => this.setState({ tagModal: false })}>
              <Image source={images.close} style={styles.closeIcon} />
            </TouchableOpacity>
          </LinearGradient>
        </Modal>

        <Modal
          isVisible={postModal}
          onBackdropPress={() => this.setState({ postModal: false })}
          onBackButtonPress={() => this.setState({ postModal: false })}
        >
          <View style={{ flex: 1, backgroundColor: 'red' }} />
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

  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },

  tag: {
    marginHorizontal: 13,
    alignItems: 'center'
  },

  tagIcon: {
    height: 35,
    width: 56,
    resizeMode: 'contain'
  },

  tagText: {
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
