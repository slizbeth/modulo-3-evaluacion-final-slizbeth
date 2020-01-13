import React from 'react';

const CharacterDetail = props => {
    const {name, image, status, species, episode} = props.character;
    return <div>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {props.origin.name}</p>
        <p>Episodes: {episode}</p>
    </div>
}

export default CharacterDetail;