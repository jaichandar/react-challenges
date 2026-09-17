import './products.css';
import { useMemo } from 'react';
import Select from 'react-select';
import type { sidebarProps } from './types';

const SideBar = ({ categories, setSelectedCategory }: sidebarProps) => {

    const options = useMemo(() => {
        if (categories.length) {
            return categories.map((val) => ({ value: val, label: val }));
        }
    }, [categories]);

    return (
        <div>
            <div className='input-wrapper'>
                <p>Categories</p>
                <Select 
                    options={options}
                    onChange={(e) => setSelectedCategory(e?.value ?? '')}
                    isClearable={true}
                />
            </div>
        </div>
    )
}

export default SideBar;