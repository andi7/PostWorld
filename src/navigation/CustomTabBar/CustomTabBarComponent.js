import React from 'react';
import { BottomTabBar } from 'react-navigation';
import Modal from 'react-native-modal';

import TypePicker from './TypePicker';
import PostCreate from './PostCreate';
import styles from './styles';

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
    this.setState({ tagModal: false, tag });
  };

  render() {
    const { tagModal, postModal, tag } = this.state;

    return (
      <React.Fragment>
        <BottomTabBar {...this.props} onTabPress={this.onTabPress} />

        <Modal
          isVisible={tagModal}
          onBackdropPress={() => this.setState({ tagModal: false, tag: null })}
          onBackButtonPress={() => this.setState({ tagModal: false, tag: null })}
          onModalHide={() => this.setState({ postModal: tag !== null })}
          style={[styles.modal, { justifyContent: 'flex-end' }]}
        >
          <TypePicker
            onSelect={this.onTagPress}
            onClose={() => this.setState({ tagModal: false })}
          />
        </Modal>

        <Modal
          isVisible={postModal}
          onBackdropPress={() => this.setState({ postModal: false })}
          onBackButtonPress={() => this.setState({ postModal: false })}
          style={[styles.modal, { justifyContent: 'center' }]}
        >
          <PostCreate
            onSubmit={() => this.setState({ postModal: false })}
            onClose={() => this.setState({ postModal: false })}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default CustomTabBarComponent;
