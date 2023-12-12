
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Treatments.css';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Faqs from "../Faqs/Faqs";
import Foot from '../Foot/Foot';

export default function Treatments() {
    const [showTreat, setShowTreat] = useState([]);
    const navigation = useNavigate();
    const navTreat = useNavigate();

    // 

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;
    let getpageno =  Math.ceil(showTreat.length / itemPerPage)
    let PageNumber = [];
    if (getpageno <= 7) {
        for (let i = 1; i <= getpageno; i++) {
            PageNumber.push(i);
        }
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                PageNumber.push(i);
            }
            PageNumber.push('...', getpageno);
        } else if (currentPage > getpageno - 4) {
            PageNumber.push(1, '...');
            for (let i = getpageno - 4; i <= getpageno; i++) {
                PageNumber.push(i);
            }
        } else {
            PageNumber.push(1, '...');
            // PageNumber.push(1);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                PageNumber.push(i);
            }
            PageNumber.push('...', getpageno);
        }
    }

    let handleClick = (page) => {
        setCurrentPage(page);
    }
    let prevClick = (page) => {
        Math.max(setCurrentPage(currentPage - 1,1));
    }
    let NextClick = (page) => {
        Math.min(setCurrentPage(currentPage + 1,getpageno));
    }

    // 


    const ShTreatFun = () => {
        navTreat('/kidneystone')
    }

    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/treatment/`).then((res) => {
            setShowTreat(res.data);
        });
    };
    useEffect(() => {
        getData();
    }, []);

    const Prevfun = () => {
        navigation(window.history.back());
    }
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    return (
        <div>
            {/* <br /> */}
            {/* <div className="row" style={{ boxShadow: '2px 2px 12px 2px lightgray', padding: '10px 10px' }}>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className="drH1">Treatment</h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end" style={{ padding: '10px 15px' }}>
                    <button className="btn btn-primary" onClick={Prevfun}>Previous</button>
                </div>
            </div> */}
            {/* <Header /> */}
            <br />
            <div className="container">
                <h1 style={{ color: 'darkblue' }}>Treatment</h1>
                <hr/>
                <br />
                {chunkArray(showTreat.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), 4).map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((item, index) => (
                            <div className="col-sm-12 col-md-3 col-lg-3" key={item.id}>
                                <div className="card crd1" style={{ width: '18rem', height: '18rem' }}>
                                    <img src='https://d3t5ai5vcxyqte.cloudfront.net/media/rlkshko.svg' className="card-img-top showTreat w-50 h-50" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                                        {/* <p className="card-text w-100" dangerouslySetInnerHTML={{ __html: item.description }} style={{ overflow: 'hidden', height: '20px' }}></p> */}
                                        <a className='btn btn-primary d-flex justify-content-center' onClick={ShTreatFun}>Go to More</a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {
                getpageno > 1
                    ? <div className='pagination justify-content-center border-primary'>
                        <button className='btn btn-primary' key={Number} id='Number' onClick={() => prevClick(Number)} style={{ marginLeft: '2px' }} disabled={currentPage == 1 ? true : false}>  prev</button>
                        {PageNumber.map((Number, index) => {
                            return (
                                // <button className='btn btn-primary' key={Number} id='Number' onClick={() => handleClick(Number)} style={{ marginLeft: '2px' }}>{Number}</button>
                                <button className="btn btn-primary" key={index} onClick={() => handleClick(Number)} style={{ marginLeft: '2px' }} > {Number} </button>
                            )
                        }
                        )}
                        <button className='btn btn-primary' key={Number} id='Number' onClick={() => NextClick(Number)} style={{ marginLeft: '2px' }} disabled={currentPage == getpageno ? true : false}>Next</button>
                    </div>
                    : null
            }
            <br/>
        </div>
    )
}

