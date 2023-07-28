import React from "react";

type ButtonProps = {
    text: string,
    action?: () => any,
    type?: "submit"
}
export const Button = ({text, action, type}: ButtonProps) => {
    return (
        <button type={type} onClick={action} className={'px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-sky-100 hover:text-black'}>{text}</button>
    );
};