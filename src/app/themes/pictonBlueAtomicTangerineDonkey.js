import {createMuiTheme} from '@material-ui/core/styles';

const pictonBlueAtomicTangerineDonkey = createMuiTheme({
    palette: {
        primary: { main: '#ffe676' },
        secondary: { main: '#ff5640' },
        tonalOffset: 0.8,
        background: {
            default: '#f0f0d1',
            paper: '#ffffe0'
        }
    },
    typography: {
        useNextVariants: true,
    },
    themeName: 'Picton Blue Atomic Tangerine Donkey'
});
export default pictonBlueAtomicTangerineDonkey;