import { Form } from 'react-router-dom';
import { TextInput, Button } from './common';
import React from 'react';

export const AuthForm = () => {
    return (
        <Form
            className={'text-center flex items-center flex-col'}
            method={'post'}
        >
            <TextInput
                label={'Номер телефона'}
                name={'number'}
                placeholder={'+7(000)000-00-00'}
            />
            <Button className={'px-6'} type={'submit'} text={'Войти'} />
        </Form>
    );
};
