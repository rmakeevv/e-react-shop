import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/basketSlice';
import { getImage } from 'utils/getImage';
import React from 'react';
import { useGetProductQuery } from '../store/rtk';
import { IProduct } from '../model/product';
import { Button } from '../components';

enum ProductLabelsEnum {
    storage = 'Хранилище',
    color = 'Цвет',
    display = 'Дисплей',
}

const renderProductProperty = (
    label: ProductLabelsEnum,
    caption: IProduct[keyof IProduct]
) => {
    return (
        <p className={'py-2'}>
            {label}: {caption || 'Не указано'}
        </p>
    );
};

const ProductImage = ({ img }: Record<'img', string>) => {
    return <img src={getImage(img)} alt={'product'} className={'w-64'} />;
};

export const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isSuccess, isFetching } = useGetProductQuery(id || '');

    const handleOnClickNavigateBack = () => navigate(-1);

    const handleOnClickAddItem = (item: IProduct) => dispatch(addItem(item));

    if (isFetching) return <></>;

    if (isSuccess && data.img) {
        return (
            <div className={'text-slate-200 flex items-stretch justify-center'}>
                <div className="flex md:flex-row flex-col items-center rounded-md justify-center container p-4">
                    <ProductImage img={data.img} />
                    <div
                        className={
                            'grid items-center rounded-md justify-items-start px-8'
                        }
                    >
                        <div className={'flex items-center py-6'}>
                            <h1 className={'text-xl'}>{data.name}</h1>
                            <button
                                className={
                                    'ml-10 px-6 py-2 rounded-md bg-emerald-700'
                                }
                                onClick={handleOnClickNavigateBack}
                            >
                                Назад
                            </button>
                        </div>
                        {renderProductProperty(
                            ProductLabelsEnum.storage,
                            data.storage
                        )}
                        {renderProductProperty(
                            ProductLabelsEnum.color,
                            data.color
                        )}
                        {renderProductProperty(
                            ProductLabelsEnum.display,
                            data.display
                        )}
                        <p className={'py-2'}>
                            Камера: {data.camera || 'Не указано'}
                        </p>
                        <p className={'py-2'}>
                            Разрешение экрана: {data.resolution || 'Не указано'}
                        </p>
                        <p className={'py-2'}>
                            Производитель: {data.brand || 'Не указано'}
                        </p>
                        <p className={'py-2'}>
                            Категория: {data.category || 'Не указано'}
                        </p>
                        <div className={'flex items-center'}>
                            <span className={'pr-4'}>
                                {' '}
                                {data.price + ' руб.'}{' '}
                            </span>
                            <Button
                                className="bg-emerald-700 px-8 py-3 rounded-md m-2"
                                onClick={() => handleOnClickAddItem(data)}
                                text={'Купить'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={'flex justify-center gap-2 items-center flex-col'}>
            <h1 className={'text-center text-3xl text-white'}>
                К сожалению товара больше нет в продаже!
            </h1>
            <Link
                to={'/products'}
                className={'px-6 py-3 bg-sky-200 rounded-md'}
            >
                На главную!
            </Link>
        </div>
    );
};
