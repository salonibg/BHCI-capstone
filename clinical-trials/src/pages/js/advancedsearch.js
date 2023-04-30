import React, { Component } from 'react';
import BasicInfo from './form_pages/basicinfo';
import BasicInfo2 from './form_pages/basicinfo2';
import CommonEligibilty from './form_pages/common_eligibility';
import DiseaseSpecific from './form_pages/diseasespecific';

class AdvancedSearch extends Component {
    

    state = {
        step: 1,
        condition: '',
        location: '',
        stage: '',
        location: '',
        age: '',
        allTrials: [
          {'stage': 'Stage 3', 'location': 'pittsburgh', 'age':'Adult (18–64)'},
          {'stage': 'Stage 3', 'location': 'pittsburgh', 'age':'Child (birth–17)'}
        ],
        selectedTrials: [
        ]
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    changeStage = e => {
      this.setState({stage: e.target.value})
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
        if (this.state.allTrials[i]['stage'] == this.state.stage){
          if ((this.state.location == '') || (this.state.allTrials[i]['location'] == this.state.location)){
            if ((this.state.age == '') || (this.state.allTrials[i]['age'] == this.state.age)){
              trials.push(this.state.allTrials[i])
            }
          }
        }
      }

      this.setState({selectedTrials:trials})

      console.log(this.state.selectedTrials)
    }

    render () {
        const { step } = this.state;
        const { condition, location, stage } = this.state;
        const values = { condition, location }

        switch (step) {
            case 1:
              return (
                <BasicInfo 
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                  values={ values }
                  changeStage={this.changeStage}
                  save={this.updateTrialList}
                />
              )
            case 2: 
              return (
                <BasicInfo2 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    enterLocation = {this.getLocation}
                    save={this.updateTrialList}
                />
              )
            case 3: 
              return (
                <CommonEligibilty 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    changeAge={this.changeAge}
                    save={this.updateTrialList}
                />
              )
            case 4: 
              return (
                <DiseaseSpecific 
                    prevStep={ this.prevStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    search={this.updateTrialList}
                />
              )
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
          }

    }
}

export default AdvancedSearch;