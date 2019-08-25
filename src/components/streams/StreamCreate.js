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

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    // console.log('props', this.props);
    // handleSubmit is injected by redux-form, it will handle preventDefault() event and pass the formValues down
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
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
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
