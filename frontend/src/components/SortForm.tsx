import React from 'react';
import { Form, useSubmit } from 'react-router-dom';

enum CategoryEnum {
    desktops = 'Компьютеры',
    phones = 'Телефоны',
    laptops = 'Ноутбуки',
    all = 'Все товары',
}

enum OrderEnum {
    desc = 'Сначала дороже',
    asc = 'Сначала дешевле',
}

export const SortForm = () => {
    const submit = useSubmit();
    return (
        <Form
            method={'get'}
            id={'products-sort-form'}
            className={'text-white align-center flex md:gap-6 p-2'}
        >
            <div className={'flex md:flex-row flex-col items-center'}>
                <span className={'m-2'}>Категории</span>
                <select
                    name={'category'}
                    className={'text-emerald-300 bg-neutral-900 focus:border-0'}
                    onChange={(event) => submit(event.currentTarget.form)}
                >
                    {Object.entries(CategoryEnum).map(([key, value]) => (
                        <option
                            key={key}
                            value={key}
                            defaultChecked={key === 'all'}
                        >
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className={'flex md:flex-row flex-col items-center'}>
                <span className={'m-2'}>По цене</span>
                <select
                    name={'order'}
                    className={
                        'text-emerald-300 rounded-sm px-2 bg-neutral-900'
                    }
                    onChange={(event) => submit(event.currentTarget.form)}
                >
                    {Object.entries(OrderEnum).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </Form>
    );
};
