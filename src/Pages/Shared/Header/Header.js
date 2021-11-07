import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Context/UseAuth';
import './Header.css'

const Header = () => {
    const { user, LogOut } = UseAuth()
    return (
        <>
            <nav class="navbar bg-light sticky-top navbar-expand-lg navbar-light ">

                <div class="container">

                    <Link class="navbar-brand" to="/home">
                        EyePearl
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/appoinment">Appoinment</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/shop">Shop</Link>
                            </li>
                            {user.displayName || user.email ?
                                <button onClick={LogOut} className="btn btn-primary ">Log out</button>
                                : <li class="nav-item">
                                    <Link class="nav-link " to="/login">Login</Link>
                                </li>}
                            <li class="nav-item">
                                <Link class="nav-link " to="/contact">Contact</Link>
                            </li>



                            {user.displayName || user.email ?
                                <li class="nav-item">
                                    <a class="nav-link disabled">
                                        <img src={user.photoURL} alt="img" width="40" height="30" />
                                    </a>

                                </li>
                                :
                                <span></span>
                            }


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;