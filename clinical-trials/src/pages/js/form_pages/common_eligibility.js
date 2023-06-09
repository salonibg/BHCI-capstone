import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const CommonEligibility = ({ prevStep, nextStep, handleChange, values, changeAge, save }) => {
  const Continue = e => {
    e.preventDefault();
    save();
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
                <div id="progress_number">
                  <img id="number_image" src="./selected1.png"></img>
                  <h3>Basic Info</h3>
                </div>
                <div id="progress_number">
                  <img id="number_image" src="./selected2.png"></img>
                  <h3>Common Eligibility</h3>
                </div>
                <div id="progress_number">
                  <img id="number_image" src="./unselected3.png"></img>
                  <h3>Disease Specific</h3>
                </div>
              </div>
              <Progressbar bgcolor="#182E4E" progress='66'  height={10} />
            </div>
            <div className="form_fields">
            <div className="two_row">
              <label>
                  <h4>Sex</h4>
                  <select id="half" name="sex"></select>
              </label>

              <label>
                <h4>Age Range</h4>
                <select id="half" name="age" onChange={changeAge}>
                  <option> Child (birth–17)</option>
                  <option> Adult (18–64) </option>
                  <option> Older Adult (65+)</option>
                </select>

              </label>
            </div>
              <label className="three_row">
                <h4>Pregnancy Status</h4>
                <button className="button_3">Currently Pregnant</button>
                <button className="button_3">Not Pregnant</button>
              </label>

              <label className="three_row">
                <h4>Active autoimmune disease</h4>
                <button className="button_3">Yes</button>
                <button className="button_3">No</button>
              </label>

              <label>
                <h4>ECOG Performance Status</h4>
                <select id="full" name="ECOG"></select>
              </label>

              
            </div>
            <hr></hr>
            <div className="buttons">
              <button className="button_2" onClick={ Previous }>Previous</button>
              <button className="button_1" onClick={ Continue }>Continue</button>
            </div>
          </fieldset>
        </form>
    );
}

export default CommonEligibility;