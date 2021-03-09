import { navigate,Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../static/style.css'

import Button from '@material-ui/core/Button'

const Padawan = (props) => {
    const {padawans} = props;

    return(
        <div id="container" style={{ width: "100%", height:"1200px", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'}` }}>
            {
                padawans.map((val, idx) => 
                <section key={idx}>
                        <p>name:{val.padawanName}</p>
                </section>
                )
            }
            
        </div>
    )
}

export default Padawan