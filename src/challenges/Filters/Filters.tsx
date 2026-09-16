import { useMemo, useState } from 'react';
import './filter.css';

export const Filters = () => {
    const [filterItem, setFilterItem] = useState<string[]>([]);
    
    const animalData = [
        { name: 'Eagle', class: 'Birds' },
        { name: 'Penguin', class: 'Birds' },
        { name: 'Parrot', class: 'Birds' },
        { name: 'Lion', class: 'Mammals' },
        { name: 'Tiger', class: 'Mammals' },
        { name: 'Elephant', class: 'Mammals' },
        { name: 'Cobra', class: 'Reptiles' },
        { name: 'Lizard', class: 'Reptiles' },
        { name: 'Tortoise', class: 'Reptiles' },
        { name: 'Salmon', class: 'Fish' },
        { name: 'Shark', class: 'Fish' },
        { name: 'Trout', class: 'Fish' },
    ];

    const classes = useMemo(() => {
        return Array(...new Set(animalData.map((val) => val.class)));
    }, [])

    const handleSelect = (value: string) => {
        let _filters = [...filterItem];
        const checkAlreadyExist = _filters.includes(value);
        if (checkAlreadyExist) {
            _filters = _filters.filter((val) => val !== value);
        } else {
            _filters.push(value);
        }
        setFilterItem(_filters);
    }

    return (
        <div>
            <div className='container'>
                <div className='filter-wrapper'>
                    {
                        classes.map((val, i) => (
                            <button className={`${filterItem.includes(val) ? 'btn selected' : 'btn' }`} key={i} onClick={() => handleSelect(val)}>{val}</button>
                        ))
                    }
                </div>
            </div>
            <div className='item-wrapper'>
                {
                    animalData.filter((val) => filterItem.includes(val.class)).map((val, i) => {
                        return (
                            <div key={i} className='item'>
                                <p>{val.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}