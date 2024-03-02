import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss'

const Header = () => {

    return (
        <>
            <header className={classes.container}>
                <img className={classes.logo}src='src/assets/Marvel_Logo.svg'></img>
                <nav>
                    <ul className={classes.links}>
                        <li>
                        <NavLink
                                to='characters' className={
                                ({ isActive }) =>
                                    isActive ? classes.linkActive : classes.link
                                }>
                                Characters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='comics' className={
                                ({ isActive }) =>
                                    isActive ? classes.linkActive : classes.link
                                }>
                                Comics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;