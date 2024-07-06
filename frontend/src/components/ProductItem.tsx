import { Link } from 'react-router-dom';
import { Button } from './common';
import availableImg from '../assets/images/UI/delivery.png';
import { getImage } from 'utils/getImage';
import React from 'react';
import { IProduct } from '../model/product';
import { appRoutes } from '../model/routes';

interface Props extends IProduct {
    action: () => void;
}

export const ProductItem = ({
    name,
    brand,
    price,
    _id,
    img,
    action,
}: Props) => {
    const picture = getImage(img);
    return (
        <div
            className={
                'md:flex-row flex-col flex gap-4 bg-neutral-800 p-8 items-center justify-center md:rounded-md'
            }
        >
            <Link to={appRoutes.products + _id}>
                <img src={picture} alt={name} width={'260px'} />
            </Link>
            <div
                className={
                    'flex flex-col md:px-4 justify-center gap-6 basis-2/3'
                }
            >
                <div className={'my-4 flex items-center justify-between gap-4'}>
                    <Link to={`/products/${_id}`}>{brand + ' ' + name}</Link>
                    <Link
                        to={`/products/${_id}`}
                        className={'px-8 py-3 bg-emerald-700 rounded-md'}
                    >
                        Подробнее
                    </Link>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <div className={'flex items-center justify-between gap-6'}>
                        <p className={'text-lg'}>{price + ' руб.'}</p>
                        <Button onClick={action} text={'Добавить в корзину'} />
                    </div>
                    <div
                        className={
                            'px-6 py-3 bg-neutral-700 text-white border-2 border-emerald-400 rounded-md font-bold flex items-center justify-between gap-4'
                        }
                    >
                        В наличии под заказ!
                        <img
                            src={availableImg}
                            alt={'available'}
                            width={'44px'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
