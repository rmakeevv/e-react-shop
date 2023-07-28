import { useLoaderData} from "react-router-dom";
import {ProductItem} from 'components/ProductItem';
import {SortForm} from 'components/SortForm';
import {useDispatch} from "react-redux";
import {addItem} from "store/basketSlice";
import React from 'react';
export const Products = () => {
    const dispatch = useDispatch()
    const data = useLoaderData()
    return  (
            <div className={'flex flex-col container mx-auto md:px-12'}>
                <div className={'md:p-8 p-4 md:rounded-xl flex items-center md:flex-row flex-col justify-between'} style={{border: "1px solid rgb(84 84 84 / 48%)"}} >
                    <h1 className={'md:text-xl text-white text-center'}>{data ? "В наличии "  + 0 + " товар(ов)" : "error"}</h1>
                    <SortForm/>
                </div>
                <div className={'grid md:gap-4 text-white py-2'}>
                    {
                        Array.isArray(data)
                            ? data.map((item, key) => <ProductItem key={key} {...item} action={() => dispatch(addItem(item))}/>)
                            : (
                                <div className={'text-white p-4'}>
                                    <h1>Товары не найдены! Попробуйте позже.</h1>
                                </div>
                            )
                    }
                </div>
            </div>
    )
}