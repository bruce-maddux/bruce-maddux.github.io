import './StyleSheets/App.css';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import React, { Component } from 'react';
import MainPage from './components/MainPage'
import ContactPage from './components/ContactPage'
import ProjectPage from './components/ProjectPage'
import Header from './components/Header'


class App extends Component {
  render()
  {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/contact" element = {<ContactPage/>}/>
            <Route path="/project" element = {<ProjectPage/>}/>
          </Routes>
          
        </Router>
      </div>
  );
}
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
