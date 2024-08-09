
import React from 'react'
import './Contact.css'

function Contact() {
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

  return (
    <>
    <div>
      
      </div>
    <div className='contact'>
      <div className='contact-col'>
      <h3> Want to know more? Want help with our projects?</h3>
            <p>Please get in touch! We’d love to hear from you!  </p>
      
      <form onSubmit={onSubmit}>

        <label>Name</label>
        <input type="text" name="name" placeholder='Enter your name' required/>
        <label>Email</label>
        <input type="email" name="email" placeholder='Enter your email 'required/>
        <label>Message</label>
        <textarea name="message" placeholder='Enter your message' required></textarea>

        <button className='btn btn-dark' type="submit">Submit Form</button>

      </form>
      <span>{result}</span>
      </div>

    </div>
    </>
  );
}

export default Contact;
