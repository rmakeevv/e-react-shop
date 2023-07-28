import {UseAppSelector} from 'hooks/UseAppSelector';
import {Link} from "react-router-dom";
import React from 'react';

export const BasketInfoPanel = () => {
    const basket = UseAppSelector(state => state.basket.value)
    const total = basket.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const auth = UseAppSelector(state => state.auth.value)
    return (
        <div className={'p-6 grid gap-4 bg-neutral-800 rounded-md'} style={{border: "1px solid rgb(84 84 84 / 48%)"}}>
            Сумма заказа: {total}
            <br/>
            Выбрано товаров: {basket.items.length}
            { auth.isLogged
                ? <Link to={'/checkout'} className={'bg-neutral-200 text-black px-6 py-3 rounded-md'}>Перейти к оформлению</Link>
                : <Link to={'/auth'} className={'bg-neutral-700 py-3 rounded-md px-6'}>Войти в профиль</Link>
            }
        </div>
    );
};