import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseAuth from '../../../Context/UseAuth';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const { SignInWithGoogle, user, LogOut, CreateNewUser, error } = UseAuth();

    const handleSignUp = (event) => {
        event.preventDefault()
        console.log('registration will be added', name, email, password, rePassword,)
        CreateNewUser(email, password)
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleNameBlur = (event) => {
        setName(event.target.value)

    }
    const handleReEnterPasswordBlur = (event) => {
        setRePassword(event.target.value)
    }
    return (
        <>
            <section className="" >

                <div className="w-25 mx-auto border border-light px-4 py-3 shadow-lg m-5">
                    <h1 className="text-center">Create Account</h1>
                    <form onSubmit={handleSignUp}>
                        <input onBlur={handleNameBlur} type="text" className="form-control my-3" placeholder="Name" />
                        <input onBlur={handleEmailBlur} type="email" className="form-control my-3" placeholder="Email" required />
                        <input onBlur={handlePasswordBlur} type="password" className="form-control mt-3 mb-3" placeholder="Password" required />
                        {/* <input type="password" onBlur={handleReEnterPasswordBlur} className="form-control mt-3 mb-3" placeholder="Re-Enter Password" /> */}
                        <input className="w-100 btn btn-primary" type="submit" value="SignUp" />
                    </form>

                    <div className="text-end my-3">
                        <Link to="/login">AlReady have an Account?</Link>
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

export default SignUp;