import React,{useState, useEffect} from 'react';
import data from './data.json';
import axios from 'axios';

export const Heading = () => {
    const [wholedata,setWholedata]=useState(data);
    const [newdata,setNewdata]=useState({
        "name":"",
        "contact":""
    });
    useEffect(()=>{
//axios.get("URL").then((response)=>{setWholedata(response)})
    },[])
    const handleChange = (event) => {
        event.preventDefault();
        const fieldName=event.target.getAttribute("name");
        const fieldValue=event.target.value;
        let addData={...newdata};
        addData[fieldName] = fieldValue;
        setNewdata(addData);

    }
    const addNewData = (event) => {
        event.preventDefault();
        const newContact={
            "name":newdata.name,
            "contact":newdata.contact
        }
        const newContacts=[...wholedata,newContact]
        setWholedata(newContacts);
    }
    return(
        <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Contact</th>
                </tr>
            </thead>
            <tbody>
            {wholedata.map((item)=>(
                <tr>
                <td key={item.name}>{item.name}</td>
                <td key={item.contact}>{item.contact}</td>
                </tr>
            ))}
            </tbody>
            
        </table>

        <div>
            <form>
                <input name="name" type="text" onChange={handleChange}/>
                <input name="contact" type="number" onChange={handleChange}/>
                <input type="submit" value="Add" onClick={addNewData}/>
            </form>
        </div>
        </div>
    )
}
