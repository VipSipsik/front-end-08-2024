import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success (<div>{t("Logged in")}</div>)
    // Login authentication logic
  };


  return (
    <div>
      <h2>{t("Logging in")}</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder={t("Enter email")}
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
        <button type="submit">{t("Login")}</button>
      </form>

      <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
    </div>
  )
}

export default Login;