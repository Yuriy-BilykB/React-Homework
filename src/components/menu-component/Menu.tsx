import {Link} from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <ul>
                <li> <Link to={'/'}>Home</Link></li>
                <li><Link to={'users-page'}>Users Page</Link></li>
                <li><Link to={'posts-page'}>Posts Page</Link></li>
            </ul>
        </div>
    )
}
export default Menu;