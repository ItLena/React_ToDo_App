import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">List</Link></li>
                {/* <li><Link to="/item">Item</Link></li> */}
            </ul>
        </nav>
        </>
    )
}

export default NavBar