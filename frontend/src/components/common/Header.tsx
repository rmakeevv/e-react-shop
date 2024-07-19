import { UseAppSelector } from 'hooks/UseAppSelector';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo/gear-ico.png';
import userIcon from 'assets/images/UI/free-icon-user-149071.png';
import userCart from 'assets/images/UI/free-icon-cart-8415432.png';
import React from 'react';
import { appRoutes } from '../../model/routes';
import { selectBasketQuantity } from '../../store/basketSlice';

export const Header = () => {
    const auth = UseAppSelector((state) => state.auth.value);
    const basketQuantity = UseAppSelector(selectBasketQuantity);
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
                        className={'italic font-bold block p-3'}
                        to={appRoutes.base}
                    >
                        TECHBUY
                    </Link>
                    <Link to={appRoutes.home}>
                        <img src={logo} alt={'logo'} className={'w-7'} />
                    </Link>
                    <Link to={appRoutes.products} className={'px-7'}>
                        Каталог
                    </Link>
                </div>
                <div className={'flex items-center'}>
                    <div className={'flex items-center'}>
                        <Link
                            to={appRoutes.basket}
                            className={
                                'rounded-md p-1 flex hover:text-black items-center w-15'
                            }
                        >
                            <div>
                                <img
                                    src={userCart}
                                    alt={'cart'}
                                    width={'32px'}
                                    height={'32px'}
                                    className={'hue-rotate-30'}
                                />
                            </div>
                            <div
                                className={
                                    'relative bottom-2 right-3 bg-neutral-300 rounded-full px-2 text-neutral-900 text-md'
                                }
                            >
                                {basketQuantity}
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
                                    'p-1 rounded-md text-center flex items-center'
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
