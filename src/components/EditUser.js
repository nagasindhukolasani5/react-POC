import React from 'react';
import {Link} from 'react-router-dom'

export const EditUser = () =>{
    return(
        <div>
            <form>
               
                    <label>Name</label>
                <input type="text" placeholder="Enter your Name"/>
                <input type="submit" value="Edit"/>
                <button><Link to="/Home">Cancel</Link></button>
            </form>
        </div>
    )
}