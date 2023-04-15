import {Link} from "react-router-dom";

export const CheckoutItem = ({_id, name, brand, price, img}) => {
    const image = `http://localhost:5000/images/${img}`
    return (
        <div className={'flex'}>
            <div className={'p-6 text-white flex justify-center'}>
                <img width={'144px'} src={image} alt={'product'}/>
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