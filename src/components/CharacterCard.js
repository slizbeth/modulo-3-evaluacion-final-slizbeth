import React from 'react';

const CharacterCard = props => {
    const {characterImage, characterName, characterSpecies} = props;
    return <div>
        <img src={characterImage} alt={characterName}/>
        <h4>{characterName}</h4>
        <p>{characterSpecies}</p>
    </div>
}

export default CharacterCard;