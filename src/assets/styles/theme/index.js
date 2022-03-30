import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        info: {
            main: '#D8D8D8',
        },
    },
    typography: {
        fontFamily: 'Lato sans-serif',
        fontWeight: '600',
        poster: {
            color: '#1A2733',
        },
        h3: {
            color: '#1A2733',
            fontFamily: 'Lato',
            fontSize: '26px',
            fontWeight: 'bold',
            letterSpacing: 0,
            lineHeight: '32px',
        },
        h4: {
            color: '#1A2733',
            fontFamily: 'Lato',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: 0,
            lineHeight: '24px',
        },
        h5: {
            color: '#1A2733',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: 0,
            lineHeight: '22px',
        },
    },
    TablePagination: {
        rowsPerPage: {
            display: 'flex',
            border: '1px solid black',
        },
    },
    FormLabel: {
        fontSize: '2rem',
    },
});
