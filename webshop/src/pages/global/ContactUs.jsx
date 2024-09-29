import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jnoj43x', 'template_ya64n65', form.current, {
        publicKey: '-l6gsiUcmzyJzeArT',
      }
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} >
      <label>Name</label><br />
      <input type="text" name="user_name" /><br />
      <label>Email</label><br />
      <input type="email" name="user_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" /><br />
    </form>
  )
}



// function ContactUs() {
//   return (
//     <div>ContactUs</div>
//   )
// }

export default ContactUs