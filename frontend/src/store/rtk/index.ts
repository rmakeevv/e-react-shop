import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUri } from '../../api/model';
import { IProduct } from '../../model/product';

const baseQuery = fetchBaseQuery({ baseUrl: baseApiUri });

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllProducts: builder.query<
            IProduct[],
            { category: string; order: string }
        >({
            query: ({ category, order }) =>
                category
                    ? `categories/${category}/${order}`
                    : `categories/all/asc`,
        }),
        getProduct: builder.query<IProduct, string>({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
