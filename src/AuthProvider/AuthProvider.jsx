/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const profileUpdate = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }
    const logout = () => {
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser)
            setLoading(false)
        }));
        return ()=> unsubscribe;
    })

    const authInfo = {user,loading,createUser,profileUpdate,login,googleLogin,logout}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;