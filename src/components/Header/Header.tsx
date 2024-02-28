import { Link } from 'react-router-dom';
import classes from './Header.module.scss'

const Header = () => {

    return (
        <>
            <header className={classes.container}>
                <img className={classes.logo}src='src/assets/Marvel_Logo.svg'></img>
                <nav>
                    <ul className={classes.links}>
                        <li>
                            <Link to='characters' className={classes.link}>Characters</Link>
                        </li>
                        <li>
                            <Link to='comics' className={classes.link}>Comics</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;