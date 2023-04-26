import React from 'react';
import './../css/searchinput.css';
import Progressbar from '../../components/progress_bar';

const DiseaseSpecific = ({ prevStep, handleChange, values }) => {

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
            <Progressbar bgcolor="#182E4E" progress='100'  height={10} />
        </div>

          <label>
              <h4>Select the Breslow depth:</h4>
              <input type="text" name="location2" value={values.location} onChange={handleChange('location')}/>
          </label>

          <label>
              <h4>Select all past treatments your patient has underwent:</h4>
              <input type="checkbox" name="past_treatments"/> Immunotherapy
              <input type="checkbox" name="past_treatments"/> Radiation therapy
              <input type="checkbox" name="past_treatments"/> Wide excision
              <input type="checkbox" name="past_treatments"/> BRAF Inhibitor
              <input type="checkbox" name="past_treatments"/> MEK Inhibitor
          </label>

          <label>
              <h4>Select all that apply:</h4>
              <input type="checkbox" name="other"/> Melanoma is regional
              <input type="checkbox" name="other"/> Patient has diagnosed metastases
              <input type="checkbox" name="other"/> Melanoma is ulcerated
              <input type="checkbox" name="other"/> Melanoma has lymph node involvement
          </label>

          <label>
            <h4>Select the location of the metastases:</h4>
            <input name="metastases"/>
          </label>

          <button onClick={ Previous }>Previous</button>
          
      </fieldset>
    </form>
  );
}

export default DiseaseSpecific;