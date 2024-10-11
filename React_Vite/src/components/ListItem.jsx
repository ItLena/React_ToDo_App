import PropTypes from 'prop-types'
const Item = ({person})=> {

return (
    <>
    <tr>
        <td>{person.firstName}</td>
        <td>{person.age}</td>
        <td>{person.title}</td>
    </tr> 
    </>
);

} 
Item.propTypes = {
  person: PropTypes.any,
  firstName: PropTypes.string,
  age: PropTypes.number, 
  title: PropTypes.string
};

export default Item; 