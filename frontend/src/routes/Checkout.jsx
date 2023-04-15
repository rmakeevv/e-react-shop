import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {createOrderApi} from "../api/createOrderApi";
import {checkOut} from "../basketSlice";

export const Checkout = () => {
    const basket = useSelector(state => state.basket.value)
    return basket.isOrdered
        ? (
            <div className={'container mx-auto text-white p-8 flex flex-col items-center'}>
                <h1>Заказ успешно создан!</h1>
                <p>Вы можете просмотреть свои заказы, на странице Личный кабинет!</p>
                <Link to={'/'} className={'px-6 py-3 bg-emerald-700 rounded-md m-4'}>На главную!</Link>
            </div>
        )
        : (
            <div>
                <div className={'container mx-auto p-8 text-white'}>
                    <h1 className={'text-white text-center'}>Ваш заказ</h1>
                    {
                        basket.items.map((item,key) => <CheckoutItem key={key} {...item}/>)
                    }
                   <CheckoutInfoPanel/>
                </div>
            </div>
        )
};