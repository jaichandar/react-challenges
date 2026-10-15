export const fetchAllProducts = (page = 1) => {
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    return fetch(`https://dummyjson.com/products?skip=${skip}&limit=${pageSize}`).then((res) => res.json());
}

export const fetchProductById = (id: number) => {
    return fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());
}