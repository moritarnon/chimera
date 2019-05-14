import React, { useState } from 'react';

export const PUBLIC = "PUBLIC";
export const NOT_LOGGED_IN = "NOT_LOGGED_IN";
export const LOGGED_IN = "LOGGED_IN";

const defaultUser = {
    name: '',
    roles: [],
    loggedIn: false
};

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(defaultUser);

    const resolveAuth = (auth) => {
        return auth === PUBLIC ? true
            : auth === LOGGED_IN ? user.loggedIn
            : auth === NOT_LOGGED_IN ? !user.loggedIn
            : auth.some(role => user.roles.includes(role))
    }

    const requestLogin = async (values) => {
        //TODO server call
        //also validate shit on server, yo
        console.log(values);

        setUser({name: "Foo"});

        //...await and then set user
    }

    const requestSignup = async (values) => {
        //TODO server call
        //also validate shit on server, yo
        console.log(values);
    }

    return (
        <UserContext.Provider value={{
            user,
            resolveAuth,
            actions: {
                requestLogin,
                requestSignup
            }
        }}>
            {children}
        </UserContext.Provider>
    )
}
