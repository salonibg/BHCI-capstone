import './../css/searchresults.css';
import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
        <div className="searchResults">
            <div className='titleLine'>
                <div className='title'>
                <h1>Search Results</h1>
                </div>
                <button className='viewSavedTrials'> View Saved Trials</button>
            </div>
            <p>Viewing 1 - 7 out of 7 studies</p>
            <div className='table'>
            <div className='header'>
                <input className="checkall" type="checkbox" name="check"></input>
                <label htmlFor="check"> Selected(0)</label>
                <span className='vertical'></span>
                <img className="download" src='./download.png'></img>
                <label> Download</label>
                <span className='manage'>
                    <img className="add" src='./add.png'></img>
                    <label> Manage Columns</label>
                </span>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th> <input type="checkbox"></input></th>
                            <th> Match</th>
                            <th> Study Title</th>
                            <th> Status</th>
                            <th> Conditions</th>
                            <th> Location</th>
                            <th> Criteria Match</th>
                            <th> Criteria Non-Match</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.trials.map(( trial, index ) => {
                        return (
                            <tr key={index}>
                                <td> <input type="checkbox"></input></td>
                                <td> {trial.match} %</td>
                                <td> {trial.title} </td>
                                <td> {trial.status} </td>
                                <td> Metastatic Melanoma {trial.stage.toString()} </td>
                                <td> {trial.location} </td>
                                <td> {trial.crit_match.toString()} </td>
                                <td> {trial.crit_not_match.toString()} </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
  }
}

export default Results;
