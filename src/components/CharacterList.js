import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const {allCharacteres, value} = props;
    return <ul>
        {allCharacteres
            //.filter(character => value === '' || character.name.toLowerCase()
            //.includes(value.toLowerCase()))
            .map((character) => <li key={character.id}>
            <CharacterCard
                characterImage ={character.image}
                characterName = {character.name}
                characterSpecies = {character.species}
            />
        </li>)}
    </ul>
}

export default CharacterList;