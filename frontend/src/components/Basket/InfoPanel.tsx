import { UseAppSelector } from 'hooks/UseAppSelector';
import { Link } from 'react-router-dom';
import React from 'react';
import { appRoutes } from '../../model/routes';
import { selectBasketItems, selectBasketTotal } from '../../store/basketSlice';
import { selectIsLogged } from '../../store/authSlice';
import { formatPrice } from '../../utils/formatPrice';

const renderLinkToCheckOut = () => {
    return (
        <Link
            to={appRoutes.checkout}
            className={'bg-neutral-200 text-black px-3 py-1 rounded-md'}
        >
            Перейти к оформлению
        </Link>
    );
};

const renderLinkToAuth = () => {
    return (
        <Link
            to={appRoutes.auth}
            className={'bg-neutral-700 py-3 rounded-md px-6'}
        >
            Войти в профиль
        </Link>
    );
};

export const BasketInfoPanel = () => {
    const basketItems = UseAppSelector(selectBasketItems);
    const total = UseAppSelector(selectBasketTotal);

    const totalAmount = formatPrice(total);

    const isLogged = UseAppSelector(selectIsLogged);
    return (
        <div
            id={'basket-info-panel'}
            className={
                'p-6 flex justify-between flex-wrap items-start gap-4 bg-neutral-800 rounded-md'
            }
            style={{ border: '1px solid rgb(84 84 84 / 48%)' }}
        >
            Сумма заказа: {totalAmount + ' rub'}
            <br />
            Выбрано товаров: {basketItems.length}
            {isLogged ? renderLinkToCheckOut() : renderLinkToAuth()}
        </div>
    );
};
