import React from 'react';

interface IButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'submit';
    className?: string;
}

/**
 * @param className - Перекрывает className от Tailwind.css
 * @param text - Передайте текст
 * @param type - Принимает только submit для форм
 * @param onClick - Принимает любую функцию
 *
 * @returns Возвращает стилизованную кнопку
 */

export const Button = ({ text, onClick, type, className }: IButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                className +
                'px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-sky-100 hover:text-black '
            }
        >
            {text}
        </button>
    );
};
