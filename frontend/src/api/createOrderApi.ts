import { redirect } from 'react-router-dom';
import { IBasketItem } from '../model/basket';

interface IOrder {
    items: IBasketItem[];
    date: string;
    userId: string;
}

type func = (order: IOrder) => any;

export const createOrderApi: func = async (order) => {
    const data = await fetch(process.env.REACT_APP_API_URI + '/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err.message));
    return data ? redirect(`/profile`) : null;
};
