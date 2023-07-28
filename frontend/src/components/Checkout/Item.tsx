import React from "react";
import {Link} from "react-router-dom";
import {getImage} from 'services/getImage';

type CheckoutItemValues = '_id' | 'name' | 'brand' | 'price' | 'img'
type Props = Record<CheckoutItemValues, string>

export const CheckoutItem = ({_id, name, brand, price, img}: Props) => {
    const image = getImage(img)
    return (
        <div className={'flex'}>
            <div className={'p-4 text-white flex justify-center'}>
                <img width={'140px'} src={image} alt={'product'}/>
                <div className={'grid items-center justify-items-center p-4'}>
                    <Link to={`/products/${_id}`}>
                        {brand + " " + name}
                    </Link>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};