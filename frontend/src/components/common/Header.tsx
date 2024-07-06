import { UseAppSelector } from 'hooks/UseAppSelector';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo/gear-ico.png';
import userIcon from 'assets/images/UI/free-icon-user-149071.png';
import userCart from 'assets/images/UI/free-icon-cart-8415432.png';
import React from 'react';
import { appRoutes } from '../../model/routes';

export const Header = () => {
    const auth = UseAppSelector((state) => state.auth.value);
    const basket = UseAppSelector((state) => state.basket.value);
    return (
        <nav
            className={'text-white fixed w-full top-0'}
            style={{
                background: '#1a1a1a',
                borderBottom: '1px solid rgb(84 84 84 / 48%)',
            }}
        >
            <div
                className={
                    'container flex items-center justify-between mx-auto '
                }
            >
                <div className={'flex items-center h-full p-2'}>
                    <Link
                        className={'italic m-1 font-bold block px-2'}
                        to={'/'}
                    >
                        TECHBUY
                    </Link>
                    <Link to={appRoutes.home}>
                        <img src={logo} alt={'logo'} className={'w-6'} />
                    </Link>
                    <Link
                        to={appRoutes.products}
                        className={'px-8 font-medium'}
                    >
                        Каталог
                    </Link>
                </div>
                <div className={'flex items-center'}>
                    <div className={'flex md:p-0 p-1 items-center'}>
                        <Link
                            to={appRoutes.basket}
                            className={
                                'rounded-md py-1 px-2 flex bg-neutral-200 hover:text-black items-center w-15'
                            }
                        >
                            <div>
                                <img
                                    src={userCart}
                                    alt={'cart'}
                                    width={'30px'}
                                    height={'30px'}
                                />
                            </div>
                            <div
                                className={
                                    'relative bottom-2 right-3 bg-neutral-800 rounded-full px-2 text-white text-sm font-medium'
                                }
                            >
                                {0 || basket.items.length}
                            </div>
                        </Link>
                        {auth.isLogged ? (
                            <Link
                                to={appRoutes.profile + auth.userId}
                                className={'px-4 py-3'}
                            >
                                <img src={userIcon} alt={'user'} width={'36'} />
                            </Link>
                        ) : (
                            <Link
                                to={appRoutes.auth}
                                className={
                                    'md:px-8 py-3 rounded-md mx-2 text-center flex items-center'
                                }
                            >
                                <img src={userIcon} alt={'user'} width={'36'} />
                                <span className={'p-3 hidden md:block'}>
                                    Войти
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
