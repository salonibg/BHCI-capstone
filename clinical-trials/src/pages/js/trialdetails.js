import './../css/trialdetails.css';
import React, { Component } from 'react';

class TrialDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
        <div className="trialDetails">
            <div className='trialMatch'>
                <div className='title'>TRIAL MATCH</div>
                <div className='nav'>
                    <span>Back to Search</span>
                    <span>Compare Trial</span>
                </div>
                
            </div>
            <img className='studyTitle' src="./Studytitle.png"/>
            <img className='studyOverview' src="./StudyOverview.png"/>
            <div className='criteria'>
                <div className='criteria_header'>
                    <div className='left_header'>
                        <h1>Eligibility Criteria</h1>
                        <p>Researchers look for people who fit a certain description, called eligibility criteria. Some examples of these criteria are a persons general health condition or prior treatments.</p>
                    </div>
                    <div className='right_header'>
                        <h4>Criteria Checklist</h4>
                        <p>Mark which criteria matches or do not match your patient</p>
                    </div>
                </div>
                <h3>Priority Criteria</h3>
                <div className="priority_criteria">
                    <div className="inclusion">
                        <h4>Inclusion</h4>
                        <p>These following criteria allow a patient to participate in a clinical study</p>
                    </div>
                    <div className="exclusion">
                        <h4>Exclusion</h4>
                        <p>These following criteria prevent a patient from participating in a clinical study</p>
                    </div>
                </div>
                <br></br>
                <h3>Preferred Criteria</h3>
                <div className="preferred_criteria">
                    <div className="inclusion">
                        <h4>Inclusion</h4>
                        <p>These following criteria allow a patient to participate in a clinical study</p>
                    </div>
                    <div className="exclusion">
                        <h4>Exclusion</h4>
                        <p>These following criteria prevent a patient from participating in a clinical study</p>
                    </div>
                </div>
            </div>
            <img className='location' src="./Locations.png"/>
            <img className='studyplan' src="./StudyPlan.png"/>
        </div>
        )
    }
}
  
export default TrialDetails;