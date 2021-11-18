import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() => {

            })
            .catch((error) => {
                setError(error.message);
            });
            history.replace('/');
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
        })
        .catch((error) => {
            setError(error.code);
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                console.log(user)
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // on serve user state change -------------
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unSubscribe;
    }, [auth])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://blooming-harbor-85251.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('Logout Successfully');
        }).catch((error) => {
            // An error happened.
            alert('Something went Wrong');
        })
        .finally(() => setIsLoading(false));
    }

    return {
        error,
        user,
        isLoading,
        registerUser,
        loginUser,
        logout,
        signInUsingGoogle
    }
};

export default useFirebase;