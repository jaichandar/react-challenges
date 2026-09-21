import { useState, useEffect, useMemo, useRef } from 'react';
import SideBar from './Sidebar';
import { Products } from './Products';
import { toast } from 'react-toastify';
import  type { Product } from './types';
import { fetchApi } from './api';
import './products.css';

const ProductsFilters = () => {
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [data, setData] = useState<Product[]>([]);
    const dataRef = useRef<Product[]>([]);

    const categories = useMemo(() => {
        if (data.length) {
            return [...new Set(data.map((val: any) => val.category))];
        } else return [];
    }, [data]);

    useEffect(() => {
        fetchApi().then((val) => {
            const { total } = val;
            fetchApi(total).then((res) => { 
                const { products } = res;
                setData(products);
                dataRef.current = products;
            })
        }).catch((err) => {
            toast.error(err.message || 'Something Went Wrong');
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        if (!selectedCategory) {
            setData(dataRef.current);
        } else {
            const filteredItems = dataRef.current.filter((val) => val.category === selectedCategory);
            setData(filteredItems);
        }
    }, [selectedCategory]);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='container'>
            <div className='sidebar-wrapper'>
                <SideBar 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            <div className='items-wrapper'>
                {
                    data.map((val) => {
                        return (
                            <Products data={val} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsFilters;