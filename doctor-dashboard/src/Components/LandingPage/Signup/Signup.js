import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { MenuItem, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import Menu from '@mui/material/Menu';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom'
import "../../../Style/Signup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { SignupDataApi } from '../../../Redux/Action/SignupApiAction,js'
import { SignupDataApi } from "../../../Redux/Action/SignupApiAction.js";
import { Single_Get } from "../../../Redux/Action/SpecialtyAction.js";

export default function Signup() {
    const [errors, setErrors] = useState({});
    const [getData, setGetData] = useState(null);
    const [selectedValues, setSelectedValues] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const SIGNUPAPI = useSelector((state) => state.signupReducer.signupList);
    const SPECIALTY = useSelector((state) => state.SpecialityReducer.Special);

    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
        confpass: "",
        first_name: "",
        last_name: "",
        bio: "",
        gender: "",
        address: "",
        education: "",
        phone_number: "",
        experience: "",
        in_clinic_consulting_fee: "",
        video_consulting_fee: "",
        audio_consulting_fee: "",
        profile_image: "",
        specialty: ""
    });

    useEffect(() => {
        // console.log("SIGNUPAPI", SIGNUPAPI);
        if (SIGNUPAPI !== null) {
            setUserData(SIGNUPAPI);
        }
    }, [SIGNUPAPI])

    useEffect(() => {
        // console.log("SPECIALTY", SPECIALTY);
        if (SPECIALTY !== null) {
            setGetData(SPECIALTY);
        }
    }, [SPECIALTY])

    const validateForm = () => {
        var nm = /^[A-Za-z]+$/;

        const newErrors = {};
        if (!userData.email) {
            newErrors.email = 'Email is required';
        }
        else if (!userData.email.includes('@') || !userData.email.includes('.')) {
            newErrors.email = "Email is not valid";
        }
        else if (userData.email.indexOf('@') > userData.email.lastIndexOf('.')) {
            newErrors.email = 'Invalid Email format';
        }
        if (!userData.first_name || userData.first_name.trim() === '') {
            newErrors.full_name = 'Full Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(userData.first_name)) {
            newErrors.full_name = 'Invalid characters in name';
        } else if (userData.first_name.length < 3) {
            newErrors.full_name = 'Name must be at least 3 characters long';
        }
        if (!userData.last_name || userData.last_name.trim() === '') {
            newErrors.full_name = 'Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(userData.last_name)) {
            newErrors.full_name = 'Invalid characters in full name';
        } else if (userData.last_name.length < 3) {
            newErrors.full_name = 'Full Name must be long';
        }
        if (!userData.username) {
            newErrors.username = 'User Name is required';
        }
        else if (!userData.username.match(nm)) {
            newErrors.username = "User Name is not valid";
        }
        if (!userData.video_consulting_fee) {
            newErrors.video_consulting_fee = 'Video Fee is required';
        }
        if (!userData.audio_consulting_fee) {
            newErrors.audio_consulting_fee = 'Audio Fee is required';
        }
        if (!userData.address) {
            newErrors.address = 'Address is required';
        }
        if (!userData.education) {
            newErrors.education = 'Education is required';
        }
        if (!userData.experience) {
            newErrors.experience = 'Experience is required';
        }
        if (!userData.in_clinic_consulting_fee) {
            newErrors.in_clinic_consulting_fee = 'Clinic Fee is required';
        }
        if (!userData.phone_number) {
            newErrors.phone_number = 'Phone Number is required';
        } else if (!userData.phone_number.length === 10) {
            newErrors.phone_number = 'Enter 10 Digit Valid Phone Number';
        }
        if (!userData.password) {
            newErrors.password = 'Password is required!';
        } else if (userData.password.length <= 8 || userData.password.length > 15) {
            newErrors.password = 'Password length must be between 8 and 15 characters!';
        } else if (userData.password !== userData.confpass) {
            newErrors.confpass = 'Password did not match!';
        }
        if (!userData.confpass) {
            newErrors.confpass = 'Confirm Password is required';
        } else if (userData.confpass.length <= 8 || userData.confpass.length > 15) {
            newErrors.confpass = 'Confirm Password length must be between 8 and 15 characters';
        }
        if (!userData.gender) {
            newErrors.gender = 'Gender is required';
        }
        if (!userData.profile_image) {
            newErrors.profile_image = ' Profile Image is required';
        }
        if (!userData.bio) {
            newErrors.bio = "Bio is required";
        }
        // if (!userData.specialty) {
        //     newErrors.specialty = "Specialty is required"
        // }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    let successAlert = () => {
        Swal.fire({
            title: 'successfull',
            text: "data inserted",
            icon: 'success',
            timer: 3000,
            showConfirmButton: false,
        })
    }
    let InvaliAlert = (error) => {
        Swal.fire({
            icon: "error",
            title: "Insert Correct Data",
            text: error ? error : "Please Check, Empty & Wrong Fields are Not Valid"
        });
    }

    const DoctorReg = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", userData.email);
        formData.append("username", userData.username);
        formData.append("password", userData.password);
        formData.append("first_name", userData.first_name);
        formData.append("last_name", userData.last_name);
        formData.append("bio", userData.bio);
        formData.append("gender", userData.gender);
        formData.append("address", userData.address);
        formData.append("education", userData.education);
        formData.append("phone_number", userData.phone_number);
        formData.append("experience", userData.experience);
        formData.append(
            "in_clinic_consulting_fee",
            userData.in_clinic_consulting_fee
        );
        formData.append("video_consulting_fee", userData.video_consulting_fee);
        formData.append("audio_consulting_fee", userData.audio_consulting_fee);
        formData.append("profile_image", userData.profile_image);

        selectedValues.forEach((value) => {
            formData.append("specialty", value);
        });

        if (validateForm()) {
            // axios
            //     .post(`http://127.0.0.1:8000/api/user/register/`, formData)
            //     .then((res) => {
            //         setUserData(res.data);
            dispatch(SignupDataApi(formData))
            successAlert();
            navigate('/')
            // })
            //     .catch((error) => {
            //         console.log("API Error", InvaliAlert(error));
            //     });
        }
        else {
            InvaliAlert();
        }
    }

    const ResetData = () => {
        setUserData({
            email: "",
            username: "",
            password: "",
            confpass: "",
            first_name: "",
            last_name: "",
            bio: "",
            gender: "",
            address: "",
            education: "",
            phone_number: "",
            experience: "",
            in_clinic_consulting_fee: "",
            video_consulting_fee: "",
            audio_consulting_fee: "",
            profile_image: "",
            // specialty: ""
        });
        setSelectedValues([]);
    }
    const GetData = () => {
        // axios.get(`http://127.0.0.1:8000/api/super-specialty/`).then((res) => {
            // setGetData(res.data);
        // })
        dispatch(Single_Get());
    }
    useEffect(() => {
        GetData();
    }, [])

    const handleChange = (e) => {
        setSelectedValues(e.target.value);
    };
    return (
        <div>
            <Container maxWidth="lg" className="boxContainer">
                <Box>
                    <Box sx={{ flexGrow: 1 }} className="boxHeader">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="h4" sx={{ fontWeight: "bold" }}>Doctor Does</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography
                                    paragraph
                                    className="HeadPara"
                                    display="flex"
                                    justifyContent="end"
                                >
                                    If you have account, Please
                                    <Link to='/'>Signin</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    {/*  */}
                    {/* <Container maxWidth="sm" className="formSignin"> */}
                    <Container maxWidth="lg" className="formSignin">
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": { m: 1, width: "110ch" },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography paragraph>SignUp</Typography>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="username"
                                        type="text"
                                        value={userData.username}
                                        onChange={(e) => {
                                            setUserData({ ...userData, username: e.target.value });
                                        }}
                                        label="Username"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.username && <p className='paraValid' style={{ color: "red" }}>{errors.username}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="email"
                                        value={userData.email}
                                        type="email"
                                        onChange={(e) => {
                                            setUserData({ ...userData, email: e.target.value });
                                        }}
                                        label="Email"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.email && <p className='paraValid' style={{ color: "red" }}>{errors.email}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="first_name"
                                        type="text"
                                        value={userData.first_name}
                                        onChange={(e) => {
                                            setUserData({ ...userData, first_name: e.target.value });
                                        }}
                                        label="First Name"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.first_name && <p className='paraValid' style={{ color: "red" }}>{errors.first_name}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="last_name"
                                        type="text"
                                        value={userData.last_name}
                                        onChange={(e) => {
                                            setUserData({ ...userData, last_name: e.target.value });
                                        }}
                                        label="Last Name"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.last_name && <p className='paraValid' style={{ color: "red" }}>{errors.last_name}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="profile_image"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                profile_image: e.target.files[0],
                                            });
                                        }}
                                        autoComplete='off'
                                        variant="outlined"
                                        className="IFWidth"
                                        label="P"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                    />
                                    {errors.profile_image && <p className='paraValid' style={{ color: "red" }}>{errors.profile_image}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="education"
                                        type="text"
                                        value={userData.education}
                                        onChange={(e) => {
                                            setUserData({ ...userData, education: e.target.value });
                                        }}
                                        label="Education"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.education && <p className='paraValid' style={{ color: "red" }}>{errors.education}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="experience"
                                        type="number"
                                        value={userData.experience}
                                        onChange={(e) => {
                                            setUserData({ ...userData, experience: e.target.value });
                                        }}
                                        label="Experience"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.experience && <p className='paraValid' style={{ color: "red" }}>{errors.experience}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="in_clinic_consulting_fee"
                                        type="number"
                                        value={userData.in_clinic_consulting_fee}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                in_clinic_consulting_fee: e.target.value,
                                            });
                                        }}
                                        label="Clinic Fee"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.in_clinic_consulting_fee && <p className='paraValid' style={{ color: "red" }}>{errors.in_clinic_consulting_fee}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="video_consulting_fee"
                                        type="number"
                                        value={userData.video_consulting_fee}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                video_consulting_fee: e.target.value,
                                            });
                                        }}
                                        label="Video Fee"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.video_consulting_fee && <p className='paraValid' style={{ color: "red" }}>{errors.video_consulting_fee}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="audio_consulting_fee"
                                        type="number"
                                        value={userData.audio_consulting_fee}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                audio_consulting_fee: e.target.value,
                                            });
                                        }}
                                        label="Audio Fee"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.audio_consulting_fee && <p className='paraValid' style={{ color: "red" }}>{errors.audio_consulting_fee}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="password"
                                        value={userData.password}
                                        label="Password"
                                        onChange={(e) => {
                                            setUserData({ ...userData, password: e.target.value });
                                        }}
                                        type="password"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.password && <p className='paraValid' style={{ color: "red" }}>{errors.password}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="confpass"
                                        label="Confirm Password"
                                        variant="outlined"
                                        className="IFWidth"
                                        type="password"
                                        value={userData.confpass}
                                        onChange={(e) => {
                                            setUserData({ ...userData, confpass: e.target.value });
                                        }}
                                    />
                                    {errors.confpass && <p className='paraValid' style={{ color: "red" }}>{errors.confpass}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="phone_number"
                                        type="text"
                                        value={userData.phone_number}
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                phone_number: e.target.value,
                                            });
                                        }}
                                        label="Phone Number"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.phone_number && <p className='paraValid' style={{ color: "red" }}>{errors.phone_number}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="address"
                                        value={userData.address}
                                        label="Address"
                                        type="text"
                                        onChange={(e) => {
                                            setUserData({ ...userData, address: e.target.value });
                                        }}
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.address && <p className='paraValid' style={{ color: "red" }}>{errors.address}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="gender"
                                        type="gender"
                                        value={userData.gender}
                                        onChange={(e) => {
                                            setUserData({ ...userData, gender: e.target.value });
                                        }}
                                        label="Gender"
                                        variant="outlined"
                                        placeholder="Enter Details in CAPITAL LETTERS MALE/FEMALE/OTHERS"
                                        className="IFWidth"
                                    />
                                    {errors.gender && <p className='paraValid' style={{ color: "red" }}>{errors.gender}</p>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        name="bio"
                                        value={userData.bio}
                                        onChange={(e) => {
                                            setUserData({ ...userData, bio: e.target.value });
                                        }}
                                        label="Bio"
                                        type="text"
                                        variant="outlined"
                                        className="IFWidth"
                                    />
                                    {errors.bio && <p className='paraValid' style={{ color: "red" }}>{errors.bio}</p>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box sx={{ minWidth: 250 }}>
                                        {/* <InputLabel id="demo-simple-select-label">Speciality</InputLabel> */}
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="specialty"
                                                // sx={{ border: 'none', transform: 'rotate(90deg)' }}
                                                value={selectedValues}
                                                label="Speciality"
                                                multiple
                                                onChange={handleChange}
                                            >
                                                {getData ?
                                                    getData.map((item) => {
                                                        return (
                                                            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                                        )
                                                    }) : null
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                </Grid>
                            </Grid>
                            <br />
                            <Stack
                                spacing={2}
                                direction="row"
                                display="flex"
                                justifyContent="end"
                            >
                                <Button variant="contained" onClick={ResetData}>Reset</Button>
                                <Button variant="contained" onClick={DoctorReg}>Submit</Button>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Container >
            <br />
            <br />
        </div >
    );
}
