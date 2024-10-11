import ListItem from '../components/ListItem';

import { useState } from 'react'

const List = () => {
   
    const personArray = [
        {firstName: "Ella", age: "23", title: "saler"},
        {firstName: "Nadja", age: "43", title: "doctor"},
    ]
   const [persons, setPersons] = useState(personArray);
   const addPerson =()=>{
    setPersons([
        ...persons, 
        {firstName: "Nina", age: "38", title: "assistent"}
    ]);
   };
    return(
        <>
            <h1>Person list</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Age</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                   {persons.map((p, index)=>(
                
                    <ListItem 
                    key={index} 
                    person={p}
                    />
                 
                    ))}
                </tbody>
            </table>
            <button onClick={addPerson}>Add</button>
        </>
    );
};

export default List;