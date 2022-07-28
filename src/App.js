import './App.css';
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
      //Google signin
      const provider = new GoogleAuthProvider();
      const handleGoogleSignIn = () => {
          signInWithPopup(auth, provider)
              .then((res) => {
                  console.log(res.user)
                  const user = res.user
                  setUser(user);
                  console.log(user);
              }).catch((error) => {
                  console.log(error);
              });
          }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
    </div>
  );
}

export default App;
