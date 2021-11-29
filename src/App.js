import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ya Boii Just Took His First Steps Into React
        </p>
        <p>And Another One</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
