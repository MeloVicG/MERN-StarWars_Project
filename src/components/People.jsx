import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';

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
            <div className="displayStats">
                <h2>{people.name}</h2>
                <p> Height: <span>{people.height}</span>cm</p>
                <p>Mass: {people.weight}kg</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Eye Color: {people.eye_color}</p>
                <p>Skin Color: {people.skin_color}</p>
            </div>
        )
    }

    const displayError = () => {
        return (
            <div>
                <h1>{error}</h1>
                <img style={{"width": "50%"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg" alt="Mando shoot him"/>
            </div>
        )
    }

        return (
            <div>
                <Form/>
                {displayPeople()}
                {displayError()}
            </div>
        );
    }

    export default People;