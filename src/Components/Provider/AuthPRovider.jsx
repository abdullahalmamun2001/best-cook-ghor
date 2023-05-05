import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "./../../firebase/firebase.config"

export const AuthContext=createContext(null)
// const {user,setUser}=useState(null)

const AuthPRovider = ({children}) => {
    const [user,setUser]=useState('');
    const [loader,setLoader]=useState(true);

    const auth=getAuth(app)
    const provider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoader(true)
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
            setLoader(false)
        })
        return()=>{
            return unsubscribe;
        }
    },[]);

    const logOut=()=>{
        return signOut(auth)
    }
    
    const updateUserData=(user,name)=>{
        updateProfile(user,{
            displayName:name
        })
    }
    const authInfo={user,loader,updateUserData,createUser,googleRegister,signIn,githubSignIn,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPRovider;