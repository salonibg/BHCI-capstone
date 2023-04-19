import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Results from './pages/searchresults';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Results></Results>
      <footer className="footer"> <img src="./footer.png"/> </footer>
    
    </div>
  );
}

export default App;
