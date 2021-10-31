import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false))
    }

    // on serve user state change -------------
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, user => {
                if(user){
                    setUser(user);
                }
                else{
                    setUser({});
                }
                setIsLoading(false);
            })
            return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
};

export default useFirebase;