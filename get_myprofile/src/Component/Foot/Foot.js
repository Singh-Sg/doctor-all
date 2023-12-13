import React from 'react';
import './Foot.css';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SimpleMap from '../SimpleMap/SimpleMap';

export default function Foot() {
    return (
        <div className='foot'>
            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5>My Clinic</h5>
                        <SimpleMap />
                        <div className='d-flex justify-content-between'>
                            <p><FacebookIcon /></p>
                            <p><InstagramIcon /></p>
                            <p><YouTubeIcon /></p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5>Quick Links</h5>
                        <p>Home</p>
                        <p>About Me</p>
                        <p>Treatments</p>
                        <p>Blogs</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <h5>Our Treatments</h5>
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
                        <h5>Contact Us</h5>
                        <p><CallIcon />2231232343</p>
                        <p><LocationOnIcon />XYZ Mall,Near Abc Road,wxy Hospital,Madhya Pradesh,445343</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
