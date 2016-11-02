import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Coffeed</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/tnantoka/coffeed">GitHub</NavItem>
          </Nav>
        </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
