import React from 'react';
import { View, Text, Image } from 'react-native';

import { IconButton } from 'components';
import { images } from 'theme';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const CustomDrawer = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image source={null} style={styles.avatarIcon} />
      <Text style={styles.avatarName}>Collin</Text>
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

export default CustomDrawer;
