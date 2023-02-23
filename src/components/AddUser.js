import React from 'react';
import {Link} from 'react-router-dom'

export const AddUser = () =>{
    return(
        <div>
            <form>
               
                    <label>Name</label>
                <input type="text" placeholder="Enter your Name"/>
                <input type="submit" value="Button"/>
                <button><Link to="/Home">Cancel</Link></button>
            </form>
        </div>
    )
}