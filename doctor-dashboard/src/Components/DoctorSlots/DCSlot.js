// import React, { useEffect, useState } from "react";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from "@mui/material/Typography";
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
// import '../../Style/DoctorSlots.css';
// import { MenuItem } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";


// const DCSlot = () => {
//     const [open, setOpen] = React.useState(false);
//     const [docdata, setDocdata] = useState([]);
//     const [strt, setStrt] = useState('')
//     const [end, setEnd] = useState('')
//     const [strt1, setStrt1] = useState('')
//     const [end1, setEnd1] = useState('')
//     const [myslots, setMyslots] = useState([
//         { day: "MON", checked: true, slots: [{ start: "", end: "" }] },
//         { day: "TUE", checked: true, slots: [{ start: "", end: "" }] },
//         { day: "WED", checked: true, slots: [{ start: "", end: "" }] },
//         { day: "THU", checked: true, slots: [{ start: "", end: "" }] },
//     ]);
//     const [specificdate, setSpecificdate] = useState([
//         { date: new Date(), slots: [{ start: "", end: "" }] },
//     ]);

//     const handleChange = (event) => {
//         setStrt(event.target.value);
//     };

//     const handleChange1 = (event) => {
//         setEnd(event.target.value);
//     };

//     const handleChangeSp = (event) => {
//         setStrt1(event.target.value);
//         debugger
//     };

//     const handleChangeSp1 = (event) => {
//         setEnd1(event.target.value);
//         debugger
//     };

//     const handleCheckboxChange = (day) => {
//         setMyslots((prevSlots) => {
//             const updatedSlots = prevSlots.map((item) => {
//                 if (item.day === day) {
//                     return {
//                         ...item,
//                         checked: !item.checked,
//                     };
//                 }
//                 return item;
//             });
//             return updatedSlots;
//         });
//     };

//     const handleAddField = (day) => {
//         setMyslots((prevSlots) => {
//             const updatedSlots = prevSlots.map((item) => {
//                 if (item.day === day) {
//                     return {
//                         ...item,
//                         slots: [...item.slots, { start: "", end: "" }],
//                     };
//                 }
//                 return item;
//             });
//             return updatedSlots;
//         });
//     };

//     const RemoveFld = (day, index) => {
//         setMyslots((prevSlots) => {
//             const updatedSlots = prevSlots.map((item) => {
//                 if (item.day === day) {
//                     return {
//                         ...item,
//                         slots: item.slots.filter((_, i) => i !== index),
//                     };
//                 }
//                 return item;
//             });
//             return updatedSlots;
//         });
//     };

//     const AddSpecific = () => {
//         setSpecificdate((prevDates) => [
//             ...prevDates,
//             { date: new Date(), slots: [{ start: "", end: "" }] },
//         ]);
//         setOpen(false);
//     };

//     const RemoveFldSp = (date, index) => {
//         setSpecificdate((prevDates) => {
//             const updatedDates = prevDates.filter((item) => item.date !== date);
//             return updatedDates;
//         });
//     };

//     const handleDateChange = (selectedDate, index) => {
//         setSpecificdate((prevDates) => {
//             const updatedDates = [...prevDates];
//             updatedDates[index].date = selectedDate;
//             return updatedDates;
//         });
//     };

