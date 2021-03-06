import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Gpus</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/list" className="nav-link">Gpu List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">create gpu</Link>
          </li>

        </ul>
        </div>
      </nav>
    );
  }
}