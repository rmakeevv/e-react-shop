import { ProductItem } from 'components/ProductItem';
import { SortForm } from 'components/SortForm';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/basketSlice';
import React, { useMemo } from 'react';
import { AppDispatch } from '../hooks';
import { useGetAllProductsQuery } from '../store/rtk';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
    const dispatch: AppDispatch = useDispatch();

    let [searchParams, setSearchParams] = useSearchParams();

    const params = useMemo(() => {
        const initialValue = {
            category: '',
            order: '',
        };

        for (const [key, value] of searchParams.entries()) {
            if (key === 'category' || key === 'order') {
                initialValue[key] = value;
            }
        }

        return initialValue;
    }, [searchParams]);

    const { data } = useGetAllProductsQuery(params);

    return (
        <div
            id={'products-page'}
            className={'flex flex-col container mx-auto px-4'}
        >
            <div
                id={'products-list-header'}
                className={
                    'p-2 md:rounded-xl flex items-center md:flex-row justify-between'
                }
                style={{ border: '1px solid rgb(84 84 84 / 48%)' }}
            >
                <h1 className={'text-white text-center'}>
                    {data
                        ? 'В наличии ' + data.length + ' товар(ов)'
                        : 'Ошибка'}
                </h1>
                <SortForm />
            </div>
            <div className={'grid md:gap-4 text-white py-2'}>
                {data ? (
                    data.map((item, key) => (
                        <ProductItem
                            key={key}
                            {...item}
                            action={() => dispatch(addItem(item))}
                        />
                    ))
                ) : (
                    <div className={'text-white p-4'}>
                        <h1>Товары не найдены! Попробуйте позже.</h1>
                    </div>
                )}
            </div>
        </div>
    );
};
