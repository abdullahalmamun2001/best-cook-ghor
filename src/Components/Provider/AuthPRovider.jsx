import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from "./../../firebase/firebase.config.js"

export const AuthContext=createContext(null)
// const {user,setUser}=useState(null)

const AuthPRovider = ({children}) => {

    const auth=getAuth(app)
    const provider=new GoogleAuthProvider();

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleRegister=()=>{
        return signInWithPopup(auth,provider)
    }
    
    const authInfo={createUser,googleRegister,signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPRovider;