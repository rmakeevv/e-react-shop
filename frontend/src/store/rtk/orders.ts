import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseApiUri } from '../../api/model';
import { IProduct } from '../../model/product';

interface IOrderApi {
    _id: string;
    items: IProduct[];
    date: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: baseApiUri,
    prepareHeaders: (headers, { getState }) => {
        // const token = (getState() as RootState).auth.value.token;
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllOrders: builder.query<IOrderApi[], string>({
            query: (userId) => `orders/${userId}`,
        }),
    }),
});

export const { useGetAllOrdersQuery } = ordersApi;
