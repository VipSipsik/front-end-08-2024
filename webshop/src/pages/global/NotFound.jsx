import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <h3>404</h3>
      <h1>{t('page-not-found')}</h1>
      <Link to=" ">
        <button className="btn"> {t("Homepage")}</button>
      </Link>

    </div>
  )
}

export default NotFound