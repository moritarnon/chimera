import React from "react";
import ReactBreakpoints, {withBreakpoints} from 'react-breakpoints'

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

export const BreakpointsContext = React.createContext();

export const BreakpointsProvider = ({children}) => {
    return (
        <ReactBreakpoints breakpoints={breakpoints}>
            <BreakpointsProviderInner>
                {children}
            </BreakpointsProviderInner>
        </ReactBreakpoints>
    );
}

const BreakpointsProviderInner = withBreakpoints(({breakpoints, currentBreakpoint, children}) => {

    const current = breakpoints[currentBreakpoint];

    const up = (brName) => {
        return current >= breakpoints[brName];
    }

    const down = (brName) => {
        return current < breakpoints[brName];
    }

    const eq = (brName) => {
        return currentBreakpoint === brName
    }

    const value = {
        breakpoints,
        currentBreakpoint,
        up,
        down,
        eq
    }

    return (
            <BreakpointsContext.Provider value={value}>
                {children}
            </BreakpointsContext.Provider>
    );
});