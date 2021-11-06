import React from 'react';
import { Link } from 'react-router-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseAuth from '../../../Context/UseAuth';
const SignUp = () => {
    const { SignInWithGoogle, user, LogOut } = UseAuth()
    return (
        <>
            <section >

                <div className="w-25 mx-auto border border-light px-4 py-5 shadow-lg m-5">
                    <h1 className="text-center">SignUp Form</h1>
                    <input type="text" className="form-control my-3" placeholder="Name" />
                    <input type="email" className="form-control my-3" placeholder="Email" />
                    <input type="password" className="form-control mt-3 mb-3" placeholder="Password" />
                    <button className="w-100 btn btn-primary">SignUp</button>

                    <div className="text-end my-3">
                        <Link to="/login">AlReady have an Account?</Link>
                    </div>

                    <div className="text-center">
                        <small>Or Continue with</small>

                        <h3 className="my-3">
                            <i onClick={SignInWithGoogle} class="fab fa-google eye-pearl-login-icon"></i>
                        </h3>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SignUp;