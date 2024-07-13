import { UseAppSelector } from 'hooks/UseAppSelector';
import { createOrderApi } from 'api/createOrderApi';
import {
    checkOut,
    selectBasketItems,
    selectBasketQuantity,
    selectBasketTotal,
} from 'store/basketSlice';
import { getDate } from 'utils/getDate';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { selectUserId } from '../../store/authSlice';
import { Button } from '../common';
import { useAppSelector } from '../../store';

export const CheckoutInfoPanel = () => {
    const basketItems = UseAppSelector(selectBasketItems);
    const basketQuantity = useAppSelector(selectBasketQuantity);
    const total = useAppSelector(selectBasketTotal);
    const userId = UseAppSelector(selectUserId);
    const dispatch = useAppDispatch();

    const createOrder = async () => {
        const order = {
            items: basketItems,
            date: getDate(),
            userId: userId,
        };
        await createOrderApi(order);
        dispatch(checkOut());
    };

    return (
        <div className={'flex items-center justify-center'}>
            <span> Итого {total}</span>
            <span className={'m-4'}>Товаров в заказе: {basketQuantity}</span>
            <Button
                className={'px-6 py-3 rounded-md text-black'}
                onClick={createOrder}
                text={'Заказать'}
            />
        </div>
    );
};
