import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/Firebase.init";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {


    


    // Registration Form
    const registrationWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { registrationWithEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right"/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;