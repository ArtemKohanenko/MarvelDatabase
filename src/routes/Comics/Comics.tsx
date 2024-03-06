import CardsList from '../../components/CardsList/CardsList';
import comics from '../../stores/MockComics';
import classes from './Comics.module.scss'

const Comics = () => {

    const counter = 1562

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.searchBlock}>
                    <div className={classes.titleContainer}>
                        <span className={classes.title}>Comics</span>
                        <span className={classes.counter}>({counter})</span>
                    </div>
                    <div className={classes.fieldContainer}>
                        <input className={classes.searchField} type='text' placeholder='Search for Comics by Name'></input>
                        <button className={classes.searchButton}>SEARCH</button>
                    </div>
                </div>
                <CardsList list={comics}/>
            </div>

        </>
    )
}

export default Comics;
