import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import List from "./List";
import {  Routes, Route, Link } from 'react-router-dom';
import CreateBlog from "./CreateBlog";
import DarkModeSwitch from "./DarkModeSwitch";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      //default theme
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    
        <CreateBlog/>
        <List/>

        {/* <Home/> */}
     
   
      </ThemeProvider>
    </div>
  );
}

export default App;
