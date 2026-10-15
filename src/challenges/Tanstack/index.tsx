import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { fetchAllProducts } from './api';
import Product from './Product';
import './index.css';

const Tanstack = () => {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['products', currentPage],
        queryFn: () => fetchAllProducts(currentPage),
    })

    const totalCount = useMemo(() => {
        if (data && typeof data === 'object') {
            const { total } = data;
            return total;
        }
    }, [data]);

    const maxPageCount: number = useMemo(() => {
        if (totalCount) {
            const totalPage = Math.ceil(totalCount / 10);
            return totalPage;
        } return 0;
    }, [totalCount])

    useEffect(() => {
        const nextPage = currentPage + 1;
        if (maxPageCount >= nextPage) {
            queryClient.prefetchQuery({
                queryKey: ['products', nextPage],
                queryFn: () => fetchAllProducts(nextPage),
            })
        }
    }, [currentPage]);

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='containers'>
            {
                data.products.map((val: any) => {
                    return (
                        <div className='items' style={ selectedProduct === val.id ? { background: 'lightblue', color: 'red' } : {}} key={val.id} onClick={() => setSelectedProduct(val.id)}>
                            <p>{val.title}</p>
                        </div>
                    )
                })
            }
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button disabled={currentPage <= 1} onClick={() => setCurrentPage((prev) => prev - 1)}>PrevPage</button>
                <p>Page: {currentPage}</p>
                <button  disabled={currentPage >= maxPageCount} onClick={() => setCurrentPage((prev) => prev + 1)}>NextPage</button>
            </div>
            <hr />
            {
                selectedProduct ? <Product selectedProduct={selectedProduct} /> : null
            }
        </div>
    )
}

export default Tanstack;