import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:8088/api/v1",
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