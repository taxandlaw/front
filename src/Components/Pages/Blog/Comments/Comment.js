import * as React from 'react';
import { Typography, Box} from "@mui/material";
// import { Delete } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteComment } from '../../../../service/api';
// const useStyles = makeStyles({
//     component: {
//         marginTop: 30,
//         background: '#F5F5F5',
//         padding: 10
//     },

//     container: {
//         display: 'flex',
//         marginBottom: 5
//     },

//     name: {
//         fontSize: 18,
//         fontWeight: 600,
//         marginRight: 20


//     },
//     date: {
//         fontSize: 14,
//         color: '#878787'
//     },

//     delete: {
//         marginLeft: 'auto'
//     }

// });

const Comment = ({ comment, setToggle }) => {

    // const classes = useStyles();

    const removeComment = async() => {
        await deleteComment(comment._id);
        setToggle(prev => !prev)
    }

    return (
        <Box >
            <Box >
                <Typography >
                    {comment.name}
                </Typography>
                <Typography >
                    {comment.date}
                </Typography>

                {/* <IconButton>
                <DeleteIcon onClick={() => removeComment()} />

                </IconButton> */}
            </Box>

            <Typography>
                {comment.comments}
            </Typography>


        </Box>
    )
}
export default Comment 