import { Box, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

import * as React from 'react';
import {Switch, useState, useEffect, useRef } from 'react';

import { Route, useNavigate } from "react-router-dom";
// import ReactQuill from 'react-quill';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
// import ReactScrollableFeed from 'react-scrollable-feed';
import renderHTML from 'react-render-html';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { createBlog, uploadFile} from '../../../service/api';

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


const CreateView = () => {
    // const classes = useStyles();
    // const url = blog.picture ? blog.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const navigate = useNavigate();
    const [blog, setBlog] = useState(initialValues);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const url = blog.picture ? blog.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

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
        console.log(setBlog)

    }

    const saveBlog = async () => {
        let data = await createBlog(blog);
        console.log(data)
        navigate('/');
    }



    return (
        <Box >
            <img src={url}  alt='image' />

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

                <InputBase onChange={(e) => handleChange(e)}
                    placeholder='Title'
                    
                    name='title'

                />
                <Button onClick={() => saveBlog()} variant='contained' color='primary'>

                    Publish
                </Button>





            </FormControl>

            <TextareaAutosize
                onChange={(e) => handleChange(e)}
                minRows={5}
                placeholder='Your Article'
                // className={classes.textarea}
                name='content'
            />

Hello
        </Box>
    )
}

export default CreateView;