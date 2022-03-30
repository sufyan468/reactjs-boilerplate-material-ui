import React, { useState } from 'react';
import { Modal, Box, IconButton, Grid, Button, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const VerifyPhoneModal = (props) => {
    console.log('Props from previous screen ==>', props.checkModal);
    const [pin, setPin] = useState('');
    const { phoneNumber } = props;
    const digitsToShow = 2;
    const lastPhoneDigits = phoneNumber.substring(phoneNumber.length - digitsToShow);

    const pinChangeHandler = (event) => {
        event.preventDefault();
        setPin(event.target.value);
    };

    return (
        <Grid>
            <Modal open={props.isModalOpen} onClose={props.onClose}>
                <Box className="model">
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        className="modal-header"
                    >
                        <p className="fw-bold">Verify phone number</p>
                        <IconButton onClick={props.checkModal}>
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box className="modal-body">
                        <p>Enter the code we sent to the phone number ending in **{lastPhoneDigits}</p>
                        <Grid sx={{ pt: '1rem' }}>
                            <p className="fw-bold">Pin</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    // autoFocus={true}
                                    placeholder="*****"
                                    value={pin}
                                    onChange={pinChangeHandler}
                                    size="small"
                                    sx={{ width: '44%', borderRadius: '0%' }}
                                />
                                <Button variant="outlined" className="verify-modal-resend-btn" sx={{}}>
                                    Resend Code
                                </Button>
                            </Box>
                        </Grid>
                    </Box>
                    <Box className="offer-modal-footer">
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button onClick={props.checkModal} className="offer-modal-cancel-btn">
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    console.log('Confirm Clicked');
                                }}
                                className="offer-modal-confirm-btn"
                            >
                                Confirm
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    );
};

export default VerifyPhoneModal;
