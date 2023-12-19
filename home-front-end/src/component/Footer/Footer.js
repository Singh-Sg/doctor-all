import React from 'react';
import './Footer.css'
import playStoreApp_prev_ui from '../MyImg/playStoreApp_prev_ui.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className='container-fluid footer'>
                <div className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <Link to='/' target='_top' style={{ textDecoration: 'none', color: 'white' }}><h1 className='h1 text-light'>Doctors<span style={{ fontFamily: 'cursive' }}> Do</span></h1></Link>
                            <br />
                            <h5>Get Started for FREE</h5>
                            <br />
                            <button className='btn text-light border-light w-50 h-25'>Request CallBack</button>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Quick Links</h4>
                            <Link to='/' target='_top' style={{ textDecoration: 'none', color: 'white' }}><p>Home</p></Link>
                            <Link to='/features' target='_top' style={{ textDecoration: 'none', color: 'white' }}><p>Features</p></Link>
                            <Link to='/pricing' target='_top' style={{ textDecoration: 'none', color: 'white' }}><p>Pricing</p></Link>
                            <Link to='/blog' target='_top' style={{ textDecoration: 'none', color: 'white' }}><p>Blog</p></Link>
                            <Link to='/patient' target='_top' style={{ textDecoration: 'none', color: 'white' }}><p>For Patients</p></Link>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Get the APP</h4>
                            <a href='https://play.google.com/' style={{color:'white',textDecoration:'none'}}><img className='d-flex justify-content-start' src={playStoreApp_prev_ui} style={{ width: '60%', height: '60%' }}></img></a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <h4>Reach us</h4>
                            <p><EmailIcon /><a href='mailto:support@doctorsdoapp.com' style={{ color: 'white', textDecoration: 'none' }}> support@doctorsdoapp.com</a></p>
                            <p><PhoneAndroidIcon /> +91-222334543</p>
                            <a href='https://maps.app.goo.gl/LBeX6X6vUrgK21fV9' style={{ color: 'white', textDecoration: 'none' }}><p><LocationOnIcon />388, Pu4, Scheme Number 54, Vijay Nagar, Indore, Madhya Pradesh 452010</p></a>
                        </div>
                    </div>
                    <hr />
                    <div className='row PrivPol'>
                        <div className='col-sm-12 col-md-5 col-lg-5'>
                            <p>© 2021 Doctors Do Clinitech Pvt Ltd All rights reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-2 col-lg-2 d-inline-flex justify-content-around'>
                            <a href='https://www.facebook.com' style={{ color: 'white', textDecoration: 'none' }}><p><FacebookIcon /></p></a>
                            <a href='https://www.instagram.com' style={{ color: 'white', textDecoration: 'none' }}><p><InstagramIcon /></p></a>
                            <a href='https://www.youtube.com' style={{ color: 'white', textDecoration: 'none' }}><p><YouTubeIcon /></p></a>
                            <a href='https://www.google.com' style={{ color: 'white', textDecoration: 'none' }}><p><GoogleIcon /></p></a>
                        </div>
                        <div className='col-sm-12 col-md-5 col-lg-5 secPrivPol'>
                            <p>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



