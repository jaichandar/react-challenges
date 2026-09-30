import { useMemo } from 'react';
import './table.css';

type paginationProps = {
    total: number;
    limit: number;
    selectedPage: number;
    setSelectedPage: (page: any) => void;
}

const Pagination = (props: paginationProps) => {
    const { total, limit, selectedPage, setSelectedPage } = props;
    const totalPages = Math.ceil(total / limit);

    const _pages = useMemo(() => {
        const windowSize = 5;
        let start = selectedPage;
        let end = (selectedPage + windowSize) - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - windowSize + 1);
        }

        let result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        return result;

    }, [selectedPage, totalPages]);

    const handlePaginate = (page: number) => {
        setSelectedPage(page);
    }

    const handlePageChange = (type: string) => {
    if (type === 'increment') {
        setSelectedPage((prev: number) => {
            if (prev >= totalPages) return prev;

            return prev + 1;
        });
    } else {
        setSelectedPage((prev: number) => {
            if (prev <= 1) return prev;

            return prev - 1;
        });
    }
};

    return (
        <div>
            <button className='btn' onClick={() => handlePageChange('decrement')}>{'<'}</button>
            {
                _pages.map((val) => (
                    <button 
                        key={val} 
                        className={`btn`}
                        style={ selectedPage === val ? { background: '#000', color: '#fff' } : {}}
                        onClick={() => handlePaginate(val)}
                    >
                        {val}
                    </button>
                ))
            }
            <button className='btn' onClick={() => handlePageChange('increment')}>{'>'}</button>
        </div>
    )
}

export default Pagination;
