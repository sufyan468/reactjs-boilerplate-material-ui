import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import routes from './routes';
import { AppContent } from './views';
import theme from './assets/styles/theme';

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <AppContent routes={routes} />
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
