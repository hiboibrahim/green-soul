import React from 'react'
import './Contact.css'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b8bb0582-ab53-48c5-9717-cd7844fe7920");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    <div className='contact '>
        <div className='contact-col'>
            <h3> Want to know more? Want help with your project?</h3>
            <p>Please get in touch! We’d love to hear from you!  </p>
           
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
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
                <span>{result}</span>

            </div>

        </div>
        </div>
  
}

export default Contact