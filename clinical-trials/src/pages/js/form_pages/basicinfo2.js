import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const BasicInfo2 = ({ prevStep, nextStep, handleChange, values, enterLocation, save }) => {
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
                <img id="number_image" src="./unselected2.png"></img>
                <h3>Common Eligibility</h3>
              </div>
              <div id="progress_number">
                <img id="number_image" src="./unselected3.png"></img>
                <h3>Disease Specific</h3>
              </div>
            </div>
            <Progressbar bgcolor="#182E4E" progress='33'  height={10} />
        </div>
        <div className="form_fields">
          <label>
              <h4>Location</h4>
              <input type="text" id="full" name="location" onChange={enterLocation}/>
          </label>

          <div className="two_row">
            <label>
                <h4>Trial Phase</h4>
                <select id="half" name="phase">
                  
                </select>
            </label>

            <label>
                <h4>Study Type</h4>
                <select id="half" name="study">
                  
                </select>
            </label>
          </div>
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

export default BasicInfo2;