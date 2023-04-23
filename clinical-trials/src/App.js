import './App.css';

import Tabs from './pages/js/searchinputs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Basic Search">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Advanced Search">
          After 'while, <em>Crocodile</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
