import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const BasicInfo = ({ nextStep, handleChange, values, changeStage, save }) => {
  const Continue = e => {
    e.preventDefault();
    save();
    nextStep();
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
              <select id="half" name="stage" onChange={changeStage}>
                <option>Stage 1</option>
                <option>Stage 2</option>
                <option>Stage 3</option>
                <option>Stage 4</option>
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
          <button style={{"background-color": "white"}}></button>
          <button className="button_1" onClick={ Continue }>Continue</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BasicInfo;