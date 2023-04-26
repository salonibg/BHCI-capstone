import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const CommonEligibility = ({ prevStep, nextStep, handleChange, values }) => {
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
              <Progressbar bgcolor="#182E4E" progress='66'  height={10} />
            </div>
            <div className="form_fields">
              <label>
                <h4>Sex</h4>
                <select name="sex"></select>
              </label>

              <label>
                <h4>Age Range</h4>
                <select name="age"></select>
              </label>

              <label>
                <h4>Pregnancy Status</h4>
              </label>

              <label>
                <h4>Active autoimmune disease</h4>
              </label>

              <label>
                <h4>ECOG Performance Status</h4>
                <select name="ECOG"></select>
              </label>

              <button onClick={ Previous }>Previous</button>
              <button onClick={ Continue }>Continue</button>
            </div>
          </fieldset>
        </form>
    );
}

export default CommonEligibility;