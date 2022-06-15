import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Grid} from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
// import { getAllBlogs } from '../../../service/api';


// const useStyles = makeStyles({
//     container: {
//         height: 350,
//         margin: 15,
//         borderRadius: 10,
//         border: '1px solid #d3cede',
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         '& > *': {
//             padding: '0 0px 5px 0'

//         }
//     },

//     image: {
//         height: 100,
//         width: '100%',
//         objectFit: 'cover',
//         borderRadius: '10px 10px 0 0'
//     },

//     text:{
//         color:'#878787',
//         fontSize: 12,
//     },

//     title:{
//         fontSize: 18,
//         fontWeight:600,
//         padding: '0 10px 5px 10px', 
//         textAlign: 'center'

//     },

//     desc:{
//         fontSize: 14,
//         wordBreak:'break-word',
//         padding: '0 10px 5px 10px'
//     }

// })

const Img = styled('img')({
    margin: '0px 0px 1px 0px',
    // display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    // borderRadius: '12 0 0 0',
  });



const SiteBlog = ({blog}) => {
    // const classes = useStyles();
    const url = blog.picture ? blog.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
   
   
    const addElipsis =(str, limit)=>{
return str.length > limit ? str.substring(0,limit) + '...' : str;
    } 
    return (<>

 



 








         {/* <Grid
       sx={{
        height: 350,
                margin: '50',
                // maxWidth: 500,
                borderRadius: 2,
                border: '1px solid #d3cede',
                flexGrow:1,
                // display: 'flex',
                // alignItems: 'center',
                // flexDirection: 'column',
                '& > *': {
                    padding: '0 0px 5px 0'

       }}}
        > */}
   <Grid item 
   sx={{
    height: 350,
            margin: 'auto',
            // maxWidth: 500,
            borderRadius: 2,
            border: '1px solid #d3cede',
            // flexGrow:1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            '& > *': {
                padding: '0 0px 5px 0'

   }}}
   
   
   
   >


   <Grid item>
   <ButtonBase 
   sx={{ height: 150,
  width: '100%',
  objectFit: 'cover',
  borderRadius: '10px 10px 0 0', }}>
            <Img alt="complex" src={url} />
          </ButtonBase>

   {/* <img 
   sx={{
    height: 50,
  width: '100%',
  objectFit: 'cover',
  borderRadius: '10px 10px 0 0',
width: 128, height: 128, 
}} 

src={url} alt="wrapper"


/> */}
    
</Grid>

  

     
      
       
             <Typography 
              sx = { {
                color:'#878787',
        fontSize: 12,
            }} 
             
             
             
             >{blog.category}</Typography> 

<Typography 
               sx = { {
                fontSize: 18,
        fontWeight:600,
        padding: '0 10px 5px 10px', 
        textAlign: 'center'
            }} 
             
             
             
             
             >{addElipsis(blog.title, 20)}</Typography>
             
             
             <Typography
              sx = { {
                color:'#878787',
        fontSize: 12,
            }} 
             
             >Author: {blog.author}</Typography>





             
             
             
            
           
            <Typography
            
            sx = { {
                fontSize: 14,
        wordBreak:'break-word',
        padding: '0 10px 5px 10px'
            }} 
            >{addElipsis(blog.content, 80)}</Typography> 
           
       


           </Grid>

        {/* </Grid>  */}
    

        </>
    )
}

export default SiteBlog
