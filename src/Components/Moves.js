import * as React from 'react'
import {
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
///components
import Home from "./Pages/Home/Home";
import Acts from "./Pages/Acts/Acts";
import DetailedView from "./Pages/Blog/DetailedView"
import CreateView from "./Pages/Blog/CreateView"
import UpdateView from './Pages/Blog/UpdateView';

const Moves = () => {
    return (
        <>
            <Routes>

                <Route exact path ='/' element = {<Home/>}/>
                <Route exact path ='/description/:id' element = {<DetailedView/>}/>
                <Route exact path ='/acts' element = {<Acts/>}/>
                <Route exact path='/create' element={<CreateView/>} /> 
                <Route exact path='/update/:id' element={<UpdateView/>} /> 




                {/* <Route exact path='/' render={() => {
                    return (
                        <>
                       
                            <Home />
                           
                            
                        </>
                    )
                }}>

                </Route> */}






            </Routes> 

           
        
        </>
    )
}

export default Moves;
