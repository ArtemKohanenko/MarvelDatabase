import Card from '../../components/Card/Card';
import CardsList from '../../components/CardsList/CardsList';
import CharactersList from '../../components/CharactersList/CharactersList';
import { ICharacter } from '../../types/character';
import classes from './Characters.module.scss'

const Characters = () => {

    const counter = 1562

    const characters: ICharacter[] = [
        {
            id: '1',
            name: 'Hero 1',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '2',
            name: 'Hero 2',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '3',
            name: 'Hero 3',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '4',
            name: 'Hero 4',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '5',
            name: 'Hero 5',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '6',
            name: 'Hero 6',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '7',
            name: 'Hero 7',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '8',
            name: 'Hero 8',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
        },
        {
            id: '9',
            name: 'Hero 9',
            description: 'Some description.',
            picture: 'src/assets/picture_example.jpg',
            comicsLinks: [
                {
                    name: 'The Spectacular Spider-Men (2024) #1',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #2',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                },
                {
                    name: 'The Spectacular Spider-Men (2024) #3',
                    link: 'https://www.marvel.com/comics/issue/110549/the_spectacular_spider-men_2024_1'
                }
            ]
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
