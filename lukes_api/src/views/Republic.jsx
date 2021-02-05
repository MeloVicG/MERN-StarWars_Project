import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Form from './Form';
// import { motion } from "framer-motion"
// import { Link } from "@reach/router"
import '../static/style.css'

const Republic = (props) => {
    const {backgroundImage} = props;
    const [people, setPeople] = useState([]);

    // useEffect(() => {                                                  
    //     axios.get(`https://swapi.dev/api/people/${props.id}`)
    //         .then(response => {
    //             console.log(response)
    //             setPeople(response.data)
    //         })
    //         .catch((error) => {
    //             console.log("this is the error PART", error);
    //             // setError("R-2 WE HAVE A PROBLEM!!")
    //         })
    // }, [props.id]);
    // if the [] is empty the useEffect cannot search id's


        return (
            <div className="picture_container">

            {/* LightSide */}
                <img style={{width:"50%"}} src={backgroundImage}/>
                        {/* Luke */}
                        {/* <img style={{width:"50%"}} src="https://img1.looper.com/img/gallery/obi-wan-kenobi-disney-release-date-cast-and-plot/intro-1566770638.jpg" alt="ObiWan"/> */}
                        {/* ObiWan */}
                        {/* <img style={{width:"50%"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf66d9d-86b4-476c-bc3f-c4c20b84aa45/db7ii86-6f1a3b32-95f7-4710-ac5a-b3d8805eec9a.jpg/v1/fill/w_900,h_819,q_75,strp/anakin_by_r_valle_db7ii86-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MTkiLCJwYXRoIjoiXC9mXC9mY2Y2NmQ5ZC04NmI0LTQ3NmMtYmMzZi1jNGMyMGI4NGFhNDVcL2RiN2lpODYtNmYxYTNiMzItOTVmNy00NzEwLWFjNWEtYjNkODgwNWVlYzlhLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uW14vMzl5pLx8bBjEkhlNaFWK_CZJZagJnd8hIABBQI" alt="Anakin"/> */}
                        {/* Anakin */}
                        {/* <img style={{width:"40%"}} src="https://i.insider.com/5e32f2a324306a19834af322?width=700" alt="Yoda Im not"/> */}
                        {/* yoda */}
                        {/* <img style={{width:"50%"}} src="https://cdna.artstation.com/p/assets/images/images/023/600/434/large/angel-mavare-quigonjinnfinal.jpg?1579726687" alt="Qui-Gon"/> */}
                        {/* qui-gon */}
                        {/* <img style={{width:"50%"}} src="https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/mace-windu-sam-jackson.jpg" alt="Mace-Windu"/> */}
                        {/* Jar Jar */}
                        {/* <img style={{width:"40%"}} src="https://i.kym-cdn.com/photos/images/masonry/001/842/994/7dc.jpg" alt="Jar Jar"/> */}

                
            </div>
        );
    }

    export default Republic;