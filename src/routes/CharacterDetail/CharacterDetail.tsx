import { NavLink, useParams } from 'react-router-dom';
import classes from './CharacterDetail.module.scss'
import characters from '../../stores/MockCharacters';
import { ICharacter } from '../../types/character';


const CharacterDetail = () => {

    let { id } = useParams()

    const emptyCharacter: ICharacter = {
        id: '',
        name: '',
        description: '',
        picture: '',
        comicsLinks: []
    } 

    const character = characters.find((item) => item.id == id) ?? emptyCharacter

    return (
        <>
            <div className={classes.container}>
                <div className={classes.pictureContainer}>
                    <img src={character.picture} className={classes.picture}></img>
                </div>
                <div className={classes.textData}>
                    <div className={classes.leftColumn}>
                        <span className={classes.name}>{character.name}</span>
                        <span className={classes.description}>{character.description}</span>
                    </div>
                    <div className={classes.rightColumn}>
                        <span className={classes.title}>Comics</span>
                        {
                            character.comicsLinks.map((item) => (
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={item.link}
                                    className={classes.link}
                                >{item.name}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CharacterDetail;