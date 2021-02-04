import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import axios from 'axios'
import '../static/style.css'

import People from './People';
import Republic from '../views/Republic'
import Imperial from '../views/Imperial'

const Form = (props) => {
    const [select, setSelect] = useState("people")
    const [padawan, setPadawan] = useState("padaWan")
    const [padawanName, setPadawanName] = useState("")
    const [height, setHeight] = useState("")
    const [hairColor, setHairColor] = useState("")
    const [eyeColor, setEyeColor] = useState("")
    const [picture, setPicture] = useState("")
    // const [select, setSelect] = useState([])
    const [id, setId] = useState("id")

    const [lightSide, setLightSide] = useState(false)
    const [darkSide, setDarkSide] = useState(false)

    const [error,setError] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8200/StarWars`)
            .then(res => {
                setPadawanName(res.data);
            });
    }, []);

    const getApi = (e) => {
        e.preventDefault();
        navigate(`/${select}/${id}`)
    };

    const addAPadawan = {
        padawanName,
        height,
        hairColor,
        eyeColor,
        picture
    };

    useEffect(() => {                                                  //WDTD?
        axios.post(`http://localhost:8200/StarWars/create`, addAPadawan) //${props.id}
            .then(response => {
                console.log(response)
                setPadawan(response.data)
            })
            .catch((error) => {
                console.log("this is the axios.post error part", error);
                setError("R-2 WE HAVE A PROBLEM!!") //when we want to show error
            })
    }, []);

    //more complicated way of showing mentors
    // const chooseSideLight = (e) => {
    //     e.preventDefault();
    //     console.log(lightSide)
    //     setLightSide(true)
    // }
    // const chooseSideDark = (e) => {
    //     e.preventDefault();
    //     console.log(darkSide)
    //     setDarkSide(true)
    // }


    //need to put this in an array somehow
    //so it can .map through and each name will display its characters picture
    const light_side = () => {
        return(
            <div>
                            {/* value="mentor"???? */}
                <select className="lightSide" type="text" onChange={(e) => setId(e.target.value)}>
                    <label htmlFor="id">ID:</label>
                        <option value="1" selected>Luke</option>
                        <option value="10">Obiwan</option>
                        <option value="11">Anakin</option>
                        <option value="20">Yoda</option>
                        <option value="32">Qui-Gon</option>
                        <option value="51">Mace Windu</option>
                        <option value="36">JarJar Binks</option>
                </select>
            </div>
        )
    }
    const dark_side = () => {
        return(
            <div>
                <select className="darkSide" type="text" onChange={(e) => setId(e.target.value)}>
                    <option value="4">Darth Vader</option>
                    <option value="21">Emperor Palpatine</option>
                    <option value="44">Darth Maul</option>
                    <option value="67">Dooku</option>
                    <option value="79">Grievous</option>
                    <option value="69">Jango Fett</option>
                </select>
            </div>
        )
    }

    const displayError = () => {
        return (
            <div>
                <h1>{error}</h1>
                <img style={{"width": "30%",border:"blue 3px solid"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mhcIEZ2_FjKTFgTZnDl52ViZJy83LEX5og&usqp=CAU" alt="Mando shoot him"/>
            </div>
        )
    }

    return (
        <div id="container" style={{width:"100%", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'})`}}>

            <div className="starWarsProfile">
                <motion.h1 animate={{ x: 50 }}>
                    StarWars Profile
                </motion.h1>
                {/* <img className="profilePicture" style={{ width: "20%" }} src="https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg" alt="profile pic" /> */}
                <img className="profilePicture" style={{ width: "20%" }} src={picture} alt="profile pic" />


                <div className="stats" style={{background:"black", width:"40%", paddingTop:"10px", paddingTop:"10px", border:"blue solid 1px", opacity:"85%"}}>
                    <h2>Padawan:</h2>
                    <p>name:     {padawanName}</p>
                    <p>height:   {height}</p>
                    <p>hair color: {hairColor}</p>
                    <p>eye color:  {eyeColor}</p>
                    {/* <p>picture: {}</p> */}
                </div>
            </div>
            
                <div id="second_box">

                    <form>
                        <div className="statsInputs">
                            <h2>Create Padawan</h2>
                            <input placeholder="Name:" type="text" onChange={e => setPadawanName(e.target.value)} />
                            <input placeholder="Height:" type="text" onChange={e => setHeight(e.target.value)}/>
                            <input placeholder="Hair Color:" type="text" onChange={e => setHairColor(e.target.value)}/>
                            <input placeholder="Eye Color:" type="text" onChange={e => setEyeColor(e.target.value)}/>
                            <label htmlFor="">Style:</label>
                            <select placeholder="Picture:" type="text" onChange={e => setPicture(e.target.value)}>
                                            <option value="https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg"> Winter Soldier</option>
                                            <option value="https://i.pinimg.com/236x/c1/1c/fc/c11cfcff94cd433ca47ea27eb2d1f8cf--star-wars-jedi-star-wars-art.jpg"> Absolute Control</option>
                                            <option value="https://pm1.narvii.com/6371/9687ae59a0c121b5e8995b6d8ea0d646924bd279_hq.jpg">Attack On Sith</option>
                                            <option value="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/03/Jaina-Solo-Fel-Image-Credit-svenjaliv-at-deviantart.jpg?q=50&fit=crop&w=740&h=518">Punker</option>
                                            <option value="https://i.pinimg.com/originals/70/af/34/70af34821fcc45a0018024a7dbe015a2.jpg">The Wise</option>
                            </select>
                            {/* onChange={e => setPicture(e.target.value)} */}
                        </div>
                        <br/>
                        <br/>
                        {/* <button style={{marginLeft:"500px"}}> Enter the Thunderdome!</button> */}
                    </form>

                    <div className="lightOrDark">
                        <button className="lightButton" onClick={() => setLightSide(!lightSide)}><h3>Light</h3></button>
                        <br />
                        <button className="darkButton" onClick={() => setDarkSide(!darkSide)}><h3>Dark</h3></button>
                    </div>

                    <form className="chooseBar" onSubmit={getApi}>
                        
                        <div className="chooseMentor">
                            <label htmlFor="select">Choose your Master </label>
                            <br />
                            <br />
                        {/* shows mentors from light and dark side  */}
                            <label htmlFor="id"></label>
                            {lightSide ? light_side() : ""}
                            {darkSide ? dark_side() : ""}
                        </div>
                        <br />

                        <button type='submit' 
                                style={{width:"100px", height:"50px", marginBottom:"20px"}}
                                >Features</button>
                        {/* because its inside a form dont need onClick */}
                    </form>
                </div>
                
                <div className="errorBox">
                {/* {
                    error ? displayError() : ""
                } */}
                {/* {
                error.map((message,i) =>
                <p style={{color:'red'}} key={i}>{message}</p>)
                } */}
                

                </div>

                {/* <div className="test_box">
                    {
                        .map((val, idx) =>
                        <section key={idx}>
                            <h3>Crewz~Mate</h3>
                            {val.name}
                        </section>)
                    }
                </div> */}


                {/* picture box */}
                <div className="third_box" style={{height:"auto"}}> 
                                                        {/* 650px */}
                    {lightSide ? <Republic/> : ""}
                    {darkSide ? <Imperial/> : ""}

                </div>
        </div>
    )
}

export default Form;
