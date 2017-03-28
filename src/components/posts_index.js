import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

// can use an es6 shortcut here by getting rid of mapDispatchToProps
// export default connect(null, { fetchPosts })(PostsIndex);
export default connect(null, mapDispatchToProps)(PostsIndex);
