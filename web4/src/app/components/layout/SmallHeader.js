import React from 'react';

export const SmallHeader = ({titleDesc, title, children}) => {
    return (
        <div className="bg-light px-3 py-2 justify-content-between align-items-center rounded d-flex">
            {
                titleDesc || title ?
                    <div className="d-flex">
                        <h5><small className="pr-2">{titleDesc}</small></h5>
                        <h5>{title}</h5>
                    </div> :
                    null
            }
            {children}
        </div>
    );
}