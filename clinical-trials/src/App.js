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
      detailsVisible: 'none'
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
          <AdvancedSearch search={() => this.showTable()}></AdvancedSearch>
        </div>
        </Tabs>
      </div>
      
      <div style={{display:'none'}}> <Results></Results> </div>
      <div style={{display:'none'}}> <TrialDetails></TrialDetails></div>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    </div>
    );
  }
}

export default App;
