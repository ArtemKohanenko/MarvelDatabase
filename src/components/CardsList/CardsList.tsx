import { NavLink } from 'react-router-dom';
import classes from './CardsList.module.scss'
import { ICharacter } from '../../types/character';
import { IListable } from '../../types/IListable';
import Card from '../Card/Card';

const CardsList = (props: {list: IListable[]}) => {

    const list = props.list;

    return (
        <>
            <div className={classes.container}>
                {list.map((item) => (
                    <div className={classes.cardSpace}>
                        <Card item={item}/>
                    </div>
                    
                ))}
            </div>
        </>
    )
}

export default CardsList;