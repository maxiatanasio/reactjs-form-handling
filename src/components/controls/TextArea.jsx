import React from 'react';

const TextArea = ({name, value, handleChange}) => {
    return <textarea name={name} onChange={e => handleChange(e.target.value, name)}>{value}</textarea>
}

export default TextArea;