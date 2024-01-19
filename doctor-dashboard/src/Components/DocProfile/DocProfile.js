import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Modal from '@mui/material/Modal';
import '../../Style/DocProfile.css';
import TextField from "@mui/material/TextField";
import { useNavigate, Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import Swal from 'sweetalert2'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import ManIcon from '@mui/icons-material/Man';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import {style} from '../../Prototypes/styles.js';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 520,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function DocProfile() {
    var temp = []

    const navigate = useNavigate();
    const [displayimg, setDisplayimg] = useState(true);
    const [DocProfile, setDocProfile] = useState('');
    const token = localStorage.getItem('token');
    const [open, setOpen] = React.useState(false);
    // const [errors, setErrors] = useState({});
    const [getData, setGetData] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);

    const [updateForm, setUpdateForm] = useState('');
    const [updateFormtype, setUpdateFormtype] = useState('');
    const [file, setFile] = useState(null);

    const [userData, setUserData] = useState({
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
        user_: {
            username: "",
            email: "",
            first_name: "",
            last_name: ""
        },
        specialty: []
    });

    // console.log(userData.specialty);
    // const [specialty, setSpecialty] = useState('');

    // first...
    const formFields = [
        { label: 'Clinic Fee', name: 'in_clinic_consulting_fee' },
        { label: 'Video Fee', name: 'video_consulting_fee' },
        { label: 'Audio Fee', name: 'audio_consulting_fee' },
    ];

    const bioFormFields = [
        { label: 'Bio', name: 'bio' },
    ];

    const profileFormFields = [
        { label: 'First Name', name: 'user_.first_name' },
        { label: 'Last Name', name: 'user_.last_name' },
        { label: 'Gender', name: 'gender' },
        { label: 'Education', name: 'education' },
        { label: 'Experience', name: 'experience' },
        { label: 'Speciality', name: 'specialty' }
    ];

    const connectFormFields = [
        { label: 'Address', name: 'address' },
        { label: 'Phone Number', name: 'phone_number' },
    ];

    const ProfileImageFormFields = [
        { label: 'P', name: 'profile_image' },
    ]

    // two..
    const renderFormFields = (fields) => {
        return fields.map((field) => (
            <div key={field.name}>
                {field.name === 'specialty' ? (
                    // <TextField
                    //     id="outlined-basic"
                    //     name={field.name}
                    //     value={getFieldValue(field.name)}
                    //     onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    //     label={field.label}
                    //     variant="outlined"
                    //     className="IFWidth"
                    //     helperText="Separate specialties with commas (,)"
                    // />
                    <>
                        {/* <InputLabel id="demo-simple-select-label">{field.label}</InputLabel> */}
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name={field.name}
                                value={selectedValues}
                                label={field.label}
                                multiple
                                variant="outlined"
                                className="IFWidth"
                                // onChange={handleChange}
                                // onChange={(e) => handleFieldChange(field.name, e.target.value)}
                                onChange={handleChange}
                            >
                                {
                                    getData
                                        ?
                                        getData.map((item) => {
                                            return (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>

                                            )
                                        })
                                        : null
                                }
                            </Select>
                        </FormControl>
                    </>
                ) : (
                    field.name === 'profile_image' ? (
                        <>
                            {/* <Avatar alt='Doctor' src={`http://127.0.0.1:8000/${DocProfile.profile_image}`} sx={{ width: '100px', height: '100px' }} /> */}
                            <TextField
                                id="outlined-basic"
                                name={field.name}
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={(e) => { setUserData({ ...userData, profile_image: e.target.files[0] }) }}
                                variant="outlined"
                                className="IFWidth"
                            />
                        </>
                    ) : (
                        <TextField
                            id="outlined-basic"
                            name={field.name}
                            value={getFieldValue(field.name)}
                            onChange={(e) => handleFieldChange(field.name, e.target.value)}
                            label={field.label}
                            variant="outlined"
                            className="IFWidth"
                        />
                    )
                )
                }
                <br />
                <br />
            </div>
        ));
    };
    //   two end...

    //four...
    const handleFieldChange = (fieldName, value) => {
        setUserData((prevUserData) => {
            const newUserData = { ...prevUserData };

            if (typeof fieldName === 'string' && fieldName.includes('.')) {
                const fieldNames = fieldName.split('.');
                let currentField = newUserData;

                for (let i = 0; i < fieldNames.length - 1; i++) {
                    currentField = currentField[fieldNames[i]] || {};
                }

                currentField[fieldNames[fieldNames.length - 1]] = value;
            } else if (fieldName === 'specialty') {
                if (value) {
                    value.map((selected_id) => temp.push(selected_id));
                }
            } else if (fieldName === 'profile_image') {
                // Assuming value is a string representing the image URL
                if (typeof value === 'string') {
                    newUserData.profile_image = value;
                } else {
                    console.error('Invalid value type for profile_image. Expected string.');
                }
            } else {
                newUserData[fieldName] = value;
            }

            return newUserData;
        });
    };


    const getFieldValue = (fieldName) => {
        // Handle nested fields like "user_.first_name"
        const fieldNames = fieldName.split('.');
        let value = userData;
        for (const name of fieldNames) {
            value = value[name];
        }
        return value;
    };

    const getFormFields = (formType) => {
        switch (formType) {
            case 'fee':
                return formFields;
            case 'bio':
                return bioFormFields;
            case 'profile':
                return profileFormFields;
            case 'connect':
                return connectFormFields;
            case 'Profile_image':
                return ProfileImageFormFields;
            default:
                return [];
        }
    };
    // four end...

    const handleOpen = (event) => {
        setUpdateFormtype(event)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
        resetUserData();
    }
    const resetUserData = () => {
        setUserData({
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
            user_: {
                username: "",
                email: "",
                first_name: "",
                last_name: ""
            },
            specialty: []
        });
    };

    const handleChange = (e) => {
        const selectedSpecialties = e.target.value;
        setSelectedValues(selectedSpecialties);
    };
    const GetData = () => {
        const headers = {
            'Authorization': `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor`, { headers: headers })
            .then((res) => {
                // console.log(res.data);
                setDocProfile(res.data);
                setUserData(res.data);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    useEffect(() => {
        GetData();
    }, [open])

    const getdataS = () => {
        axios.get(`http://127.0.0.1:8000/api/super-specialty/`).then((res) => {
            // console.log(res.data);
            setGetData(res.data);
        })
    }
    useEffect(() => {
        getdataS();
    }, [])
    const BlurProfile = () => {
        setDisplayimg(false);
    }
    const ShowProfile = () => {
        setDisplayimg(true)
    }


    // update code...
    const DoctorReg = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append("profile_image", userData.profile_image);

        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };

        let updateformdata = {}
        // if (isUpdate) {
        if (updateFormtype === 'Profile_image') {
            formData.append('profile_image', userData.profile_image);
        }
        // if (validateForm()) {
        if (updateFormtype === "fee") {
            updateformdata = {
                "in_clinic_consulting_fee": userData.in_clinic_consulting_fee,
                "video_consulting_fee": userData.video_consulting_fee,
                "audio_consulting_fee": userData.audio_consulting_fee
            }
        }
        if (updateFormtype === "connect") {
            updateformdata = {
                "address": userData.address,
                "phone_number": userData.phone_number,
            }
        }
        if (updateFormtype == "bio") {
            updateformdata = {
                "bio": userData.bio
            }
        }

        if (updateFormtype === "profile") {
            formData.append("first_name", userData.user_.first_name);
            formData.append("last_name", userData.user_.last_name);
            formData.append("gender", userData.gender);
            formData.append("education", userData.education);
            formData.append("experience", userData.experience);

            // Append each selected specialty to formData
            selectedValues.forEach((value) => {
                formData.append("specialty", value);
            });
        }
        // console.log("formData : ", formData);

        axios
            .patch(`http://127.0.0.1:8000/api/doctor`,
                updateFormtype === 'Profile_image' || updateFormtype === 'profile'
                    ? formData
                    : updateformdata,
                { "headers": headers })
            .then((res) => {
                // console.log("res.data from submit btn : ", res.data);
                setUserData(res.data);
                setOpen(false)
                Swal.fire({
                    text: "Profile updated successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log("API Error", error);
            });
    }
    // }

    // update code end...
    return (
        <div>
            {/* <Typography paragraph>Profile</Typography> */}
            {/* <button>Update Profile</button> */}
            <Stack spacing={2} direction="row">
            <Link to="/sidemenu/update-profile"><Button variant="text">Update Profile</Button></Link>
            </Stack>
            {/* <Stack spacing={2} direction="row">
                <Button variant="text">Update Profile</Button>
            </Stack> */}
            <hr />
            <br />
            <Container className='MainDrDiv'>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={2} lg={2} display="flex" justifyContent="center" alignItems="center">
                            <Box className="blurimg">
                                {DocProfile.profile_image && displayimg ?
                                    <Avatar className='BlrPr' alt='Doctor' onMouseEnter={BlurProfile} src={`http://127.0.0.1:8000/${DocProfile.profile_image}`} sx={{ width: '150px', height: '150px' }} />
                                    :
                                    <Avatar className='ShrPr' alt='Doctor' onMouseOut={ShowProfile} sx={{ width: '150px', height: '150px' }} onClick={() => { handleOpen("Profile_image") }}><Button><CreateIcon /></Button></Avatar>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} display="flex" justifyContent="start" alignItems="start">
                            <Box>
                                <br />
                                {/* <Button onClick={() => { handleOpen("profile") }}><CreateIcon /></Button> */}
                                <Typography variant='h5' component="div" sx={{ ml: 2.6 }}><b>Dr. {DocProfile.name}</b><Button className='styleButton' onClick={() => { handleOpen("profile") }}><CreateIcon fontSize="small" className="CrtIcn" /></Button></Typography>
                                <Box display="flex" justifyContent="center" color="text.secondary">
                                    {DocProfile.specialty_ ?
                                        DocProfile.specialty_.map((item, index) => {
                                            return (
                                                <Typography key={item.id} value={item.id} paragraph>{item.title},</Typography>
                                            )
                                        })
                                        : null}
                                </Box>
                                <Typography paragraph color="text.secondary" sx={{ ml: 2.6 }}>{DocProfile.education}, {DocProfile.gender}, Exp: {DocProfile.experience} Year's</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} className='FirstBox' display="flex" justifyContent="start">
                            <Box sx={{ mb: 1.5 }} color="text.secondary">
                                <br />
                                <Typography variant='h5' component='div' color="black"><b>Contact Details</b><Button className='styleButton' onClick={() => { handleOpen("connect") }}><CreateIcon fontSize="small" className="CrtIcn" /></Button></Typography>
                                {/* <Button onClick={() => { handleOpen("connect") }}><CreateIcon fontSize="small" className="CrtIcn"/></Button> */}
                                <Typography paragraph>Add: {DocProfile.address}</Typography>
                                {/* <Typography paragraph>Exp: {DocProfile.experience} Year's</Typography> */}
                                <Typography paragraph>Cont: {DocProfile.phone_number}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={6} className="Aboutgrd">
                        <Grid item sx={8} md={8}>
                            <Card sx={{ minWidth: 275 }} className='BordBox'>
                                <CardContent>
                                    <Typography variant='h5' component="div" className='AboutText'><b>About Me:</b><Button className='styleButton' onClick={() => { handleOpen("bio") }}><CreateIcon fontSize="small" className="CrtIcn" /></Button>
                                    </Typography>
                                    <br />
                                    <Typography paragraph color="text.secondary">{DocProfile.bio}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sx={4} md={4} display="flex" justifyContent="start">
                            <Card sx={{ minWidth: 275 }} className='BordBox'>
                                <CardContent>
                                    <Box container className="FeeStr" color="text.secondary">
                                        <Typography variant='h5' component='div' color="black"><b>Consult Fee</b><Button className='styleButton' onClick={() => { handleOpen("fee") }}><CreateIcon fontSize="small" className="CrtIcn" /></Button></Typography>
                                        {/* <Button onClick={() => { handleOpen("fee") }}><CreateIcon fontSize="small" /></Button> */}
                                        <br />
                                        <Typography paragraph>Consult Fee: {DocProfile.in_clinic_consulting_fee}</Typography>
                                        <Typography paragraph>Video Fee: {DocProfile.video_consulting_fee}</Typography>
                                        <Typography paragraph>Audio Fee: {DocProfile.audio_consulting_fee}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <br />
                <br />
            </Container>
            {/* modal form fee structure */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h3">Update Profile</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {renderFormFields(getFormFields(updateFormtype))}
                    </Typography>
                    <Stack spacing={2} direction="row" display="flex" justifyContent="end">
                        <Button variant="contained">Reset</Button>
                        <Button variant="contained" type="submit" onClick={DoctorReg}>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}
