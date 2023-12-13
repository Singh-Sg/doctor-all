import React, { useState, useEffect } from 'react'
import './BookAppoint.css';
import { Link } from 'react-router-dom'
import animImg from '../images/animidea.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function BookAppoint() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nearestTime, setNearestTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const times = [
      '11:00 AM',
      '11:45 AM',
      '12:30 PM',
      '01:15 PM',
      '02:00 PM',
      '02:45 PM',
      '03:30 PM',
      '04:15 PM',
      '05:00 PM'
    ];
    times.sort((a, b) => a.localeCompare(b));
    const nextTime = times.find((time) => time >= currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setNearestTime(nextTime);
  }, [currentTime]);
  
  return (
    <div className='bookHead'>
      <br />
      <h1 className='container' style={{ color: 'darkblue', fontFamily: 'Arial', fontWeight: 'bold', }}>Appointment Summary</h1>
      <br />
      <p className='container' style={{ color: 'green' }}><AccessTimeIcon /> <b>Time: {nearestTime}</b></p>
      <p className='container'><Link style={{color: 'green' }} to='/change-slote'><CalendarMonthIcon /> <b>Change Date and Time</b></Link> for Appointment</p>
      <br />
      <div className='container book_appoin'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <br />
            <div className='container book-item'>
              <h4>Enter Phone Number to continue</h4>
              <p>Please enter your WhatsApp number to receive timely updates.</p>
              <label htmlFor='Phone'><CallIcon />Phone</label>
              <input className='form-control w-50' style={{ backgroundColor: 'transparent' }} name='phone' placeholder='Enter the Phone Number'></input>
              <br />
              <p>Please enter the mobile number of the patient. You will receive a confirmation message on this number.</p>
              <button className='btn text-white form-control w-50' style={{ backgroundColor: 'darkblue', border: '1px solid darkblue' }}>Send OTP</button>
              <br />
              <br />
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 book-item2'>
            <h3 style={{ textAlign: 'center', color: 'white' }}>We Provide Medical Services</h3>
            <h4>That you can Trust</h4>
            <br />
            <p>We Are Always Ready To Help You & Your Family</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}
