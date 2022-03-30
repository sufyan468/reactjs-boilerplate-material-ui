import React, { Fragment } from 'react';
import { Grid } from '@mui/material';


const PageTitle = () => {
   

    return (
        <Fragment>
            <Grid
                container
                spacing={4}
                sx={{ pt: 4, pb: 2, alignItems: 'center', justifyContent: 'space-between', textAlign: 'right' }}
            >
                <Grid item md={3} sm={12} xs={12} lg={3}>
                    Search Bar here
                </Grid>
                <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    lg={8}
                    sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
                >
                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item md={8} sm={12} className="pagetile-p">
                            Last Send Date: October 11, 2021 at 11:25 AM PST
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <button
                                
                                className="button-primary fullwidth"
                                sx={{ outline: 'none', border: 'none' }}
                                style={{ borderRadius: '2px' }}
                            >
                                Send New Matches Notification
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </Fragment>
    );
};

export default PageTitle;
