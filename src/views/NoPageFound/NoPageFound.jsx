import React from 'react';
import { Grid, Typography } from '@mui/material';
import { APP_CONSTANTS } from '../../config/config';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const { PAGE_NOT_FOUND } = APP_CONSTANTS;

const NoPageFound = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className="no-page-found">
            <Grid item>
                <Typography variant="h1" sx={{ color: '#ef534f', fontSize: '198px', fontWeight: 'bold' }}>
                    404
                </Typography>

                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert
                        severity="error"
                        sx={{ fontSize: '21px', display: 'flex', alignItems: 'center', color: '#ef534f' }}
                    >
                        {PAGE_NOT_FOUND}
                    </Alert>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default NoPageFound;
