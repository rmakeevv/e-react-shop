import { useActionData, useNavigate } from 'react-router-dom';
import { AuthForm } from 'components';
import React, { useEffect } from 'react';
import { useAppSelector } from '../store';
import { selectIsLogged, selectUserId } from '../store/authSlice';
import { appRoutes } from '../model/routes';

const useProtectAuthRoute = () => {
    const isLogged = useAppSelector(selectIsLogged);
    const userId = useAppSelector(selectUserId);
    const navigate = useNavigate();

    useEffect(() => {
        isLogged && navigate(appRoutes.profile + userId);
    }, [isLogged]);
};

export const Auth = () => {
    const errors: any = useActionData();

    useProtectAuthRoute();

    return (
        <div
            className={
                'grid gap-4 justify-items-center items-center text-white'
            }
        >
            <h1 className={'md:text-lg text-center'}>
                Введите номер телефона чтобы войти в профиль
            </h1>
            <AuthForm />
            <span>{errors}</span>
        </div>
    );
};
