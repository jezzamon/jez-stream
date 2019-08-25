import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput = formProps => {
    const { input } = formProps;
    return <input {...input} />;
  };
  render() {
    // console.log('props', this.props);
    return (
      <div>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
