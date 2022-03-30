import React from 'react';
import { Grid, Typography, Button, Box, TextField, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const forgotPassword = () => {
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
                            Forgot Your Password?
                        </Typography>
                        <p sx={{ py: 3 }}> We’ll email you instructions to reset your password.</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                sx={{ mb: 2 }}
                                fullWidth
                                id="forgot-email"
                                label="Your Email"
                                name="email"
                                autoComplete="email"
                            />

                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button type="submit" className="button-transparent FllWidthBtn">
                                    <Link style={{ textDecoration: 'none' }} to="/login">
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
                                        style={{ textDecoration: 'none', color: 'white', padding: '0rem 0.5rem' }}
                                        color="white"
                                        to="/set-password"
                                    >
                                        Reset Password
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="rightSide-forgotPsw" />
            </Grid>
        </>
    );
};

export default forgotPassword;
