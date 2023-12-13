import React, { useEffect } from 'react';
import img from '../images/registerlogo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Carousel } from 'react-responsive-carousel';
import './ChangeSlote.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import $ from 'jquery';


export default function ChangeSlote() {
    useEffect(() => {
        $(document).ready(function () {
            $("p").click(function () {
                $(".sloter2").toggle();
            });
        });
    })
    return (
        <div>
            <div className='container'>
                <br />
                <div className='row'>
                    <div className='col-sm-12 col-md-1 col-lg-1'>
                        <img src={img} style={{ width: '70px', height: '70px' }}></img>
                    </div>
                    <div className='col-sm-12 col-md-5 col-lg-5'>
                        <div>
                            <h5>Dr. Y.K. Sharma</h5>
                            <p>Heart Specialist</p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end'>
                        <div>
                            <h5>Book Appointment</h5>
                            <p className='text-secondary'>Select Your consultation type</p>
                            <p style={{ color: 'green' }}><b>Fees approax<CurrencyRupeeIcon />200 <span style={{ color: 'darkblue' }}>(Pay at Clinic)</span></b></p>
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid' }}></div>
                <br />
                <div className='slote1'>
                    <h5>Clinic Name</h5>
                    <p><LocationOnIcon />Y.K. Sharma Clinic, XYZ Mall, 131, Main Road Safagai, Madhya Pradesh, 452400</p>
                    <br />
                    <div>
                        <div className='caroHead'>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Today</h5>
                                        <p className="card-text" >No Slot available</p>
                                    </div>
                                </div>
                                <div className="col text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Tomorrow</h5>
                                        <p className="card-text">No Slot available</p>
                                    </div>
                                </div>
                                <div className="col text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Fri,19 Dec</h5>
                                        <p className="card-text">No Slot available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: '100%' }} />
                        <br />
                        <div className='sloter2'>
                            <div className='row slot2'>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>11:00 AM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>11:45 AM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>12:30 PM</button>
                                </div>
                            </div>
                            <br />
                            <div className='row slot3'>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>01:15 PM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>02:00 PM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>02:45 PM</button>
                                </div>
                            </div>
                            <br />
                            <div className='row slot4'>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>03:30 PM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>04:15 PM</button>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                    <button className='btn btn-light border-primary'>05:00 PM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-end'>
                <button className='btn' style={{ backgroundColor: 'darkblue', color: 'white' }}>continue</button>
            </div>
            <br />
        </div >
    )
}
