import React from 'react';
import './../css/searchinput.css';
import Progressbar from '../../components/progress_bar';

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

          <label>
              <h4>Location</h4>
              <input type="text" name="location2" value={values.location} onChange={handleChange('location')}/>
          </label>

          <label>
              <h4>Trial Phase</h4>
              <input name="phase"/>
          </label>

          <label>
              <h4>Study Type</h4>
              <input name="study"/>
          </label>

          <button onClick={ Previous }>Previous</button>
          <button onClick={ Continue }>Continue</button>
      </fieldset>
    </form>
  );
}

export default BasicInfo2;