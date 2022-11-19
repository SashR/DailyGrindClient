import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PersistentDrawerLeft from './Components/Layout/Navigation';

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
        <PersistentDrawerLeft toggleTheme={toggleTheme} />

          <Button variant="contained" onClick={toggleTheme}>Contained</Button>
        <main>This app is using the dark mode</main>
      </ThemeProvider>
    </div>

  );
}

export default App;
