import React from 'react';

const Select = ({name, value, handleChange, children}) => {
    return <select name={name} value={value} onChange={e => handleChange(e.target.value, name)}>{children}</select>
}

export default Select;