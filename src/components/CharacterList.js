import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = props => {
    const {allCharacteres, value} = props;
    return <ul className="character__list">
        {allCharacteres
            .filter(character => value === '' || character.name.toLowerCase()
            .includes(value.toLowerCase()))
            .map((character) => <li className="character__li" key={character.id}>
            <Link className="character__link" to={`/character/${character.id}`} >
                <CharacterCard
                    characterImage ={character.image}
                    characterName = {character.name}
                    characterSpecies = {character.species}
                />
            </Link>
        </li>)}
    </ul>
}

// Así definimos las propTypes
CharacterList.propTypes = {
    allCharacteres: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
};

export default CharacterList;