import {Outlet, useLoaderData, useNavigation} from "react-router-dom";
import {Header} from 'components';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logIn} from "store/authSlice";
export const loader = async () => {
    const token = localStorage.getItem('token') || null
    const userId = localStorage.getItem('userId') || null
    if (!userId) {
        return null;
    }

    await fetch(process.env.REACT_APP_API_URI + `/users/auth`,
        {
            headers: {
                "authorization": "Bearer: " + localStorage.getItem("token"),
            }
        }
        ,)
        .then(res => res)
        .catch(() => null)
    return {token, userId }
}
export const Root = () => {
    const navigation = useNavigation()
    const data = useLoaderData()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!data) {
            return
        }
        dispatch(logIn(data))
    })

    return (
        <div className={'font-sans h-screen'} style={{background: '#1a1a1a'}}>
            <Header/>
            <div className={`mt-14 pt-10 pb-8 ${navigation.state === "loading" ? "opacity-50" : "" }`} style={{background: '#1a1a1a'}}>
                <Outlet/>
            </div>
        </div>
    );
};