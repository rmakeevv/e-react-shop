import { Link, useParams } from 'react-router-dom';
import { OrderItem } from 'components/OrderItem';
import React, { useEffect, useMemo } from 'react';
import { useGetAllOrdersQuery } from '../store/rtk/orders';
import { appRoutes } from '../model/routes';

const renderLinkToProductsPage = () => {
    return (
        <Link
            to={appRoutes.products}
            className={
                'font-medium bg-emerald-700 text-white px-6 py-3 m-4 rounded-md'
            }
        >
            Перейти в каталог!
        </Link>
    );
};

export const Orders = () => {
    const { userid } = useParams();
    const {
        data: orders = [],
        isSuccess,
        isFetching,
        refetch,
    } = useGetAllOrdersQuery(userid || '');

    useEffect(() => {
        refetch();
    }, []);

    const preparedOrders = useMemo(() => {
        const reversedOrders = orders.slice();
        return reversedOrders.reverse();
    }, [orders]);

    if (isFetching) return null;

    if (isSuccess && preparedOrders.length) {
        return (
            <div
                className={
                    'grid gap-4 mx-auto container text-white rounded-md md:px-12'
                }
            >
                <h1 className={'text-center'}>Ваши заказы</h1>
                {preparedOrders.map(({ items, _id, date }, key) => {
                    return (
                        <div
                            className={
                                'bg-neutral-800 text-white md:p-4 rounded-md flex flex-col gap-2'
                            }
                            key={key}
                        >
                            <div
                                id={'order-header'}
                                className={'flex items-center'}
                            >
                                <h1 className={'p-2'}> Номер заказа: {_id}</h1>
                                <span>Дата: {date || 'no date'}</span>
                            </div>
                            <hr />
                            {Array.isArray(items) &&
                                items.map((item, key) => (
                                    <OrderItem key={key} {...item} />
                                ))}
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <div className={'flex items-center flex-col p-4'}>
            <h1 className={'text-center text-white text-xl'}>
                Вы еще не делали заказов!
            </h1>
            {renderLinkToProductsPage()}
        </div>
    );
};
