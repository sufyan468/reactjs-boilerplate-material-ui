import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';

const SetPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Grid container component="main" sx={{ height: '150vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{ pl: 2, pr: 5, pt: 12, pb: 10, background: '#FFFFFF', boxShadow: 'none' }}
                >
                    <Box>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5f355f3755ae87135c46df17/1597335930564-DCILTFVFCJHOXP5R1CV6/consuli_logo.png?format=1500w"
                            alt="consuli"
                            style={{ width: '118px', height: '45px' }}
                            className="AppLogo"
                        />

                        <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
                            Set Password
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                fullWidth
                                id="password"
                                label="Your New Password"
                                name="password"
                                autoComplete="password"
                            />
                            <TextField
                                fullWidth
                                name="Confirm-Password"
                                label="Confirm New Password"
                                type="password"
                                id="password"
                                autoComplete="Confirm-password"
                            />
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button type="submit" className="button-transparent">
                                    <Link style={{ textDecoration: 'none' }} color="white" to="/login">
                                        Login Instead
                                    </Link>
                                </Button>
                                <Button
                                    type="submit"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    sx={{ float: 'right' }}
                                >
                                    <Link
                                        style={{ textDecoration: 'none', color: 'white', padding: '0rem 1.4rem' }}
                                        color="white"
                                        to="#"
                                    >
                                        Set Password
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="rightSide" />
            </Grid>
        </>
    );
};

export default SetPassword;
