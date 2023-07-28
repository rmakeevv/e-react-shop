type ParamsTyped = Record<'params', {id?: string}>

export const getOneProduct = async({params}: ParamsTyped) => {
    const apiURI = process.env.REACT_APP_API_URI + `/products/${params.id}`
    const data = await fetch(apiURI)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err.message))
    return data || null
}