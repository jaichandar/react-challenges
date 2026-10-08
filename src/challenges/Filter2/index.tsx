import { useEffect, useState, useRef, useMemo } from "react";
import utils from './utils';
import { toast } from "react-toastify";
import Product from "./Product";
import './index.css';

type filters = {
    categories: string[];
    range: string;
}

const Filter = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);
    const [filters, setFilters] = useState<filters>({
        categories: [],
        range: '0',
    })
    const dataRef = useRef([]);

    const getCategories = (data: any[]): string[] => {
        const catagory = [...new Set(data.map((val) => val.category))];
        return catagory
    }

    const maxProductPrice = (data: any[]): number => {
        const productPrice = Math.max(...data.map((val) => val.price));
        return productPrice;
    }

    const handleSelect = (category: string) => {
        const dataSet = JSON.parse(JSON.stringify(filters));
        if (!dataSet.categories.length) {
            dataSet.categories.push(category);
            setFilters(dataSet);
        } else {
            const checkAlreadyExist = dataSet.categories.find((val: any) => val === category);
            if (checkAlreadyExist) {
                dataSet.categories = dataSet.categories.filter((val: any) => val !== category);
            } else {
                dataSet.categories.push(category);
            }
            setFilters(dataSet);
        }
    }

    useEffect(() => {
        setLoading(true)
        utils.fetchData().then((val) => {
            const { products } = val;
            const categories = getCategories(products);
            const maxPrice = maxProductPrice(products);
            setPriceRange(maxPrice);
            setData(products);
            setCategories(categories);
            setFilters((prev) => ({ ...prev, range: String(maxPrice) }))
            dataRef.current = products;
        }).catch((err) => {
            toast.error(err.message || "Something went wrong");
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        if (!dataRef.current.length) return;

        let filteredProducts = dataRef.current;

        if (filters.categories.length) {
            filteredProducts = filteredProducts.filter((product: any) =>
                filters.categories.includes(product.category)
            );
        }
        if (Number(filters.range) > 0) {
            filteredProducts = filteredProducts.filter((product: any) => product.price <= filters.range);
        }

        setData(filteredProducts);
    }, [filters]);

    return (
        <div className="container border">
            <p>Filter</p>
            {loading ? <p>Loading...</p> : <div className="row">
                <div className="col-2 p-2 filter-wrapper">
                    <div>
                        <p>Categories</p>
                        <div className="row">
                            {
                                categories.map((val) => {
                                    return (
                                        <div key={val} className="col-12 d-flex align-items-center gap-1 category-item">
                                            <input type="checkbox" className="mr-1" value={val} onChange={() => handleSelect(val)} />
                                            {val}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <input
                                type="range"
                                min={'0'}
                                max={priceRange}
                                value={filters.range}
                                onChange={(e) => setFilters((prev) => ({
                                    ...prev,
                                    range: e.target.value,
                                }))}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-10 items-wrapper">
                    <div className="row">
                        {
                            data.map((val: any) => {
                                return (
                                    <div key={val.id} className="col-4 item">
                                        <Product values={val} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Filter;