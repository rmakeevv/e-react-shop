import { MyLink, BasketItem, BasketInfoPanel } from 'components';
import React from 'react';
import { useAppSelector } from '../store';
import { selectBasketItems } from '../store/basketSlice';
import { appRoutes } from '../model/routes';

export const Basket = () => {
    const basketItems = useAppSelector(selectBasketItems);
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
                        {basketItems.map((item, key) => (
                            <BasketItem key={key} {...item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
