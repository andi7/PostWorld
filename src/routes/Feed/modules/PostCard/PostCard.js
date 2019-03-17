import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { images } from '../../../../theme';
import styles from './styles';

class PostCard extends React.PureComponent {
  state = { imageHeight: 0, liked: this.props.item.liked };

  componentDidMount() {
    const { item } = this.props;

    if (item.content.image) {
      Image.getSize(item.content.image, (width, height) => {
        // calculate image width and height
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;

        this.setState({ imageHeight });
      });
    }
  }

  like = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { item } = this.props;
    const { imageHeight, liked } = this.state;

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={[styles.iconButton, { flex: 0 }]}>
            <Image source={{ uri: item.poster.avatar }} style={styles.avatar} />

            <Text style={styles.userName}>{item.poster.name}</Text>
          </View>

          <Image source={images.dots} style={styles.dots} />
        </View>

        {!!item.content.text && <Text style={styles.postText}>{item.content.text}</Text>}

        {!!item.content.image && (
          <Image
            source={{ uri: item.content.image }}
            style={[styles.postImage, { height: imageHeight }]}
          />
        )}

        <View style={styles.footerRow}>
          <TouchableOpacity style={[styles.iconButton, { justifyContent: 'flex-start' }]}>
            <Image source={images.locationArrow} style={styles.locationIcon} />

            <Text style={styles.locationText}>
              {moment(item.created_at).fromNow(true)} - {item.distance}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Image source={images.comments} style={styles.commentsIcon} />

            <Text style={styles.commentsText}>{item.comments} comments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconButton, { justifyContent: 'flex-end' }]}
            onPress={this.like}
          >
            <Image source={liked ? images.likeActive : images.like} style={styles.likesIcon} />

            <Text style={[styles.likesText, { color: liked ? '#FF5353' : 'black' }]}>
              {item.likes + (item.liked && !liked ? -1 : !item.liked && liked ? 1 : 0)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PostCard;
