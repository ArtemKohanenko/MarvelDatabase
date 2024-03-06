import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Card.module.scss'
import { ICharacter } from '../../types/character';
import { IListable } from '../../types/IListable';

const Card = (props: {item: IListable}) => {
    
    const item = props.item;

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(item.id)
    }
    
    return (
        <>
            <div className={classes.container} onClick={clickHandler}>
                <div className={classes.pictureContainer}>
                    <img src={item.picture} className={classes.picture}></img>
                </div>
                <div className={classes.textData}>
                    <span className={classes.name}>{item.name}</span>
                    <p className={classes.description}>{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card;