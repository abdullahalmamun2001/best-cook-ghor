import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./../../firebase/firebase.config.js"

export const AuthContext=createContext(null)
// const {user,setUser}=useState(null)

const AuthPRovider = ({children}) => {
    const [user,setUser]=useState('');
    const [loader,setLoader]=useState(true);

    const auth=getAuth(app)
    const provider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const githubSignIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const googleRegister=()=>{
        return signInWithPopup(auth,provider)
    }
    

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(currentUser)
        })
        return()=>{
            return unsubscribe;
        }
    },[]);

    const logOut=()=>{
        return signOut(auth)
    }
    const authInfo={user,loader,createUser,googleRegister,signIn,githubSignIn,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPRovider;