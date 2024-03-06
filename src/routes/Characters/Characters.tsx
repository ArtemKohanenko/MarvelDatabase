import CharactersList from '../../components/CharactersList/CharactersList';
import classes from './Characters.module.scss'

const Characters = () => {

    const counter = 1562

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.searchBlock}>
                    <div className={classes.titleContainer}>
                        <span className={classes.title}>Characters</span>
                        <span className={classes.counter}>({counter})</span>
                    </div>
                    <div className={classes.fieldContainer}>
                        <input className={classes.searchField} type='text' placeholder='Search for Characters by Name'></input>
                        <button className={classes.searchButton}>SEARCH</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Characters;
