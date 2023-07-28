type RequestSpec = {
  request: {
    url: URL | string;
  }
}

export const getProducts = async({request}: RequestSpec) => {
    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const order = url.searchParams.get('order')
    const urlApi = category
        ? process.env.REACT_APP_API_URI + `/categories/${category}/${order}`
        : process.env.REACT_APP_API_URI + `/products/`
    const data = await fetch(urlApi)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err.message))
    return data || null
}