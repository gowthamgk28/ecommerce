import React, { useState } from 'react'
import './contact.css'

const Contact = () => {

//     const[user, setUser] =useState(
//         {
//             Name: '', email: '', Subject:'',Message:''
//         }
//     )
//     let values , names
//     const data =(e) =>
//         {
//             values =e.target.value
//             names = e.target.name
//             setUser({...user,[names]: values })
//         }

//         const send = async(e) =>
//             {
//                 const {Name,email,subject,Message} = user
//                 e.preventDefault()
//                 const option ={
//                     method: 'POST',
//                     headers: {
//                         'content-type':'application/json'

//                     },
//                     Body: JSON.stringify({
//                         Name,email,subject,Message
//                     })
//                 }
//                 const send = await fetch(
//                     'https://react-ecommerce-contact-f659a-default-rtdb.firebaseio.com/Message.json' ,option
//                 )

//                 if(send){
//                     alert("message send successfully")
//                 }
//                 else
//                 {
//                     alert("message send fail")
//                 }
//                 }
            
  return (
    <>
      <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>#Contact us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='label'>
                            <h4>Name</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='name'  name='Name'></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>E-mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='email'  name='email' ></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>Subject</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='subject' name='Subject' ></input>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <h4>message</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='message !' name='Message' ></textarea>
                        </div>
                    </div>
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
        </div>    
    </>
  )
}

export default Contact
