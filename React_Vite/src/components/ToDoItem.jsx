import PropTypes from 'prop-types'
const ToDoItem = ({todo})=> {

return (
    <>
    <tr>
        <td>{todo.action}</td>
        <td>{todo.date}</td>
        <td>{todo.time}</td>
        <td><button>Delete</button></td>
    </tr> 
    </>
);

} 
ToDoItem.propTypes = {
  todo: PropTypes.any,
  action: PropTypes.string,
  date: PropTypes.date,
  time: PropTypes.date
};

export default ToDoItem; 