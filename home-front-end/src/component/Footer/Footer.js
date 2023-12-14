import React from 'react';
import './Footer.css'
import playStoreApp_prev_ui from '../MyImg/playStoreApp_prev_ui.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    return (
        <div>
            {/* <div> */}
            <div className='container-fluid footer'>
                <div className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h1 className='h1 text-light'>Doctors<span style={{ fontFamily: 'cursive' }}> Do</span></h1>
                            <br/>
                            <h5>Get Started for FREE</h5>
                            <br/>
                            <button className='btn text-light border-light w-50 h-25'>Request CallBack</button>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Quick Links</h4>
                            <p>Home</p>
                            <p>Features</p>
                            <p>Blog</p>
                            <p>For Patients</p>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Get the APP</h4>
                            <img className='d-flex justify-content-start' src={playStoreApp_prev_ui} style={{ width: '60%', height: '60%' }}></img>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <h4>Reach us</h4>
                            <p><EmailIcon/> support@doctorsdoapp.com</p>
                            <p><PhoneAndroidIcon/> +91-222334543</p>
                            <p><LocalPhoneIcon/> B 168,B-Block,sector 44,xyz,abc pradesh,2t1y03</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='row PrivPol'>
                        <div className='col-sm-12 col-md-5 col-lg-5'>
                            <p>© 2021 Doctors Do Clinitech Pvt Ltd All rights reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-2 col-lg-2 d-inline-flex justify-content-around'>
                            <p><FacebookIcon/></p>
                            <p><InstagramIcon/></p>
                            <p><YouTubeIcon/></p>
                            <p><GoogleIcon/></p>
                        </div>
                        <div className='col-sm-12 col-md-5 col-lg-5 secPrivPol'>
                            <p>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}


