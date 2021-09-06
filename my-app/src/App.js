// import logo from './logo.svg';
import './App.css';
import SpacingGrid from './components/SpacingGrid';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/navbar.component"
import GpusList from "./components/gpus-list.component"

function App() {
  return (

    <div className="App">
    <Router>
      <NavBar/>
      <br/>
      <Route path="/" exact component={GpusList} />
    </Router>
      <SpacingGrid />
    </div>
  );
}

export default App;
