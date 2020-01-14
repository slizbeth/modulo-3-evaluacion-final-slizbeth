import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
    const {value} = props;
    const getInputValue = evt => {
        props.getInputValue(evt.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault()
    };
    
    return <div>
         <form onSubmit={onSubmitHandler}>
            <label>
                <input className="form__input" type="text" placeholder='Introduce tu personaje&#x1f50e;' onChange={getInputValue} name="character" value={value}/>
            </label>
        </form>
    </div>
}

// Así definimos las propTypes
Search.propTypes = {
    value: PropTypes.string.isRequired
};

export default Search;