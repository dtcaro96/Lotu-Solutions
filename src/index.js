import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

import App from './App'

const title = 'React with Webpack and Babel';

const theme = createTheme({
    palette: {
        main: {
            purple: '#8A4086',
            pink: '#F4BAC0',
            white: '#FFFFFF',
            black: '#000000'
        }
    }
});


ReactDOM.render(
    (<MuiThemeProvider theme={theme}>
        <App title={title} style='height:100%;' />
    </MuiThemeProvider>),
    document.getElementById('app')
);

module.hot.accept();