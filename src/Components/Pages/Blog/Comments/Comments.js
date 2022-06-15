import * as React from 'react';
import { Box, Typography, TextareaAutosize, Button, makeStyles } from "@mui/material";
import { useState, useEffect } from 'react';
import { newComment, getComments } from '../../../../service/api';
// components

import Comment from './Comment';
import DetailedView from "../DetailedView";

// const useStyles = makeStyles({
//     component: {
//         marginTop: 100,
//         display: 'flex'
//     },
//     image: {
//         width: 50,
//         height: 50,
//         borderRadius: '50%'
//     },
//     textarea: {
//         width: '100%',
//         margin: '0 20px'
//     },
//     button: {
//         height: 40
//     }
// })
const initialValue = {
    name: '',
    blogId: '',
    date: new Date(),
    comments: ''

}


const Comments = ({detailBlog}) => {
    // const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png'
    const [comment, setComment] = useState(initialValue);
    
    // console.log(detailBlog);
// console.log('enter comments')
// console.log("enter")

       const[comments, setComments] = useState([]);
       const[data, setData] = useState();
       const[toggle, setToggle] = useState(true)
       console.log(comments)

    useEffect(() =>{
        const getData = async() => {
        let response = await getComments(detailBlog._id);
    setComments(response);
        }
        getData();
    }, [detailBlog, toggle] )





    const handleChange = (e) => {
        // console.log("enter")
        setComment({
            ...comment,
            name: detailBlog.user,
            blogId: detailBlog._id,
            comments: e.target.value
        })
        setData(e.target.value)
    }

    const postComment = async ()=> {

    await newComment(comment);
    setData('');
    setToggle(prev => !prev);
    }


    return (
        <Box >
            <Box >
                <img  src={url} alt="dp" />
                <TextareaAutosize
                    
                    minRows={4}
                    placeholder='whats on your mind?'
                    onChange={(e) => handleChange(e)}
                value={data}
                />
                <Button
                    variant='contained'
                    color="primary"
                    size="medium"

                  
                onClick={(e)=> postComment(e)}
                >Post</Button>
            </Box>

            <Box>
{
comments && comments.map(
    comment => (
       <Comment comment = {comment} setToggle = {setToggle}/> 
    )
)

}

</Box>

        </Box>
    )
}

export default Comments;