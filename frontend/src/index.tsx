import React from 'react';
import ReactDOM from 'react-dom/client';
import {Root, loader as rootLoader} from "./routes/Root";
import {Error} from 'Error';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Products} from 'routes/Products';
import {getProducts} from 'api/getProducts';
import './assets/styles/index.css';
import {Main} from 'routes/Main';
import {Product} from 'routes/Product';
import {getOneProduct} from 'api/getOneProduct';
import {Auth} from 'routes/Auth';
import {userCreate} from 'api/userCreate';
import {Profile, loader} from 'routes/Profile';
import {Provider} from "react-redux";
import store from "./store";
import {Basket} from 'routes/Basket';
import {Orders, loader as orderLoader} from "./routes/Orders";
import {Checkout} from 'routes/Checkout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        loader: rootLoader,
        children: [
            {
                index: true, element: <Main/>
            },
            {
                path: '/products',
                element: <Products/>,
                loader: getProducts,
                errorElement: <Error/>
            },
            {
                path: '/products/:id',
                element: <Product/>,
                loader: getOneProduct
            },
            {
                path: '/auth',
                element: <Auth/>,
                action: userCreate
            },
            {
                path: '/profile/:number',
                element: <Profile/>,
                loader: loader
            },
            {
                path: '/basket',
                element: <Basket/>
            },
            {
                path: '/orders/:userid',
                element: <Orders/>,
                loader: orderLoader
            },
            {
                path: '/checkout',
                element: <Checkout/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);