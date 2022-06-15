import { Box, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import {  getBlog, updateBlog } from '../../../service/api';
import { useNavigate } from "react-router-dom";
import { uploadFile} from '../../../service/api';


// const useStyles = makeStyles((theme) => ({
//     container: {
//         padding: '0 100px',
//         [theme.breakpoints.down('sm')]: {
//             padding: 0
//         }
//     },
//     image: {
//         width: '100%',
//         height: '30vh',
//         objectFit: 'cover',
//     },

//     form: {
//         display: 'flex',
//         flexDirection: 'row',
//         marginTop: '10px'

//     },
//     textField: {
//         flex: 1,
//         margin: '0 30px',
//         fontSize: 25
//     },
//     textarea: {
//         width: '100%',
//         marginTop: 50,
//         border: 'none',
//         fontSize: 18,
//         '&:focus-visible': {
//             outline: 'none'

//         }
//     }


// }));


const initialValues = {
    title: '',
    content: '',
    picture: '',
    userName: 'taxandlaw18',
    category: 'All',
    createdDate: new Date()
}


const UpdateView = ({websiteBlog}) => {
    // const classes = useStyles();
    const navigate = useNavigate();
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
   
    const [blog, setBlog] = useState({ initialValues });
    const url = blog.picture ? blog.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";


    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            let data = await getBlog(id);
            setBlog(data);

        }
        fetchData();
    }, [])


    useEffect(() => {
        const getImage = async () => {
            console.log(file);
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
               blog.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();


    }, [file])




    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
// console.log(setBlog)

    }

const updatePost = async() =>{
    await updateBlog(id, blog);
navigate(`/description/${id}`);
}
    return (
        <Box container>
            <img  src={url} alt='img' />
            <FormControl >
            <label htmlFor="fileInput">
                <AddCircleIcon fontSize='large' color='action' />

                </label>

                <input
                    type='file'
                    id='fileInput'
                    style={{ display: 'none' }}

                    onChange={(e) =>
                        // console.log(e.target.files)
                        setFile(e.target.files[0])
                    }
                />




                <InputBase
                    name='title'
                    value={blog.title}
                    placeholder='Title'
                  
                onChange={(e) => handleChange(e)}
                />
                <Button onClick = {()=> updatePost()} variant='contained' color='primary'>

                    Update
                </Button>





            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder='Your Article'
                value={blog.content}
                onChange={(e) => handleChange(e)}
                name= 'content'
            />


        </Box>
    )
}

export default UpdateView;