import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import AuthActions from 'models/auth';

import { IconButton } from 'components';
import { images } from 'theme';
import api from 'config/api';

import styles from './styles';

const Stat = ({ name, value }) => (
  <View style={styles.stat}>
    <Text style={styles.statValue}>{value}</Text>

    <Text style={styles.statName}>{name}</Text>
  </View>
);

const DrawerItem = ({ name, icon, onPress }) => (
  <IconButton
    style={styles.drawerItem}
    icon={icon}
    iconStyle={styles.drawerItemIcon}
    iconPosition="right"
    onPress={onPress}
  >
    <Text style={styles.drawerItemName}>{name}</Text>
  </IconButton>
);

const showLogoutDialog = dispatch => {
  Alert.alert(
    'Log out',
    '',
    [
      {
        text: 'Cancel'
      },
      { text: 'OK', onPress: () => dispatch(AuthActions.logOut()) }
    ],
    { cancelable: true }
  );
};

const openAvatarPicker = dispatch => {
  ImagePicker.showImagePicker(
    { title: 'Select Avatar', maxWidth: 200, maxHeight: 200 },
    response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Response = ', response);

        dispatch(AuthActions.updateUserAvatar(response.data));
      }
    }
  );
};

const CustomDrawer = ({ user, navigation, dispatch }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={() => openAvatarPicker(dispatch)}>
        <Image
          source={
            user.profile_image ? { uri: api.imageUrl.concat(user.profile_image.path) } : images.user
          }
          style={styles.avatarIcon}
        />
      </TouchableOpacity>

      <Text style={styles.avatarName}>{user.username}</Text>
    </View>

    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.statsContainer}>
        <Stat name="Karma" value="1,450" />
        <Stat name="Cities visited " value="3" />
        <Stat name="Posts" value="42" />
        <Stat name="Comments" value="234" />
      </View>
    </View>

    <View style={styles.drawerItemsContainer}>
      <DrawerItem name="Post History" icon={images.drawerBurger} />
      <DrawerItem name="Invite friends!" icon={images.drawerStar} />
      <DrawerItem
        name="Business tools"
        icon={images.drawerShop}
        onPress={() => navigation.navigate('BusinessLanding')}
      />
      <DrawerItem name="Settings" icon={images.cog} />
    </View>

    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
      <Image source={images.arrowLeft} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>
);

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(CustomDrawer);
