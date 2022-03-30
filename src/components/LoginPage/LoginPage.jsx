import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { signinUser, setIsDone, generateOTP } from '../../store/slices/user.slice';
import Footer from '../Footer/Footer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';

const defaultFormInput = {
    email: '',
    password: '',
    phone: '',
};

const LoginPage = (props) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [formInput, setFormInput] = useState(defaultFormInput);

    const { isApiDone, isOtpVerified, id } = useSelector((state) => state.user);

    const snackbarObject = {
        type: '',
        message: '',
        open: false,
    };

    useEffect(() => {
        localStorage.removeItem('token'); // clears the current token if user comes to signin page
    }, []);

    useEffect(() => {
        if (isOtpVerified === false && isApiDone === true) {
            dispatchSnackBar('success', 'Otp successfully Sent to your Register Mobile Number', true);
            dispatch(setIsDone({ isApiDone: false }));
            dispatch(generateOTP());

            navigate('/verify');
        } else if (isOtpVerified) {
            navigate('/queue');
        }
    }, [id]);

    const handleInputChange = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const dispatchSnackBar = (type, message, open) => {
        snackbarObject.type = type;
        snackbarObject.message = message;
        snackbarObject.open = open;

        dispatch(showSnackBar(snackbarObject));
    };

    const handleLogin = (e) => {
        e.stopPropagation();
        const signinDataObject = {
            email: formInput.email,
            password: formInput.password,
        };

        if (signinDataObject.email === '' || signinDataObject.password === '') {
            dispatchSnackBar('error', 'Please fill in all the fields', true);
        } else {
            dispatch(signinUser(signinDataObject));
        }
    };

    return (
        <Fragment>
            {isOtpVerified ? null : (
                <Fragment>
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
                                    Login
                                </Typography>
                                <p style={{ margin: '1rem 0rem' }}>Login to your Consuli account:</p>
                                <Box component="form" noValidate sx={{ mt: 4 }}>
                                    <TextField
                                        sx={{ mb: 2 }}
                                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                        value={formInput.email}
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />

                                    <TextField
                                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                        value={formInput.password}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />

                                    <Box sx={{ mt: 4, textAlign: 'right' }}>
                                        <Button type="button" className="button-transparent">
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                color="white"
                                                to="/forgot-password"
                                            >
                                                Forgot Password
                                            </Link>
                                        </Button>
                                        <Button
                                            type="button"
                                            className="button-primary FllWidthBtn"
                                            variant="contained"
                                            onClick={(e) => handleLogin(e)}
                                            sx={{ float: 'right' }}
                                            style={{ padding: '0rem 3rem' }}
                                        >
                                            Sign In
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} className="rightSide" />
                    </Grid>
                    <Footer />
                </Fragment>
            )}
        </Fragment>
    );
};

export default LoginPage;
