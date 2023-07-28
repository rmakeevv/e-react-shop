import {UseAppSelector} from 'hooks/UseAppSelector';
import {useDispatch} from "react-redux";
import {createOrderApi} from 'api/createOrderApi';
import {checkOut} from "store/basketSlice";
import {getDate} from 'services/getDate';
import React from 'react';

export const CheckoutInfoPanel = () => {

    const basket = UseAppSelector(state => state.basket.value)

    const auth = UseAppSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const total = basket.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const createOrder = () => {
        const order = {
            items: basket.items,
            date: getDate(),
            userId: auth.userId
        }
        createOrderApi(order)
            .then( (data: any) => data)
        dispatch(checkOut())
    }

    return (
        <div className={'flex items-center justify-center'}>
            <span> Итого {total}</span>
            <span className={'m-4'}>
                        Товаров в заказе: {basket.items.length}
                    </span>
            <button className={'px-6 py-3 bg-neutral-100 rounded-md text-black'} onClick={createOrder}>Заказать</button>
        </div>
    );
};