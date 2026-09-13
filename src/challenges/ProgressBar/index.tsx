import { useProgress } from './useProgress';
import './progress.css';

const ProgressBar = () => {
    const { width } = useProgress();

    return (
        <>
            <p className='header'>Progress Bar - {width}</p>
            <div className='container'>
                <div className='progress-bar' style={{ width: `${width}%`, background: 'green' }}>

                </div>
            </div>
        </>
    )
}

export default ProgressBar;