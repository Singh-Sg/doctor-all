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
                                {/* <Typography paragraph>The content for a calendar must include specific details related to your medical appointments to help you stay on top of
                                your health. One of the essential pieces of information to include is the date when the doctor is assigning
                                your appointment. This date is crucial as it helps you plan your schedule accordingly and make necessary
                                arrangements to attend the appointment. It also allows you to keep track of how frequently you are visiting
                                the doctor and if there are any changes in your treatment plan. Additionally, including the date when the
                                doctor is assigning your appointment serves as a reminder for when you need to follow up with your doctor
                                after a previous appointment. This is especially helpful for patients with chronic conditions who require
                                regular check-ups and follow-ups with their doctors. Moreover, having this information on your calendar
                                can also help you plan for any necessary lab tests or diagnostic procedures that may need to be done before
                                your appointment. It allows you to schedule these tests in advance, ensuring that you have all the necessary
                                information ready for your doctor's visit. In the case of emergency appointments, knowing the date when the
                                doctor is assigning your appointment can help you prioritize and reschedule any conflicting events or appointments.
                                It also serves as a reference point in case you need to reschedule your appointment. Overall, including the date
                                when the doctor is assigning your appointment in your calendar content is crucial for effective time management,
                                efficient communication with your doctor, and staying on top of your health.</Typography> */}
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
