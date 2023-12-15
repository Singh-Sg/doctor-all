import React from 'react';
import './Header.css'
import bgfeDr from '../MyImg/bg_rem_feDr.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div /*className='container-fluid'*/>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg bg-body-primary text-body-light" style={{ borderRadius: '10px' }}>
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h1 className='h1 text-light'>Doctors<span style={{ fontFamily: 'cursive' }}> Do</span></h1>
                            <div className="collapse navbar-collapse navList text-light" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                                    <li className="nav-item text-light">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/features'>Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/pricing'>Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/patient'>For Patients</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/blog'>Blog</Link>
                                    </li>
                                </ul>
                                <button type='submit' className='btn text-light border-light '><Link style={{ textDecoration: 'none', color: 'white' }} to='/dclogin'>Doctors Login</Link></button>
                            </div>
                        </div>
                    </nav>
                    <br />
                    <div className='section1'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                                <h2 className='h2 wlcm-text text-light' style={{ fontSize: '45px' }}>Welcome to the Doctors Do</h2>
                                <p className='h4 trust-text text-light' style={{ fontSize: '30px' }}>trust Doctors Do for their practice</p>
                                <br />
                                <br />
                                <h2 className='h2 wlcm-text text-light' style={{ fontSize: '50px' }}>Get Started for FREE</h2>
                                <br />
                                <button className='btn text-light' style={{ width: '300px', height: '60px', border: '3px solid white' /*,display: 'flex', justifyContent: 'center', alignItems: 'center' */ }}>Reaquest CallBack</button>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 imggcol animdiv'>
                                <img src={bgfeDr}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
