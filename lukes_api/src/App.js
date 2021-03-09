// import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Padawan from './components/Padawan';
// import Planets from './components/Planet';
import React, { useState } from 'react';

// import './static/style.css'


function App() {
  const [padawans, setPadawans] = useState([]);

  const addPadawan = (padawan) => {
    setPadawans ([...padawans, padawan])
  };

  return (
    <div className="App">
      <Router>
        <Form path="/" addPadawan={addPadawan}/>
        <People path="people/:id"/>
        <Padawan path="padawan/list" padawans={padawans}/>
        {/* <Planets path="planets/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
