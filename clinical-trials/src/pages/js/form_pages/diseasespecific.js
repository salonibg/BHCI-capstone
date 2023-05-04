import React from 'react';
import Progressbar from '../../../components/progress_bar';
import './../../css/advancedsearch.css';

const DiseaseSpecific = ({ prevStep, handleChange, values, hasImmunotherapy, hasRadiation, hasBRAFInhibitor, searchToResults}) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const SearchToResults = e => {
    e.preventDefault();
    searchToResults();
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
                <img id="number_image" src="./selected3.png"></img>
                <h3>Disease Specific</h3>
              </div>
            </div>
            <Progressbar bgcolor="#182E4E" progress='100'  height={10} />
        </div>
        <div className="form_fields">
          <label>
              <h4>Select the Breslow depth:</h4>
              <select id="full" name="breslow">
                <option>Breslow level I: less than 0.75 mm</option>
                <option>Breslow level II: 0.75-1.49 mm</option>
                <option>Breslow level III: 1.50-2.25 mm</option>
                <option>Breslow level IV: 2.26-3.0 mm</option>
                <option>Breslow level V: greatar than 3.0 mm</option>
              </select>
          </label>

          <label>
              <h4>Select all past treatments your patient has underwent:</h4>
              <input type="checkbox" name="past_treatments" onChange={hasImmunotherapy}/> Immunotherapy
              <br></br>
              <input type="checkbox" name="past_treatments" onChange={hasRadiation}/> Radiation therapy
              <br></br>
              <input type="checkbox" name="past_treatments"/> Wide excision
              <br></br>
              <input type="checkbox" name="past_treatments" onChange={hasBRAFInhibitor}/> BRAF Inhibitor
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
        </div>  
        <hr></hr>
        <div className="buttons">
          <button className="button_2" onClick={ Previous }>Previous</button>
          <button className="button_1" onClick={ SearchToResults }>Search</button>
          
        </div>
        
      </fieldset>
    </form>
  );
}

//<button className="button_1" onClick={ ()=> search() }>Search</button>
export default DiseaseSpecific;