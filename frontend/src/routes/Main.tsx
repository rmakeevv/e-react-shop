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
                'font-bold text-neutral-50 bg-emerald-800 px-6 py-3 rounded-sm hover:underline'
            }
        >
            {GO_TO_PRODUCTS_TITLE}
        </Link>
    );
};

export const Main = () => {
    return (
        <div className={'text-white p-2'} style={{ background: '#1a1a1a' }}>
            <div
                className={
                    'flex flex-row-reverse flex-wrap rounded-md items-center container mx-auto justify-around gap-2'
                }
            >
                <img src={img} alt={'pc'} width={'600px'} />
                <div className={'flex items-center flex-col flex-grow'}>
                    <h1 className={'md:text-3xl text-center tracking-wide'}>
                        <WELCOME_TITLE />
                    </h1>
                    <div className={'flex p-8'}>
                        <LinkToProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};
