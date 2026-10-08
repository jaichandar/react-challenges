import './index.css';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

const Loader = () => {
    return (
        <div className="parent">
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
        </div>
    )
}

export default Loader;