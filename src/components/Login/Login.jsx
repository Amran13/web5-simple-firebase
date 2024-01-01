import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.init';

const Login = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleLogin = (params) => {
        signInWithPopup(auth, params)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser); 
            setUser(loggedInUser)
        })
        .catch(error => console.log(error.message))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            setUser(null)
            console.log('sign out successful')
            console.log(result)
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {
                user ? <button onClick={handleSignOut}> Sign Out </button> : <div>
                    <button onClick={ () => handleLogin(googleProvider)}>Google Login</button>
                    <button onClick={ () => handleLogin(githubProvider)}>Github Login</button>
                     </div>
            }
            
            {
                user ? <div>
                    <h2> {user.displayName} </h2> 
                <img src={user.photoURL}></img>
                     </div>  : ''
            }
            {/* <h2>User : {user ?  user.displayName : ''} </h2> */}
        </div>
    );
};

export default Login;