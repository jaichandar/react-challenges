import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from './api';

const Product = (props: { selectedProduct: number }) => {
    const { selectedProduct } = props;
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['product', selectedProduct],
        queryFn: () => fetchProductById(selectedProduct),
    });

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div>
            <p>Product-{selectedProduct}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

export default Product;