import { MyLink, BasketItem, BasketInfoPanel } from 'components';
import React from 'react';
import { useAppSelector } from '../store';
import { selectBasketItems } from '../store/basketSlice';
import { appRoutes } from '../model/routes';
import { useGetAllProductsQuery } from '../store/rtk';
import { IProduct, ProductEntity } from '../model/product';
import { IBasketItem } from '../model/basket';

interface FilteredItem extends IProduct {
    basketItemId: number;
}

type GetFilteredData = (
    basketItems: IBasketItem[],
    products: IProduct[]
) => FilteredItem[];

const getFilteredData: GetFilteredData = (basketItems, products) =>
    basketItems.map((item) => {
        const product = products?.find((product) => product._id === item._id);
        const productInfo = product ? product : new ProductEntity();

        return {
            ...productInfo,
            ...item,
        };
    });

export const Basket = () => {
    const basketItems = useAppSelector(selectBasketItems);

    const { data: products = [] } = useGetAllProductsQuery({ category: '' });

    return (
        <div className={'container md:p-6 mx-auto'}>
            {basketItems.length === 0 ? (
                <div className={'flex items-center p-8 flex-col gap-4'}>
                    <h1 className={'m-4 text-white text-xl'}>
                        Вы не добавили ни одного товара
                    </h1>
                    <MyLink
                        text={'Перейти в каталог!'}
                        href={appRoutes.products}
                    />
                </div>
            ) : (
                <div
                    className={
                        'flex flex-wrap text-white rounded-md p-4 items-start justify-center'
                    }
                >
                    <BasketInfoPanel />
                    <div className={'p-4 shrink-0'}>
                        {getFilteredData(basketItems, products).map(
                            (item, key) => (
                                <BasketItem key={key} {...item} />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
