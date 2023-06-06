import {redirect} from "react-router-dom";
export const userCreate = async ({request}) => {
    const formData = await request.formData();
    const {number} = Object.fromEntries(formData);
    if (isNaN(Number(number))) {
        return 'Неправильно набран номер! Нужно использовать только цифры [0-9]!'
    }

    if (number[0] !== '+' || number[1] !== '7') {
        return 'Неправильно набран номер! Номер должен начинаться с "+7"!'
    }

    if (number.length < 11) {
        return 'Неправильно набран номер! В номере должно быть минимум 10 символов!'
    }

    const userData = {phone : number}
    const data = await fetch(process.env.REACT_APP_API_URI + `/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    const userId = data.insertedId || data._id
    await localStorage.setItem("token", data.token)
    await localStorage.setItem("userId", userId)
    return data
        ? redirect(`/profile/${userId}`)
        : redirect('/auth')
}