/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 01/03/2023 - 21:14:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/

import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';

const Nav = () => {
    return (
        <>
            <nav className={`${style.isNavbar} navbar navbar-expand-sm`}>
                <div className='container'>
                    <Link className={`${style.navTitle} navbar-brand mr-3`} to="#">
                        E-Learning
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={`${style.f14} nav-item dropdown`}>
                                <Link className="nav-link dropdown-toggle" to="#">
                                    Courses
                                </Link>
                            </li>
                            <li className={`${style.f14} nav-item dropdown`}>
                                <Link className="nav-link dropdown-toggle" to="#">
                                    Programs
                                </Link>
                            </li>
                            <li className={`${style.f14} nav-item dropdown`}>
                                <Link className="nav-link dropdown-toggle" to="#">
                                    Leading Pathway
                                </Link>
                            </li>
                            <li className={`${style.f14} nav-item dropdown`}>
                                <Link className="nav-link dropdown-toggle" to="#">
                                    Patnerships
                                </Link>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0 d-flex">
                            <i className={`${style.faIcon} fa fa-search`} aria-hidden="true"></i>
                            <button className='eBtn'>
                                Log In
                            </button>
                            <button className='eBtn bg-elearn'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
