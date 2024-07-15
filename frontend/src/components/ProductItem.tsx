import { Link } from 'react-router-dom';
import { Button } from './common';
import { getImage } from 'utils/getImage';
import React from 'react';
import { IProduct } from '../model/product';
import { appRoutes } from '../model/routes';

interface Props extends IProduct {
    addItem: () => void;
}

const renderName = (brand: string, name: string) =>
    brand + ' ' + name.slice(0, 15) + '...';

const renderPrice = (price: number) => {
    return price.toString() + '.00' + '$';
};

export const ProductItem = ({
    name,
    brand,
    price,
    _id,
    img,
    addItem,
}: Props) => {
    const picture = getImage(img);
    return (
        <div
            className={
                'flex-col flex gap-4 bg-neutral-800 p-3 items-center justify-center md:rounded-md'
            }
        >
            <Link to={appRoutes.products + _id}>
                <img src={picture} alt={name} width={'260px'} />
            </Link>
            <div
                className={
                    'flex flex-col md:px-4 justify-center gap-2 basis-2/3'
                }
            >
                <div className={'my-4 flex items-center justify-between gap-4'}>
                    <Link to={`/products/${_id}`} className={'hover:underline'}>
                        {renderName(brand, name)}
                    </Link>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex items-center justify-between gap-6'}>
                        <p className={'text-lg'}>{renderPrice(price)}</p>
                        <Button onClick={addItem} text={'Добавить в корзину'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
