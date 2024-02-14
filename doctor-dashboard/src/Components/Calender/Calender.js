import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Calender() {
    return (
        <div>
            <br />
            <br />
            <CssBaseline />
            <Container maxWidth="lg">
                <Box>
                    <Grid spacing={2} container>
                        <Grid item xs={12} md={6} lg={6}>
                            <Typography component="div" variant='h5'><b>Calender</b></Typography>
                            <br />
                            <br />
                            <div>
                                <Typography paragraph>A calendar is an essential tool for keeping track of appointments and schedules, and it becomes even more critical when it comes to medical appointments. As a patient, it is crucial to stay organized and ensure that you don't miss any of your doctor's appointments. </Typography>
                                <br />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Card variant="outlined">
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
            </Container>
        </div >
    )
}
