import React from 'react';
import clsx from 'clsx';

export const Header = ({children, title, noMargin = false}) => {
    return (
        <div className={clsx("w-100 d-flex justify-content-between border-bottom py-2 px-1", !noMargin && "mb-3")}>
            <h4 className="mb-0 text-muted">{title}</h4>
            {children}
        </div>
    );
}


//{/*<Container fluid className="px-0 pb-0">*/}
//{/*<Row>*/}
//{/*<Col md={{offset: 2, span: 8}} className={clsx(*/}
//{/*"mw d-flex justify-content-between align-items-end border-bottom py-1 py-md-3 px-1", !noMargin && "mb-3")}>*/}
//{/*{children}*/}
//{/*</Col>*/}
//{/*</Row>*/}
//{/*</Container>*/}
