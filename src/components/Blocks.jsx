import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Iceberg, Logo } from './Art'
import { categories, courses, emailAddr, faqs, img, phone, phoneHref, teacherRole, teachers } from '../data'
import { useLang } from '../i18n'

export function Teachers({ cat, title }) {
  const { t, L } = useLang()
  const list = cat ? teachers.filter((p) => p.cat === cat).concat(teachers.filter((p) => p.cat !== cat)).slice(0, 3) : teachers
  const icon = Object.fromEntries(categories.map((c) => [c.id, c.icon]))
  return (
    <section className="section" id="ustozlar">
      <div className="container">
        <h2 className="title">{title || t('teachers')}</h2>
        <div className="teachers">
          {list.map((p) => (
            <Link key={p.name} to={`/kurslar?cat=${p.cat}`} className="teacher">
              <img src={img(p.photo, 440, 440)} alt={p.name} loading="lazy" />
              <h3>{p.name}</h3>
              <p><Icon name={icon[p.cat]} /> {L(teacherRole[p.cat])}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const { t, L } = useLang()
  const [open, setOpen] = useState(-1)
  return (
    <section className="section" id="savollar">
      <div className="container">
        <h2 className="title">{t('faq')}</h2>
        <div className="faq">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{L(f.q)}</span> <i><Icon name="plus" /></i>
              </button>
              <div className="faq-body"><p>{L(f.a)}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** "We'll help you choose" form. Stores requests on this device (there is no backend). */
export function ContactForm({ course }) {
  const { t } = useLang()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (String(data.phone).replace(/\D/g, '').length < 9) return setError(t('phoneError'))
    try {
      const list = JSON.parse(localStorage.getItem('farobiy-requests') || '[]')
      list.push({ ...data, date: new Date().toISOString() })
      localStorage.setItem('farobiy-requests', JSON.stringify(list))
    } catch { /* storage unavailable */ }
    setError('')
    setSent(true)
    e.target.reset()
  }
  return (
    <section className="section" id="ariza">
      <div className="container">
        <div className="contact">
          <div className="contact-text">
            <h2>{t('formTitle')}</h2>
            <p>{t('formText')}</p>
            <Iceberg className="iceberg" />
          </div>
          {sent ? (
            <div className="contact-done"><Icon name="check" /><p>{t('sent')}</p><button type="button" className="btn btn-soft" onClick={() => setSent(false)}>OK</button></div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <input name="name" required placeholder={t('name')} aria-label={t('name')} autoComplete="name" />
              <div className="row2">
                <input name="phone" type="tel" required placeholder={t('phone')} aria-label={t('phone')} autoComplete="tel" defaultValue="+998 " />
                <input name="email" type="email" placeholder={t('email')} aria-label={t('email')} autoComplete="email" />
              </div>
              <select name="course" aria-label={t('course')} defaultValue={course || ''}>
                <option value="">{t('selectCourse')}</option>
                {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
              </select>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn-primary send">{t('send')}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  const socials = [['Facebook', 'https://facebook.com'], ['Twitter', 'https://twitter.com'], ['Telegram', 'https://t.me'], ['Instagram', 'https://instagram.com']]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Farobiy IT Academy"><Logo /></Link>
            <p>{t('footerText')}</p>
          </div>
          <div><h4>{t('address')}</h4><p>{t('addressText')}</p></div>
          <div><h4>{t('help')}</h4><a href={phoneHref}>{phone}</a></div>
          <div><h4>{t('mail')}</h4><a href={`mailto:${emailAddr}`}>{emailAddr}</a></div>
        </div>
        <div className="socials">
          {socials.map(([n, href]) => <a key={n} href={href} target="_blank" rel="noreferrer">{n}</a>)}
        </div>
        <p className="copy">© {new Date().getFullYear()} by Fido Studio. {t('rights')}</p>
      </div>
    </footer>
  )
}
