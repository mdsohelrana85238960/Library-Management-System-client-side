import { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
    
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            // console.log('user in the state change ', currentUser);
            setUser(currentUser);
            setLoading(false)
            // if (currentUser) {
            //     const loggedUser = {email: currentUser.email};
            //     axios.post('https://cd-library-management-system.web.app/jwt', loggedUser,{withCredentials: true})
            //     .then(res => {
            //         console.log('token resp', res.data)
            //     })
            // }
        })
        return () =>{
            unSubscribe()
        } 
    },[])


    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }


   

    const authInfo = {
        createUser,
        signIn,
         logOut,
         user,
         loading
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;