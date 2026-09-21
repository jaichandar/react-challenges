import { useState } from 'react';
import { toast } from 'react-toastify';
import './table.css';

const Table = () => {
    const id = [...Array(10).keys()].map((val) => val + 1);
    const [data, setData] = useState(() => {
        return id.map((val) => ({ id: val, title: '', loading: false }));
    })

    const handleLoad = async (id: number) => {
        try {
            const _data = [...data].map((val) => {
                if (val.id === id) {
                    return {
                        ...val,
                        loading: true,
                    }
                } else return val;
            })
            setData(_data);
            const response = await fetchDataById(id);
            const refectoredData = [...data].map((val) => {
                if (val.id === id) {
                    return {
                        ...val,
                        loading: false,
                        title: response?.title ?? ''
                    }
                } else return val;
            })
            setData(refectoredData);
        } catch(err: any) {
            toast.error(err.message || "Internal Server Error");
        }
    }

    const fetchDataById = (id: number) => {
        return fetch(`https://dummyjson.com/products/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((val) => {
                return val;
            }).catch((err) => {
                toast.error(err.message || 'Internal Server Error');
            })
    }

    return (
        <div>
            <p>Table</p>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Title</th>
                        <th>Load</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.title ? val.title : "-"}</td>
                                    <td>
                                        <button onClick={() => handleLoad(val.id)}>
                                            { val.loading ? 'Loading...' : 'Load' }
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;