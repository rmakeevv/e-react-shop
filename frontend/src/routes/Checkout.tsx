import { UseAppSelector } from 'hooks';
import { Link, useNavigate } from 'react-router-dom';
import { CheckoutItem, CheckoutInfoPanel } from 'components';
import React, { useEffect, useMemo } from 'react';
import { selectBasketIsOrdered, selectBasketItems } from '../store/basketSlice';
import { appRoutes } from '../model/routes';
import { useGetAllProductsQuery } from '../store/rtk';

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

    const { data: products = [] } = useGetAllProductsQuery({
        category: '',
        order: '',
    });

    const orderItems = useMemo(() => {
        products.filter((product) => {
            return basketItems.find(
                (basketItem) => basketItem._id === product._id
            );
        });
        return products;
    }, [products, basketItems]);

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

    if (products.length > 0) {
        return (
            <div>
                <div className={'container mx-auto p-8 text-white'}>
                    <h1 className={'text-white text-center'}>Ваш заказ</h1>
                    <div
                        className={'flex items-center flex-col'}
                        style={{ maxHeight: '30rem', overflowY: 'auto' }}
                    >
                        {orderItems.map((item, key) => (
                            <CheckoutItem key={key} {...item} />
                        ))}
                    </div>

                    <CheckoutInfoPanel />
                </div>
            </div>
        );
    }

    return null;
};
