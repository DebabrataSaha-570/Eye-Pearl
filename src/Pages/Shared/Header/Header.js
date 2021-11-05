import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav class="navbar  sticky-top navbar-expand-lg navbar-light bg-light">

                <div class="container">

                    <a class="navbar-brand" href="#">
                        EyePearl
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/aboutUs">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/contact">Contact</Link>
                            </li>



                            <li class="nav-item">
                                <a class="nav-link disabled">
                                    <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;