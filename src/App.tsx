import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import TextInput from "./ui/atoms/TextInput";

function App() {
  const [message, setMessage] = useState("huy");

    const handleInputChange = (value: string) => {
        setMessage(value);
    };

  useEffect(() => {
    fetch("http://127.0.0.1:80")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
  }, []);

  return (
      <div className="App">
          <h1>{message}</h1>
      </div>
  );
}

export default App;
