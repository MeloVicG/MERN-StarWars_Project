import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Form from './Form';
// import { motion } from "framer-motion"
// import { Link } from "@reach/router"
import '../static/style.css'

const Imperial = (props) => {
    const [people, setPeople] = useState([]);

    // useEffect(() => {                                                  
    //     axios.get(`https://swapi.dev/api/people/${props.id}`)
    //         .then(response => {
    //             console.log(response)
    //             setPeople(response.data)
    //         })
    //         .catch((error) => {
    //             console.log("this is the error PART", error);
    //             setError("R-2 WE HAVE A PROBLEM!!")
    //         })
    // }, [props.id]);
    // if the [] is empty the useEffect cannot search id's


        return (
            <div className="picture_container">

                {/* Dark Side */}
                {/* <img style={{width:"50%"}} src="https://fastly.syfy.com/sites/syfy/files/wire/legacy/rogue-one-darth-vader.jpg" alt="Darth Vader"/> */}
                {/* <img style={{width:"40%"}} src="https://wallpaperaccess.com/full/3121227.jpg" alt="Palpatine"/>
                <img style={{width:"35%"}} src="https://starwarstime.net/wp-content/uploads/2020/05/preview.jpg" alt="Darth Maul"/>
                <img style={{width:"50%"}} src="https://i.pinimg.com/originals/fe/15/1e/fe151ec8ca55870a51047ee6d5bd6df0.jpg" alt="Dooku"/>
                <img style={{width:"50%"}} src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/Count-Grievous.jpg" alt="Grievous"/>
                <img style={{width:"50%"}} src="https://www.fanthatracks.com/wp-content/uploads/2019/02/AoR-JangoFett-Cover_1.jpg" alt="Jango Fett"/> */}
            
            </div>
        );
    }

    export default Imperial;