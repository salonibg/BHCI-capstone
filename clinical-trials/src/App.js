import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/searchresults';
import TrialDetails from './pages/trialdetails';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <TrialDetails></TrialDetails>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    
    </div>
  );
}

export default App;
