import './trialdetails.css';
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
                Eligibility Criteria
            </div>
            <img className='location' src="./Locations.png"/>
            <img className='studyplan' src="./StudyPlan.png"/>
        </div>
        )
    }
}
  
export default TrialDetails;