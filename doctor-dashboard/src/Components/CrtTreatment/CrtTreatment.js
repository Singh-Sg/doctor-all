import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import '../../Style/CrtTreatment.css';
import { Avatar, Divider, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { inputSizze, CrdSizze, FourthBox } from '../../Prototypes/styles.js';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CrtTreatment() {
    const [value, setValue] = React.useState(0);
    const [errors, setErrors] = useState({});
    const [crtTreat, setCrtTreat] = useState({ title: '', icon: '', image: '', description: '' });
    const token = localStorage.getItem('token');
    const [StoreVal, setStoreVal] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTreatment, setSelectedTreatment] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [image, setImage] = useState('');
    const [icon, setIcon] = useState('');

    const handleClickOpen = (id) => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${id}`, { headers: headers }).then((res) => {
            console.log(res.data);
            setSelectedTreatment(res.data);
            setOpen(true);
        })
    };

    useEffect(() => {
        if (selectedTreatment[0]) {
        }
    }, [selectedTreatment])
    // const handleClickOpen = (id) => {
    //     setOpen(true);
    // }
    const UpdateData = (idd) => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${idd}`, { headers: headers }).then((res) => {
            console.log(res.data);
            // setCrtTreat(res.data)
            const { title, icon, image, description } = res.data[0];
            setCrtTreat({ title, icon, image, description });
            setIcon(`http://127.0.0.1:8000/${res.data[0].icon}`);
            setImage(`http://127.0.0.1:8000/${res.data[0].image}`);
            console.log(icon, image);
            setSelectedId(idd);
            setIsUpdate(true);
            setOpen(false);
            setValue(1);
        })
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // pagination
    const itemPerPage = 4;
    let getpageno = Math.ceil(StoreVal.length / itemPerPage)
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
        Math.max(setCurrentPage(currentPage - 1, 1));
    }
    let NextClick = (page) => {
        Math.min(setCurrentPage(currentPage + 1, getpageno));
    }

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const [resetIcon, setResetIcon] = useState(false)
    const [resetImage, setResetImage] = useState(false)

    const SubmitTreat = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", crtTreat.title);
        formData.append('description', crtTreat.description.trim());

        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };

        if (resetIcon) {
            formData.append('icon', crtTreat.icon);
        }
        if (resetImage) {
            formData.append('image', crtTreat.image);
        }

        if (isUpdate && selectedId) {
            if (validateForm()) {
                axios.patch(`http://127.0.0.1:8000/api/doctor/treatments/${selectedId}`, formData, { headers: headers })
                    .then((res) => {
                        console.log(res.data);
                        setCrtTreat(res.data);
                        SuccessAlert();
                        ResetTreat();
                        setValue(0);
                        setIsUpdate(false);
                        setSelectedId(null);
                    })
                    .catch((error) => {
                        console.error('Error updating treatment:', error);
                        InvaliAlert('Error updating treatment');
                    });
            }
        } else {
            if (validateForm()) {
                axios.post(`http://127.0.0.1:8000/api/doctor/treatments`, formData, { headers: headers }).then((res) => {
                    console.log(res.data);
                    setCrtTreat(res.data);
                    SuccessAlert();
                    ResetTreat();
                    setValue(0);
                    // getData();
                })
                    .catch((error) => {
                        console.log("Error", InvaliAlert(error));
                    })
            }
            else {
                InvaliAlert();
            }

        }
    }
    const getData = () => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments`, { headers: headers }).then((res) => {
            console.log(res.data);
            setStoreVal(res.data);
        })
    }

    useEffect(() => {
        getData()
    }, [crtTreat]);

    const ResetTreat = () => {
        setCrtTreat({ title: '', icon: '', image: '', description: '' });
        setIcon('');
        setImage('');
    }
    const validateForm = () => {
        const newErrors = {};
        if (!crtTreat.title) {
            newErrors.title = 'Title is required';
        }
        if (!crtTreat.description) {
            newErrors.description = 'Description is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const SuccessAlert = () => {
        Swal.fire({
            title: "Successfull...!",
            text: "Submitted Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 3000
        });
    }
    const InvaliAlert = (error) => {
        Swal.fire({
            title: error ? error : "Alert",
            text: "Not Submitted!",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000
        });
    }

    function iconUploadHandler(e) {
        setCrtTreat({ ...crtTreat, icon: e.target.files[0] })
        setResetIcon(true)
    }

    function imageUploadHandler(e) {
        setCrtTreat({ ...crtTreat, image: e.target.files[0] })
        setResetImage(true)
    }

    return (
        <Box className="FirstBox">
            <Box className="SecBox" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Treatment" {...a11yProps(0)} />
                    <Tab label="Create Treatment" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                My Treatment
                <br />
                <br />
                {StoreVal && chunkArray(StoreVal.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), 2).map((row, rowIndex) => (
                    <Box className="row" key={rowIndex}>
                        {row.map((item, index) => (
                            <Card sx={CrdSizze} className='CrdPadding' key={item.id}>
                                <div>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <Typography component="div" className='treaticonDiv'>
                                                    <img src={`http://127.0.0.1:8000/${item.icon}`} alt='img' className='treaticon' />
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant='h6' component="div" color="text.primary" gutterBottom><b>{item.title}</b></Typography>
                                                <Typography paragraph color="text.primary" gutterBottom>{item.description.split(' ').join(' ').slice(0, 75) + '...'}</Typography>
                                                <CardActions display="flex" justifyContent="end">
                                                    <Button key={item.id} onClick={() => handleClickOpen(item.id)} >See More <NavigateNextIcon /></Button>
                                                    {selectedTreatment ? selectedTreatment.map((item, index) => {
                                                        return (
                                                            <BootstrapDialog className='DiaglogWidth'
                                                                onClose={handleClose}
                                                                aria-labelledby="customized-dialog-title"
                                                                open={open}
                                                                maxWidth="lg">
                                                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='DiaglogWidth' >
                                                                    My Treatment...
                                                                </DialogTitle>
                                                                <IconButton
                                                                    aria-label="close"
                                                                    onClick={handleClose}
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        right: 8,
                                                                        top: 8,
                                                                        color: (theme) => theme.palette.grey[500],
                                                                    }}>
                                                                    <CloseIcon />
                                                                </IconButton>
                                                                <DialogContent dividers key={item.id} className='cardCont'>
                                                                    <div className='cardCont1'>
                                                                        <Typography variant='h5' component='div' gutterBottom>{item.title}</Typography>
                                                                        <Typography gutterBottom>
                                                                            <img src={`http://127.0.0.1:8000/${item.image}`} alt='img' className='treatimage'></img>
                                                                        </Typography>
                                                                        <Typography gutterBottom >{item.description}</Typography>
                                                                    </div>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button autoFocus onClick={() => { UpdateData(item.id) }}>Edit</Button>
                                                                </DialogActions>
                                                            </BootstrapDialog>
                                                        )
                                                    }) : ''}
                                                </CardActions>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </Box>
                ))}
                <br />
                {getpageno > 1
                    ? <div className='pagination justify-content-center border-primary'>
                        <button className='btn btn-primary' onClick={() => prevClick(currentPage - 1)} style={{ marginLeft: '2px' }} disabled={currentPage === 1 ? true : false}>  prev</button>
                        {PageNumber.map((num, index) => {
                            return (
                                <button className="btn btn-primary" key={index} onClick={() => handleClick(num)} style={{ marginLeft: '2px' }} > {num} </button>
                            )
                        }
                        )}
                        <button className='btn btn-primary' onClick={() => NextClick(currentPage + 1)} style={{ marginLeft: '2px' }} disabled={currentPage === getpageno ? true : false}>Next</button>
                    </div>
                    : null}
            </CustomTabPanel >
            < CustomTabPanel value={value} index={1} >
                Create Treatment
                < br />
                <Box
                    component="form"
                    sx={inputSizze
                    }
                    noValidate
                    autoComplete="off">
                    <br />
                    <FormControl fullWidth className='FControl'
                        variant="standard">
                        <TextField id="outlined-basic" name='title' label="My Treatment" variant="outlined"
                            value={crtTreat.title}
                            onChange={(e) => setCrtTreat({ ...crtTreat, title: e.target.value })} />
                        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                        <br />
                        <p>Current Icon: <Link to={`http://127.0.0.1:8000/${icon}`} target='_blank' rel="noopener noreferrer">{`${icon}`}</Link></p>
                        <TextField id="outlined-basic" name='icon' variant="outlined" type='file' onChange={(e) => iconUploadHandler(e)} accept="image/png, image/jpeg" />
                        <br />
                        <p>Current Image: <Link to={`http://127.0.0.1:8000/${image}`} target='_blank' rel="noopener noreferrer">{`${image}`}</Link></p>
                        <TextField id="outlined-basic" name='image' variant="outlined" type='file' onChange={(e) => imageUploadHandler(e)} accept="image/png, image/jpeg" />
                        <br />
                        <br />
                        <TextField id="outlined-basic" name='description' label="Descriptions" variant="outlined" value={crtTreat.description} onChange={(e) => setCrtTreat({ ...crtTreat, description: e.target.value })} />
                        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                        <br />
                        <Box className='FourthBox' sx={{ pt: 2, justifyContent: 'start' }}>
                            <Button variant="contained" sx={FourthBox} onClick={ResetTreat}>Reset</Button>&nbsp;&nbsp;
                            <Button variant="contained" sx={FourthBox} onClick={SubmitTreat}>Submit</Button>
                        </Box>
                    </FormControl>
                </Box>
            </CustomTabPanel >
        </Box >
    );
}
