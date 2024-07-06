import { getImage } from 'utils/getImage';
import { Link } from 'react-router-dom';
import React from 'react';
import { appRoutes } from '../model/routes';
import { IProduct } from '../model/product';

const renderLinkToProduct = (_id: string) => {
    return (
        <Link
            to={appRoutes.products + _id}
            className={'bg-neutral-200 px-4 py-1 text-black rounded-md'}
        >
            Подробнее
        </Link>
    );
};

export const OrderItem = ({ img, name, brand, price, _id }: IProduct) => {
    const image = getImage(img);

    return (
        <div
            id={'order-item'}
            className={'flex justify-between items-center p-2'}
        >
            <div className={'flex flex-row-reverse items-center gap-4'}>
                {renderLinkToProduct(_id)}
                <h1>{name}</h1>
                <span>{brand}</span>
                <br />
                <span>{price}</span>
            </div>
            <img src={image} width={'120px'} alt={'product'} />
        </div>
    );
};
