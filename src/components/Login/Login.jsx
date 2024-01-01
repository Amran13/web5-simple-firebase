import React, { useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.init';

const Login = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app)

    const provider = new GoogleAuthProvider( )

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
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
                user ? <button onClick={handleSignOut}> Sign Out </button> : <button onClick={handleGoogle}>Google Login</button>
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