import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.renderInput = ({ input, label, meta }) => {
      const fieldClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={fieldClassName}>
          <label>{label}</label>
          <input {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      );
    };

    this.onSubmit = (formValues) => {
      this.props.onSubmit(formValues);
    };
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <h5 className="ui header">{error}</h5>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter some Title';
  } else if (!formValues.description) {
    errors.description = 'Please enter some Description';
  }
  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
