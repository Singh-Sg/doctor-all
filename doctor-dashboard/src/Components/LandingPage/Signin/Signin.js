import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../../Style/Signin.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Post_Api } from "../../../Redux/Action/SigninAction.js";

export default function Signin() {
  const [userlogin, setUserLogin] = useState({ username: '', password: '' });
  const [token, setToken] = useState('');
  const navigateDash = useNavigate()
  const dispatch = useDispatch()

  const SigninAPI=useSelector((state)=>state.signinReducer.signinlist)

  useEffect(()=>{
    console.log("SigninAPI",SigninAPI);
    if(SigninAPI!==null){
      setToken(SigninAPI);
    }
  },[SigninAPI])

  const LoginUser = (e) => {
    e.preventDefault();
    let payload = {
      "username": userlogin.username,
      "password": userlogin.password
    }
    e.preventDefault();
    dispatch(Post_Api(payload))
    // axios.post(`http://127.0.0.1:8000/api/token/`, payload).then((res) => {
    //   localStorage.setItem("refersh_token", res.data.refresh);
    //   localStorage.setItem("token", res.data.access);
    //   // const tok = localStorage.getItem("token");
    //   // setToken(tok);
    //   setToken(res.data.access);
    //   navigateDash('/sidemenu');
    // })
    //   .catch((error) => {
    //     console.error('Login failed:', error);
    //   });

  }
  useEffect(() => {
    if (localStorage.getItem('token') === token) {
      navigateDash('/sidemenu');
    }
  }, [token, navigateDash]);


  return (
    <div>
      {/* <div> */}
      <Container maxWidth="sm" className="boxContainer">
        <Box>
          <Box sx={{ flexGrow: 1 }} className="boxHeader">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Doctor Does
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  paragraph
                  className="HeadPara"
                  display="flex"
                  justifyContent="end"
                >
                  If you have No account
                  <Link to='/signup'>Signup</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {/*  */}
          <Container maxWidth="sm" className="formSignin">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography paragraph>SignIn</Typography>
              <br />
              {/* <Grid container spacing={2}> */}
              {/* <Grid item xs={6}> */}
              <TextField
                id="outlined-basic"
                name="username"
                type="text"
                value={userlogin.username}
                onChange={(e) => {
                  setUserLogin({ ...userlogin, username: e.target.value });
                }}
                label="Username"
                variant="outlined"
                className="IFWidth"
              />
              {/* </Grid> */}
              {/* <Grid item xs={6}> */}
              <TextField
                id="outlined-basic"
                name="password"
                type="password"
                value={userlogin.password}
                onChange={(e) => {
                  setUserLogin({ ...userlogin, password: e.target.value });
                }}
                label="Password"
                variant="outlined"
                className="IFWidth"
              />
              {/* </Grid> */}
              {/* </Grid> */}
              <br />
              <Stack
                spacing={2}
                direction="row"
                display="flex"
                justifyContent="end"
              >
                <Button variant="contained" onClick={LoginUser}>Login</Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
    // </div>
  )
}


