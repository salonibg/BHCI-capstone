import React, { Component } from 'react';
import BasicInfo from './form_pages/basicinfo';
import BasicInfo2 from './form_pages/basicinfo2';
import CommonEligibilty from './form_pages/common_eligibility';
import DiseaseSpecific from './form_pages/diseasespecific';

class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      condition: '',
      location: '',
    }
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
                  changeStage={this.props.changeStage}
                  save={this.props.updateTrialList}
                />
              )
            case 2: 
              return (
                <BasicInfo2 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    enterLocation = {this.props.getLocation}
                    save={this.props.updateTrialList}
                />
              )
            case 3: 
              return (
                <CommonEligibilty 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    changeAge={this.props.changeAge}
                    save={this.props.updateTrialList}
                />
              )
            case 4: 
              return (
                <DiseaseSpecific 
                    prevStep={ this.prevStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    //search={this.props.updateTrialList}
                    hasImmunotherapy={this.props.hasImmunotherapy}
                    hasRadiation={this.props.hasRadiation}
                    hasBRAFInhibitor={this.props.hasBRAFInhibitor}
                    searchToResults={this.props.searchToResults}
                />
              )
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
          }

    }
}

export default AdvancedSearch;