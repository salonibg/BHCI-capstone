import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const BasicInfo = ({ nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
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
            <Progressbar bgcolor="#182E4E" progress='16'  height={10} />
        </div>
        <div className="form_fields">
          <label>
            <h4>What is the condition or disease?</h4>
            <input type="text" id="full" name="condition" value={values.condition} onChange={handleChange('condition')}/>
          </label>

          <div className="two_row">
            <label>
              <h4>Stages</h4>
              <select id="half" name="stage">

              </select>
            </label>

            <label>
              <h4>Location of disease</h4>
              <select id="half" name="disease_location">
                
              </select>
            </label>
          </div>
        </div>
        <hr></hr>
        <div className="buttons">
          <button></button>
          <button className="button_1" onClick={ Continue }>Continue</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BasicInfo;