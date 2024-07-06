import { Link } from 'react-router-dom';
import { Button } from 'components';
import { removeItem } from 'store/basketSlice';
import { useDispatch } from 'react-redux';
import { getImage } from 'utils/getImage';
import React from 'react';
import { IBasketItem } from '../../model/basket';
import { appRoutes } from '../../model/routes';
interface Props extends IBasketItem {}

export const BasketItem = ({
    _id,
    name,
    brand,
    price,
    basketItemId,
    img,
}: Props) => {
    const image = getImage(img);
    const dispatch = useDispatch();

    const renderLinkToProductPage = () => {
        return <Link to={appRoutes.products + _id}>{brand + ' ' + name}</Link>;
    };

    return (
        <div className={'p-4 text-white md:flex justify-center'}>
            <img width={'320px'} src={image} alt={'product'} />
            <div
                className={
                    'flex flex-col gap-2 items-start justify-center px-6'
                }
            >
                <div className={'flex flex-col'}>
                    {renderLinkToProductPage()}
                    <span>{price}</span>
                </div>
                <Button
                    text={'Удалить'}
                    onClick={() => dispatch(removeItem(basketItemId))}
                />
            </div>
        </div>
    );
};
