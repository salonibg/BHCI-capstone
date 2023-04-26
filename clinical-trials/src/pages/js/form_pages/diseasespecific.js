import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

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
        <div className="form_fields">
          <label>
              <h4>Select the Breslow depth:</h4>
              <select id="full" name="breslow"></select>
          </label>

          <label>
              <h4>Select all past treatments your patient has underwent:</h4>
              <input type="checkbox" name="past_treatments"/> Immunotherapy
              <br></br>
              <input type="checkbox" name="past_treatments"/> Radiation therapy
              <br></br>
              <input type="checkbox" name="past_treatments"/> Wide excision
              <br></br>
              <input type="checkbox" name="past_treatments"/> BRAF Inhibitor
              <br></br>
              <input type="checkbox" name="past_treatments"/> MEK Inhibitor
              <br></br>
          </label>

          <label>
              <h4>Select all that apply:</h4>
              <input type="checkbox" name="other"/> Melanoma is regional
              <br></br>
              <input type="checkbox" name="other"/> Patient has diagnosed metastases
              <br></br>
              <input type="checkbox" name="other"/> Melanoma is ulcerated
              <br></br>
              <input type="checkbox" name="other"/> Melanoma has lymph node involvement
              <br></br>
          </label>

          <label>
            <h4>Select the location of the metastases:</h4>
            <select id="full" name="metastases"></select>
          </label>

          <button onClick={ Previous }>Previous</button>
        </div>  
      </fieldset>
    </form>
  );
}

export default DiseaseSpecific;