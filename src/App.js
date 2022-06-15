import React from 'react';
import Appbar from "./Components/Pages/Appbar"
import { BrowserRouter as Router } from "react-router-dom";

// import {  createTheme, ThemeProvider} from '@mui/material/styles';
// import { makeStyles } from '@mui/material/styles';
// import Routes from "./Components/Routes"
// import { Box } from '@mui/material'
import Box from '@mui/material/Box';
import Moves from './Components/Moves';



function App() {

// const classes = useStyles();

  return (
    <>

<Router>
     <Appbar/> 
     
     <Box 
    style={{ marginTop: 64 }}
     >
            
            <Moves />
            
          </Box>
    
          </Router>    
    </>
  );
}

export default App;
