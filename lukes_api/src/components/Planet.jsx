import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';

const Planets = (props) => {
    const [planet, setPlanet] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {                                                 
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {
                console.log(response)
                setPlanet(response.data)
            })
            .catch((error) => {
                console.log("this is the error PART", error);
                setError("R-2 WE HAVE A PROBLEM!!")
            })
    }, [props.id]);

    const displayPlanets = () => {
        return (
            <div className="displayStats">
                <h2>{planet.name}</h2>
                <p>Height: {planet.orbital_period}</p>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
        )
    }

    const displayError = () => {
        return (
            <div>
                <h1>{error}</h1>
                <img style={{"width": "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mhcIEZ2_FjKTFgTZnDl52ViZJy83LEX5og&usqp=CAU" alt="error image"/>

            </div>
        )
    }

    return(
        <div>
            <Form/>
            {displayPlanets()}
            {displayError()}
        </div>
    )
}

export default Planets