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
import MainPage from './components/MainPage.js'
import ContactPage from './components/ContactPage.js'
import ProjectPage from './components/ProjectPage.js'
import SkillsPage from './components/SkillsPage.js';

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
            <Route path="/skills" element = {<SkillsPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}
}
export default App;
