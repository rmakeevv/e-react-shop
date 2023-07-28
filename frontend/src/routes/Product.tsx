import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "store/basketSlice";
import {getImage} from 'services/getImage';
import React from 'react';

export const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data:any = useLoaderData()
    const picture = getImage(data.img)
    if (data) {
      return (
        <div className={'text-slate-200 flex items-stretch justify-center'}>
          <div className='flex md:flex-row flex-col items-center rounded-md justify-center container p-4'>
            <img src={picture} alt={'product'} className={'w-64'}/>
            <div className={'grid items-center rounded-md justify-items-start px-8'}>
              <div className={'flex items-center py-6'}>
                <h1 className={'text-xl'}>{data.name}</h1>
                <button className={'ml-10 px-6 py-2 rounded-md bg-emerald-700'} onClick={() => navigate(-1)}>Назад
                </button>
              </div>
              <p className={'py-2'}>Хранилище: {data.storage || 'Не указано'}</p>
              <p className={'py-2'}>Цвет: {data.color || 'Не указано'}</p>
              <p className={'py-2'}>Дисплей: {data.display || 'Не указано'}</p>
              <p className={'py-2'}>Камера: {data.camera || 'Не указано'}</p>
              <p className={'py-2'}>Разрешение экрана: {data.resolution || 'Не указано'}</p>
              <p className={'py-2'}>Производитель: {data.brand || 'Не указано'}</p>
              <p className={'py-2'}>Категория: {data.category || 'Не указано'}</p>
              <div className={'flex items-center'}>
                <span className={'pr-4'}> {data.price + ' руб.'} </span>
                <button className='bg-emerald-700 px-8 py-3 rounded-md m-2'
                        onClick={() => dispatch(addItem(data))}>Купить
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
            <div className={'flex justify-center gap-2 items-center flex-col'}>
                <h1 className={'text-center text-3xl text-white'}>К сожалению товара больше нет в продаже!</h1>
                <Link to={'/products'} className={'px-6 py-3 bg-sky-200 rounded-md'}>На главную!</Link>
            </div>
        )
};