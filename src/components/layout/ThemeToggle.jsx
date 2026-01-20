import { useTheme } from "../../context/ThemeToggle";


function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <button onClick={toggleTheme}>
               {theme === "light" ? "🌙" : "☀️"}        
        </button>
    );
}

export default ThemeToggle;