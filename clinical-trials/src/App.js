import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/js/searchresults';
import TrialDetails from './pages/js/trialdetails';
import Tabs from './components/tabs/tabs';
import React, { Component } from 'react';
import AdvancedSearch from './pages/js/advancedsearch';
import BasicSearch from './pages/js/basicsearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: 'block',
      tableVisible: 'none',
      detailsVisible: 'none',

      //Below are the patient's information
      stage: '',
      location: '',
      age: '',
      immunotherapy: false,
      radiation: false,
      brafInhibitor: false,

      //Clinical trials for melanoma as scraped from clinicaltrials.gov (not comprehensive)
      //for immunotherapy, radiation, and brafInhibitor: 'exclusion' means having it as a past treatment is an exclusion criteria 
      // and 'inclusion' means it is in the inclusion criteria. '' means that there is no mention about this in the trial
      allTrials: [
        {
          match: 0,
          'title': 'Safety Study of a Melanoma Vaccine (GVAX) With or Without Cyclophosphamide in Patients With Surgically Resected Melanoma',
          'status': 'Completed',
          'stage': ['Stage 2', 'Stage 3', 'Stage 4'],
          'location': 'Australia', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': 'exclusion',
          'radiation': 'exclusion',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'Molecular Profiling and Matched Targeted Therapy for Patients With Metastatic Melanoma',
          'status': 'Recruiting',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Australia', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'Evaluation of the Immunogenicity of Vaccination With Multiple Synthetic Melanoma Peptides With Granulocyte-macrophage Colony-stimulating Factor (GM-CSF)-In-Adjuvant, in Patients With Advanced Melanoma',
          'status': 'Completed',
          'stage': ['Stage 2', 'Stage 3', 'Stage 4'],
          'location': 'Charlottesville', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': 'exclusion',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'MDX-010 Antibody, MDX-1379 Melanoma Vaccine, or MDX-010/MDX-1379 Combination Treatment for Patients With Unresectable or Metastatic Melanoma',
          'status': 'Completed',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Tucson', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'Neoadjuvant Dabrafenib + Trametinib for AJCC Stage IIIB-C BRAF V600 Mutation Positive Melanoma',
          'status': 'Active, not recruiting',
          'stage': ['Stage 3'],
          'location': 'Sydney', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'Study of Circulating Tumor Cells Before and After Treatment in Patients With Metastatic Melanoma',
          'status': 'Completed',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Nice', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'brafInhibitor': 'exclusion',
          'crit_match': [],
          'crit_not_match': []
        },
        {
          match: 0,
          'title': 'Molecular Characterization of Advanced Stage Melanoma by Blood Sampling',
          'status': 'Completed',
          'stage': ['Stage 3', 'Stage 4'],
          'location': 'Reims', 
          'age':['Adult (18–64)', 'Older Adult (65+)'],
          'immunotherapy': '',
          'radiation': '',
          'brafInhibitor': '',
          'crit_match': [],
          'crit_not_match': []
        }
        
      ],
      selectedTrials: [
      ]
    }
    this.showTable = this.showTable.bind(this)
  }

  searchToResults = () => {
    const { searchVisible } = this.state;
    this.setState({ searchVisible: 'none' })
    const { tableVisible } = this.state;
    this.setState({ tableVisible: 'block' })
  }

  resultsToSearch = () => {
    const { tableVisible } = this.state;
    this.setState({ tableVisible: 'none' })
    const { searchVisible } = this.state;
    this.setState({ searchVisible: 'block' })
  }

  resultsToDetails = () => {
    const { tableVisible } = this.state;
    this.setState({ tableVisible: 'none' })
    const { detailsVisible } = this.state;
    this.setState({ detailsVisible: 'block' })
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

  //Captures the stage entered by the user
  changeStage = e => {
    this.setState({stage: e.target.value})
  }

  //Captures whether BRAF Inhibitor has been used before as entered by the user
  hasBRAFInhibitor = e => {
    this.setState({immunotherapy: e.target.checked})
    console.log(this.state.immunotherapy)
  }


  //Captures whether immunotherapy has been used before as entered by the user
  hasImmunotherapy = e => {
    this.setState({immunotherapy: e.target.checked})
    console.log(this.state.immunotherapy)
  }

  //Captures whether radiation has been used before as entered by the user
  hasRadiation = e => {
    this.setState({radiation: e.target.checked})
    console.log(this.state.radiation)
  }

  //Captures the age entered by the user
  changeAge = e => {
    this.setState({age: e.target.value})
  }

  //Captures the location entered by the user
  getLocation = e => {
    this.setState({location: e.target.value})
  }

  //Gets the match percentage and selected trial info by comparing entered criteria with all the trials
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
      
      if (this.state.brafInhibitor == false){
        if (currTrial['brafInhibitor'] == ''){
          match = match + 1;
        }
        if (currTrial['brafInhibitor'] == 'inclusion'){
          match = match + 1;
          matchList.push('brafInhibitor')
        }
        if (currTrial['brafInhibitor'] == 'exclusion'){
          nonMatchList.push('brafInhibitor')
        }
      }
      else {
        if (currTrial['brafInhibitor'] == ''){
          match = match + 1;
        }
        if (currTrial['brafInhibitor'] == 'exclusion'){
          match = match + 1;
          matchList.push('brafInhibitor')
        }
        if (currTrial['brafInhibitor'] == 'inclusion'){
          nonMatchList.push('brafInhibitor')
        }
      }
      
      currTrial.match = (match*100/6).toFixed(1);
      currTrial['crit_match'] = matchList;
      currTrial['crit_not_match'] = nonMatchList;
      trials.push(currTrial);
    }

    trials.sort((a, b) => (a.match > b.match) ? -1 : 1)

    this.setState({selectedTrials:trials})

    console.log(this.state.selectedTrials)
  }


  render() {
    const { searchVisible } = this.state;
    const { tableVisible } = this.state;
    const { detailsVisible } = this.state;

    return (
      <div className="App">
        <NavBar></NavBar>
        <div style={{display: searchVisible}}>
          <Tabs>
            <div label="Basic Search">
              <BasicSearch></BasicSearch>
            </div>
            <div style={{display:this.state.searchVisible}} label="Advanced Search">
              <AdvancedSearch searchToResults={this.searchToResults} updateTrialList={this.updateTrialList} changeStage={this.changeStage} changeAge={this.changeAge} getLocation={this.getLocation} hasImmunotherapy={this.hasImmunotherapy} hasRadiation={this.hasRadiation} hasBRAFInhibitor={this.hasBRAFInhibitor}></AdvancedSearch>
            </div>
          </Tabs>
        </div>
        <div style={{display: tableVisible}}><Results resultsToSearch={this.resultsToSearch} resultsToDetails={this.resultsToDetails} trials={this.state.selectedTrials}></Results></div>
        <div style={{display: detailsVisible}}> <TrialDetails></TrialDetails></div>
        <footer className="footer"> <img src="./footer.png"/></footer>
      </div>
    );
  }
}

export default App;
