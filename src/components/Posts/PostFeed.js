import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <div> {post} </div>);
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;