import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const BasicInfo2 = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <form>
      <fieldset>
        <div className="progress_bar">
            <div className="progress_bar_label">
              <h3>Basic Info</h3>
              <h3>Common Eligibility</h3>
              <h3>Disease Specific</h3>
            </div>
            <Progressbar bgcolor="#182E4E" progress='33'  height={10} />
        </div>
        <div className="form_fields">
          <label>
              <h4>Location</h4>
              <select name="location2">

              </select>
          </label>

          <label>
              <h4>Trial Phase</h4>
              <select name="phase">
                
              </select>
          </label>

          <label>
              <h4>Study Type</h4>
              <select name="study">
                
              </select>
          </label>

          <button onClick={ Previous }>Previous</button>
          <button onClick={ Continue }>Continue</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BasicInfo2;