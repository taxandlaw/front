import * as React from 'react'
import { Button, Table, TableHead, TableRow, TableBody, TableCell} from '@mui/material'
import { categories } from '../../Constants/Data'
import {Link, useLocation} from 'react-router-dom';

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




const Category = ({match}) => {
    // const classes = useStyle();
    const location = useLocation();
   
    let params = new URLSearchParams(location.search);
   
   
    return (
        <>
        {/* <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" >Create Blog</Button>
            </Link> */}



            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                            All
                            </Link>
                                                       
                            </TableCell>
                           
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}`} style={{ textDecoration: 'none' }}>
                                    {category}
                                    </Link>
                                    </TableCell>
                            </TableRow>


                        )
                        )
                    }

                </TableBody>




            </Table>

        </>
    )
}

export default Category
