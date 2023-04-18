import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getProjects = async()=>{
    const response = await baseURL.get("/projects")
    return response.data
}


export {getProjects}