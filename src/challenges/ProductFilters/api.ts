export const fetchApi = (limit = 30) => {
    return fetch(`https://dummyjson.com/products?limit=${limit}`, { method: 'GET' }).then((res) => res.json())
}