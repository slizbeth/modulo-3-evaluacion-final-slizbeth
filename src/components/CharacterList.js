import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
    const {allCharacteres, value} = props;
    return <ul>
        {allCharacteres
            .filter(character => value === '' || character.name.toLowerCase()
            .includes(value.toLowerCase()))
            .map((character) => <li key={character.id}>
            <Link to={`/character/${character.id}`} >
                <CharacterCard
                    characterImage ={character.image}
                    characterName = {character.name}
                    characterSpecies = {character.species}
                />
            </Link>
        </li>)}
    </ul>
}

export default CharacterList;