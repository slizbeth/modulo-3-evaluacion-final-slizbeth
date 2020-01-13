import React from 'react';

const CharacterDetail = props => {
    console.log(props)
    // const {name, image, status, species} = props;
    return <div>
        <img src={props.character.image} alt={props.character.name}/>
        <h1>{props.character.name}</h1>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Originsss: {props.character.gender}</p>
        <p>Episodes: {props.character.url}</p>
    </div>
}

export default CharacterDetail;