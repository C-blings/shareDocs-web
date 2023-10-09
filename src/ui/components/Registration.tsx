import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import React, {useState} from "react";
import RegistrationField from "../molecules/RegistrationField";


const Registration = () => {
    const [password, setPassword] = useState("huy");

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    return (
        <div>
            <RegistrationField password={password} handlePasswordChange={handlePasswordChange}/>
        </div>
    )
}

export default Registration