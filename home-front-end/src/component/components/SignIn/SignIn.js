import React, { useState, useEffect } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Dashbord from '../Dashbord/Dashbord';

// http://127.0.0.1:8000/api/doctor/token/                          =login api

export default function SignIn() {
    const [user, setUser] = useState({ username: '', password: '' })
    const [error, setError] = useState("");
    const [token, setToken] = useState('');
    const dash = useNavigate()

    const UserLogin = (e) => {
        debugger
        let payload = {
            "username": user.username,
            "password": user.password
        }
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/doctor/token/`, payload).then((res) => {
            console.log(res.data);
            localStorage.setItem("refersh_token", res.data.refresh)
            localStorage.setItem("token", res.data.access)
            const tok = localStorage.getItem("token");
            setToken(tok);
            dash('/dashbord');
            // dash(<Dashbord token={res.data.token} />);
        })
            .catch((error) => {
                console.error('Login failed:', error);
                setError('Invalid username or password. Please try again.');
            });
    }

    return (
        <div className='signin-head'>
            <div className='signin'>
                <h4 className='h4 text-start'>Sign In</h4>
                <br />
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInput1">User Name</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInput1"
                            name={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            aria-describedby="emailHelp"
                            placeholder="What is your Username"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="What is your Password"
                        />
                    </div>
                    <br />
                    <div className="form-group mb-3">
                        <button type="submit" className="btn userBtn form-control" onClick={UserLogin}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
