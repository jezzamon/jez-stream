import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput = formProps => {
    // label was added to formProps when label prop was added to Field
    const { input, label } = formProps;
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
  render() {
    // console.log('props', this.props);
    return (
      <div>
        <form className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
