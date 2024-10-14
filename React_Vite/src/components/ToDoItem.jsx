import PropTypes from 'prop-types'
const ToDoItem = ({todo, deleteItem, index})=> {

 
return (
    <>
    <tr>
        <td>{todo.action}</td>
        <td>{todo.date}</td>
        <td>{todo.time}</td>
        <td><button onClick={()=>deleteItem(index)}>Delete</button></td>
    </tr> 
    </>
);

} 
ToDoItem.propTypes = {
  todo: PropTypes.any,
  index: PropTypes.number,
  deleteItem: PropTypes.any,
  action: PropTypes.string,
  date: PropTypes.any,
  time: PropTypes.any
};

export default ToDoItem; 