import React from 'react';
import UseAuth from '../../../Context/UseAuth';

const Login = () => {
    const { SignInWithGoogle, user, LogOut } = UseAuth()
    return (
        <div className="container">
            <h3>this is login component</h3>
            <button onClick={SignInWithGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;