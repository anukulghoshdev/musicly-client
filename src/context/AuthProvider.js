import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, passward) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, passward);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const loginUser = (email, passward) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, passward);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => unsubscribe()
    }, [])


    const AuthInfo = {
        user,
        setLoading,
        loading,
        createUser,
        googleSignIn,
        loginUser,
        logout,
        updateUserProfile,
        resetPassword
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;