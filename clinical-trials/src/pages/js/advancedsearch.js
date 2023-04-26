import React, { Component } from 'react';
import BasicInfo from './basicinfo';
import BasicInfo2 from './basicinfo2';
import CommonEligibilty from './common_eligibility';
import DiseaseSpecific from './diseasespecific';

class AdvancedSearch extends Component {
    

    state = {
        step: 1,
        condition: '',
        location: '',
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
        const { condition, location } = this.state;
        const values = { condition, location }

        switch (step) {

            case 1:
              return (
                <BasicInfo 
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                  values={ values }
                />
              )
            case 2: 
              return (
                <BasicInfo2 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                />
              )
            case 3: 
              return (
                <CommonEligibilty 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                />
              )
            case 4: 
              return (
                <DiseaseSpecific 
                    prevStep={ this.prevStep }
                    handleChange={ this.handleChange }
                    values={ values }
                />
              )
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
          }

    }
}

export default AdvancedSearch;