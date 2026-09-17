import type { productProps } from './types';
import './products.css';

export const Products = ({ data }: productProps) => {
    return (
        <div className='item'>
            <p>{data.title}</p>
            <p>{data.price}</p>
        </div>
    )
}