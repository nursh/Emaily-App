import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
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
        SurveyForm
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);