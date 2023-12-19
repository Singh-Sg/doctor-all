import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Dashbord() {
    let token = ''
    const [showTreat, setShowTreat] = useState([]);
    const navigation = useNavigate();

    const getData = () => {
        try {
            axios.get(`http://127.0.0.1:8000/api/treatment/`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                setShowTreat(res.data);
            });
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            token = localStorage.getItem("token")
        }
        if (token) {
            getData();
        }
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
            <div className='dash'>
                <h1 className='h1 text-success container mt-3'>Welcome to the Dashbord...</h1>
            </div>
            <div>
                <div className="container">
                    <br />
                    <div className="row" style={{ boxShadow: '2px 2px 12px 2px lightgray', padding: '10px 10px' }}>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2 className="drH1">Treatment</h2>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end" style={{ padding: '10px 15px' }}>
                            <button className="btn btn-primary" onClick={Prevfun}>Previous</button>
                        </div>
                    </div>
                    <br />
                    {showTreat && chunkArray(showTreat, 4).map((row, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {row.map((item, index) => (
                                <div className="col-sm-12 col-md-3 col-lg-3" key={item.id}>
                                    <div className="card crd1" style={{ width: '18rem', height: '18rem' }}>
                                        <img src='https://d3t5ai5vcxyqte.cloudfront.net/media/rlkshko.svg'
                                            className="card-img-top showTreat w-50 h-50" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center"
                                                dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                                            {/* <p className="card-text w-100" dangerouslySetInnerHTML={{ __html: item.description }} style={{ overflow: 'hidden', height: '20px' }}></p> */}
                                            {/* <a className='btn btn-primary d-flex justify-content-center' onClick={ShTreatFun}>Go to More</a> */}
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}