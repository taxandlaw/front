import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';
import { Typography} from '@mui/material';
// import { flexbox } from '@material-ui/system';
import renderHTML from 'react-render-html';
import {deleteBlog, getBlog} from '../../../service/api';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

//component
// import BlogTitle from './BlogTitle';
import SiteBlogs from '../Home/SiteBlogs';
import Comments from './Comments/Comments';



// const useStyles = makeStyles((theme) => ({
//   container:{
//     padding:'0 100px',
//     [theme.breakpoints.down('sm')]:{
//       padding:0
//     }
//   },
//   image:{
//     width:'100%',
//     height:'30vh',
//     objectFit:'cover',

//     [theme.breakpoints.down('xs')]:{
//       height:'20vh'
//     }
//   },
//   icons: {
//     float: 'right'
// },
// icon: {
//     margin: 5,
//     padding: 5,
//     border: '1px solid #878787',
//     borderRadius: 10
// },

//   heading:{
//     fontSize:32,
//     fontWeight: 400,
//     textAlign:'center',
//     margin:'30px 0 10px 0'
//   },
//   subheading:{
//     color:'#878787',
//     display: 'flex',
//     margin:'20px 0',

//     [theme.breakpoints.down('xs')]:{
//       display:'block',
//       textAlign:'center',
//       margin:'5px 0'
//     }

//   },

//   content:{
    
//     padding:'0 20px 0 20px',

//     [theme.breakpoints.down('xs')]:{
//       display:'block',
//       textAlign:'center',
//       margin:'5px 0'
//     }

//   },
//   link : {
//     textDecoration: 'none',
//     color: 'inherit'
//   }



// })
// )

//websiteBlog

const DetailedView = ({websiteBlog}) => {
//   const classes = useStyles();
 
  const [detailBlog, setDetailBlog] = useState('');
  
  const navigate = useNavigate();
 
  const url = detailBlog.picture? detailBlog.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
 
const {id} = useParams();
 
  useEffect(() =>{
   const fetchData = async() => {

let data = await getBlog(id);

setDetailBlog(data)

   }
   
   fetchData();
    
},
  [id]
);

const deletePost = async () => {    
  await deleteBlog(detailBlog._id);
  navigate(-1)
}
console.log(detailBlog);

return (

  <>


  
  <Box >
          <img src={url} alt='banner' />
          <Box >
                {   
                  <>   
                   
                   {/* <Link to={`/update/${detailBlog._id}`}>  
                      <EditIcon color="primary"/>
                      </Link> */}
                     {/* <Link>  
                     <DeleteIcon  
                     onClick={() => deletePost()} 
                       color="error" />
                       </Link> */}
 
 {/* <Link> */}
 <IconButton aria-label="delete">
        <DeleteIcon  onClick={() => deletePost()} 
                       color="error"/>
      </IconButton>
       {/* </Link> */}


       <Link to={`/update/${detailBlog._id}`}>
       <IconButton aria-label="edit">
        <EditIcon color="primary"/>
      </IconButton>
      </Link>
                       </>
                }
            </Box>
          
          
          
          <Typography >{renderHTML(detailBlog && detailBlog.title)}</Typography>

<Box >
   <Link  to= {`/?author=${detailBlog.author}`} >
  <Typography >Author: <span  style={{fontWeight:600}}>{detailBlog.author}</span></Typography>
  </Link>
 
  <Typography style ={{marginLeft:'Auto'}}> {detailBlog.createdAt}</Typography> 

</Box>


<Typography >{renderHTML(detailBlog && detailBlog.content)}</Typography>

<Comments detailBlog = {detailBlog} />


        </Box>



        </>
        
        )
    }
 
    
   
  
    export default DetailedView;
 
  
  
  
  