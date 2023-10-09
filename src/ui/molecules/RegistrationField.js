import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import React, {useState} from "react";


const RegistrationField = ({
        password,
        handlePasswordChange
}) => {

    return (
        <div>
            <Title text={"Registration"}/>
            <TextInput
                value={password}
                onChange={handlePasswordChange}
            />
            <TextInput
                value={password}
                onChange={handlePasswordChange}
            />
            <TextInput
                value={password}
                onChange={handlePasswordChange}
            />
        </div>
    )
}

export default RegistrationField