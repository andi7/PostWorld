import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';

import { images } from 'theme';

import PostCard from 'domains/posts/PostCard/PostCard';
import CommentCard from 'domains/comments/CommentCard/CommentCard';

import CommentsActions from 'models/comments';

import styles from './styles';

class PostComments extends React.Component {
  state = { comment: '' };

  componentDidMount() {
    const post = this.props.navigation.getParam('post', null);

    this.props.dispatch(CommentsActions.fetchComments(post.id));
  }

  componentWillUnmount() {
    this.props.dispatch(CommentsActions.reset());
  }

  postComment = () => {
    const { comment } = this.state;
    const post = this.props.navigation.getParam('post', null);

    this.props.dispatch(CommentsActions.postComment(comment, post.id));

    Keyboard.dismiss();
    this.setState({ comment: '' });
  };

  like = comment => {
    if (comment.liked) {
      this.props.dispatch(CommentsActions.unlikeComment(comment.id));
    } else {
      this.props.dispatch(CommentsActions.likeComment(comment.id));
    }
  };

  render() {
    const { comment } = this.state;
    const { comments, loading } = this.props;
    const post = this.props.navigation.getParam('post', null);

    const reversedComments = [...comments].reverse();

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <PostCard item={post} hideComment hideShare />

          <FlatList
            keyExtractor={item => `${item.id}`}
            data={reversedComments}
            renderItem={({ item }) => (
              <CommentCard comment={item} likePress={() => this.like(item)} />
            )}
            ListEmptyComponent={() => (
              <ActivityIndicator style={{ marginTop: 30 }} size="large" animating={loading} />
            )}
          />
        </ScrollView>

        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={60}>
          <View style={styles.composer}>
            <TextInput
              style={styles.composerInput}
              placeholder="Add comment..."
              value={comment}
              onChangeText={val => this.setState({ comment: val })}
            />

            <TouchableOpacity onPress={this.postComment}>
              <Image source={images.angleRight} style={styles.submit} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ comments: { data, loading } }) => ({
  comments: data,
  loading
});

export default connect(mapStateToProps)(PostComments);
