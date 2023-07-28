import {UseAppSelector} from 'hooks';
import {MyLink, BasketItem, BasketInfoPanel} from 'components';
import React from 'react';

  export const Basket = () => {

    const basket = UseAppSelector(state => state.basket.value)
    return (
        <div className={'container md:p-6 mx-auto'}>
            { !Array.isArray(basket.items)
                ?   <div className={'flex items-center p-8 flex-col gap-4'}>
                        <h1 className={'m-4 text-white text-xl'}>Вы не добавили ни одного товара</h1>
                        <MyLink text={'Перейти в каталог!'} href={'/products'}/>
                    </div>
                :   <div className={'md:flex text-white rounded-md p-4 items-start justify-center'}>
                        <BasketInfoPanel/>
                        <div className={'p-4'}>
                            {
                                basket.items.map((item,key) => <BasketItem key={key} {...item}/> )
                            }
                        </div>
                    </div>
                }
        </div>
    );
};