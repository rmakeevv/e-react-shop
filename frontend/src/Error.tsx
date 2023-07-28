import {Link, useRouteError} from "react-router-dom";
import React from 'react';

export const Error = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className={'grid container justify-center justify-items-center mx-auto p-4 gap-4 text-white'}>
            <h1>something wrong!</h1>
            <div>
                <Link to={'/'} className={'bg-neutral-700 px-8 py-4'}>Go to main</Link>
            </div>
        </div>
    );
};