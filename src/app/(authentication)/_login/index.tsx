import React from 'react';

import { Toaster } from '@/components/index';

import LoginForm from './LoginForm';

interface LoginPropsType {
    openLoginDrawer: boolean;
}

const Login = ({ openLoginDrawer }: LoginPropsType) => {
    if (!openLoginDrawer) return null;

    return (
        <>
            <LoginForm openLoginDrawer={openLoginDrawer} />
            <Toaster />
        </>
    );
};

export default Login;
