// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PrjName } from './styles.js';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { SetProf, drToggleOpen, MainSection } from './styles.js';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import { cardRow, SchedTabBody, PatTabBody, BoxSearch, SearchTextField, AppBarStyle, drnamegrd, MenuDrpDown, navComp, drToggle } from './styles.js'
import { Grid } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import ColumnChart from '../charts/ColumnChart.js';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import TimelineIcon from '@mui/icons-material/Timeline';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import DirectionsIcon from '@mui/icons-material/Directions';
import TodayIcon from '@mui/icons-material/Today';
// import NightlightIcon from '@mui/icons-material/Nightlight';
import '../Style/sidemenu.css'
// import { grey, lightBlue } from 'material-ui-colors';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AOS from 'aos';
import CircleIcon from '@mui/icons-material/Circle';
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
import axios from 'axios';

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

function createData(name, Ward, Priority, StartDate, EndDate,) {
    return {
        name, Ward, Priority, StartDate, EndDate,
    };
}

const rowsPAt = [
    createData('Akash Jain', '111', 'High', '12/12/23', '15/12/23'),
    createData('Nitesh Verma', '112', 'Medium', '13/12/23', '18/12/23'),
    createData('Abhay Jain', '113', 'High', '12/12/23', '------'),
    createData('Abhi Vaid', '114', 'High', '14/12/23', '22/12/23'),
    createData('Akash Solanki', '115', 'Low', '15/12/23', '------'),
    createData('Akash PAtel', '116', 'Medium', '16/12/23', '25/12/23'),
];

function createSchedule(name, Mon, Tue, Wed, Thu, Fri, Sat, Sun,) {
    return { name, Mon, Tue, Wed, Thu, Fri, Sat, Sun };
}

const rowsdata = [
    createSchedule('Mon', 'book', ' Avail', "book ", 'Avail', 'book', 'Avail', 'book'),
    createSchedule('Tue', 'Avail', " book", 'book', 'Avail', " book", 'Avail', " book", 'Avail'),
    createSchedule('Wed', 'book', 'Avail', 'book', 'Avail', 'Avail', 'Avail', 'book', 'Avail'),
    createSchedule('Thu', 'Avail', "book ", 'Avail', 'Avail', 'book', 'Avail', 'Avail', "book "),
    createSchedule('Fri', 'Avail', 'Avail', 'book', 'book', 'Avail', 'book', 'book', 'book'),
    createSchedule('Sat', "book ", 'Avail', 'book', 'Avail', 'Avail', 'book', 'Avail', " book"),
    createSchedule('Sun', 'Avail', 'book', 'book', 'book', 'Avail', 'Avail', 'book', 'Avail', 'Avail'),
];

