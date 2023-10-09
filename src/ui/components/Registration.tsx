import React, {useState} from "react";
import RegistrationField from "../molecules/RegistrationField";


const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    return (
        <div>
            <RegistrationField
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
            />
        </div>
    )
}

export default Registration