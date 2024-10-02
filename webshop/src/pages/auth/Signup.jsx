import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup email:", email, "password:", password);
    toast.success (<div>{t("Registered")}</div>)
  };

  return (
    <div>
      <h2>{t("Signing up")}</h2>
      <form onSubmit={handleSignup}>
        <input
          type='email'
          placeholder={t('Enter email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t("Enter password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t("Enter confirm password")}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">{t("Signup")}</button>
      </form>
      
      <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
    </div>
  )
}

export default Signup