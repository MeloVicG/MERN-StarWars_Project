import { navigate,Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import axios from 'axios'
import '../static/style.css'

//practice material-UI stuff
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
// import { Paper, Card } from '@material-ui/core';
// import TextField from '@material-ui/core/Checkbox'

// import People from './People';
// import Republic from '../views/Republic'
// import Imperial from '../views/Imperial'

const Form = (props) => {
    const {addPadawan} = props;

    const [select, setSelect] = useState("people");
    const [padawan, setPadawan] = useState("padaWan");
    const [padawanName, setPadawanName] = useState("");
    const [height, setHeight] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [eyeColor, setEyeColor] = useState("");
    const [picture, setPicture] = useState("");
    // const [select, setSelect] = useState([])
    const [id, setId] = useState("id");
    const [triggerId, setTriggerId] = useState();

    const [lightSide, setLightSide] = useState(false);
    const [darkSide, setDarkSide] = useState(false);

    const [error, setError] = useState([]);

    const [backgroundImage, setBackgroundImage] = useState('');


//WDTD?? why do i have this?
    // useEffect(() => {
    //     axios.get(`http://localhost:8200/StarWars`)
    //         .then(res => {
    //             setPadawanName(res.data);
    //         });
    // }, []);

    const getApi = (e) => {
        e.preventDefault();
        navigate(`/${select}/${id}`)
    };


    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const addAPadawan = {
            padawanName,
            height,
            hairColor,
            eyeColor,
            picture
        };
        axios.post(`http://localhost:8200/StarWars/create`, addAPadawan) //${props.id}
            .then(response => {
                console.log("axios.post response: ", response)
                addPadawan(response.data)
            })
            .catch((error) => {
                console.log("this is the axios.post error part", error);
                // console.log(error.response.data) 
                // setError("we cant add anyone into the database?") //when we want to show error
                // const {errors} = error.response.data;
                // const messages = Object.keys(errors).map(error => errors[error].message);
                // setError(messages);
            })
    }

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

    //done with Enoch's help
    const jediArray = [
        {
            "trigger": 0,
            "name": "",
            "imgUrl": ""
        },
        {
            "trigger": 1,
            "name": "Luke",
            "imgUrl": "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/mw3sd1epiw7tsejmfqhg.jpg"
        },
        {
            "trigger": 10,
            "name": "Obiwan",
            "imgUrl": "https://img1.looper.com/img/gallery/obi-wan-kenobi-disney-release-date-cast-and-plot/intro-1566770638.jpg"
        },
        {
            "trigger": 11,
            "name": "Anakin",
            "imgUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf66d9d-86b4-476c-bc3f-c4c20b84aa45/db7ii86-6f1a3b32-95f7-4710-ac5a-b3d8805eec9a.jpg/v1/fill/w_900,h_819,q_75,strp/anakin_by_r_valle_db7ii86-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MTkiLCJwYXRoIjoiXC9mXC9mY2Y2NmQ5ZC04NmI0LTQ3NmMtYmMzZi1jNGMyMGI4NGFhNDVcL2RiN2lpODYtNmYxYTNiMzItOTVmNy00NzEwLWFjNWEtYjNkODgwNWVlYzlhLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uW14vMzl5pLx8bBjEkhlNaFWK_CZJZagJnd8hIABBQI"
        },
        {
            "trigger": 20,
            "name": "Yoda",
            "imgUrl": "https://i.insider.com/5e32f2a324306a19834af322?width=700"
        },
        {
            "trigger": 32,
            "name": "Qui-Gon",
            "imgUrl": "https://cdna.artstation.com/p/assets/images/images/023/600/434/large/angel-mavare-quigonjinnfinal.jpg?1579726687"
        },
        {
            "trigger": 51,
            "name": "Mace Windu",
            "imgUrl": "https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/mace-windu-sam-jackson.jpg"
        },
        {
            "trigger": 36,
            "name": "Jar Jar Binks",
            "imgUrl": "https://i.kym-cdn.com/photos/images/masonry/001/842/994/7dc.jpg"
        }
    ];

    const sithArray = [
        {
            "trigger": 0,
            "name": "",
            "imgUrl": ""
        },
        {
            "trigger": 4,
            "name": "Darth Vader",
            "imgUrl": "https://fastly.syfy.com/sites/syfy/files/wire/legacy/rogue-one-darth-vader.jpg"
        },
        {
            "trigger": 21,
            "name": "Emperor Palpatine",
            "imgUrl": "https://wallpaperaccess.com/full/3121227.jpg"
        },
        {
            "trigger": 44,
            "name": "Darth Maul",
            "imgUrl": "https://starwarstime.net/wp-content/uploads/2020/05/preview.jpg"
        },
        {
            "trigger": 67,
            "name": "Dooku",
            "imgUrl": "https://i.pinimg.com/originals/fe/15/1e/fe151ec8ca55870a51047ee6d5bd6df0.jpg"
        },
        {
            "trigger": 79,
            "name": "Grievous",
            "imgUrl": "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/Count-Grievous.jpg"
        },
        {
            "trigger": 69,
            "name": "Jango",
            "imgUrl": "https://www.fanthatracks.com/wp-content/uploads/2019/02/AoR-JangoFett-Cover_1.jpg"
        },
    ];

    const lightSideChange = (e) => {
        setId(e.target.value);
        var inputData = Number(e.target.value);

        //                             if obj.trigger(each object with key named "trigger") === inputData (what user selected on the website)
        let filteredJedi = jediArray.filter(obj => {
            return obj.trigger === inputData;
        });

        setBackgroundImage(filteredJedi[0].imgUrl);
        console.log("backgroundImage State: ", backgroundImage);
    }


    const darkSideChange = (e) => {
        setId(e.target.value);
        var inputDataDark = Number(e.target.value);

        let filteredSith = sithArray.filter(obj => {
            return obj.trigger === inputDataDark;
        });

        setBackgroundImage(filteredSith[0].imgUrl);
        console.log("backgroundImage State: ", backgroundImage);
    }



    //need to put this in an array somehow
    //so it can .map through and each name will display its characters picture
    const light_side = () => {
        return (
            <div>
                {/* value={mentor}???? */}
                {/* onChange={(e) => setId(e.target.value) */}
                <select className="lightSide" type="text" onChange={lightSideChange}>
                    <label htmlFor="id">ID:</label>
                    {/* not auto selected */}
                    <option value=""></option>
                    <option value="1">Luke</option>
                    <option value="10">ObiWan</option>
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
        return (
            <div>
                <select className="darkSide" type="text" onChange={darkSideChange}>
                    <option value=""></option>
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
                <img style={{ "width": "30%", border: "blue 3px solid" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mhcIEZ2_FjKTFgTZnDl52ViZJy83LEX5og&usqp=CAU" alt="Mando shoot him" />
            </div>
        )
    }

    return (

        <div id="container" style={{ width: "100%", backgroundImage: `url(${process.env.PUBLIC_URL + 'https://pbs.twimg.com/media/D8WvZo2XsAISzfb.jpg'}` }}>
            <div className="starWarsProfile">
                <motion.h1 animate={{ scale: 1.3, fontSize: 100, color: '#ff2994', x: 100, y: 5 }}>
                    StarWars Profile
                </motion.h1>
                {/* <img className="profilePicture" style={{ width: "20%" }} src="https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg" alt="profile pic" /> */}
                <img className="profilePicture" style={{ width: "20%" }} src={picture} alt="profile pic" />


                <div className="stats" style={{ background: "black", width: "40%", paddingTop: "10px", paddingTop: "10px", border: "blue solid 1px", opacity: "85%" }}>
                    <h2>Padawan:</h2>
                    <p>name:     {padawanName}</p>
                    <p>height:   {height}</p>
                    <p>hair color: {hairColor}</p>
                    <p>eye color:  {eyeColor}</p>
                    {/* <p>picture: {}</p> */}
                </div>
            </div>

            <div id="second_box">
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="statsInputs">
                            <h2>Create Padawan</h2>
                            <input placeholder="Name:" type="text" onChange={e => setPadawanName(e.target.value)} />

                            {/* not working? */}
                            {/* <TextField variant="outlined" color="secondary"  placeholder="Name:," type="text" onChange={e => setPadawanName(e.target.value)} /> */}
                            
                            <input placeholder="Height:" type="text" onChange={e => setHeight(e.target.value)} />
                            <input placeholder="Hair Color:" type="text" onChange={e => setHairColor(e.target.value)} />
                            <input placeholder="Eye Color:" type="text" onChange={e => setEyeColor(e.target.value)} />
                            <label htmlFor="">Style:</label>
                            <select placeholder="Picture:" type="text" onChange={e => setPicture(e.target.value)}>
                                <option value="">Select a Padawan</option>
                                <option value="https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg"> Winter Soldier</option>
                                <option value="https://i.pinimg.com/236x/c1/1c/fc/c11cfcff94cd433ca47ea27eb2d1f8cf--star-wars-jedi-star-wars-art.jpg"> Absolute Control</option>
                                <option value="https://pm1.narvii.com/6371/9687ae59a0c121b5e8995b6d8ea0d646924bd279_hq.jpg">Attack On Sith</option>
                                <option value="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/03/Jaina-Solo-Fel-Image-Credit-svenjaliv-at-deviantart.jpg?q=50&fit=crop&w=740&h=518">Punker</option>
                                <option value="https://i.pinimg.com/originals/70/af/34/70af34821fcc45a0018024a7dbe015a2.jpg">The Wise</option>
                            </select>
                            {/* onChange={e => setPicture(e.target.value)} */}
                        </div>
                        <br />
                        <br />
                        <motion.button 
                        initial={{scale:1.0}}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                        animate={{ scale: 1.2, fontSize: 100, color: '#ff2994', x: 100, y: 5 }}
                        > Enter into Database!</motion.button>
                    </form>
                    <br/>
                    <Link style={{color:"white"}} to={`/padawan/list`}>Padawans Detail</Link>
                </div>


                {/* material-UI button practice */}
                {/* <Button variant="contained" color="secondary">
                    Hello World
                </Button> */}

                <motion.div className="lightOrDark">
                    <p style={{color:"white"}}>drag button</p>

                    <motion.button
                        variant="contained"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, rotateZ: 360 }}
                        transition={{ duration: .5, type: 'spring', stiffness: 20 }}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        whileTap={{ scale: 0.9 }}
                        className="lightButton" onClick={() =>
                            setLightSide(!lightSide)}><h3>Light</h3>
                    </motion.button>
                    <br />
                    <motion.button
                        // initial={{opacity:0, x:'150vw'}}
                        // animate={{opacity:1, x:0 ,rotateZ: 360}}
                        // transition={{ stiffness:30, duration:2}}
                        // whileHover={{scale:1.1, 
                        //             textShadow:"0px 0px 8px rgb(255,255,255)",
                        //             boxShadow:"0px 0px 8px rgb(255,255,255)"}}
                        //white glow
                        // animate={{ stdDeviation: [0,5,0]}}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.0 }}
                        className="darkButton" onClick={() =>
                            setDarkSide(!darkSide)}><h3>Dark</h3>
                    </motion.button>
                </motion.div>

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

                    <Button
                    variant="contained" color="secondary"
                        // whileHover={{ scale: 1.5 }}
                        type='submit'
                        // style={{ width: "100px", height: "50px", marginBottom: "20px" }}
                    >Features
                        </Button>
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
            <motion.div initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                className="third_box" style={{ height: "650px" }}>
                {/* 650px */}
                <img style={{ width: "50%" }} src={backgroundImage} />
                {/* {lightSide ? <Republic backgroundImage={backgroundImage}/> : ""} */}
                {/* {darkSide ? <Imperial backgroundImage={backgroundImage}/> : ""} */}

            </motion.div>
        </div>
    )
}

export default Form;