//     return (
//         <>
//             <CssBaseline />
//             <Container maxWidth="lg">
//                 <Typography paragraph>My Availability</Typography>
//                 <hr />
//                 <br />
//                 <br />
//                 <Box sx={{ boxShadow: '2px 2px 2px 2px lightgray,2px 2px 2px 2px lightgray' }}>
//                     <Grid container spacing={2} sx={{ ml: 2.5 }}>
//                         <Grid item xs={12} sm={12} md={6} lg={6} sx={{ borderRight: '1px solid black' }}>
//                             <Typography variant="h5" component="div" fontWeight="bold">Weekly Hours</Typography>
//                             <br />
//                             <br />
//                             {myslots.map((item) => (
//                                 <Box key={item.day}>
//                                     <Grid container spacing={2} sx={{ mb: 3 }}>
//                                         <Grid item xs={1}>
//                                             <input
//                                                 type="checkbox"
//                                                 checked={item.checked}
//                                                 onChange={() => handleCheckboxChange(item.day)}
//                                             />
//                                         </Grid>
//                                         <Grid item xs={2}>
//                                             <Typography paragraph className="daySlt" value={item.day}>
//                                                 {item.day}
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={8}>
//                                             {item.checked ? (
//                                                 item.slots.map((valslot, index) => (
//                                                     <Grid className="remofld" container key={index}>
//                                                         <Grid item xs={6}>
//                                                             {/* ... your code */}
//                                                             <FormControl sx={{ width: '150px' }}>
//                                                                 <InputLabel id="demo-simple-select-label">Start</InputLabel>
//                                                                 <Select
//                                                                     labelId="demo-simple-select-label"
//                                                                     id="demo-simple-select"
//                                                                     value={strt}
//                                                                     className="startVal"
//                                                                     name="start"
//                                                                     label="start"
//                                                                     onChange={(e) => { handleChange(e, index) }}>
//                                                                     {/* // onChange={(e) => handleChange(item.day, index, 'start', e.target.value)}> */}
//                                                                     <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                     <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
//                                                                     <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
//                                                                     <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
//                                                                     <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
//                                                                     <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
//                                                                     <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
//                                                                     <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
//                                                                     <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
//                                                                     <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
//                                                                     <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
//                                                                     <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
//                                                                     <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                 </Select>
//                                                             </FormControl>
//                                                         </Grid>
//                                                         <Grid item xs={6}>
//                                                             {/* ... your code */}
//                                                             <FormControl sx={{ width: '150px' }}>
//                                                                 <InputLabel id="demo-simple-select-label">End</InputLabel>
//                                                                 <Select
//                                                                     labelId="demo-simple-select-label"
//                                                                     id="demo-simple-select"
//                                                                     value={end}
//                                                                     className="endVal"
//                                                                     // value={valslot[index].end}
//                                                                     label="End"
//                                                                     onChange={(e) => { handleChange1(e, index) }}>
//                                                                     <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                     <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
//                                                                     <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
//                                                                     <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
//                                                                     <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
//                                                                     <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
//                                                                     <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
//                                                                     <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
//                                                                     <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
//                                                                     <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
//                                                                     <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
//                                                                     <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
//                                                                     <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                 </Select>
//                                                             </FormControl>
//                                                             <button className="btnshd" type="submit" onClick={() => RemoveFld(item.day, index)}>x</button>
//                                                         </Grid>
//                                                     </Grid>
//                                                 ))
//                                             ) : (
//                                                 <span>Unavailable</span>
//                                             )}
//                                             <br />
//                                         </Grid>
//                                         <Grid item xs={1}>
//                                             <button onClick={() => handleAddField(item.day)}>+</button>
//                                         </Grid>
//                                     </Grid>
//                                 </Box>
//                             ))}
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={6} lg={6}>
//                             <Typography variant="h5" component="div" fontWeight="bold">Date-Specific Hours</Typography>
//                             <br />
//                             <Typography paragraph>
//                                 Override your availability for specific dates when your hours differ from your regular weekly hours.
//                             </Typography>
//                             <br />
//                             <Button variant="outlined" onClick={() => setOpen(true)}>+ Add Date-Specific Hours</Button>
//                             <Dialog
//                                 open={open}
//                                 onClose={() => setOpen(false)}
//                                 aria-labelledby="alert-dialog-title"
//                                 aria-describedby="alert-dialog-description"
//                                 sx="md"
//                             >
//                                 <DialogTitle id="alert-dialog-title">Date Specific Hours</DialogTitle>
//                                 <DialogContent>
//                                     <DialogContentText id="alert-dialog-description">
//                                         <Card variant="outlined">
//                                             <CardContent>
//                                                 <Typography variant="h5" component="div">
//                                                     {specificdate.map((dateItem, index) => (
//                                                         <div key={index}>
//                                                             <DatePicker
//                                                                 selected={dateItem.date}
//                                                                 onChange={(selectedDate) => handleDateChange(selectedDate, index)}
//                                                             />
//                                                             {/* ... your code */}
//                                                             <Grid container spacing={1} key={index}>
//                                                                 <Grid item xs={6}>
//                                                                     <FormControl sx={{ width: '120px' }}>
//                                                                         <InputLabel id="demo-simple-select-label1">Start</InputLabel>
//                                                                         <Select
//                                                                             labelId="demo-simple-select-label1"
//                                                                             id="demo-simple-select1"
//                                                                             value={strt1}
//                                                                             name="start"
//                                                                             label="start"
//                                                                             onChange={handleChangeSp}
//                                                                         >
//                                                                             <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                             <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
//                                                                             <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
//                                                                             <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
//                                                                             <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
//                                                                             <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
//                                                                             <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
//                                                                             <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
//                                                                             <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
//                                                                             <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
//                                                                             <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
//                                                                             <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
//                                                                             <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                 </Grid>
//                                                                 <Grid item xs={6}>
//                                                                     <FormControl sx={{ width: '120px' }}>
//                                                                         <InputLabel id="demo-simple-select-label2">End</InputLabel>
//                                                                         <Select
//                                                                             labelId="demo-simple-select-label2"
//                                                                             id="demo-simple-select2"
//                                                                             value={end1}
//                                                                             label="End"
//                                                                             name="end"
//                                                                             onChange={handleChangeSp1}
//                                                                         >
//                                                                             <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                             <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
//                                                                             <MenuItem value={"02:00 PM"}>02:00 PM</MenuItem>
//                                                                             <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
//                                                                             <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
//                                                                             <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
//                                                                             <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
//                                                                             <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
//                                                                             <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
//                                                                             <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
//                                                                             <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
//                                                                             <MenuItem value={"11:00 PM"}>11:00 PM</MenuItem>
//                                                                             <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                     <button className="btnshd" type="button" onClick={() => RemoveFldSp(index)}>
//                                                                         x
//                                                                     </button>
//                                                                 </Grid>
//                                                             </Grid>
//                                                         </div>
//                                                     ))}
//                                                     <button onClick={AddSpecific}>Submit</button>
//                                                 </Typography>
//                                             </CardContent>
//                                         </Card>
//                                     </DialogContentText>
//                                 </DialogContent>
//                                 <DialogActions>
//                                     <Button onClick={() => setOpen(false)}>Disagree</Button>
//                                     <Button onClick={AddSpecific} autoFocus>Agree</Button>
//                                 </DialogActions>
//                             </Dialog>
//                             {specificdate.map((item, index) => (
//                                 <Grid container spacing={2} key={index}>
//                                     <Grid item xs={4}>
//                                         <Typography paragraph>{item.date.toString()}</Typography>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         {item.slots.map((dtitm, index) => (
//                                             <Typography paragraph key={index}>
//                                                 {dtitm.start} - {dtitm.end}
//                                             </Typography>
//                                         ))}
//                                     </Grid>
//                                     <Grid item xs={2}>
//                                         <button onClick={() => RemoveFldSp(item.date, index)}>x</button>
//                                     </Grid>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Container>
//         </>
//     );
// };

