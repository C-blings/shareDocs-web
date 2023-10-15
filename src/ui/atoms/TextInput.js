import React from 'react';

const TextInput = ({
    value,
    onChange,
    placeholder,
    type = "text"
}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return(
        <div>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextInput;