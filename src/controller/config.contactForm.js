import { sendEmail } from "../services/config.contactForm"

const regexMail = new RegExp(`([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])`)

const handleSendEmail =(email)=>{
    return sendEmail(email)
}

export{
    handleSendEmail,
    regexMail
}