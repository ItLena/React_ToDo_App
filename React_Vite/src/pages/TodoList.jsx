import ToDoItem from '../components/ToDoItem';
import { useState } from 'react';

const List = () => {
    let nextId = 3;
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
        { id: 0, action: "handla", date: "2024-10-08", time: "10:30"},
        { id: 1, action: "städa", date: "2024-10-10", time: "15:30"},
        { id: 2, action: "promenad", date: "2024-10-14", time: "11:30"},
    ]
   const [item, setItem] = useState('');
   const [todo, setTodo] = useState(todoArray)
   const addTodo =(e)=>{
    e.preventDefault();
    
    if (item !== ''){
    setTodo(
        [
        ...todo,{  
            id: nextId++,          
            action: item, 
            date: getCurrentDate(),
            time: getCurrentTime()
            
        }, 
    ]
   
);
setItem('');
    
   }};

   const Delete = (index) =>{

    let clone = [...todo]
    clone.splice(index, 1)
    setTodo(clone)
   }
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
                   {todo.map((x, i)=>(                
                    <ToDoItem 
                    key={x.id} 
                    todo={x}
                    index = {i}
                    deleteItem = {Delete}
                    />                 
                    ))}                    
                </tbody>
            </table>

            <form className="box" >
            <input type="text" onChange={(e)=> setItem(e.target.value)} value={item}/>
            <button type="submit" onClick={addTodo}>Add</button>
            </form>
        </>
    );
};

export default List;