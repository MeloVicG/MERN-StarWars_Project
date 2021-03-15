import { navigate,Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../static/style.css'

import Button from '@material-ui/core/Button'

const Padawan = (props) => {
    const {padawans} = props;

const padawansToRender = 
    padawans.map((val, idx) => 
    <div key={idx}>
            <p style={{color:"white"}} >name: {val.padawanName}</p>
    </div>
    )

    //trying to check on {Padawan} & padawans.map

// const padawansCheck (e) => {
    
// }




    return(
        <div id="container" style={{ width: "100%", height:"1200px", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'}` }}>
            {/* <p style={{color:"white"}}>whglksdjglfk</p> */}
            
            {/* {padawans.padawanName} */}
            
            {/* <button onClick = {padawansCheck}> Check padawans receive</button> */}
            {padawansToRender}

            {/* {
                padawans.map((val, idx) => 
                <div key={idx}>
                        <p style={{color:"white"}} >name: {val.padawanName}</p>
                </div>
                )
            } */}
            
        </div>
    )
}

export default Padawan