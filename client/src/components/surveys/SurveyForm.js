import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
  },
  {
    label: 'Subject Line',
    name: 'subject',
  },
  {
    label: 'Email Body',
    name: 'body',
  },
  {
    label: 'Recipient List',
    name: 'emails',
  }
]
class SurveyForm extends Component {

  renderField = () => {
    return _.map(FIELDS, ({ label, name }) => (
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
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
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

  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);