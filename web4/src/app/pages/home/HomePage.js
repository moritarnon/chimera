import React from 'react';
import {LayoutContainer} from "../../layout/LayoutContainer";
import {Header} from "../../layout/Header";

export const HomePage = () => {
    return (
        <LayoutContainer>
            <Header title="Home" />
            <h5>... sweet home</h5>
        </LayoutContainer>
    );
}
