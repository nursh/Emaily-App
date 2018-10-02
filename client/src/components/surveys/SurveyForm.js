import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';

import SurveyField from './SurveyField';
import formFields from './formFields';

class SurveyForm extends Component {

  renderField = () => {
    return _.map(formFields, ({ label, name }) => (
      <Field
        type="text"
        label={label}
        name={name}
        key={name}
        component={SurveyField}
      />
    ));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}


function validate(values) {
  const errors = {};
  errors.emails = validateEmails(values.emails || '');
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
      // You could alternatively add an error field in the formFields object
      // for custom error messages
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);