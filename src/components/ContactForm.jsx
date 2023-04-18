import { useRef, useState } from "react";
import { handleSendEmail,regexMail } from "../controller/config.contactForm";

export function ContactForm({handleEmailSent}) {

  const [nameErr,setNameErr] = useState(false)
  const [emailErr,setEmailErr] = useState(false)
  const [messageErr,setMessageErr] = useState(false)

  const nameContainer = useRef(null)
  const lastNameContainer = useRef(null)
  const emailContainer = useRef(null)
  const messageContainer = useRef(null)

  const checkFormInput = (e)=>{
    e.preventDefault()
    let err = 0
    if(!nameContainer.current.value) {
      err++
      setNameErr(true)
    }
    if(!emailContainer.current.value) {
      err++
      setEmailErr(true)
    } else if(!regexMail.test(emailContainer.current.value)) {
      err++
      setEmailErr(true)
    }
    if(messageContainer.current.value.length <50){
      err++
       setMessageErr(true)
      }
    if(err ===0) {
      sendEmail()}
  }

  const sendEmail = () => {
    const client = {
      name:nameContainer.current.value +' ' + lastNameContainer.current.value,
      email: emailContainer.current.value,
      message:messageContainer.current.value
    }
    try{
      const response = handleSendEmail(client)
      if(response) handleEmailSent()
    }catch(err){
      console.error(err)
    }
  };

  return (
    <>
      <form id="contact" className="w-full max-w-lg mx-auto my-12" onSubmit={checkFormInput}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Edena"
              onChange={()=> setNameErr(false)}
              ref={nameContainer}
            />
            {nameErr ? <p className="text-red-500">What's your name?</p> : <></>}
            
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Osaki"
              ref={lastNameContainer}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              onChange={()=> setEmailErr(false)}
              ref={emailContainer}
            />
            {emailErr ? <p className="text-red-500">Insert a valid email please.</p> : <></>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              onChange={()=> setMessageErr(false)}
              ref={messageContainer}
            ></textarea>
            {messageErr ? <p className="text-red-500">Message should be at least 50 characters long.</p> : <></>}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="link-single-project text-white font-bold py-2 px-4 rounded  text-center"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  );
}
