import PropTypes from 'prop-types'
const ToDoItem = ({todo, deleteItem, index})=> {

 
return (
    <>
    <tr>
        <td><input type="checkbox"></input></td>
        <td>{todo.action}</td>
        <td>{todo.date}</td>
        <td>{todo.time}</td>
        <td><button className="danger" onClick={()=>deleteItem(index)}>Delete</button></td>
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