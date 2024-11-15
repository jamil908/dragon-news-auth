import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayOut = () => {
    return (
        <div>
            <h2>this is auth</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayOut;