import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const {characterImage, characterName, characterSpecies} = props;
    return <>
        <img className="card__img" src={characterImage} alt={characterName}/>
        <h4>{characterName}</h4>
        <p>{characterSpecies}</p>
    </>
}
// Así definimos las propTypes
CharacterCard.propTypes = {
    characterImage: PropTypes.string,
    characterName: PropTypes.string,
    characterSpecies: PropTypes.string
};

export default CharacterCard;