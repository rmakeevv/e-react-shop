import img from '../assets/images/UI/img.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { appRoutes } from '../model/routes';

const GO_TO_PRODUCTS_TITLE = 'Перейти в каталог';

const WELCOME_TITLE = () => (
    <>
        Добро пожаловать <br /> в наш магазин!
    </>
);

const LinkToProducts = () => {
    return (
        <Link
            to={appRoutes.products}
            className={
                'font-bold text-neutral-50 bg-emerald-800 px-8 py-4 rounded-sm hover:underline'
            }
        >
            {GO_TO_PRODUCTS_TITLE}
        </Link>
    );
};

export const Main = () => {
    return (
        <div className={'text-white p-8'} style={{ background: '#1a1a1a' }}>
            <div
                className={
                    'flex py-8 md:px-8 rounded-md items-center container mx-auto justify-around flex-col gap-2'
                }
            >
                <img src={img} alt={'pc'} width={'360px'} className={'p-2'} />
                <h1 className={'md:text-5xl text-center tracking-wide text-lg'}>
                    <WELCOME_TITLE />
                </h1>
                <div className={'flex p-8'}>
                    <LinkToProducts />
                </div>
            </div>
        </div>
    );
};
