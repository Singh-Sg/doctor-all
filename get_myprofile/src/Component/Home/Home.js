import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './Home.css'
import Treatments from '../Treatments/Treatments'
import HealthBlogs from '../HealthBlogs/HealthBlogs'
import { Link } from 'react-router-dom'
import dr_img from '../images/rem_stethoscope.png'
import AOS from 'aos'

export default function Home() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='home'>
            {/* <Header /> */}
            <div className='home_sect1'>
                <div className='row hm_row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='hm_div1'>
                            <div className='aside_one container'>
                                <br />
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-uBc1hf3Ir164o2cxA_dJ5-sEF7u5qq9iQ&usqp=CAU" alt="Doctor's Do" /> */}
                                {/* <img src={userData.profile ? URL.createObjectURL(userData.profile) : "//static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"} alt="Doctor's Do" />  // pre commented*/}
                                {/* <h2>Dr. Y.K. Sharma</h2>
                                <p>Heart specialities</p>
                                <p>MBBS,MD</p>
                                <br />
                                <br /> */}
                                <h1 className='aside-text1 h1' data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" data-aos-duration="2000" style={{ fontFamily: 'Arial', fontSize: '52px', fontWeight: 'bold' }}>We Provide Medical <span style={{ color: 'darkblue' }}>Services</span></h1>
                                <h1 className='aside-text2 h1' data-aos="fade-right"
                                    data-aos-duration="3000"
                                    data-aos-easing="ease-in-sine" style={{ fontFamily: 'Arial', fontSize: '52px', fontWeight: 'bold' }}>That you can <span style={{ color: 'darkblue' }}>Trust</span></h1>
                                <br />
                                <p data-aos="fade-up" data-aos-duration="3000"
                                    data-aos-anchor-placement="bottom-bottom">We Are Always Ready To Help You & Your Family.</p>
                                <p data-aos="fade-up" data-aos-duration="3000"
                                    data-aos-anchor-placement="bottom-bottom">We Offer Different Services To Improve Your Health</p>
                            </div>
                            <br />
                            <br />
                            <button className='btn butt w-50 h-100'><Link style={{ textDecoration: 'none', color: 'white' }} to='/book-appoint'>Book Appointment</Link></button>
                            <br />
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='hm_div2'>
                            <br />
                            {/* <h3 className='text-center text-light'>Book a Clinic Appointment</h3> */}
                            <br />
                            <div className='hm_div3 container'>
                                {/* <br />
                                <p>Next Available at : 11:00 AM,Yesterday</p>
                                <p>A.B. Road, Near Main Street,Indore,Madhya Pradesh,,451209</p>
                                <br />
                                <hr className='container' />
                                <br />
                                <h4 className='text-center'>Book Clinic Visit</h4>
                                <p className='text-center'>No Booking Fee</p> */}
                                <img src={dr_img} alt='doctor' className='w-100 h-100' data-aos="fade-left" data-aos-duration="3000"></img>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='container home_sect2'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center' style={{ borderRight: '1px solid gray' }}>
                        <h3>5.0</h3>
                        {/* <h5>Google Rating</h5> */}
                        <img src='https://drbcshukla.getmy.clinic/images/GoogleRating.svg' className='w-25 h-25'></img>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center' style={{ borderRight: '1px solid gray' }}>
                        <h3>1</h3>
                        {/* <h5>Google Reviews</h5> */}
                        <img src='https://drbcshukla.getmy.clinic/images/GoogleReview.svg' className='w-25 h-25'></img>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                        <h3>14+</h3>
                        <h6>Years Of Experience</h6>
                        <img src='https://drbcshukla.getmy.clinic/images/Exp.svg' className='w-25 h-25'></img>
                    </div>
                </div>
            </div>
            <div className='home_sect3'>
                <br />
                <div className='container sect3Div'>
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <h1 data-aos="fade-right" data-aos-duration="3000">About Me</h1>
                            <br />
                            <br />
                            <p className='w-75' data-aos="fade-right" data-aos-duration="3000">Dr. A.B. Saxena is a renowned and experienced General Physician in India. He brings with him an experience of 24 years and has been associated with s... <span style={{ color: 'darkblue' }}><Link style={{ textDecoration: 'none', color: 'Black' }} to='/about'>Read More</Link></span></p>
                            <br />
                            <button className='btn butt2'><Link style={{ textDecoration: 'none', color: 'darkblue' }} to='/book-appoint'>Book Appointment</Link></button>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            {/* <img src='https://img.freepik.com/premium-vector/professional-doctor-with-speech-bubble-white-background_103688-432.jpg?size=626&ext=jpg&ga=GA1.1.1558370655.1701781433&semt=ais' className='h-75 w-100'></img> */}
                            <img src='https://img.freepik.com/premium-vector/doctor-is-working-room-with-laptop-medical-background-illustration-flat-character_36082-639.jpg?size=626&ext=jpg&ga=GA1.1.1558370655.1701781433&semt=ais' data-aos="fade-left" data-aos-duration="3000" className='h-100 w-100'></img>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            {/* <div className='home_sect3three'>
                <h4>OPD Hours</h4>
                <p>Sunday : 11:00 Am-01:00 PM</p>
                <p>Monday :11:00 Am-01:00 PM </p>
                <p>Tuesday :11:00 Am-01:00 PM </p>
                <p>Wednesday : 11:00 Am-01:00 PM</p>
                <p>Thursday : 11:00 Am-01:00 PM</p>
                <p>Friday : 11:00 Am-01:00 PM</p>
                <p>Saturday : 11:00 Am-01:00 PM</p>
            </div> */}
            <div className='home_sect4'>
                <Treatments />
                <button className='btn healthBtn'><Link style={{ textDecoration: 'none', color: 'Black' }} to='/treatments'>Read More...</Link></button>
            </div>
            <div className='home_sect5'>
                <HealthBlogs />
                <button className='btn healthBtn'><Link style={{ textDecoration: 'none', color: 'Black' }} to='/health-blogs'>Read More...</Link></button>
            </div>
        </div>
    )
}
