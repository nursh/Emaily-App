import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import SurveyField from './SurveyField';

class SurveyForm extends Component {

  renderField = () => {
    return (
      <div>
        <Field type="text" name="surveyTitle" component={SurveyField} />
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