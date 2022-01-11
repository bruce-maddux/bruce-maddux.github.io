import './StyleSheets/App.css';
import { render } from "react-dom";
import {
  HashRouter  as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Component } from 'react';
import MainPage from './components/MainPage.js'
import ContactPage from './components/ContactPage.js'
import ProjectPage from './components/ProjectPage.js'
import SkillsPage from './components/SkillsPage.js';
import PvE from './components/PvE.js'
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
            <Route path = "/PvE" element = {<PvE/>}/>
          </Routes>
        </Router>
      </div>
  );
}
}
export default App;
