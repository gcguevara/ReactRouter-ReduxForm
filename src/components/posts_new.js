import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {
  render() {
    // redux form injects additional properties into state (this.prop_)
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // ^^ const handleSubmit = this.props.handleSubmit ^^
    // ^^ const title = this.props.field.title etc. ^^

    // ... ==> is called destructuring the object, so when we pass
    // {...title}, we want to insure all properties are tied to input

    // handleSubmit can take action creators ==> {handleSubmit(actioncreator)}
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  return errors;
}

// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// { createPost } is shorthand for mapDispatchToProps

export default connect(null, {createPost})(reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew));

// ^^     ^^
// under the hood, user types something in and redux form records app state
// state === {
//   form: {
//     PostsNew: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }
