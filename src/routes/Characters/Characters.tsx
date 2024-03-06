import Card from '../../components/Card/Card';
import CardsList from '../../components/CardsList/CardsList';
import CharactersList from '../../components/CharactersList/CharactersList';
import { ICharacter } from '../../types/character';
import classes from './Characters.module.scss'

const Characters = () => {

    const counter = 1562

    const characters: ICharacter[] = [
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
        {
            id: '123',
            name: 'Spider-Man',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg'
        },
]

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
                <CardsList list={characters}/>
            </div>

            
        </>
    )
}

export default Characters;
