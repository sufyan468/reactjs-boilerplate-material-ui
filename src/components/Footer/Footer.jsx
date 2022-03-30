import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="left" {...props}>
            {'© Copyright '}
            {new Date().getFullYear()}
            <Link
                color="inherit"
                translate="no"
                href="https://www.consuli.net/"
                target="_blank"
                sx={{ textDecoration: 'none' }}
            >
                {' '}
                Consuli,
            </Link>{' '}
            {' a Public Benefit Company. All Rights Reserved. '}
        </Typography>
    );
}
const Footer = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    height: '50px',
                    alignItems: 'center',
                    display: 'flex',
                    padding: '0rem 2rem',
                    backgroundColor: '#FFFFFF',
                    borderTop: '1px solid #f3f3f3',
                }}
            >
                <Container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Copyright />
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default Footer;
