import { useState } from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PersistentDrawerLeft from './Components/Layout/Navigation';
import About from './Components/Layout/Pages/About/About';
import Home from './Components/Layout/Pages/Home/Home';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, setTheme] = useState<"dark"|"light">("dark");
  const toggleTheme = () => {
    setTheme((val)=>val==="dark" ? "light" : "dark");
  }

  
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <PersistentDrawerLeft toggleTheme={toggleTheme} currentTheme={theme}>
          <Home />
          {/* <About /> */}
        </PersistentDrawerLeft>
      </ThemeProvider>
    </div>

  );
}

export default App;
