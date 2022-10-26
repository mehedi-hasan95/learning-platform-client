import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/Firebase.init";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google sign In
    const googleSignIn = (provider) => {
        setLoading(true);
        signInWithPopup(auth, provider)
    }

    const authInfo = {googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right"/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;