const fetchData = () => {
    return fetch(`https://dummyjson.com/products?limit=194`, { method: 'GET' }).then((res) => res.json());
}

export default { fetchData }; 