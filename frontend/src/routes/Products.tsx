import { ProductItem } from 'components/ProductItem';
import { SortForm } from 'components/SortForm';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/basketSlice';
import React, { useMemo } from 'react';
import { AppDispatch } from '../hooks';
import { useGetAllProductsQuery } from '../store/rtk';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components';

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

    const {
        data: products = [],
        isError,
        isFetching,
        refetch,
    } = useGetAllProductsQuery(params);

    if (isFetching) {
        return <></>;
    }

    if (isError) {
        return (
            <div className={'flex justify-center'}>
                <div
                    className={
                        'text-neutral-50 text-lg text-center flex flex-col gap-4 items-center'
                    }
                >
                    Ошибка
                    <span>Попробуйте вернуться позже</span>
                    <Button
                        onClick={() => refetch()}
                        className={'p-1 justify-self-center'}
                        text={'Перезагрузить'}
                    ></Button>
                </div>
            </div>
        );
    }

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
                    {'В наличии ' + products.length + ' товар(ов)'}
                </h1>
                <SortForm />
            </div>
            <div className={'flex md:gap-4 text-white py-2'}>
                {products.map((item, key) => (
                    <ProductItem
                        key={key}
                        {...item}
                        addItem={() => dispatch(addItem(item))}
                    />
                ))}
            </div>
        </div>
    );
};
