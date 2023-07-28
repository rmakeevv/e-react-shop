import React from "react";
import {Link} from "react-router-dom";

type MyLinkValues = 'href' | 'text'
type Props = Record<MyLinkValues, string>

export const MyLink = ({href, text}: Props) => {
    return (
        <Link to={href} className={'text-white p-4 px-8 text-xl bg-emerald-700 rounded-md'}>{text}</Link>
    );
};