import { NavLink, useParams } from 'react-router-dom';
import classes from './ComicDetail.module.scss'
import characters from '../../stores/MockCharacters';
import { ICharacter } from '../../types/character';
import { IComic } from '../../types/comic';
import comics from '../../stores/MockComics';


const ComicDetail = () => {

    let { id } = useParams()

    const emptyComic: IComic = {
        id: '',
        name: '',
        description: '',
        picture: '',
        charactersLinks: []
    } 

    const comic = comics.find((item) => item.id == id) ?? emptyComic

    return (
        <>
            <div className={classes.container}>
                <div className={classes.pictureContainer}>
                    <img src={comic.picture} className={classes.picture}></img>
                </div>
                <div className={classes.textData}>
                    <div className={classes.leftColumn}>
                        <span className={classes.name}>{comic.name}</span>
                        <span className={classes.description}>{comic.description}</span>
                    </div>
                    <div className={classes.rightColumn}>
                        <span className={classes.title}>Characters</span>
                        {
                            comic.charactersLinks.map((item) => (
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

export default ComicDetail;