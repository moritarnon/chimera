import React from 'reactn';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom'
import Layout2 from "./layouts/Layout2";
import empty from "./themes/empty";


// Set an initial global state directly:
//setGlobal({
//    open: true
//});


function App() {

    //themes:
    //theme={pictonBlueAtomicTangerineDonkey}

    return (
        <MuiThemeProvider theme={empty}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <BrowserRouter>
                <Layout2 />
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;