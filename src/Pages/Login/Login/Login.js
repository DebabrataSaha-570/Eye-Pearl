import React, { useState } from 'react';
import UseAuth from '../../../Context/UseAuth';
import { Link } from 'react-router-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'
const Login = () => {
    const { SignInWithGoogle, user, LogOut, LoginUser, error } = UseAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        LoginUser(email, password)
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)


    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    return (
        <>
            <section >
                <div className="w-25 mx-auto border border-light px-4 py-5 shadow-lg m-5">
                    <h1 className="text-center">Login Form</h1>

                    <form onSubmit={handleLoginFormSubmit}>
                        <input onBlur={handleEmailBlur} type="email" className="form-control my-3" placeholder="Email" />
                        <input onBlur={handlePasswordBlur} type="password" className="form-control mt-3 mb-3" placeholder="Password" />
                        <input className="w-100 btn btn-primary" type="submit" value="Login" />
                    </form>

                    <div className="text-end my-3">
                        <Link to="/signUp">Don't Have an Account?</Link>
                    </div>

                    <div className="text-center">
                        <small>Or Continue with</small>

                        <h3 className="my-3">
                            <i onClick={SignInWithGoogle} className="fab fa-google eye-pearl-login-icon"></i>
                        </h3>
                    </div>
                </div>

                <div className="error text-center">
                    {user.email || user.displayName ? <p className="text-success"> user loggedIn successfully</p>
                        :
                        <span></span>
                    }

                    {
                        <p className='text-danger'> {error} </p>
                    }
                </div>
            </section>



        </>
    );
};

export default Login;