import React from 'react';

const Input = ({name ,value, handleChange}) => {
    return <input name={name} type="text" value={value} onChange={e => handleChange(e.target.value, name)} />
}

export default Input;