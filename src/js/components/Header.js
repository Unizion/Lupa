import { NavLink } from "react-router-dom";

import classes from './Header.module.css'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/'>Entrance</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/vault'>Vault</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    ) 
}

export default Header;