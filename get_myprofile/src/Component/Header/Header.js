import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    
    return (
        <div>
            <div className='head_sect'>
                {/* <div className='container'> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary nav-head">
                    <div className="container">
                        {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
                        <h5 className='dr_nm text-primary'><span className='dr_span'>Dr.</span> Y.K. Sharma</h5>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-body-tertiary" style={{padding:'10px',backgroundColor:'whitesmoke'}} id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none', color: 'Black' }} to='/'>Home</Link>
                                    {/* <a className="nav-link active" aria-current="page">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none', color: 'Black' }} to='/treatments'>Treatment</Link>
                                    {/* <a className="nav-link">Treatment</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none', color: 'Black' }} to='/health-blogs'>Health Blogs</Link>
                                    {/* <a className="nav-link">Health Blogs</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none', color: 'Black' }} to='/about'>About Me</Link>
                                    {/* <a className="nav-link">About Me</a> */}
                                </li>
                                <li className="nav-item">
                                    <button className='head_btn btn btn-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to='/book-appoint'>Book Appoinment</Link></button>
                                </li>
                            </ul>
                            {/* <span class="navbar-text">
                                    Navbar text with an inline element
                                </span> */}
                        </div>
                    </div>
                </nav>
                {/* </div> */}
            </div>
        </div>
    )
}
