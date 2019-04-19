import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

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

const CustomDrawer = ({ user, navigation, dispatch }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={() => showLogoutDialog(dispatch)}>
        <Image
          source={{ uri: api.imageUrl.concat(user.profile_image.path) }}
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
      <DrawerItem name="Business tools" icon={images.drawerShop} />
      <DrawerItem name="Settings" icon={images.cog} />
    </View>

    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
      <Image source={images.arrowRight} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>
);

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(CustomDrawer);
