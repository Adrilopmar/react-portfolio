import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getProjects = async()=>{
  try{
    const response = await baseURL.get("/projects")
    console.log(response.data);
    return response.data   
  }catch(err){
  console.error(err);
  }
}


export {getProjects}