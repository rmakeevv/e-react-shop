import {UseAppSelector} from 'hooks/UseAppSelector';
import {Link} from "react-router-dom";
import logo from "assets/images/logo/gear-ico.png";
import userIcon from 'assets/images/UI/free-icon-user-149071.png'
import userCart from 'assets/images/UI/free-icon-cart-8415432.png'
import React from 'react';

export const Header = () => {
    const auth = UseAppSelector(state => state.auth.value)
    const basket = UseAppSelector(state => state.basket.value)
    return (
        <nav className={'text-white fixed w-full top-0'} style={{background: '#1a1a1a', borderBottom: "1px solid rgb(84 84 84 / 48%)"}}>
            <div className={'container flex items-center justify-between mx-auto md:px-12'}>
                <div className={'flex items-center h-full py-2 px-8'}>
                    <Link className={'m-1 font-bold md:block hidden'} to={'/'}>Plugged.In</Link>
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'} className={"w-8"}/>
                    </Link>
                    <Link to={'products'} className={'px-8 font-medium'}>Каталог</Link>
                </div>
                <div className={'flex items-center'}>
                    <div className={'flex md:p-0 p-1 items-center'}>

                        <Link to={'/basket'} className={'rounded-md px-4 flex bg-neutral-200 hover:text-black items-center'}>
                            <img src={userCart} alt={'cart'} width={'40px'}/>
                            <div className={'bg-neutral-800 rounded-full px-2 text-white mx-2 font-bold'}>
                                { 0 || basket.items.length }
                            </div>
                        </Link>
                        {
                            auth.isLogged
                                ? <Link to={`/profile/${auth.userId}`} className={'px-4 py-3'}>
                                    <img src={userIcon} alt={'user'} width={'40px'}/>
                                </Link>
                                : <Link to={'/auth'} className={'md:px-8 py-3 rounded-md mx-2 text-center flex items-center'}>
                                    <img src={userIcon} alt={'user'} width={'40px'}/>
                                    <span className={'p-3 hidden md:block'}>Войти</span>
                                </Link>
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
};