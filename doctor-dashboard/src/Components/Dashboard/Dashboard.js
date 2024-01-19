import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { cardRow, SchedTabBody } from '../../Prototypes/styles.js'
import { Divider, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PatTabBody } from '../../Prototypes/styles.js';
import ColumnChart from '../../charts/ColumnChart.js';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';

export default function Dashboard() {

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
    return (
        <div>
            <Typography paragraph>DASHBOARD</Typography>
            <hr />
            <Box sx={{ cardRow }}>
                <Grid container>
                    <Grid item xs={8} sm={10} md={6} lg={6}>
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
                    <Grid item xs={8} sm={10} md={6} lg={6}>
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
                    <Grid item xs={8} sm={10} md={6} lg={6}>
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
                    <Grid item xs={8} sm={10} md={6} lg={6}>
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
            <br />
            <Box sx={{ cardRow }}>
                <Grid container>
                    <Grid item xs={8} sm={10} md={8} lg={8}>
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
                    <Grid item xs={8} sm={10} md={4} lg={4}>
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
            <br />
            <Box sx={{ cardRow }} data-aos="fade-up" data-aos-duration="3000">
                <Grid>
                    <Grid item xs={8} sm={10}>
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
                </Grid>
            </Box>
        </div>
    )
}

