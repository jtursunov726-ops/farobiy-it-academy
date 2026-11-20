import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon, Logo } from './Art'
import { categories, courses, phone, phoneHref } from '../data'
import { languages, useLang } from '../i18n'

function LangSelect() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])
  return (
    <div className="lang" ref={ref}>
      <button type="button" className="lang-btn" aria-label={t('language')} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {languages.find((l) => l.code === lang).label} <Icon name="down" />
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {languages.map((l) => (
            <li key={l.code}>
              <button type="button" role="option" aria-selected={l.code === lang} className={l.code === lang ? 'active' : ''} onClick={() => { setLang(l.code); setOpen(false) }}>
                <b>{l.label}</b> {l.name} {l.code === lang && <Icon name="check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Courses mega menu: category → direction → topics (each topic opens its course page). */
function MegaMenu({ onClose }) {
  const { L, t } = useLang()
  const [catId, setCatId] = useState(categories[0].id)
  const cat = categories.find((c) => c.id === catId)
  const [dirId, setDirId] = useState(cat.directions[0].id)
  const dir = cat.directions.find((d) => d.id === dirId) || cat.directions[0]
  const pickCat = (c) => { setCatId(c.id); setDirId(c.directions[0].id) }
  return (
    <div className="mega" role="menu">
      <div className="mega-col cats">
        {categories.map((c) => (
          <button key={c.id} type="button" className={c.id === catId ? 'active' : ''} onMouseEnter={() => pickCat(c)} onFocus={() => pickCat(c)} onClick={() => pickCat(c)}>
            <Icon name={c.icon} /> <span>{L(c.name)}</span> <Icon name="chevron" className="chev" />
          </button>
        ))}
        <Link to="/kurslar" className="mega-all" onClick={onClose}>{t('allCourses')} <Icon name="arrow" /></Link>
      </div>
      <div className="mega-col dirs">
        {cat.directions.map((d) => (
          <button key={d.id} type="button" className={d.id === dir.id ? 'active' : ''} onMouseEnter={() => setDirId(d.id)} onFocus={() => setDirId(d.id)} onClick={() => setDirId(d.id)}>
            <span>{d.name}</span> <Icon name="chevron" className="chev" />
          </button>
        ))}
      </div>
      <div className="mega-col topics">
        {dir.topics.map((title) => {
          const course = courses.find((c) => c.title === title)
          return <Link key={title} to={`/kurslar/${course.id}`} onClick={onClose}>{title}</Link>
        })}
      </div>
    </div>
  )
}

export default function Header() {
  const { t, L } = useLang()
  const [mega, setMega] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const { pathname, hash } = useLocation()
  const wrap = useRef(null)

  useEffect(() => { setMega(false); setDrawer(false) }, [pathname, hash])
  useEffect(() => {
    if (!mega) return
    const onKey = (e) => e.key === 'Escape' && setMega(false)
    const onDown = (e) => { if (!wrap.current?.contains(e.target)) setMega(false) }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown) }
  }, [mega])
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawer])

  const nav = [
    ['/#kurslar', t('navCourses')],
    ['/#ustozlar', t('navTeachers')],
    ['/#biz-haqimizda', t('navAbout')],
    ['/#savollar', t('navFaq')],
  ]

  return (
    <>
      <header className="header" ref={wrap}>
        <div className="container header-row">
          <Link to="/" className="brand" aria-label="Farobiy IT Academy"><Logo /></Link>
          <button type="button" className={`courses-btn ${mega ? 'open' : ''}`} aria-expanded={mega} onClick={() => setMega((m) => !m)}>
            {t('courses')} <Icon name="book" />
          </button>
          <nav className="nav">
            {nav.map(([to, label], i) => <Link key={to} to={to} className={i < 2 ? 'nav-wide' : 'nav-xl'}>{label}</Link>)}
          </nav>
          <LangSelect />
          <a href={phoneHref} className="phone-pill"><Icon name="phone" /> <span>{phone}</span></a>
          <button type="button" className="burger" aria-label={t('menu')} onClick={() => setDrawer(true)}><Icon name="menu" /></button>
        </div>
        {mega && <div className="container mega-wrap"><MegaMenu onClose={() => setMega(false)} /></div>}
      </header>
      {mega && <div className="mega-backdrop" aria-hidden="true" />}

      {drawer && (
        <div className="drawer-bg" onClick={() => setDrawer(false)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <Logo small />
              <button type="button" aria-label={t('close')} onClick={() => setDrawer(false)}><Icon name="close" /></button>
            </div>
            <p className="drawer-label">{t('courses')}</p>
            {categories.map((c) => (
              <Link key={c.id} to={`/kurslar?cat=${c.id}`} className="drawer-link"><Icon name={c.icon} /> {L(c.name)}</Link>
            ))}
            <hr />
            {nav.map(([to, label]) => <Link key={to} to={to} className="drawer-link">{label}</Link>)}
            <a href={phoneHref} className="btn btn-primary drawer-phone"><Icon name="phone" /> {phone}</a>
          </aside>
        </div>
      )}
    </>
  )
}
