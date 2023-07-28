import { useActionData} from "react-router-dom";
import {AuthForm} from 'components';
import React from 'react';

export const Auth = () => {
    const errors: any = useActionData()
    return (
        <div className={'grid gap-4 justify-items-center items-center py-4 text-white'}>
            <h1 className={'md:text-xl p-2 text-center'}>Введите номер телефона чтобы войти в профиль</h1>
            <AuthForm/>
            <span>{errors}</span>
        </div>
    );
};