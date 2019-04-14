import React from 'react';
import { View, Text } from 'react-native';

import { IconButton } from 'components';
import { images } from 'theme';

import styles from './styles';

const Divider = () => <View style={styles.divider} />;

const HeaderButton = ({ icon, value, selected, onSelect }) => (
  <IconButton
    onPress={() => onSelect(value)}
    style={{ flex: 1 }}
    icon={icon}
    iconStyle={[styles.headerIcon, selected === value && styles.headerIconActive]}
  >
    <Text style={styles.headerText}>{value.toUpperCase()}</Text>
  </IconButton>
);

const PostListHeader = ({ selected, onSelect }) => (
  <View style={styles.postListHeader}>
    <HeaderButton icon={images.flame} value="hot" selected={selected} onSelect={onSelect} />

    <Divider />

    <HeaderButton icon={images.crown} value="best" selected={selected} onSelect={onSelect} />

    <Divider />

    <HeaderButton icon={images.badge} value="new" selected={selected} onSelect={onSelect} />
  </View>
);

export default PostListHeader;