export default function SideMenu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [DocProfile, setDocProfile] = useState('');

    const navigation = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [mode, setMode] = useState('light');
    const [theme, setTheme] = useState('');

    const handleChange = (e) => {
        setTheme(e.target.value)
    }

    function toggleMode() {
        setMode(mode === 'light' ? 'dark' : 'light');
    }
    useEffect(() => {
        const body = document.body;
        body.classList.remove("light", "dark");
        body.classList.add(mode);
    }, [mode]);

    useEffect(() => {
        const dashes = document.getElementsByClassName("MLDash");
        for (let i = 0; i < dashes.length; i++) {
            dashes[i].style.backgroundColor = theme;
        }
    }, [theme]);
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
            navigation("/");
        }
        // else {
        // getData();
        // navigation('')
        // }
    })
    const GetData = () => {
        const headers = {
            'Authorization': `Bearer ${token}`,
        };
        // debugger
        axios.get(`http://127.0.0.1:8000/api/doctor`, { headers: headers })
            .then((res) => {
                // debugger
                console.log(res.data);
                setDocProfile(res.data);
            })
            .catch((error) => {
                // debugger
                if (error.response.data.code === 'token_not_valid') {
                    // alert('Given token is not valid for any token type')
                    navigation("/")
                }
                console.log('error', error);
            })
    }
    useEffect(() => {
        GetData();
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // -----------------//

    // const [dir, setDir] = React.useState({ right: false });

    // let themeColor=['#116A7A','#116A7B','#3D3B40','#FF90BC','#6DB9EF'];
    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setDir({ ...dir, [anchor]: open });
    // };

    // const list = (anchor) => (
    //     <Box
    //         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 100 : 100}}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //         <List>
    //             {themeColor.map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         {/* <ListItemIcon> */}
    //                         {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
    //                         {/* </ListItemIcon> */}
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>)

    let data = [
        {
            icons: <GridViewIcon />,
            name: "Dashboard",
            link: ""
        },
        {
            icons: <ScheduleIcon />,
            name: "My Article",
            link: "/sidemenu/mytitle"
        },
        {
            icons: <PersonIcon />,
            name: "My Treatment",
            link: "/sidemenu/crt-treat"
        },
        {
            icons: <BookOnlineIcon />,
            name: "Appointnent",
            link: "/appointment"
        },
        {
            icons: <DocumentScannerIcon />,
            name: "Billings",
            link: "/billings"
        },
        {
            icons: <AddchartIcon />,
            name: "Echarts",
            link: "/echarts"
        },
        {
            icons: <MultilineChartIcon />,
            name: "Morrischart",
            link: "/morrischart"
        },
        {
            icons: <DocumentScannerIcon />,
            name: "Working Track",
            link: "/workingchart"
        },
        {
            icons: <TimelineIcon />,
            name: "charts",
            link: "/echarts"
        },
        {
            icons: <DirectionsIcon />,
            name: "Maps",
            link: "/maps"
        },
        {
            icons: <TodayIcon />,
            name: "Calender",
            link: "/calender"
        },
        {
            icons: <ScheduleIcon />,
            name: "Timings",
            link: "/calender"
        }
    ]
    const drawer = (
        <div className="MainLeftDash MLDash">
            <Typography variant="h4" noWrap component="div" sx={PrjName}>
                Doctors Do
            </Typography>
            <Divider />
            <Box
                component="form"
                sx={BoxSearch}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic" label="Search" variant="outlined"
                    sx={SearchTextField}
                />
            </Box>
            <Divider />
            <List>
                {data.map((el, index) => (
                    <ListItem key={el.id} disablePadding>
                        <Link to={el.link} className="dashLink">
                            <ListItemButton>
                                <ListItemIcon className='listItem' key={index}>
                                    {el.icons}
                                </ListItemIcon>
                                <ListItemText primary={el.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="BoxSect">
            <CssBaseline />
            <AppBar className='MLDash'
                position="fixed"
                sx={AppBarStyle}
            >
                <Toolbar>
                    <Grid container>
                        <Grid item xs={6}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={drnamegrd}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className='drnameText' noWrap component="div">
                                Dr. Mohit Joshi
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction="row" spacing={2} justifyContent="end">
                                <Typography variant="h4" noWrap component="div">
                                    <NotificationsActiveIcon />
                                </Typography>
                                <Typography variant="h4" noWrap component="div">
                                    <SettingsIcon />
                                </Typography>
                                {/* <button onClick={toggleMode} className='ModeIcn' >
                                    <NightlightIcon />
                                </button> */}
                                <Box sx={{ minWidth: 50 }}>
                                    <FormControl fullWidth>
                                        {/* <InputLabel id="demo-simple-select-label">Theme</InputLabel> */}
                                        {/* <button id='demo-simple-select-label'><NightlightIcon/></button> */}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // multiple
                                            sx={{ border: 'none', transform: 'rotate(90deg)' }}
                                            value={theme}
                                            label="Theme"
                                            onChange={handleChange}
                                        >
                                            {/* <box sx={{transform: 'rotate(90deg)' }}> */}
                                            <MenuItem value={'#116A7A'}><CircleIcon sx={{ color: 'lightblue' }} /></MenuItem>
                                            <MenuItem value={'#116A7B'}><CircleIcon sx={{ color: 'blue' }} /></MenuItem>
                                            <MenuItem value={'#3D3B40'}><CircleIcon sx={{ color: 'black' }} /></MenuItem>
                                            <MenuItem value={'#FF90BC'}><CircleIcon sx={{ color: 'pink' }} /></MenuItem>
                                            <MenuItem value={'#6DB9EF'}><CircleIcon sx={{ color: 'lightblue' }} /></MenuItem>
                                            {/* </box> */}
                                        </Select>
                                    </FormControl>
                                    {/* right open nav */}
                                    {/* {['right'].map((anchor) => (
                                        <Box key={anchor}>
                                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                            <Drawer
                                                anchor={anchor}
                                                open={dir[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </Box>
                                    ))} */}
                                </Box>
                                {/* <Button>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFrHvLcbedVGWnvUwGDRlTzxrtgGFaXe5uA&usqp=CAU" />
                                </Button> */}
                                {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        // sx={{ ml: 2 }}
                                        className='userIcn'
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}>
                                        {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                        {/* <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFrHvLcbedVGWnvUwGDRlTzxrtgGFaXe5uA&usqp=CAU" /> */}
                                        {DocProfile.profile_image ?
                                            <Avatar alt='Doctor' src={`http://127.0.0.1:8000/${DocProfile.profile_image}`} />
                                            :
                                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFrHvLcbedVGWnvUwGDRlTzxrtgGFaXe5uA&usqp=CAU" />}
                                    </IconButton>
                                </Tooltip>
                                {/* </Box> */}
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: { MenuDrpDown },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <Link to="/sidemenu/docprofile" className='Prof'><MenuItem onClick={handleClose}>
                                        {DocProfile.profile_image ?
                                            <Avatar alt='Doctor' src={`http://127.0.0.1:8000/${DocProfile.profile_image}`} />
                                            :
                                            <Avatar alt="Remy Sharp" />} Profile
                                    </MenuItem></Link>
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={navComp}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={drToggle}
                >
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" sx={drToggleOpen}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={MainSection
            }>
                <Toolbar />
                {/* <Toolbar /> */}
                <Outlet />
                {/* <Box sx={{ cardRow }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Card variant="outlined" className="CardVarSix" data-aos="zoom-in" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>Beds</Typography>
                                    <hr />
                                    <Typography variant="h5" component="div">86</Typography>
                                    <Typography className='TypoPara' color="text.secondary">Available hospital bads</Typography>
                                    <Card>
                                        <ColumnChart />
                                    </Card>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card variant="outlined" className='CardVarSixT' data-aos="zoom-in" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>Doctors</Typography>
                                    <hr />
                                    <Typography variant="h5" component="div">46</Typography>
                                    <Typography className='TypoPara' color="text.secondary">Available Doctors</Typography>
                                    <Card>
                                        <ColumnChart />
                                    </Card>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container>
                        <Grid item xs={6}>
                            <Card variant="outlined" className='CardVarSix' data-aos="zoom-in" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>Ambulances</Typography>
                                    <hr />
                                    <Typography variant="h5" component="div">
                                        26
                                    </Typography>
                                    <Typography className='TypoPara' color="text.secondary">Available hospital Ambulances</Typography>
                                    <Card>
                                        <ColumnChart />
                                    </Card>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card variant="outlined" className='CardVarSixT' data-aos="zoom-in" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>Working Track</Typography>
                                    <hr />
                                    <Typography variant="h5" component="div">29/12/2023</Typography>
                                    <Typography className='TypoPara' color="text.secondary">16:26:00</Typography>
                                    <Card>
                                        <ColumnChart />
                                    </Card>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <br />
                <br /> */}
                {/* <Box sx={{ cardRow }}>
                    <Grid container>
                        <Grid item xs={8} >
                            <Card variant="outlined" className="CrdVariant" data-aos="fade-right" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant='h5' color="text.secondary" gutterBottom>Patients</Typography>
                                    <Typography className='TypoPara' color="text.secondary">This is your several Patient list</Typography>
                                    <hr />
                                    <Typography variant="h5" component="div">
                                        <TableContainer component={Paper}>
                                            <Table size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align="right">Ward No.</TableCell>
                                                        <TableCell align="right">Priority</TableCell>
                                                        <TableCell align="right">Start Date</TableCell>
                                                        <TableCell align="right">End Date</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rowsPAt.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={PatTabBody}>
                                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                                            <TableCell align="right">{row.Ward}</TableCell>
                                                            <TableCell align="right">{row.Priority}</TableCell>
                                                            <TableCell align="right">{row.StartDate}</TableCell>
                                                            <TableCell align="right">{row.EndDate}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card variant="outlined" data-aos="fade-left" data-aos-duration="3000">
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar />
                                        </LocalizationProvider>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <br />
                <br /> */}
                {/* <Box sx={{ cardRow }} data-aos="fade-up" data-aos-duration="3000">
                    <Grid>
                        <Card variant="outlined">
                            <CardContent >
                                <Typography variant='h5' color="text.secondary" gutterBottom>Schedules</Typography>
                                <Typography className='TypoPara' color="text.secondary">Take a look to your schedule for this month</Typography>
                                <hr />
                                <Typography variant="h5" component="div">
                                    <TableContainer component={Paper}>
                                        <Table size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Day/Timing</TableCell>
                                                    <TableCell align="right">11:00 AM</TableCell>
                                                    <TableCell align="right">11:15 AM</TableCell>
                                                    <TableCell align="right">11:30 AM</TableCell>
                                                    <TableCell align="right">11:45 AM</TableCell>
                                                    <TableCell align="right">12:00 AM</TableCell>
                                                    <TableCell align="right">12:15 PM</TableCell>
                                                    <TableCell align="right">12:30 PM</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rowsdata.map((row1) => (
                                                    <TableRow
                                                        key={row1.name}
                                                        sx={SchedTabBody}>
                                                        <TableCell component="th" scope="row">
                                                            {row1.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row1.Mon}</TableCell>
                                                        <TableCell align="right">{row1.Tue}</TableCell>
                                                        <TableCell align="right">{row1.Wed}</TableCell>
                                                        <TableCell align="right">{row1.Thu}</TableCell>
                                                        <TableCell align="right">{row1.Fri}</TableCell>
                                                        <TableCell align="right">{row1.Sat}</TableCell>
                                                        <TableCell align="right">{row1.Sun}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box> */}
            </Box>
        </Box >
    );
}
