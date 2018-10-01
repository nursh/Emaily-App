import React from 'react';


export default ({ onCancel }) => {
  return (
    <div>
      <h5>Please review your entries before submission</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  )
}