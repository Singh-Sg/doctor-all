import React from 'react'
import './BookAppoint.css';
import animImg from '../images/animidea.jpg';

export default function BookAppoint() {
  return (
    <div className='bookHead'>
      <br />
      <div className='container book_appoin'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <br />
            <div className='container book-item'>
              <h4>Enter Phone Number to continue</h4>
              <p>Please enter your WhatsApp number to receive timely updates.</p>
              <label htmlFor='Phone'>Phone</label>
              <input className='form-control w-50' style={{ backgroundColor: 'transparent' }} name='phone' placeholder='Enter the Phone Number'></input>
              <br />
              <p>Please enter the mobile number of the patient. You will receive a confirmation message on this number.</p>
              <button className='btn text-white form-control w-50' style={{ backgroundColor: 'darkblue', border: '1px solid darkblue' }}>Send OTP</button>
              <br />
              <br />
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 book-item2'>
            {/* <img src={animImg}></img> */}
            <h3 style={{ textAlign: 'center', color: 'white' }}>We Provide Medical Services</h3>
            <h4>That you can Trust</h4>
            <br/>
            <p>We Are Always Ready To Help You & Your Family</p>
          </div>
        </div>
      </div>
      <br />
      <div className='home_sect3three container'>
        <h4 style={{color:'darkblue'}}>OPD Hours</h4>
        <hr style={{}}/>
        <p>Sunday : 11:00 Am-01:00 PM</p>
        <p>Monday :11:00 Am-01:00 PM </p>
        <p>Tuesday :11:00 Am-01:00 PM </p>
        <p>Wednesday : 11:00 Am-01:00 PM</p>
        <p>Thursday : 11:00 Am-01:00 PM</p>
        <p>Friday : 11:00 Am-01:00 PM</p>
        <p>Saturday : 11:00 Am-01:00 PM</p>
      </div>
    </div>
  )
}
