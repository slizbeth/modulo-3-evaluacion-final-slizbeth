import React from 'react';

const Filters = props => {
    const {value} = props;
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    
    return <div>
         <form>
            <label>
                <input type="text" onChange={handleChange} name="character" value={value}/>
            </label>
        </form>
    </div>
}

export default Filters;