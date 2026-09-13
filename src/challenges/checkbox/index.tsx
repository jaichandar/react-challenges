import { useState } from 'react';
import './checkbox.css';

const CheckBoxList = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: false },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: false },
    ]);

    const handleOnChange = (id: number) => {
        const _checkboxes = [...checkboxes].map((val) => {
            if (val.id === id) {
                return {
                    ...val,
                    checked: !val.checked,
                }
            } else return val;
        });
        setCheckboxes(_checkboxes);
    }

    const handleAllSelect = () => {
        const clone = [...checkboxes].map((val) => ({ ...val, checked: true }));
        setCheckboxes(clone);
    }

    return (
        <div className='container'>
            <p className='header'>Checkbox List</p>
            {
                checkboxes.map((checkbox, index) => {
                    return (
                        <div key={checkbox.id}>
                            <input
                                type="checkbox"
                                checked={checkbox.checked}
                                onChange={() => handleOnChange(checkbox.id)}
                                name={checkbox.label}
                            />
                            <label>{checkbox.label}</label>
                        </div>
                    )
                })
            }
            <button onClick={handleAllSelect}>Select All</button>
        </div>
    )
}

export default CheckBoxList;