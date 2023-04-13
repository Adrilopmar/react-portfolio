import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const sendEmail = async (email) =>{
    const response = await  baseURL.post("/mail/new",{
        name: email.name,
        email:email.email,
        message: email.message
    })
    return response.data
}


export { sendEmail }