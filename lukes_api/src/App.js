// import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import People from './components/People';
import Padawan from './components/Padawan';
// import Planets from './components/Planet';

import axios from 'axios'
import React, { useState, useEffect } from 'react';

// import './static/style.css'

function App() {
  const [padawans, setPadawans] = useState([]);

  const addPadawan = (padawan) => {
    setPadawans ([...padawans, padawan])
  };

  useEffect(() => {
    axios.get("http://localhost:8200/StarWars")
    .then(res => {
        console.log("this is useEffect part", res.data);
        setPadawans(res.data);
        console.log(padawans);
    })
    .catch(err =>{
        console.log(err);
    })
}, [])

  return (
    <div className="App">
      <Router>
        <Form path="/" addPadawan={addPadawan} padawans={padawans}/>
        
        <People path="people/:id"/>

        {/* list of padawans */}
        <Padawan path="padawan/list" padawans={padawans}/> 
        
        {/* <Planets path="planets/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
