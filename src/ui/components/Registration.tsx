import Title from "../atoms/Title";
import TextInput from "../atoms/TextInput";
import React, {useState} from "react";


const Registration = () => {
    const [password, setPassword] = useState("huy");

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

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

export default Registration