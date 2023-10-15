import RegistrationField from "../molecules/RegistrationField";
import {autoInjectable, container, inject, injectable, singleton} from "tsyringe";
import React, {useState} from "react";
import {ViewModel} from "@yoskutik/react-vvm";

@singleton()
class Person {
    text = 'hello'
    constructor() {
    }
}

@singleton()
class Person2{
    constructor(public person: Person) {

    }
}

@singleton()
class Child1 {}

@singleton()
class Child2 {}

@singleton()
class Parent {
    constructor(public readonly child1: Child1, public readonly child2: Child2) {}
}

const parent = container.resolve(Parent);


const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };
    // const person = container.resolve(Person2)

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    return (
        <div>
            <RegistrationField
                email={"person.person.text"}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
            />
        </div>
    )
}

export default Registration