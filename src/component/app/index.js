import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './../dashboard/index';
import '../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Lab 28 : To-Do</h1>
              <nav>
                <ul>
                  <li><Link to="/">Landing Page</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={() => <h1>I am your Landing Page!</h1>}
            />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
            />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}
