import * as React from 'react';
import { Grid, Box } from '@mui/material';

//components
import Category from './Category';
import SiteBlogs from './SiteBlogs'
import Banner from './Banner'
// import DetailedView from '../Blog/DetailedView';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import SideTitle from './SideTitle';

// import DetailedView from '../Blog/DetailedView';

// import HomeTitle from './HomeTitle';


const Home = () => {
  return (
  <React.Fragment> 
           
      <Banner />
      <Grid container >
      
        <Grid item lg={1.5} sm={1} xs={12} 
        sx={{border: '1px solid #d3cede'}}  
        
        >
          <Category/>
        </Grid>
  
       
        <Grid container lg={7.5} sm={8} xs={12}
        sx={{
          justifyContent: 'center',
         




        }}
        
        > 
          <SiteBlogs />
        </Grid>
      
      
        <Grid item lg={3} sm={3} xs={12}
        sx={{border: '1px solid #d3cede'}} 
        
        
        >
          <SideTitle />
        </Grid>



      </Grid> 

      
</React.Fragment>

)
}
    
  

export default Home
