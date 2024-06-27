import { UseAppSelector } from 'hooks/UseAppSelector';
import { createOrderApi } from 'api/createOrderApi';
import {
    checkOut,
    selectBasketItems,
    selectBasketTotal,
} from 'store/basketSlice';
import { getDate } from 'services/getDate';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { selectUserId } from '../../store/authSlice';

export const CheckoutInfoPanel = () => {
    const basketItems = UseAppSelector(selectBasketItems);

    const userId = UseAppSelector(selectUserId);
    const dispatch = useAppDispatch();
    const total = UseAppSelector(selectBasketTotal);

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
            <span className={'m-4'}>
                Товаров в заказе: {basketItems.length}
            </span>
            <button
                className={'px-6 py-3 bg-neutral-100 rounded-md text-black'}
                onClick={createOrder}
            >
                Заказать
            </button>
        </div>
    );
};
