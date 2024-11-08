import { createContext, useState } from 'react';
import ThemeSelector from './ThemeSelector';
import ThemedComponent from './ThemedComponent';

// Create the context with a default value
const ThemeContext = createContext('red');

export default function ThemeApp() {
    // Set up state for theme
    const [Theme, setTheme] = useState('red');

    return (
        <>
            {/* Provide the theme and the setter function to the context */}
            <ThemeContext.Provider value={{ Theme, setTheme }}>
                <ThemeSelector />
                <ThemedComponent />
            </ThemeContext.Provider>
        </>
    );
}

export { ThemeContext };
