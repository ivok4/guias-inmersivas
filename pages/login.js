import {Layout, Login as LoginContainer} from '../containers'
import {LayoutAbm, Abm as AbmContainer} from '../containers'
import React, { useState, useEffect } from "react";
import firebase from '../lib/fire';
import { useRouter } from 'next/router'


export default function Login({}) {
//cambio de paginas 
const router = useRouter()

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount ] = useState(true);

const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}
  const handleLogin = () =>{
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
        }
      })
  }
  const handleLogout = () =>{
    firebase.auth().signOut();
  }
  const authListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
        //router.push("./abm")
      }
      else{
        setUser('');
        //router.push("./login")
      }
    })
  }
  useEffect(() => {
    authListener();
  }, [])

  
  return (
    
    <>
       {user ? (
        <LayoutAbm handleLogout={handleLogout}>
          <AbmContainer />
        </LayoutAbm>
      ): ( 
      <Layout>
        <LoginContainer 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        </Layout>
       )} 
    </>
  )
  
}
