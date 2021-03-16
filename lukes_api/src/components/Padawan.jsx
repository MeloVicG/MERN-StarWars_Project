import { navigate, Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../static/style.css'


const Padawan = (props) => {
    const { padawans } = props;



    // //to retrieve db
    // useEffect(() => {
    //     axios.get("http://localhost:8200/StarWars")
    //     .then(res => {
    //         console.log("this is useEffect part", res.data);
    //         console.log(padawans);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
    // }, [])


    const padawansToRender =
        padawans.map((val, idx) =>
            <div key={idx}>
                <section>
                    <p style={{ color: "white" }} >name: {val.padawanName}</p>
                    <p style={{ color: "white" }} >name: {val.height}</p>
                    <p style={{ color: "white" }} >name: {val.hairColor}</p>
                </section>
            </div>
        )


    return (
        <div id="container" style={{ width: "100%", height: "1200px", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'}` }}>
            {/* <p style={{color:"white"}}>whglksdjglfk</p> */}

            {/* {padawans.padawanName} */}

            {/* <button onClick = {padawansCheck}> Check padawans receive</button> */}
            {/* {padawansToRender} */}

            <Link style={{color:"white"}}to="/">go back</Link>
            <table className="stats" style={{ background: "black", margin: "40px", padding: "25px", paddingTop: "10px", border: "blue solid 1px", opacity: "85%" }}>
            <thead>
                <tr style={{borderBottom:"1px solid white"}}>
                    <td style={{ color: "white", fontSize:"20px" }}>Name</td>
                    <td style={{ color: "white", fontSize:"20px" }}>Height</td>
                    <td style={{ color: "white", fontSize:"20px" }}>LightSaber</td>
                </tr>
            </thead>
            {
                padawans.map((val, idx) =>
                <tbody key={idx}>
                    <tr>
                        <td style={{ color: "white" }} >{val.padawanName}</td>
                        <td style={{ color: "white" }} >{val.height}</td>
                        <td style={{ color: "white" }} >{val.hairColor}</td>
                    </tr>
                    </tbody>
                )
            }

            </table>
        </div>
    )
}

export default Padawan