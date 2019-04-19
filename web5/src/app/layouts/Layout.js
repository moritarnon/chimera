import React from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Menubar} from 'primereact/menubar';
import {AppContent} from "../appContent/AppContent";
import {withRouter} from "react-router-dom";

export const Layout1 = withRouter(({ history }) => {

    const menuItemNavigate = (event) => {
        history.push(event.item.to);
    }

    const menuItem = (label, to, ...params) => {
        return {
            label: label,
            to,
            command: menuItemNavigate,
            ...params
        };
    }

    const items = [
        menuItem('Home', '/'),
        menuItem('Forum', '#forum')
    ];

    return (
        <React.Fragment>

            <Toolbar>
                <Menubar model={items}>
                </Menubar>
            </Toolbar>


            <Toolbar>
                <div className="p-toolbar-group-left">
                    <Button label="New" icon="pi pi-plus" style={{marginRight: '.25em'}}/>
                    <Button label="Upload" icon="pi pi-upload" className="p-button-success"/>
                    <i className="pi pi-bars p-toolbar-separator" style={{marginRight: '.25em'}}/>
                    <Button label="Save" icon="pi pi-check" className="p-button-warning"/>
                </div>
                <div className="p-toolbar-group-right">
                    <Button icon="pi pi-search" style={{marginRight: '.25em'}}/>
                    <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight: '.25em'}}/>
                    <Button icon="pi pi-times" className="p-button-danger"/>
                </div>
            </Toolbar>

            <AppContent />

        </React.Fragment>
    );
});
