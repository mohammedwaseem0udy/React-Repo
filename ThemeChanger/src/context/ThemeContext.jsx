import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();


export function useTheme() {
    return useContext(ThemeContext);
}

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('light');
    
    function changeTheme() {
        setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>{props.children}</ThemeContext.Provider>
    )
}

export default ThemeContextProvider;