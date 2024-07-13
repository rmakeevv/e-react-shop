import userIcon from 'assets/images/UI/user-circle-icon-png.png';
import { UseAppSelector } from 'hooks';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/authSlice';
import { deleteItems } from 'store/basketSlice';
import React, { useEffect } from 'react';
import { appRoutes } from '../model/routes';
export const loader = () => {
    if (!localStorage.getItem('token')) {
        return redirect(appRoutes.auth);
    } else return null;
};
export const Profile = () => {
    const auth = UseAppSelector((state) => state.auth.value);
    const dispatch = useDispatch();
    const pageLogOut = () => {
        localStorage.clear();
        dispatch(logOut());
        dispatch(deleteItems());
    };

    const navigate = useNavigate();

    useEffect(() => {
        !auth.isLogged && navigate(appRoutes.auth);
    }, [auth]);

    return (
        <div className={'justify-center text-white container mx-auto'}>
            <div className={'flex p-4 rounded-md justify-center gap-6'}>
                {auth.isLogged ? (
                    <div className={'flex flex-col gap-4 items-center'}>
                        <img
                            src={userIcon}
                            width={'56px'}
                            className={'rounded-md m-2'}
                            alt={'user-ico'}
                        />
                        <h1>Мой профиль</h1>
                        <Link
                            to={`/orders/${auth.userId}`}
                            className={
                                'px-6 py-3 text-black bg-neutral-200 rounded-md'
                            }
                        >
                            Просмотреть мои заказы
                        </Link>
                        <Button
                            type={'submit'}
                            onClick={pageLogOut}
                            text={'Сменить пользователя'}
                        />
                    </div>
                ) : (
                    <div className={'flex flex-col items-center gap-6'}>
                        <h1>Вы вышли из аккаунта!</h1>
                        <Link
                            to={'/auth'}
                            className={'p-4 bg-emerald-700 rounded-md'}
                        >
                            Окей
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
