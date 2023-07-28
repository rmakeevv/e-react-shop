import pc from '../assets/images/products/laptops/img.png'
import {Link} from "react-router-dom";
import React from 'react';
export const Main = () => {
    return (
        <div className={'text-white p-8'} style={{background: '#1a1a1a'}}>
            <div className={'flex py-8 md:px-8 rounded-md items-center container mx-auto justify-around flex-col gap-2'}>
                <img src={pc} alt={'pc'} width={'320px'} className={'p-2'}/>
                <h1 className={'md:text-6xl text-center font-bold text-xl'}>Добро пожаловать <br/> в наш магазин!</h1>
                <div className={'flex p-8'}>
                    <Link to={'products'} className={'font-bold text-stone-900 bg-emerald-300 px-8 py-4 rounded-md hover:underline'}>Перейти в каталог</Link>
                </div>
            </div>
        </div>
    );
};