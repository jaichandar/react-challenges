import type { accordianData } from './Accordion';
import './accordion.css';

type modifiedAccordianData = accordianData & {
    handleOpen: (id: string) => void;
}

const Component = (props: modifiedAccordianData) => {
    const { id, title, message, open, handleOpen } = props;
    return (
        <div className='accordion-wrapper'>
            <div className='acc-title'>
                <p className='mb-0'>{title}</p>
                <button onClick={() => handleOpen(id)}>Open</button>
            </div>
            {open && <div className='acc-body'>
                <p>{message}</p>
            </div>}
        </div>
    )
}

export default Component;