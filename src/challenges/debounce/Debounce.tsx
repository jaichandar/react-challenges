import { useEffect, useRef, useState } from 'react';
import { useDebounce } from './useDebounce';
import { toast } from 'react-toastify';
import './debounce.css';

const Debounce = () => {
    const [search, setSearch] = useState('');
    const { debouncedValue } = useDebounce(search, 500);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const dataRef = useRef([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const width = inputRef.current?.getBoundingClientRect().width;
    const top = Number(inputRef.current?.getBoundingClientRect().top) + Number(inputRef.current?.getBoundingClientRect().height);

    const fetchData = () => {
        return fetch(`https://dummyjson.com/products?limit=194`, { method: 'GET' }).then((val) => val.json())
    }

    useEffect(() => {
        fetchData().then((val) => {
            const { products } = val;
            const prodTitle = products.map((val: any) => val.title);
            setData(prodTitle);
            dataRef.current = prodTitle;
        }).catch((err) => {
            toast.error(err.message || "Somethings Went Wrong");
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (debouncedValue.length) {
            const filteredData = dataRef.current.filter((val: any) => val.toLowerCase().includes(debouncedValue.toLowerCase()));
            setData(filteredData);
        } else {
            setData(dataRef.current);
        }
    }, [debouncedValue]);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='input-wrapper'>
            <p>Debounce</p>
            <span>Search: </span>
            <input 
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='input'
                onClick={() => setDropDownOpen(true)}
                onBlur={() => setDropDownOpen(false)}
                placeholder='Search...'
            />
            {
                dropDownOpen && 
                <div className='dropdown-wrapper' style={{ width, position: 'fixed', top:top  }}>
                    {
                        data.length ? data.map((val) => {
                            return (
                                <p>{val}</p>
                            )
                        }) : null
                    }
                </div>
            }
        </div>
    )
}

export default Debounce;