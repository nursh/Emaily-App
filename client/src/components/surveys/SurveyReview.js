import React from 'react';
import { connect } from 'react-redux';


const SurveyReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please review your entries before submission</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps)(SurveyReview);
