import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'> Contact</p>
                <p className='text-gray-300 py-4'> //Submit the form below or send me an email-rupali120900@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
            <input className='bg-[#ccd6f6] my-4 p-2' type='email' placeholder='Email' name='email'/>
             <textarea  className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='message'></textarea>
        </form>
    </div>
  )
}

export default Contact
