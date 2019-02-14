import React from 'reactn';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom'
import Layout from "./layout/Layout";
import pictonBlueAtomicTangerineDonkey from "./themes/pictonBlueAtomicTangerineDonkey";


// Set an initial global state directly:
//setGlobal({
//    open: true
//});


function App() {

    return (
        <MuiThemeProvider theme={pictonBlueAtomicTangerineDonkey}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;