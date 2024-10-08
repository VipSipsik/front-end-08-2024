import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link} to="/admin/maintain-shops" variant="primary">{t("Maintain shops")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-categories" variant="secondary">{t("Maintain categories")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-products" variant="info">{t("Maintain products")}</Button>{' '}
      <Button as={Link} to="/admin/add-product" variant="success">{t("Add new product")}</Button>{' '}
      <Button as={Link} to="/supplier">Supplier</Button>{' '}
    </div>
  )
}

export default AdminHome