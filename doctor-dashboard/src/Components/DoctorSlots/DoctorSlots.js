import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../Style/DoctorSlots.css';
// import { DatePicker } from "@mui/x-date-pickers";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DoctorSlots = () => {
    const [open, setOpen] = React.useState(false);
    const [strt, setStrt] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [docdata, setDocdata] = useState([]);
    const [Slt, setSlt] = useState({ id: '', day: '', start: '', end: '' });
    const [strt1, setStrt1] = React.useState([]);
    const [end1, setEnd1] = React.useState([]);
    const [startTimes, setStartTimes] = useState([]);
    const [endTimes, setEndTimes] = useState([]);
    const [day, setDay] = useState(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
    const [myslots, setMyslots] = useState([
        {
            day: "MON",
            slots: [
                { start: "", end: "" },
            ]
        },
        // {
        //     day: "TUE",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
        // {
        //     day: "WED",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
        // {
        //     day: "THU",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
        // {
        //     day: "FRI",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
        // {
        //     day: "SAT",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
        // {
        //     day: "SUN",
        //     slots: [
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //         { start: "", end: "" },
        //     ]
        // },
    ]
    )
    const [specificdate, setSpecificdate] = useState([
        {
            "date": "",
            slots: [
                { "start": "", "end": "" },
            ]
        }
    ])

    const [date, setDate] = useState(new Date());
    const [SelectedDT, setSelectedDT] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setStrt(event.target.value);
    };

    const handleChange1 = (event) => {
        setEnd(event.target.value);
    };

    const handleChangeSp = (event) => {
        setStrt1(event.target.value);
        debugger
    };

    const handleChangeSp1 = (event) => {
        setEnd1(event.target.value);
        debugger
    };

    const RemoveFld = (day, index) => {
        setMyslots((prevSlots) => {
            const updatedSlots = prevSlots.map((item) => {
                if (item.day === day) {
                    return {
                        ...item,
                        slots: item.slots.filter((_, i) => i !== index),
                    };
                }
                return item;
            });
            return updatedSlots;
        });
    };

    const handleAddField = (day) => {
        setMyslots((prevSlots) => {
            const updatedSlots = prevSlots.map((item) => {
                if (item.day === day) {
                    return {
                        ...item,
                        slots: [
                            ...item.slots,
                            { start: "", end: "" },
                            // Add more slots if needed
                        ],
                    };
                }
                return item;
            });
            return updatedSlots;
        });
    };
    const handleCheckboxChange = (day) => {
        setMyslots((prevSlots) => {
            const updatedSlots = prevSlots.map((item) => {
                if (item.day === day) {
                    return {
                        ...item,
                        checked: !item.checked,
                    };
                }
                return item;
            });
            return updatedSlots;
        });
    };
    // useEffect((e) => {
    //     const dateString = date;
    //     const dateObj = new Date(dateString);
    //     const desiredDate = dateObj.toLocaleDateString("en-US", {
    //         year: "numeric",
    //         month: "short",
    //         day: "numeric",
    //     });
    //     console.log(desiredDate); // Output: Jan 29 2024
    //     // setSelectedDT({ ...SelectedDT, desiredDate })
    //     // setSelectedDT(prevState => ({
    //     //     ...prevState,
    //     //     SelectedDT: { ...prevState.SelectedDT, desiredDate },
    //     // }));
    //     setSpecificdate(prevState => [
    //         {
    //             ...prevState,
    //             date: desiredDate,
    //         },
    //         ...prevState.slice(0),
    //     ]);
    //     console.log(specificdate);
    // }, [date])

    const AddSpecific = (e) => {
        const dateString = date;
        const dateObj = new Date(dateString);
        const desiredDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        console.log(desiredDate);
        const newStart = strt1;
        const newEnd = end1;
        setSpecificdate((prevState) => [
            {
                ...prevState,
                date: desiredDate,
                slots: [
                    {
                        start: newStart,
                        end: newEnd,
                    },
                ],
            },
            ...prevState.slice(0),
        ]);
        setOpen(false);

    }

    // Function to add a new slot
    // const handleAddFieldSp = (dateIndex) => {
    //     setSpecificdate((prevDates) => {
    //         const updatedDates = prevDates.map((item, i) => {
    //             if (i === dateIndex) {
    //                 return {
    //                     ...item,
    //                     slots: [
    //                         ...item.slots,
    //                         { start: "", end: "" },
    //                     ],
    //                 };
    //             }
    //             return item;
    //         });
    //         return updatedDates;
    //     });
    // };

    // Function to remove a slot
    // const RemoveFldSp = (dateIndex, slotIndex) => {
    //     setSpecificdate((prevDates) => {
    //         const updatedDates = prevDates.map((item, i) => {
    //             if (i === dateIndex) {
    //                 return {
    //                     ...item,
    //                     slots: item.slots.filter((_, j) => j !== slotIndex),
    //                 };
    //             }
    //             return item;
    //         });
    //         return updatedDates;
    //     });
    // };
    const RemoveFldSpShow = (date, index) => {
        setSpecificdate((prevDates) => {
            const updatedDates = [...prevDates].filter((item) => item.date !== date);
            return updatedDates;
        });
    };
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleAddFieldSp = () => {
        setStartTimes([...startTimes, '12:00 AM']);
        setEndTimes([...endTimes, '12:00 AM']);
    };

    const RemoveFldSp = (index) => {
        const newStartTimes = [...startTimes];
        const newEndTimes = [...endTimes];

        newStartTimes.splice(index, 1);
        newEndTimes.splice(index, 1);

        setStartTimes(newStartTimes);
        setEndTimes(newEndTimes);
    };
    const id = 0;
    // const SubmitData = (day, start, end) => {
    //     debugger
    //     // const dayid=id+1;
    //     const dayid = Math.random() * 100;
    //     setSlt({ dayid, day, start, end });
    //     debugger
    //     setDocdata(Slt);
    //     setDocdata([...docdata, Slt]);
    //     console.log("Slt", docdata)
    // }
    // const SubmitData = (day, start, end) => {
    //     debugger
    //     const dayid = Math.random() * 100;
    //     // const dayid = id + 1;
    //     const newSlt = { dayid, day, start, end };
    //     const existingIndex = docdata.findIndex(item => item.dayid === newSlt.dayid);
    //     debugger
    //     if (existingIndex !== -1) {
    //         const updatedDocdata = [...docdata];
    //         updatedDocdata.splice(existingIndex, 1);
    //         setDocdata(updatedDocdata);
    //     }
    //     setDocdata(prevDocdata => [...prevDocdata, newSlt]);
    // }
    const SubmitData = (day, start, end) => {
        const dayid = Math.random() * 100;
        const newSlt = { dayid, day, start, end };
        debugger
        const updatedDocdata = docdata.filter(item => item.dayid !== newSlt.dayid);
        debugger
        console.log(updatedDocdata)
        setDocdata([...updatedDocdata, newSlt]);
    };



    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography paragraph>My Availability</Typography>
                <hr />
                <br />
                <br />
                <Box sx={{ boxShadow: '2px 2px 2px 2px lightgray,2px 2px 2px 2px lightgray' }}>
                    <Grid container spacing={2} sx={{ ml: 2.5 }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ borderRight: '1px solid black' }}>
                            <Typography variant="h5" component="div" fontWeight="bold">Weekely Hours</Typography>
                            <br />
                            <br />
                            {myslots ?
                                myslots.map((item, index) => {
                                    return (
                                        <Box key={item.id}>
                                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                                <Grid item xs={1}>
                                                    {
                                                        item.checked ? (
                                                            <input type="checkbox" checked={true} onChange={() => handleCheckboxChange(item.day)} />
                                                        ) : (
                                                            <input type="checkbox" checked={false} onChange={() => handleCheckboxChange(item.day)} />
                                                        )
                                                    }
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography paragraph className="daySlt" value={item.day}>{item.day}</Typography>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    {item.slots ? item.slots.map((valslot, index) => {
                                                        return (
                                                            <>
                                                                {
                                                                    item.checked ? (
                                                                        <>
                                                                            <Grid className="remofld" container key={item.index}>
                                                                                <Grid item xs={6}>
                                                                                    <FormControl sx={{ width: '150px' }}>
                                                                                        <InputLabel id="demo-simple-select-label">Start</InputLabel>
                                                                                        <Select
                                                                                            labelId="demo-simple-select-label"
                                                                                            id="demo-simple-select"
                                                                                            value={strt}
                                                                                            className="startVal"
                                                                                            name="start"
                                                                                            label="start"
                                                                                            onChange={(e) => { handleChange(e, index) }}>
                                                                                            {/* // onChange={(e) => handleChange(item.day, index, 'start', e.target.value)}> */}
                                                                                            <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                                            <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
                                                                                            <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
                                                                                            <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
                                                                                            <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
                                                                                            <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
                                                                                            <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
                                                                                            <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
                                                                                            <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
                                                                                            <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
                                                                                            <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
                                                                                            <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
                                                                                            <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                </Grid>
                                                                                <Grid item xs={6}>
                                                                                    <FormControl sx={{ width: '150px' }}>
                                                                                        <InputLabel id="demo-simple-select-label">End</InputLabel>
                                                                                        <Select
                                                                                            labelId="demo-simple-select-label"
                                                                                            id="demo-simple-select"
                                                                                            value={end}
                                                                                            className="endVal"
                                                                                            // value={valslot[index].end}
                                                                                            label="End"
                                                                                            onChange={(e) => { handleChange1(e, index) }}>
                                                                                            <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                                            <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
                                                                                            <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
                                                                                            <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
                                                                                            <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
                                                                                            <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
                                                                                            <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
                                                                                            <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
                                                                                            <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
                                                                                            <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
                                                                                            <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
                                                                                            <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
                                                                                            <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                    <button className="btnshd" type="submit" onClick={() => RemoveFld(item.day, index)}>x</button>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </>
                                                                    ) : (
                                                                        <span>Unavailable</span>
                                                                    )
                                                                }
                                                                <br />
                                                            </>
                                                        )
                                                    }) : 'unavailable'}
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <button className="btnshd" type="submit" onClick={() => handleAddField(item.day)}>+</button>
                                                </Grid>
                                            </Grid>
                                            < button onClick={() => { SubmitData(item.day, strt, end) }}>Submit</button>
                                        </Box>
                                    )
                                })
                                : 'unavailable'}
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="h5" component="div" fontWeight="bold">Date-Specific Hours</Typography>
                            <br />
                            <Typography paragraph>Override your availability for specific dates when your hours differ<br /> from your regular weekly hours.</Typography>
                            <br />
                            {/* <button type="submit" onClick={OpenCalender}>+ Add Date-Specific Hours</button> */}
                            <Button variant="outlined" onClick={handleClickOpen}>+ Add Date-Specific Hours</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                sx="md"
                            >
                                <DialogTitle id="alert-dialog-title">Date Specific Hours</DialogTitle>
                                <DialogContent>
                                    {/* it is working below code */}
                                    <DialogContentText id="alert-dialog-description">
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    <DatePicker selected={date} onChange={handleDateChange} />
                                                    <br />
                                                    <br />
                                                    {startTimes.map((startTime, index) => (
                                                        <Grid container spacing={1} key={index}>
                                                            <Grid item xs={6}>
                                                                <FormControl sx={{ width: '120px' }}>
                                                                    <InputLabel id="demo-simple-select-label1">Start</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label1"
                                                                        id="demo-simple-select1"
                                                                        value={strt1}
                                                                        name="start"
                                                                        label="start"
                                                                        onChange={handleChangeSp}
                                                                    >
                                                                        <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                        <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
                                                                        <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
                                                                        <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
                                                                        <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
                                                                        <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
                                                                        <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
                                                                        <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
                                                                        <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
                                                                        <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
                                                                        <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
                                                                        <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
                                                                        <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <FormControl sx={{ width: '120px' }}>
                                                                    <InputLabel id="demo-simple-select-label2">End</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label2"
                                                                        id="demo-simple-select2"
                                                                        value={end1}
                                                                        label="End"
                                                                        name="end"
                                                                        onChange={handleChangeSp1}
                                                                    >
                                                                        <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                        <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
                                                                        <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
                                                                        <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
                                                                        <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
                                                                        <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
                                                                        <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
                                                                        <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
                                                                        <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
                                                                        <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
                                                                        <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
                                                                        <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
                                                                        <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                                <button className="btnshd" type="button" onClick={() => RemoveFldSp(index)}>
                                                                    x
                                                                </button>
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                    {/* <Grid item xs={1}> */}
                                                    <button className="btnshd" type="button" onClick={handleAddFieldSp}>
                                                        +
                                                    </button>
                                                    {/* </Grid> */}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </DialogContentText>
                                    {/*  */}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={AddSpecific} autoFocus>Agree</Button>
                                </DialogActions>
                            </Dialog>
                            {/* <div>
                                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                            </div> */}
                            {specificdate ?
                                specificdate.map((item, index) => {
                                    return (
                                        <>
                                            <Grid container spacing={2}>
                                                <Grid item xs={4}>
                                                    <Typography paragraph>{item.date}</Typography>&nbsp;
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {item.slots ? item.slots.map((dtitm, index) => {
                                                        return (
                                                            <>
                                                                <Typography paragraph>{dtitm.start} - {dtitm.end}</Typography>
                                                            </>
                                                        )
                                                    }) : ''}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <button className="btnshd" type="submit" onClick={() => RemoveFldSpShow(item.date, index)}>x</button>
                                                </Grid>
                                            </Grid >
                                        </>
                                    )
                                }) : 'undefined'}
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )

}

export default DoctorSlots;