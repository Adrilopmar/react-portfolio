import { useState } from "react";
import { handleSendEmail } from "../controller/config.contactForm";

export function ContactForm({handleEmailSent}) {
  
  const [name,setName]= useState('')
  const [lastName,setLastName]= useState('')
  const [email,setEmail]= useState('')
  const [message,setMessage]= useState('')

  const handleName = (e)=> setName(e.target.value)  
  const handleLastName = (e)=> setLastName(e.target.value)  
  const handleEmail = (e)=> setEmail(e.target.value)  
  const handleMessage = (e)=> setMessage(e.target.value)  

  const sendEmail = (e) => {
    e.preventDefault();
    const client = {
      name:name +' ' + lastName,
      email: email,
      message:message
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
      <form id="contact" className="w-full max-w-lg mx-auto my-12" onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Edena"
              onChange={handleName}
            />
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
              onChange={handleLastName}
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
              type="email"
              onChange={handleEmail}
            />
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
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
              onChange={handleMessage}
            ></textarea>
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
