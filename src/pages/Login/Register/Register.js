import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [login, setLogin] = useState({});
    const {user, registerUser , isLoading, error}  = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...login};
        newLoginData[field] = value;
        setLogin(newLoginData);
        console.log(field, value);
    }

    const handleLoginBtn = e => {
        if(login.password !== login.password2){
            alert('Your password did not match');
            return
        }
        registerUser(login.email, login.password, history, login.name)
        e.preventDefault();
    }

    return (
        <div style={{marginBottom: '50px', textAlign:'center', marginTop: '50px'}}>
            <p>
                Register a New Account
            </p>
            
            { !isLoading && <form onSubmit={handleLoginBtn}>
                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="text"
                name="name" placeholder="Your Name"  
                onChange={handleOnBlur}
                required />
                <br />

                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="email" 
                name="email" placeholder="Your Email"  
                onChange={handleOnBlur}
                required />
                <br />

                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="password" 
                name="password"
                onChange={handleOnBlur}
                placeholder="Password"
                required />

                <br />
                <input 
                style={{width: '80%', padding: '10px', margin: '10px'}} 
                type="password" 
                name="password2"
                onChange={handleOnBlur}
                placeholder="Retype Password"
                required />

                <br />
                <input className="simle-btn" type="submit" value="Register" />
                        
            </form>}
            {
                isLoading && <Spinner animation="border" variant="success"></Spinner>
            }
            {
                user?.email && <Alert severity="success">Login User SuccessFully</Alert>
            }
            {
                error && <Alert severity="error">{error}</Alert>
            }

<p>
                Already have account? {" "}
                <Link to="/login">
                    <sapn>
                        Login Here
                    </sapn>
                </Link>
            </p>
        </div>
    );
};

export default Register;