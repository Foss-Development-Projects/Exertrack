
import { useEffect, useState } from 'preact/hooks';
import { MaterialUISwitch, ThemeStyle } from '../styled/ThemeButtonStyle';

function ThemeSwitch () {
    const [ darkMode , setDarkMode ] = useState(false)
    useEffect(() => {
      let theme = localStorage.getItem("dark-mode")
      if(theme === "true") {
        setDarkMode(true) 
        ThemeStyle("rgba(0,0,0,0.65)", "rgba(255,255,255,0.85)");
      }
      else {
        setDarkMode(false) 
        ThemeStyle("rgba(255,255,255,0.75)", "rgba(0,0,0,0.65)");
      }
    }, [darkMode])
    const toggleTheme = () => {
      darkMode ? 
      localStorage.setItem("dark-mode", "false") : 
      localStorage.setItem("dark-mode", "true");
      
      setDarkMode(!darkMode)
    }
    return(
        <MaterialUISwitch checked={ darkMode ? false : true } title='Current Theme' onClick={toggleTheme} />
    )
}

export default ThemeSwitch;