import { useTheme } from './useTheme';

export const Theme = () => {    
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <p>{theme}</p>
            <button onClick={() => toggleTheme()}>Change Theme</button>
        </div>
    )
}

