import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/js/searchresults';
import TrialDetails from './pages/js/trialdetails';
import Tabs from './components/tabs/tabs';
import React, { Component } from 'react';
import AdvancedSearch from './pages/js/advancedsearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: 'block',
      tableVisible: 'none',
      detailsVisible: 'none',
      selectedTrials:[],
      stage: '',
      location: '',
      age: '',
      immunotherapy: false,
      radiation: false,
      allTrials: [
        {
          'match': 0,
          'title': 'Safety Study of a Melanoma Vaccine (GVAX) With or Without Cyclophosphamide in Patients With Surgically Resected Melanoma',
          'status': 'Completed',
          'stage': ['Stage 2', 'Stage 3', 'Stage 4'],
          'location': 'Australia', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': 'exclusion',
          'radiation': 'exclusion',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          'match': 0,
          'title': 'Molecular Profiling and Matched Targeted Therapy for Patients With Metastatic Melanoma',
          'status': 'Recruiting',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Australia', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          'match': 0,
          'title': 'Evaluation of the Immunogenicity of Vaccination With Multiple Synthetic Melanoma Peptides With Granulocyte-macrophage Colony-stimulating Factor (GM-CSF)-In-Adjuvant, in Patients With Advanced Melanoma',
          'status': 'Completed',
          'stage': ['Stage 2', 'Stage 3', 'Stage 4'],
          'location': 'Charlottesville', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': 'exclusion',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          'match': 0,
          'title': 'MDX-010 Antibody, MDX-1379 Melanoma Vaccine, or MDX-010/MDX-1379 Combination Treatment for Patients With Unresectable or Metastatic Melanoma',
          'status': 'Completed',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Tucson', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          'match': 0,
          'title': 'Neoadjuvant Dabrafenib + Trametinib for AJCC Stage IIIB-C BRAF V600 Mutation Positive Melanoma',
          'status': 'Active, not recruiting',
          'stage': ['Stage 3'],
          'location': 'Sydney', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          'match': 0,
          'title': 'Molecular Characterization of Advanced Stage Melanoma by Blood Sampling',
          'status': 'Completed',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Reims', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'crit_match': [],
          'crit_not_match': []
        }
        
      ],
      selectedTrials: [
      ]
    }
    this.showTable = this.showTable.bind(this)
  }
  
  showTable = () => {
    console.log("here");
    this.setState(prevState => ({
      ...prevState,
      searchVisible: 'none',
      tableVisible: 'block',
      detailsVisible: 'none'
    }));
  }
  changeStage = e => {
    this.setState({stage: e.target.value})
  }

  hasImmunotherapy = e => {
    this.setState({immunotherapy: e.target.checked})
    console.log(this.state.immunotherapy)
  }

  hasRadiation = e => {
    this.setState({radiation: e.target.checked})
    console.log(this.state.radiation)
  }

  changeAge = e => {
    this.setState({age: e.target.value})
  }

  getLocation = e => {
    this.setState({location: e.target.value})
  }

  updateTrialList = () => {
    var trials = []
    for (let i = 0; i < this.state.allTrials.length; i++){
      var match = 0
      var matchList = []
      var nonMatchList = []
      var currTrial = this.state.allTrials[i];
      if (currTrial['stage'].includes(this.state.stage)){
        match = match + 1;
        matchList.push('stage')
      }
      else {
        nonMatchList.push('stage')
      }
      if (this.state.location == ''){
        match = match + 1;
      }
      else if (currTrial['location'] == this.state.location){
        match = match + 1;
        matchList.push('location')
      }
      else {
        nonMatchList.push('location')
      }
      if (this.state.age == ''){
        match = match + 1;
      } 
      else if (currTrial['age'].includes(this.state.age)){
        match = match + 1;
        matchList.push('age')
      }
      else {
        nonMatchList.push('age')
      }

      if (this.state.immunotherapy == false){
        if (currTrial['immunotherapy'] == ''){
          match = match + 1;
        }
        if (currTrial['immunotherapy'] == 'inclusion'){
          match = match + 1;
          matchList.push('immunotherapy')
        }
        if (currTrial['immunotherapy'] == 'exclusion'){
          nonMatchList.push('immunotherapy')
        }
      }
      else {
        if (currTrial['immunotherapy'] == ''){
          match = match + 1;
        }
        if (currTrial['immunotherapy'] == 'exclusion'){
          match = match + 1;
          matchList.push('immunotherapy')
        }
        if (currTrial['immunotherapy'] == 'inclusion'){
          nonMatchList.push('immunotherapy')
        }
      }

      if (this.state.radiation == false){
        if (currTrial['radiation'] == ''){
          match = match + 1;
        }
        if (currTrial['radiation'] == 'inclusion'){
          match = match + 1;
          matchList.push('radiation')
        }
        if (currTrial['radiation'] == 'exclusion'){
          nonMatchList.push('radiation')
        }
      }
      else {
        if (currTrial['radiation'] == ''){
          match = match + 1;
        }
        if (currTrial['radiation'] == 'exclusion'){
          match = match + 1;
          matchList.push('radiation')
        }
        if (currTrial['radiation'] == 'inclusion'){
          nonMatchList.push('radiation')
        }
      }
      
      currTrial['match'] = match*100/4;
      currTrial['crit_match'] = matchList;
      currTrial['crit_not_match'] = nonMatchList;
      trials.push(currTrial);
    }
    this.setState({selectedTrials:trials})

    console.log(this.state.selectedTrials)
  }


  render() {
    return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{display:'block'}}><Tabs>
      <div label="Basic Search" className="Basic_Search">
          <form>
              <fieldset>
              <div className="form_fields">
                  <label>
                    <h4>Condition or Disease</h4>
                    <input id="full" name="disease" />
                  </label>

                  <label>
                    <h4>Other terms</h4>
                    <input id="full" name="other terms" />
                  </label>

                  <label>
                    <h4>Location</h4>
                    <div className="four_row">
                      <input type="radio" name="location" /> Within
                      <input name="distance" defaultValue="50 miles"/>
                      <input name="address" defaultValue="Address"/>
                    </div>
                  </label>

                  <br></br>
                  <label>
                    <div className="three_row">
                      <input type="radio" name="location" /> In country, state, or city
                      <input name="location"/>
                    </div>
                  </label>

                  <label>
                    <h4>Location terms</h4>
                    <input id="full" name="location terms" />
                  </label>
                </div>
                
                <div className="buttons">
                  <button></button>
                  <button className="button_1" onClick={()=> this.showTable()}>Search</button>
                </div>
              </fieldset>
            </form>
        </div>
        
        <div style={{display:this.state.searchVisible}} label="Advanced Search">
          <AdvancedSearch updateTrialList={this.updateTrialList} changeStage={this.changeStage} changeAge={this.changeAge} getLocation={this.getLocation} hasImmunotherapy={this.hasImmunotherapy} hasRadiation={this.hasRadiation}></AdvancedSearch>
        </div>
        </Tabs>
      </div>
      
      <div style={{display:'block'}}> <Results trials={this.state.selectedTrials}></Results> </div>
      <div style={{display:'none'}}> <TrialDetails></TrialDetails></div>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    </div>
    );
  }
}

export default App;
