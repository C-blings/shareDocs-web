import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

const TextInput = ({
    value,
    onChange
}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return(
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput;