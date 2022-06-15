// import { IdxFeature } from '@okta/okta-auth-js';
import axios from 'axios';
// const url = 'http://localhost:8000';
export const getAllBlogs = async (param) => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_API}/websiteBlogs${param}`);
        // console.log(response.data)
        return response.data;
        // console.log{response.data};
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getBlog = async(id) => {
try{
let response = await axios.get(`${process.env.REACT_APP_API}/websiteBlog/${id}`)
console.log(response.data)
return response.data;
}catch(error){
    console.log('Error while calling getBlog API', error );
}


}






export const createBlog = async (websiteBlog) => {
    try {
        let response = await axios.post(`${process.env.REACT_APP_API}/websiteBlog`, websiteBlog);
        // console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.log('Error while posting API data ', error)
    }
}


export const deleteBlog = async (id) => {
    try {
        let response = await axios.delete(`${process.env.REACT_APP_API}/websiteBlog/${id}`);
        // console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.log('Error while deleting API data ', error)
    }
}





export const updateBlog = async(id, blog)=>{
try{
    await axios.put(`${process.env.REACT_APP_API}/websiteBlog/${id}`, blog)
} catch(error){
    console.log("error while calling update API", error)
}

}

export const uploadFile= async(data) =>
{
try{
    return await axios.post(`${process.env.REACT_APP_API}/file/upload`, data);

}catch(error){
    console.log('error while uploading the file', error);
}
}

export const newComment = async(data) =>{
    try{
return await axios.post(`${process.env.REACT_APP_API}/comment/new`, data);

    }catch(error){
        console.log('error while calling new comment API ', error);
    }
}


export const getComments = async(id) =>{
    try{
let response = await axios.get(`${process.env.REACT_APP_API}/comments/${id}`);
console.log(response.data)
return response.data;
    }catch(error){
        console.log('error while calling getcomments API ', error);
    }
}


export const deleteComment = async(id) =>{
    try{
return await axios.delete(`${process.env.REACT_APP_API}/comment/delete/${id}`);

    }catch(error){
        console.log('error while calling deletecomments API ', error);
    }
}
