import React from 'react';
import ReactDOM from 'react-dom/client';
import { loader as rootLoader, Root } from './routes/Root';
import { Error } from 'Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products } from 'routes/Products';
import './assets/styles/index.css';
import { Main } from 'routes/Main';
import { Product } from 'routes/Product';
import { Auth } from 'routes/Auth';
import { userCreate } from 'api/userCreate';
import { loader, Profile } from 'routes/Profile';
import { Provider } from 'react-redux';
import store from './store';
import { Basket } from 'routes/Basket';
import { Orders } from './routes/Orders';
import { Checkout } from 'routes/Checkout';
import { appRoutes } from './model/routes';

const router = createBrowserRouter([
    {
        path: appRoutes.home,
        element: <Root />,
        errorElement: <Error />,
        loader: rootLoader,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: appRoutes.products,
                element: <Products />,
                errorElement: <Error />,
            },
            {
                path: appRoutes.product,
                element: <Product />,
            },
            {
                path: appRoutes.auth,
                element: <Auth />,
                action: userCreate,
            },
            {
                path: appRoutes.profile + ':number',
                element: <Profile />,
                loader: loader,
            },
            {
                path: appRoutes.basket,
                element: <Basket />,
            },
            {
                path: appRoutes.orders,
                element: <Orders />,
            },
            {
                path: appRoutes.checkout,
                element: <Checkout />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
