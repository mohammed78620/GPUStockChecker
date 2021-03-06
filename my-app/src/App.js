// import logo from './logo.svg';
import './App.css';
import SpacingGrid from './components/SpacingGrid';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/navbar.component"
import GpusList from "./components/gpus-list.component"
import GpuAdd from "./components/gpus-add.component"


function App() {
  return (

    <div className="App">
    <Router>
      <NavBar/>
      <br/>
      <Route path="/list" exact component={GpusList} />
      <Route path="/create" exact component={GpuAdd} />
    </Router>
      <SpacingGrid />
    </div>
  );
}

export default App;
