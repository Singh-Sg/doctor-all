import React from 'react';
import '../Style/fulldash.css';
import drimg from '../Images/ozkan.png'
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListIcon from '@mui/icons-material/List';

export default function FullDash() {
    return (
        <div>

            <div className='SectionDash'></div>
            <div className='row'>
                <div className='col-sm-12 col-md-3 col-lg-3'>
                    <div className='LeftDash'>
                        <div className='LDFirst'>
                            <div>
                                {/* <img src={drimg} className='drimage'></img> */}
                                <h2 className='h2 AppName'>Doctors Do</h2>
                                <hr />
                            </div>
                            <div className='SearchIcon'>
                                <input className='form-control' /><SearchIcon className='searchMI' />
                                <hr />
                            </div>
                            <div className='NavBar'>
                                <p>Main</p>
                                <ul className='Navfirst'>
                                    <li><GridViewIcon />Dashboard</li>
                                    <li><DateRangeIcon />Menu 1</li>
                                    <li><ListIcon />Menu 2</li>
                                    <li><ListIcon />Menu 3</li>
                                </ul>
                                <p>Data Visualization</p>
                                <ul className='NavSecond'>
                                    <li><DateRangeIcon />Menu 1</li>
                                    <li><ListIcon />Menu 2</li>
                                    <li><ListIcon />Menu 3</li>
                                    <li><ListIcon />Menu 4</li>
                                    <li><ListIcon />Menu 5</li>
                                </ul>
                                <p>Support</p>
                                <ul className='NavThird'>
                                    <li><DateRangeIcon />Menu 1</li>
                                    <li><ListIcon />Menu 2</li>
                                    <li><ListIcon />Menu 3</li>
                                    <li><ListIcon />Menu 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-sm-12 col-md-9 col-lg-9'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <div className='TopDash'>
                                <h1 className='h1 DrNamee'>Dr. Y.K. Sharma</h1>
                                <p className='dashPagh'>I hope you are in a good mood because there are 56 Patients waiting for you.</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-12'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
