import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import { motion } from "framer-motion"
import { Link } from "@reach/router"
import '../static/style.css'

const People = (props) => {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {                                                  //WDTD?
        axios.get(`https://swapi.dev/api/people/${props.id}`) //${props.id}
            .then(response => {
                console.log(response)
                setPeople(response.data)
            })
            .catch((error) => {
                console.log("this is the error PART", error);
                setError("R-2 WE HAVE A PROBLEM!!")
            })
    }, [props.id]);
    // if the [] is empty the useEffect cannot search id's


    const displayPeople = () => {
        return (
            <div className="displayStats" style={{color:"white",margin:"0px 250px", marginTop:"70px", background:"black", border:"blue solid 1px", opacity:"85%"}} >
                <h1>{people.name}</h1>
                <h3>Height: <span>{people.height}</span>cm</h3>
                {/* <h3>Weight: {people.weight}kg</h3>  doesnt work??*/} 
                <h3>Hair Color: {people.hair_color}</h3>
                <h3>Eye Color: {people.eye_color}</h3>
                <h3>light Saber Color: {people.skin_color}</h3>
            </div>
        )
    }

    

    const displayError = () => {
        return (
            <div>
                <h1 style={{color:"white"}}>{error}</h1>
                <img style={{"width": "30%",border:"blue 3px solid"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mhcIEZ2_FjKTFgTZnDl52ViZJy83LEX5og&usqp=CAU" alt="Mando shoot him"/>
            </div>
        )
    }

        return (
            <div className="profile_container" style={{height:"1000px",width:"100%", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'})`}}>

                <Link style={{color:"green",marginLeft:"100px"}}to="/">go back</Link>
                <div>
                    {/* <Form/> */}
                    {displayPeople()}
                    {error ? displayError() : ""}
                </div>
            </div>
        );
    }

    export default People;