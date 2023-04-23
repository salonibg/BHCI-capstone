import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/js/searchresults';
import TrialDetails from './pages/js/trialdetails';

import Tabs from './pages/js/searchinputs';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tabs>
        <div label="Basic Search">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Advanced Search">
          After 'while, <em>Crocodile</em>!
        </div>
      </Tabs>
      <TrialDetails></TrialDetails>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    </div>
  );
}

export default App;
