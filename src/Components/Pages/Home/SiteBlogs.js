import * as React from 'react';
import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';
import { Grid, Box } from '@mui/material';

//components
import SiteBlog from './SiteBlog'
import { getAllBlogs } from '../../../service/api';
import DetailedView from '../Blog/DetailedView';


const SiteBlogs = ({websiteBlog}) => {
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
            {
                blogs.length ?blogs.map((blog) => (
                    <Grid item lg={3} sm={4} xs={12} 
                    // key= {blog._id}
                    sx={{
                        margin: 2
                    }}
                    
                    
                    >




                        <Link to={`/description/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                            <SiteBlog blog={blog} />
                        </Link>

                        {/* <DetailedView websiteBlog={websiteBlog}/> */}
                    </Grid>
                  )  )
                
                : <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
                    No data is available for selected category
                </Box>
            }

        </>

    )
}
export default SiteBlogs;
