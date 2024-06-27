import { redirect } from 'react-router-dom';
import { IBasketItem } from '../model/basket';
import { baseApiUri } from './model';

interface IOrder {
    items: IBasketItem[];
    date: string;
    userId: string;
}

type createOrderApiType = (order: IOrder) => Promise<any>;

export const createOrderApi: createOrderApiType = async (order) => {
    const data = await fetch(baseApiUri + '/orders/', {
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
