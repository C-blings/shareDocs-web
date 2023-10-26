import React, {ChangeEvent} from 'react';

const TextInput = ({
    value,
    onChange,
    placeholder,
    type = "text"
} : {value: string; onChange: Function; placeholder: string; type?: string}) => {

    const handleChange = ({e} : {e: React.ChangeEvent<HTMLInputElement>}) => {
        onChange(e.target.value);
    };

    return(
        <div>
            <input
                type={type}
                value={value}
                onChange={() => handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextInput;