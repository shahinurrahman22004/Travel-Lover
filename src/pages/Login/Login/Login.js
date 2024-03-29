import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [login, setLogin] = useState({});
    const {user, loginUser, isLoading, error, signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...login};
        newLoginData[field] = value;
        setLogin(newLoginData);
    }

    const handleLoginBtn = e => {
        loginUser(login.email, login.password, location, history)
        alert('Login Successfully');
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <div style={{marginBottom: '50px', textAlign:'center', marginTop: '50px'}}>
            <p>
                Don't Have account? {" "}
                <Link to="/register">
                    <sapn>
                        Register Here
                    </sapn>
                </Link>
            </p>

            <form onSubmit={handleLoginBtn}>
                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="email" 
                name="email" placeholder="Your Email"  
                onChange={handleOnChange}
                required />
                <br />

                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="password" 
                name="password"
                onChange={handleOnChange}
                placeholder="Password"
                required />

                <br />
                <input className="simle-btn" type="submit" value="LogIn" />
                        
            </form>
            {
                isLoading && <Spinner animation="border" variant="success"></Spinner>
            }
            {
                user?.email && <Alert severity="success">Login User SuccessFully</Alert>
            }
            {
                error && <Alert severity="error">{error}</Alert>
            }


            <h2 className="text-primary mt-4">Login  Using Google</h2>
            <button onClick={handleGoogleSignIn} className="simle-btn">Login With Google</button>
        </div>
    );
};

export default Login;