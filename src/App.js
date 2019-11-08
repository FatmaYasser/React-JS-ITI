import React, { Component } from 'react';
import './App.css';
import { browserHistory, Router } from 'react-router';
import { Routes } from './Router';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          {Routes}
        </Router>

        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item active">
                <a class="nav-link" onClick={() => browserHistory.push('/home')}>Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" onClick={() => browserHistory.push('/about')}>About <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" onClick={() => browserHistory.push('/blog')}>Blog<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" onClick={() => browserHistory.push('/logone')}>Login<span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}


export default App;