// export default DCSlot;
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../Style/DoctorSlots.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const DoctorSlots = () => {
    const [open, setOpen] = useState(false);
    const [availability, setAvailability] = useState([]);
    // const [days, setDays] = useState(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
    const [slots, setSlots] = useState([
        {
            day: "MON",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
        {
            day: "TUE",
            checked: false,
            slots: [{ start: "", end: "" }],
        }, {
            day: "WED",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
        {
            day: "THU",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
        {
            day: "FRI",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
        {
            day: "SAT",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
        {
            day: "SUN",
            checked: false,
            slots: [{ start: "", end: "" }],
        },
    ]);

    const handleCheckboxChange = (day) => {
        setSlots((prevSlots) =>
            prevSlots.map((slot) =>
                slot.day === day ? { ...slot, checked: !slot.checked } : slot
            )
        );
    };

    const handleChange = (day, index, field, value) => {
        setSlots((prevSlots) =>
            prevSlots.map((slot) =>
                slot.day === day
                    ? {
                        ...slot,
                        slots: slot.slots.map((s, i) =>
                            i === index ? { ...s, [field]: value } : s
                        ),
                    }
                    : slot
            )
        );
    };

    const handleAddField = (day) => {
        setSlots((prevSlots) =>
            prevSlots.map((slot) =>
                slot.day === day
                    ? { ...slot, slots: [...slot.slots, { start: "", end: "" }] }
                    : slot
            )
        );
    };

    const handleRemoveField = (day, index) => {
        setSlots((prevSlots) =>
            prevSlots.map((slot) =>
                slot.day === day
                    ? { ...slot, slots: slot.slots.filter((_, i) => i !== index) }
                    : slot
            )
        );
    };

    const handleSubmit = () => {
        // Handle submitting data as needed
        console.log(slots);
    };

    // add new
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange1 = (date, slotIndex, key, value) => {
        setAvailability((prevAvailability) => {
            const updatedAvailability = [...prevAvailability];
            const slot = updatedAvailability.find((item) => item.date === date)?.slots[slotIndex];

            if (slot) {
                slot[key] = value;
            }

            return updatedAvailability;
        });
    };

    const handleAddDate = () => {
        setAvailability((prevAvailability) => [...prevAvailability, { date: new Date(), slots: [] }]);
    };

    const handleRemoveDate = (index) => {
        setAvailability((prevAvailability) => prevAvailability.filter((_, i) => i !== index));
    };

    const handleDateChange = (index, selectedDate) => {
        setAvailability((prevAvailability) => {
            const updatedAvailability = [...prevAvailability];
            updatedAvailability[index].date = selectedDate;
            return updatedAvailability;
        });
    };

    const handleAddSlot = (index) => {
        setAvailability((prevAvailability) => {
            const updatedAvailability = [...prevAvailability];
            updatedAvailability[index].slots.push({ start: '', end: '' });
            return updatedAvailability;
        });
    };

    const handleRemoveSlot = (dateIndex, slotIndex) => {
        setAvailability((prevAvailability) => {
            const updatedAvailability = [...prevAvailability];
            updatedAvailability[dateIndex].slots = updatedAvailability[dateIndex].slots.filter((_, i) => i !== slotIndex);
            return updatedAvailability;
        });
    };

    const handleSave = () => {
        // Handle saving the availability data here
        console.log(availability);
        setOpen(false);
    };

    const RemoveFldSpShow = (date, index) => {
        setAvailability((prevDates) => {
            const updatedDates = [...prevDates].filter((item) => item.date !== date);
            return updatedDates;
        });
    };
    // add new

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography paragraph>My Availability</Typography>
                <hr />
                <br />
                <br />
                <Box sx={{ boxShadow: "2px 2px 2px 2px lightgray,2px 2px 2px 2px lightgray" }}>
                    <Grid container spacing={2} sx={{ ml: 2.5 }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ borderRight: "1px solid black" }}>
                            <Typography variant="h5" component="div" fontWeight="bold">
                                Weekly Hours
                            </Typography>
                            <br />
                            <br />
                            {slots.map((slot) => (
                                <Box key={slot.day}>
                                    <Grid container spacing={2} sx={{ mb: 3 }}>
                                        <Grid item xs={1}>
                                            <input
                                                type="checkbox"
                                                checked={slot.checked}
                                                onChange={() => handleCheckboxChange(slot.day)}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography paragraph className="daySlt" value={slot.day}>
                                                {slot.day}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            {slot.checked ? (
                                                slot.slots.map((s, index) => (
                                                    <Grid className="remofld" container key={index}>
                                                        <Grid item xs={6}>
                                                            <FormControl sx={{ width: "150px" }}>
                                                                <InputLabel id={`start-label-${index}`}>Start</InputLabel>
                                                                <Select
                                                                    labelId={`start-label-${index}`}
                                                                    id={`start-select-${index}`}
                                                                    value={s.start}
                                                                    className="startVal"
                                                                    label="Start"
                                                                    onChange={(e) => handleChange(slot.day, index, "start", e.target.value)}
                                                                >
                                                                    {/* Add your menu items here */}
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
                                                            <FormControl sx={{ width: "150px" }}>
                                                                <InputLabel id={`end-label-${index}`}>End</InputLabel>
                                                                <Select
                                                                    labelId={`end-label-${index}`}
                                                                    id={`end-select-${index}`}
                                                                    value={s.end}
                                                                    className="endVal"
                                                                    label="End"
                                                                    onChange={(e) => handleChange(slot.day, index, "end", e.target.value)}
                                                                >
                                                                    {/* Add your menu items here */}
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
                                                            <button className="btnshd" type="button" onClick={() => handleRemoveField(slot.day, index)}>
                                                                x
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                ))
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                            <br />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <button className="btnshd" type="button" onClick={() => handleAddField(slot.day)}>
                                                +
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                            <button onClick={handleSubmit}>Submit</button>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            {/* add new */}
                            <Typography variant="h5" component="div" fontWeight="bold">Date-Specific Hours</Typography>
                            <br />
                            <Typography paragraph>Override your availability for specific dates when your hours differ<br /> from your regular weekly hours.</Typography>
                            <br />
                            <Button variant="outlined" onClick={handleOpen}>+ Add Date-Specific Hours</Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Date Specific Hours</DialogTitle>
                                <DialogContent>
                                    {availability.map((dateObj, dateIndex) => (
                                        <Card key={dateIndex} variant="outlined" sx={{ marginBottom: '16px' }}>
                                            <CardContent>
                                                <DatePicker
                                                    selected={dateObj.date}
                                                    onChange={(selectedDate) => handleDateChange(dateIndex, selectedDate)}
                                                />
                                                <br />
                                                {dateObj.slots.map((slot, slotIndex) => (
                                                    <Grid container spacing={1} key={slotIndex} sx={{ marginTop: '16px' }}>
                                                        <Grid item xs={6}>
                                                            {/* Start Time */}
                                                            <FormControl sx={{ width: "150px" }}>
                                                                <InputLabel id={`start-label-${slotIndex}`}>Start</InputLabel>
                                                                <Select
                                                                    labelId={`start-label-${slotIndex}`}
                                                                    id={`start-select-${slotIndex}`}
                                                                    value={slot.start}
                                                                    className="startVal"
                                                                    label="Start"
                                                                    onChange={(e) => handleChange1(dateObj.date, slotIndex, "start", e.target.value)}
                                                                >
                                                                    {/* Add your menu items here */}
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
                                                            {/* End Time */}
                                                            <FormControl sx={{ width: "150px" }}>
                                                                <InputLabel id={`end-label-${slotIndex}`}>End</InputLabel>
                                                                <Select
                                                                    labelId={`end-label-${slotIndex}`}
                                                                    id={`end-select-${slotIndex}`}
                                                                    value={slot.end}
                                                                    className="endVal"
                                                                    label="End"
                                                                    onChange={(e) => handleChange1(dateObj.date, slotIndex, "end", e.target.value)}
                                                                >
                                                                    {/* Add your menu items here */}
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
                                                            <Button onClick={() => handleRemoveSlot(dateIndex, slotIndex)}>x</Button>
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                                <Button onClick={() => handleAddSlot(dateIndex)}>+ Add Time Slot</Button>
                                                <br />
                                                <Button onClick={() => handleRemoveDate(dateIndex)}>Remove Date</Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                    <Button onClick={handleAddDate}>+ Add Date</Button>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">Cancel</Button>
                                    <Button onClick={handleSave} color="primary">Save</Button>
                                </DialogActions>
                            </Dialog>
                            <br />
                            {availability ? (
                                availability.map((item, index) => (
                                    <>
                                        <Grid container spacing={2} key={index}>
                                            <Grid item xs={4}>
                                                <Typography paragraph>{new Date(item.date).toLocaleDateString()}</Typography>&nbsp;
                                            </Grid>
                                            <Grid item xs={6}>
                                                {item.slots ? (
                                                    item.slots.map((dtitm, index) => (
                                                        <div key={index}>
                                                            <Typography paragraph>{dtitm.start} - {dtitm.end}</Typography>
                                                        </div>
                                                    ))
                                                ) : (
                                                    ''
                                                )}
                                            </Grid>
                                            <Grid item xs={2}>
                                                {/* <button className="btnshd" type="submit" onClick={() => handleRemoveSlot(item.date, index)}>x</button> */}
                                                <Button onClick={() => RemoveFldSpShow(item.date, index)}>x</Button>
                                            </Grid>
                                        </Grid>
                                    </>
                                ))
                            ) : ('unAvailable')}
                            {/* add new */}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default DoctorSlots;
