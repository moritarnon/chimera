import {createMuiTheme} from '@material-ui/core/styles';

const dark = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        type: 'dark',
    }
});
export default dark;