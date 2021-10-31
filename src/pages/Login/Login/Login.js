import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div style={{marginBottom: '50px', textAlign:'center',}}>


            <h2 className="text-primary mt-4">Login  Using Google</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Login</button>
        </div>
    );
};

export default Login;