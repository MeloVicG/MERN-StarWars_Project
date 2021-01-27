import { navigate } from '@reach/router';
import React, { useState } from 'react';
import People from './People';

const Form = (props) => {
    const [select, setSelect] = useState("people")
    // const [select, setSelect] = useState([])
    const [id, setId] = useState("id")
    
const getApi = (e) => {
    e.preventDefault();
    navigate(`/${select}/${id}`)
};

    return(
        <div>
            <form onSubmit={getApi}>
                <h1>Star Wars API</h1>
                <label htmlFor="select">Search for: </label>
                    <select onChange={(e)=>setSelect(e.target.value)}>
                        {/* when people is entered an api for id should show */}
                        <option value="people">People</option>
                        {/* when planet is entered an api for id should show */}
                        <option value="planets">Planets</option>
                    </select>
                <br/>
                <br/>

                <label htmlFor="id">ID:</label>
                <input onChange={(e)=>setId(e.target.value)}/> {/* type="text" name="id"*/}
                <br/>
                <br/>

                <button type='submit'>Search</button>
                {/* because its inside a form dont need onClick */}
            </form>

        </div>
    )
}

export default Form;
