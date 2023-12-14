import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SimpleMap from '../SimpleMap/SimpleMap';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5><LocationOnIcon /> My Clinic</h5>
                        <hr className='hr-footer' />
                        <SimpleMap />
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5><LinkIcon/> Quick Links</h5>
                        <hr className='hr-footer'/>
                        <p>Home</p>
                        <p>About Me</p>
                        <p>Treatments</p>
                        <p>Blogs</p>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5><VaccinesIcon/> Our Treatments</h5>
                        <hr className='hr-footer' />
                        <p>Blood Pressure</p>
                        <p>Diabetes Management</p>
                        <p>Thyoride Disease</p>
                        <p>Heart Problems</p>
                        <p>Respiratory Problems</p>
                        <p>Maigraine</p>
                        <p>Pain Management</p>
                        <p>Gastric Disorders</p>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5><CallIcon/> Contact Us</h5>
                        <hr className='hr-footer' />
                        <p><CallIcon /> 2231232343</p>
                        <p><LocationOnIcon /> XYZ Mall,Near Abc Road,wxy Hospital,Madhya Pradesh,445343</p>
                        <br/>
                        <br/>
                        <div>
                            <button className='btn butt w-100 h-100 asideimg'><Link style={{ textDecoration: 'none', color: 'white' }} to='/book-appoint'>Book Appointment</Link></button>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white', width: '100%' }} />
                <div className='sec-footer'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-4 d-flex justify-content-start'>
                            <p>© 2023 My Clinic Pvt Ltd All rights reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center'>
                            {/* <div className='d-flex justify-content-center'> */}
                            <p><FacebookIcon /></p>
                            <p><InstagramIcon /></p>
                            <p><YouTubeIcon /></p>
                            <p><TwitterIcon /></p>
                            <p><GoogleIcon /></p>
                            {/* </div> */}
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4 d-flex justify-content-end'>
                            <p>Terms & Conditions | Privacy Policy</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
