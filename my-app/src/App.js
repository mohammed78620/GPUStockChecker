import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SpacingGrid from './components/SpacingGrid';

function App() {
  return (
    <div className="App">
      <SpacingGrid />
    </div>
  );
}

export default App;
