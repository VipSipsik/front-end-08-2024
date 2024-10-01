import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next';


export const ContactUs = () => {
  const { t } = useTranslation();
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
      <label>{t("User name")}</label><br />
      <input type="text" name="user_name" /><br />
      <label>{t("User email")}</label><br />
      <input type="email" name="user_email" /><br />
      <label>{t("Message")}</label><br />
      <textarea name="message" /><br />
      <input type="submit" value={t("Send")} /><br />
    </form>
  )
}



// function ContactUs() {
//   return (
//     <div>ContactUs</div>
//   )
// }

export default ContactUs