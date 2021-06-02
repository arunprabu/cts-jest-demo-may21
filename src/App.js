import logo from './logo.svg';
import './App.css';
import About from './components/About/About';

function App() {

  const handleSubmit = () => {
    alert('submitted');
  }

  return (
    <div className="App">
      Welcome to Unit Testing!

      <h1>Success</h1>
      
      <About />

      {/* ref cypress/integrations/home.spec.js for the following lines  */}
      <hr/>
      <p>Testing using Cypress</p>
      <input type="text" id="input1"/> <br/><br/>
      <input type="text" id="input2"/> <br/><br/>
      <button type="submit" onClick={handleSubmit}>Submit</button>

      
    </div>
  );
}

export default App;
