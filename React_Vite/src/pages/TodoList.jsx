import ToDoItem from '../components/ToDoItem';
import { useState } from 'react';

const List = () => {
   const today = new Date();
    let getCurrentDate = () =>{
        const year = today.getFullYear();
        const month = today.getMonth()+1;
        const date = today.getDate();
        return `${year}-${month}-${date}`
    }
    let getCurrentTime = () =>{
       const hours = today.getHours() 
       const minutes = today.getMinutes() 
       return `${hours}:${minutes}`

    }
    const todoArray = [
        { action: "handla", date: "2024-10-08", time: "10:30"},
        { action: "städa", date: "2024-10-10", time: "15:30"},
    ]
   const [item, setItem] = useState('');
   const [todo, setTodo] = useState(todoArray)
   const addTodo =(e)=>{
    e.preventDefault();
    setTodo([
        ...todo,{            
            action: item, 
            date: getCurrentDate(),
            time: getCurrentTime()
        }, 
    ]);
    
   };
    return(
        <>
            <h1>To Do list</h1>
            <table>
                <thead>
                    <tr>
                        <th>To do</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                   {todo.map((x, index)=>(
                
                    <ToDoItem 
                    key={index} 
                    todo={x}
                    />                 
                    ))}
                </tbody>
            </table>

            <div className="box">
            <input onChange={(e)=> setItem(e.target.value)} value={item}/>
            <button onClick={addTodo}>Add</button>
            </div>
        </>
    );
};

export default List;