import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/js/searchresults';
import TrialDetails from './pages/js/trialdetails';
import Tabs from './pages/js/searchinputs';
import Progressbar from './components/progress_bar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tabs>
        <div label="Basic Search">
          <form>
              <fieldset>
                <label>
                  <h4>Condition or Disease</h4>
                  <input name="disease" />
                </label>

                <label>
                  <h4>Other terms</h4>
                  <input name="other terms" />
                </label>

                <label>
                  <h4>Location</h4>
                  <input type="radio" name="location" /> Within
                  <input name="distance" defaultValue="50 miles"/>
                  <input name="address" defaultValue="Address"/>
                </label>
                <br></br>
                <label>
                  <input type="radio" name="location" /> In country, state, or city
                  <input name="location"/>
                </label>

                <label>
                  <h4>Location terms</h4>
                  <input name="location terms" />
                </label>
                <br></br>
                <button type="submit">Search</button>
              </fieldset>
            </form>
        </div>
        
        <div label="Advanced Search">
          <div className="progress_bar">
            <div className="progress_bar_label">
              <h3>Basic Info</h3>
              <h3>Common Eligibility</h3>
              <h3>Disease Specific</h3>
            </div>
              <Progressbar bgcolor="#182E4E" progress='30'  height={10} />
          </div>
        </div>
      </Tabs>
      <TrialDetails></TrialDetails>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    </div>
  );
}

export default App;
