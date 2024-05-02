import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact '>
        <div className='contact-col'>
            <h3> Curious?  Want to know more?  Want to get involved?  Want help with your project?</h3>
            <p>Please get in touch! We’d love to hear from you  </p>
            <ul>
                <li>greensoul@gmail.com</li>
                <li>12345677</li>

            </ul>
            <div className='contact-col'>
                <form>
                    <label>Your Name </label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Enter your email' required/>
                    <label>Subject</label>
                    <input type='text' name='subject'/>
                    <label>Your Message</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn'>Send</button>
                </form>
                <span>Sending ...</span>

            </div>

        </div>
        </div>
  )
}

export default Contact