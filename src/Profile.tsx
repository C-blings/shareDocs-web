import React from 'react';
import './App.css';
import {useParams} from "react-router-dom";

function Profile() {
  const params = useParams()

  console.log(params)

  return (
      <div className="App">
        {params.id}
      </div>
  );
}

export default Profile;
