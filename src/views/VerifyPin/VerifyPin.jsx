import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { useDispatch, useSelector } from 'react-redux';
import { setOTPSent, verifyOtp, generateOTP } from '../../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles({
    root: {
        color: '#1A2733',
        fontFamily: 'Lato',
        fontSize: '14px',
        letterSpacing: 0,
        lineHeight: '18px',
    },
});
const defaultInput = {
    otp: '',
    rememberMe: false,
};

const VerifyPin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // OTP Input State
    const [otpInput, setOtpInput] = useState(defaultInput);

    const { isOtpVerified } = useSelector((state) => state.user);

    // SnackBar Object
    const snackbarObj = {
        type: '',
        message: '',
        open: false,
    };

    //
    useEffect(() => {
        if (isOtpVerified === true) {
            dispatchSnackBar('success', 'Login Success', true);
            dispatch(setOTPSent({ otpSent: false }));
            navigate('/queue');
        } else {
            navigate('/verify');
        }
    }, [isOtpVerified]);

    // SnackBar
    const dispatchSnackBar = (type, message, open) => {
        snackbarObj.type = type;
        snackbarObj.message = message;
        snackbarObj.open = open;

        dispatch(showSnackBar(snackbarObj));
    };

    // Hnadle the input
    const handleFrom = (value, name) => {
        setOtpInput({
            ...otpInput,
            name: value,
        });
    };

    // Hnalde OTPLogin Button
    const handleOTPLogin = (e) => {
        e.stopPropagation();
        console.log(`verify otp:: `, otpInput.name);
        const signinOtpObject = {
            otp: otpInput.name,
        };

        if (signinOtpObject.otp === '') {
            dispatchSnackBar('error', 'Please Enter the OTP that you recived', true);
        } else {
            dispatch(verifyOtp(signinOtpObject));
        }
    };

    // Request another OTP
    const handleRequestAnotherOtp = (e) => {
        dispatch(generateOTP());
        dispatchSnackBar('success', 'New verification Genrated successfully', true);
    };

    // console.log(otpInput.text);

    // var last2 = phone.slice(-2);
    return (
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

                        <Typography component="h5" variant="h5" sx={{ mt: 5, mb: 3 }}>
                            Enter the code we sent to the phone number ending in **
                        </Typography>

                        <p sx={{ pb: 4 }}>We're asking for this code due to two-factor authentication.</p>
                        <Box component="form" noValidate sx={{ mt: 4 }}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Enter Code"
                                id="otp"
                                autoComplete="current-otp"
                                onChange={(e) => handleFrom(e.target.value, e.target.name)}
                                value={otpInput.text}
                            />
                            <Box>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox />}
                                    sx={{ mt: '0.5rem' }}
                                    label="Don't ask me again on this computer"
                                    labelPlacement="end"
                                    className={classes.root}
                                />
                            </Box>
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button
                                    type="button"
                                    className="button-transparent"
                                    onClick={(e) => handleRequestAnotherOtp(e)}
                                >
                                    Request Another Code
                                </Button>
                                <Button
                                    type="button"
                                    className="button-primary FllWidthBtn"
                                    variant="contained"
                                    sx={{ float: 'right' }}
                                    onClick={(e) => handleOTPLogin(e)}
                                    style={{ padding: '0rem 4rem' }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className="VerifPin-rightSide" />
            </Grid>
        </Fragment>
    );
};

export default VerifyPin;
