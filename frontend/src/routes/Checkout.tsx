import { UseAppSelector } from 'hooks';
import { Link, useNavigate } from 'react-router-dom';
import { CheckoutItem, CheckoutInfoPanel } from 'components';
import React, { useEffect } from 'react';
import { selectBasketIsOrdered, selectBasketItems } from '../store/basketSlice';
import { appRoutes } from '../model/routes';

const useProtectCheckoutRoute = () => {
    const basketItems = UseAppSelector(selectBasketItems);
    const isOrdered = UseAppSelector(selectBasketIsOrdered);

    const navigate = useNavigate();

    useEffect(() => {
        if (basketItems.length === 0 && !isOrdered) {
            navigate(appRoutes.products);
        }
    }, [basketItems]);
};

export const Checkout = () => {
    const isOrdered = UseAppSelector(selectBasketIsOrdered);
    const basketItems = UseAppSelector(selectBasketItems);

    useProtectCheckoutRoute();

    if (isOrdered) {
        return (
            <div
                className={
                    'container mx-auto text-white p-8 flex flex-col items-center'
                }
            >
                <h1>Заказ успешно создан!</h1>
                <p>
                    Вы можете просмотреть свои заказы, на странице Личный
                    кабинет!
                </p>
                <Link
                    to={'/'}
                    className={'px-6 py-3 bg-emerald-700 rounded-md m-4'}
                >
                    На главную!
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div className={'container mx-auto p-8 text-white'}>
                <h1 className={'text-white text-center'}>Ваш заказ</h1>
                {basketItems.map((item, key) => (
                    <CheckoutItem key={key} {...item} />
                ))}
                <CheckoutInfoPanel />
            </div>
        </div>
    );
};
