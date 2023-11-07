import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import UseAxios from "../hooks/UseAxios";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);
    const axios = UseAxios();
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = (userName, userPhoto)=>{
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhoto,
          })
    }

    // sign in with email and password
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }


     // observe onAuthStateChanged
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            console.log('observing current user', currentUser)
            setLoading(false)
            // if user exists then issue a token
            if(currentUser){
                axios.post('/jwt', loggedUser) // sent loggedUser to the server
                .then(res => {
                    console.log('token response', res.data) // get token for loggedUser
                })
            }
            else{
                axios.post('/logout', loggedUser, {  // sent loggedUser={} to the server
                    withCredentials: true
                })
                .then(res =>{
                    console.log('logged out', res.data); // get response from server after clearing cookie
                })
            }
        });
        return()=>{
            unSubscribe();
        }
    },[])

    // sign out
    const userSignOut = ()=>{
        return signOut(auth);
    }

    const authInfo = { createUser, userInfo, signInUser, googleSignIn, user, userSignOut, loading }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;