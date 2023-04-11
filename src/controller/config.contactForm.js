import { sendEmail } from "../services/config.contactForm"

const handleSendEmail =(email)=>{
    return sendEmail(email)
}

export{
    handleSendEmail
}