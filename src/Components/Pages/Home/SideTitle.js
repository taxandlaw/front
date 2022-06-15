import * as React from 'react'
import { Button, Typography, Table, TableHead, TableRow, TableBody, TableCell} from '@mui/material'
// import { categories } from '../../Constants/Data'
import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { categories } from '../../Constants/Data'


import axios from 'axios';
import { Grid, Box } from '@mui/material';

//components
import SiteBlog from './SiteBlog'
import { getAllBlogs } from '../../../service/api';


// const useStyle = makeStyles({
//     table: {
// border: '1px solid rgba(224, 224, 224, 1)'

//     },
//     write: {
//         margin: 20,
//         width: '85%',
//         background: '#6495ED',
//         color: '#fff',
//         textDecoration: 'none'
//     },
//     link : {
//         textDecoration: 'none',
//         color: 'inherit'
//       }
    
// })




const SideTitle = ({match}) => {
    // const classes = useStyle();
    const addElipsis =(str, limit)=>{
        return str.length > limit ? str.substring(0,limit) + '...' : str;
            } 

    const location = useLocation();
    let params = new URLSearchParams(location.search);


    const [blogs, setBlogs] = useState([]);




    const { search } = useLocation();


    useEffect(() => {

        const fetchBlog = async () => {

            let data = await getAllBlogs(search);
            // console.log(data)
            setBlogs(data);
        }
        fetchBlog();
    }, [search])
   
   
    return (
        <>
        {/* <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" >Create Blog</Button>
            </Link> */}



            <Table >
                <TableHead>
                
                       
                    <TableRow>
                    

                        <TableCell>
                        {params}
                                  
                            </TableCell>
                           
                    </TableRow>
 

                </TableHead>
                <TableBody>
                {
                blogs.map((blog) => (
                   
                    // key= {blog._id}
                   
                        <TableRow>
                                <TableCell>
                        <Link to={`/description/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                       {addElipsis(blog.title, 100)}
                        </Link>
                        </TableCell>
                        </TableRow>
           
                  

                    
                  )  )
                
              
            }


                </TableBody>




            </Table>

        </>
    )
}

export default SideTitle
