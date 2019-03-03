import React from 'reactn';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom'
import Layout3 from "./layouts/Layout3";
import dark from "./themes/dark";

// Set an initial global state directly:
//setGlobal({
//    open: true
//});


//export const appHistory = createBrowserHistory();

function App() {

    //themes:
    //theme={pictonBlueAtomicTangerineDonkey}

    return (
        <MuiThemeProvider theme={dark}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <BrowserRouter>
                <Layout3 />
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;