import React from "react";
import { useEffect, useState } from "react";

import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports'

Amplify.configure(awsExports);
Auth.configure(awsExports);

function App() {

  const [number, setNumber] = useState([])

  const fetchNumber = () => {
    fetch("https://x3ul0hvw2l.execute-api.us-east-1.amazonaws.com/prod")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setNumber(data)
      })
  }

  useEffect(() => {
    fetchNumber()
  }, [])


  return (
    <div className="App">
      {"The random number is: " + number}
    </div>
  );
}

export default withAuthenticator(App);
