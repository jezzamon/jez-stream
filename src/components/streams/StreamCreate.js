import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    // console.log('props', this.props);
    return (
      <div>
        <form>
          <Field name="title" />
          <Field name="description" />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
