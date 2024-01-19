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
import '../../Style/CreatePost.css';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { CrdSizzeArt } from '../../Prototypes/styles.js';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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

export default function CreatePost() {
    const [value, setValue] = React.useState(0);
    const [CrtArticle, setCrtArticle] = useState({ title: '', image: '', description: '' })
    const [image, setImage] = useState('');
    const [AccessData, setAccessData] = useState([]);
    const token = localStorage.getItem('token');
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [selectedValues, setSelectedValues] = useState([]);
    const [errors, setErrors] = useState({});
    const [resetImage, setResetImage] = useState(false);
    const navv = useNavigate();


    function getDateformat(api_date) {
        const dateString = api_date;

        // Create a new Date object from the string
        const dateObject = new Date(dateString);

        // Get the day, month, and year
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Months are zero-indexed, so we add 1
        const year = dateObject.getFullYear();

        // Create the formatted date string in dd-mm-yyyy format
        const formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
        return formattedDate
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // pagination
    const itemPerPage = 6;
    let getpageno = Math.ceil(AccessData.length / itemPerPage)
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

    const SubmitData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', CrtArticle.title);
        formData.append('description', CrtArticle.description.trim());

        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        if (resetImage) {
            formData.append('image', CrtArticle.image);
        }
        if (isUpdate && selectedId) {
            if (validateForm()) {
                axios.patch(`http://127.0.0.1:8000/api/doctor/article/${selectedId}`, formData, { headers: headers })
                    .then((res) => {
                        // console.log(res.data);
                        setCrtArticle(res.data);
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
                axios.post(`http://127.0.0.1:8000/api/doctor/article`, formData, { headers: headers }).then((res) => {
                    // console.log(res.data);
                    setCrtArticle(res.data);
                    SuccessAlert();
                    ResetTreat();
                    setValue(0);
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
        axios.get(`http://127.0.0.1:8000/api/doctor/article`, { headers: headers }).then((res) => {
            setAccessData(res.data);
            setDate(res.data.created_at);
        })
    }
    useEffect(() => {
        getData();
    }, [CrtArticle])

    useEffect(() => {
        if (selectedValues[0]) {
        }
    }, [selectedValues])

    const handleClickOpen = (id) => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor/article/${id}`, { headers: headers }).then((res) => {
            console.log(res.data);
            setSelectedValues(res.data);
            setOpen(true);
        });
    }

    const UpdateData = (idd) => {
        debugger
        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`,
        };
        axios.get(`http://127.0.0.1:8000/api/doctor/article/${idd}`, { headers: headers }).then((res) => {
            console.log(res.data);
            const { title, image, description } = res.data[0];
            setCrtArticle({ title, image, description });
            setImage(`${res.data[0].image}`);
            setSelectedId(idd);
            setIsUpdate(true);
            setOpen(false);
            setValue(1);
        })

    }
    // 
    let DeleteItem = (idd) => {
        setOpen(false);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/doctor/article/${idd}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
                    Swal.fire({
                        title: 'deleted',
                        text: "data deleted",
                        icon: 'success',
                        timer: 3000,
                        showConfirmButton: false,
                    })
                    if ((currentPage > 1) && ((currentPage >= 2) && (currentPage <= getpageno)) && (currentPage !== 1)) {
                        prevClick();
                        getData();
                    } else if (currentPage === 1) {
                        // handleClick();
                        getData();
                    }
                    else {
                        getData();
                    }
                })
                    .catch((error) => {
                        console.error("Error deleting treatment:", InvaliAlert(error));
                    });
            }
        })
    }

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ResetTreat = () => {
        setCrtArticle({ title: '', image: '', description: '' });
        setImage('');
    }
    const validateForm = () => {
        const newErrors = {};
        if (!CrtArticle.title) {
            newErrors.title = 'Title is required';
        }
        if (!CrtArticle.description) {
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

    function imageUploadHandler(e) {
        setCrtArticle({ ...CrtArticle, image: e.target.files[0] })
        setResetImage(true)
    }

    return (
        <Box className="FirstBox">
            <Box className="SecBox" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My Article" {...a11yProps(0)} />
                    <Tab label="Create Article" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                My Article
                <br />
                <br />
                {AccessData && chunkArray(AccessData.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), 3).map((row, rowIndex) => (
                    <Box className="row" key={rowIndex}>
                        {row.map((item, index) => (
                            <Card sx={CrdSizzeArt}
                                // sx={{CrdSizze, width: '350px', mr: 5.5, mb: 5.5 }}
                                className='CrdPadding1' key={item.id}>
                                <Typography component="div" className='articleiconDiv'>
                                    <img src={`http://127.0.0.1:8000/${item.image}`} alt='img' className='articon' />
                                </Typography>
                                <CardContent>
                                    <br />
                                    <Typography variant='h6' component="div" color="text.primary" gutterBottom><b>{item.title}</b></Typography>
                                    <Typography paragraph color="text.secondary" gutterBottom>{item.description.split(' ').join(' ').slice(0, 100) + '...'}</Typography>
                                    {/* <Typography paragraph color="text.secondary" display="flex" justifyContent="end">{getDateformat(item.created_at)}</Typography> */}
                                </CardContent>
                                <hr />
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button key={item.id} variant="outlined" onClick={() => handleClickOpen(item.id)} >See More</Button>
                                            {selectedValues ? selectedValues.map((item, index) => {
                                                return (
                                                    <BootstrapDialog className='DiaglogWidth'
                                                        onClose={handleClose}
                                                        aria-labelledby="customized-dialog-title"
                                                        open={open}
                                                        maxWidth="lg"
                                                    >
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
                                                            }}
                                                        >
                                                            <CloseIcon />
                                                        </IconButton>
                                                        <DialogContent dividers key={item.id} className='cardCont'>
                                                            <div className='cardCont1'>
                                                                <Typography variant='h5' component='div' gutterBottom>
                                                                    {item.title}
                                                                </Typography>
                                                                <Typography gutterBottom>
                                                                    <img src={`http://127.0.0.1:8000/${item.image}`} alt='img' className='treatimage'></img>
                                                                </Typography>
                                                                <Typography gutterBottom >
                                                                    {item.description}
                                                                </Typography>
                                                            </div>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button autoFocus onClick={() => { UpdateData(item.id) }}>Edit</Button>
                                                            <Button autoFocus onClick={() => { DeleteItem(item.id) }}>Delete</Button>
                                                        </DialogActions>
                                                    </BootstrapDialog>
                                                )
                                            })
                                                : ''}
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography paragraph color='#0276aa' display="flex" justifyContent="end"><CalendarMonthIcon />{getDateformat(item.created_at)}</Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                ))
                }
                <br />
                {
                    getpageno > 1
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
                        : null
                }
                <br />
                <br />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Create Article
                <br />
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '100ch' }, }
                    }
                    noValidate
                    autoComplete="off"
                >
                    <br />
                    <FormControl fullWidth className='FControl'
                        // { m: 1 }
                        // }
                        variant="standard">
                        <TextField id="outlined-basic" name='title' value={CrtArticle.title} onChange={(e) => { setCrtArticle({ ...CrtArticle, title: e.target.value }) }} label="My Article" variant="outlined" />
                        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                        <br />
                        <p>Current Image: <Link to={`http://127.0.0.1:8000/${image}`} target='_blank' rel="noopener noreferrer">{`${image}`}</Link></p>
                        <TextField id="outlined-basic" name='image' onChange={(e) => imageUploadHandler(e)} accept="image/png, image/jpeg" variant="outlined" type='file' />
                        <br />
                        <br/>
                        <TextField id="outlined-basic" name='description' value={CrtArticle.description} onChange={(e) => { setCrtArticle({ ...CrtArticle, description: e.target.value }) }} label="Descriptions" variant="outlined" />
                        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                        <br />
                        <Box className='FourthBoxArt' display="flex" justifyContent="start">
                            <Button variant="contained" className='BtnWthArt' onClick={ResetTreat}>Cancel</Button>&nbsp;
                            <Button variant="contained" className='BtnWthArt' onClick={SubmitData}>Submit</Button>
                        </Box>
                    </FormControl>
                </Box>
            </CustomTabPanel>
        </Box>
    );
}

