import {Outlet, useLoaderData, useNavigation} from "react-router-dom";
import {Header} from "../components/Header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logIn} from "../authSlice";
export const loader = async () => {
    const token = localStorage.getItem('token') || null
    const userId = localStorage.getItem('userId') || null
    if (!token) {
        return false
    }

    await fetch(`http://localhost:5000/users/auth`,
        {
            headers: {
                "authorization": "Bearer: " + localStorage.getItem("token"),
            }
        }
        ,)
        .then(res => res)
        .catch((err) => console.log(err.message))
    return {token, userId }
}
export const Root = () => {
    const navigation = useNavigation()
    const data = useLoaderData()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!localStorage.length) {
            return;
        }
        dispatch(logIn(data))
    })

    return (
        <div className={'font-sans h-screen'} style={{background: '#1a1a1a'}}>
            <Header/>
            <div className={`mt-14 pt-10 ${navigation.state === "loading" ? "opacity-50" : "" }`} style={{background: '#1a1a1a'}}>
                <Outlet/>
            </div>
        </div>
    );
};