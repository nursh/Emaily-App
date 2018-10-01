import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import SurveyField from './SurveyField';

class SurveyForm extends Component {

  renderField = () => {
    return (
      <div>
        <Field
          type="text"
          label="Survey Title"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Subject Line"
          name="subject"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Email Body"
          name="body"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Recipient List"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
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