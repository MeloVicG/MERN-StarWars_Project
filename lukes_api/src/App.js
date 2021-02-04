import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planet';
// import './static/style.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/"/>
        <People path="people/:id"/>
        {/* <Planets path="planets/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
