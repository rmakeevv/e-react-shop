import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from 'components';
import React, { useEffect } from 'react';
import { validateToken } from 'store/authSlice';
import { useAppDispatch } from '../hooks';

export const Root = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(validateToken());
    });

    return (
        <div className={'font-sans h-screen'} style={{ background: '#1a1a1a' }}>
            <Header />
            <div
                className={`mt-14 pt-10 pb-8 ${navigation.state === 'loading' ? 'opacity-50' : ''}`}
                style={{ background: '#1a1a1a' }}
            >
                <Outlet />
            </div>
        </div>
    );
};
