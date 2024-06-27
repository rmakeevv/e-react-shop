import React from "react";
import {Form, useSubmit} from "react-router-dom";

export const SortForm = () => {
    const submit = useSubmit()
    return (
        <Form method={"get"} id={'products-sort-form'} className={'text-white align-center flex md:gap-6 p-4'}>
            <div className={'flex md:flex-row flex-col items-center'}>
                <span className={'md:text-xl m-2'}>Категории</span>
                <select name={'category'} className={'text-emerald-300 bg-neutral-900 focus:border-0'} onChange={(event) => submit(event.currentTarget.form)}>
                    <option defaultChecked={true} value={'all'}>все товары</option>
                    <option value={'desktops'} >Компьютеры</option>
                    <option value={'phones'}>Телефоны</option>
                    <option value={'laptops'}>Ноутбуки</option>
                </select>
            </div>
            <div className={'flex md:flex-row flex-col items-center'}>
                <span className={'md:text-xl m-2'}>По цене</span>
                <select name={'order'} className={'text-emerald-300 rounded-sm px-2 bg-neutral-900'} onChange={(event) => submit(event.currentTarget.form)}>
                    <option value={'desc'}>Сначала дороже</option>
                    <option value={'asc'}>Сначала дешевле</option>
                </select>
            </div>
        </Form>
    );
};