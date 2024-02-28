import classes from './Header.module.scss'

const Header = () => {

    return (
        <>
            <header className={classes.container}>
                <img className={classes.logo}src='src/assets/Marvel_Logo.svg'></img>
                <div className={classes.tabs}>
                    <a className={classes.tab}>Characters</a>
                    <a className={classes.tab}>Comics</a>
                </div>
            </header>
        </>
    )
}

export default Header;