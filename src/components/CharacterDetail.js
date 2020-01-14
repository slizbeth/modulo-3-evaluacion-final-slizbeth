import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    if(props.character !== undefined){
        const { image, name, status, species, origin, episode } = props.character;
        return <section>
            <Link className="character__link" to='/'>
                <span className="detail_back"><i className="fas fa-hand-point-left"></i></span>
            </Link>
            <div className="character__detail">
                <img className="detail__img" src={image} alt={name}/>
                <div className="detail__info">
                    <h1>{name}</h1>
                    <p>Status: {status === 'Alive' ? <i className="fas fa-heartbeat icon_alive"></i> : <i className="fas fa-skull-crossbones icon_dead"></i>}</p>
                    <p>Species: {species === 'Human' ? <i className="fas fa-baby icon_human"></i> : <i className="fab fa-reddit-alien icon_alien"></i>}</p>
                    <p>Origin: {origin.name}</p>
                    <p>Episodes: {episode.length}</p>
                </div>
            </div>  
            </section>  
    } else {
        return(
            <p>Ups...problemas técnicos, lo siento...</p>
        )
    }
}

CharacterDetail.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.number,
    episode: PropTypes.string,
};

export default CharacterDetail;