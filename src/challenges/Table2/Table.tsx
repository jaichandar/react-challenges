import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import LimitSelector from './LimitSelector';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import Pagination from './Pagination';
import './table.css';

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState({ sortType: '', sortOrder: 'asc' });
    const [total, setTotal] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const dataRef = useRef([]);

    const fetchData = (limit = 10) => {
        const skip = (selectedPage - 1) * limit;
        return fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, { method: 'GET' }).then((res) => res.json());
    }

    useEffect(() => {
        setLoading(true);
        fetchData(limit).then((res) => {
            const { products, total } = res;
            setTotal(total)
            setData(products);
            dataRef.current = products;
        }).catch((err) => {
            toast.error(err.message || 'Something Went Wrong');
        }).finally(() => {
            setLoading(false);
        })
    }, [limit, selectedPage]);

    useEffect(() => {
        let _data = [...data];
        if (sortBy.sortType === 'title') {
            _data = _data.sort((a: any, b: any) => {
                if (sortBy.sortOrder === 'asc') {
                    return a.title.localeCompare(b.title)
                } else {
                    return b.title.localeCompare(a.title);
                }
            })
        } else if (sortBy.sortType === 'category') {
            _data = _data.sort((a: any, b: any) => {
                if (sortBy.sortOrder === 'asc') {
                    return a.category.localeCompare(b.category);
                } else {
                    return b.category.localeCompare(a.category);
                }
            })
        } else if (sortBy.sortType === 'price') {
            _data = _data.sort((a: any, b: any) => {
                if (sortBy.sortOrder === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            })
        } else {
            _data = _data.sort((a: any, b: any) => {
                if (sortBy.sortOrder === 'asc') {
                    return a.rating - b.rating;
                } else {
                    return b.rating - a.rating;
                }
            })
        }
        setData(_data);
    }, [sortBy]);

    const handleSort = (type: string) => {
        setSortBy((prev) => ({
            ...prev,
            sortType: type,
            sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc'
        }))
    };

    const handleSearch = (value: string) => {
        const filteredValue = dataRef.current.filter((val: any) => val.title.toLowerCase().includes(value.toLowerCase()));
        setData(filteredValue);
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-between p-2'>
                <p className='mb-0'>Table</p>
                <input
                    placeholder='Search Products'
                    className='input'
                    onChange={(e) => {
                        handleSearch(e.target.value)
                        setSearch(e.target.value);
                    }}
                    value={search}
                />
            </div>
            <div>
                {loading ? <p>Loading</p> : (
                    <table>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th onClick={() => handleSort('title')} style={sortBy.sortType === 'title' ? { display: 'flex' } : {}}>
                                    <p className='mb-0'>Title</p>
                                    {
                                        sortBy.sortType === 'title' ? (
                                            <div>
                                                {sortBy.sortOrder === 'asc' ? <FaCaretDown /> : <FaCaretUp />}
                                            </div>
                                        ) : null
                                    }
                                </th>
                                <th onClick={() => handleSort('category')} style={sortBy.sortType === 'category' ? { display: 'flex' } : {}}>
                                    <p className='mb-0'>Category</p>
                                    {
                                        sortBy.sortType === 'category' ? (
                                            <div>
                                                {sortBy.sortOrder === 'asc' ? <FaCaretDown /> : <FaCaretUp />}
                                            </div>
                                        ) : null
                                    }</th>
                                <th onClick={() => handleSort('price')} style={sortBy.sortType === 'price' ? { display: 'flex' } : {}}>
                                    <p className='mb-0'>Price</p>
                                    {
                                        sortBy.sortType === 'price' ? (
                                            <div>
                                                {sortBy.sortOrder === 'asc' ? <FaCaretDown /> : <FaCaretUp />}
                                            </div>
                                        ) : null
                                    }
                                </th>
                                <th onClick={() => handleSort('rating')} style={sortBy.sortType === 'rating' ? { display: 'flex' } : {}}>
                                    <p className='mb-0'>Rating</p>
                                    {
                                        sortBy.sortType === 'rating' ? (
                                            <div>
                                                {sortBy.sortOrder === 'asc' ? <FaCaretDown /> : <FaCaretUp />}
                                            </div>
                                        ) : null
                                    }

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length ? data.map((val: any) => {
                                    return (
                                        <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.title}</td>
                                            <td>{val.category}</td>
                                            <td>{val.price}</td>
                                            <td>{val.rating}</td>
                                        </tr>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>

                )}
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <LimitSelector
                    limit={limit}
                    setLimit={setLimit}
                />
                <Pagination
                    total={total}
                    limit={limit}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    )
}

export default Table;