import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Iceberg, Icon } from '../components/Art'
import { useLang } from '../i18n'

export default function NotFound() {
  const { t } = useLang()
  useEffect(() => { document.title = `${t('notFound')} — Farobiy IT Academy` }, [t])
  return (
    <section className="section first">
      <div className="container not-found">
        <Iceberg className="nf-art" />
        <p className="nf-code">404</p>
        <h1>{t('notFound')}</h1>
        <p>{t('notFoundText')}</p>
        <Link to="/" className="btn btn-primary">{t('home')} <Icon name="arrow" /></Link>
      </div>
    </section>
  )
}
