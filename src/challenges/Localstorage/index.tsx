import { useLocalStorage } from './useLocalStorage';

const LocalStorage = () => {
    const { value, handleOnChange } = useLocalStorage('name');
    const { value: email, handleOnChange: handleEmailChange } = useLocalStorage('email');
    return (
        <div>
            <p style={{ marginTop: '10px', textAlign: 'center' }}>LocalStorage</p>
            <span>Name: </span>
            <input 
                value={value ?? ''}
                onChange={(e) => handleOnChange(e)}
            />
            <span>Email: </span>
            <input 
                value={email ?? ''}
                onChange={(e) => handleEmailChange(e)}
            />
        </div>
    )
}

export default LocalStorage;