import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Swoosh } from '../components/Art'
import { ContactForm, Faq, Teachers } from '../components/Blocks'
import { aboutCards, categories, heroSlides, img, photos } from '../data'
import { useLang } from '../i18n'

function Hero() {
  const { t, L } = useLang()
  const [i, setI] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 6000)
    return () => clearInterval(timer)
  }, [i])
  const s = heroSlides[i]
  return (
    <section className="container hero-wrap">
      <div className="hero">
        <div className="hero-text" key={`t${i}`}>
          <p className="badge">{t('heroBadge')} <Icon name="star" filled /></p>
          <h1>{L(s.before)} <span className="mark">{L(s.mark)}<Swoosh /></span> {L(s.after)}</h1>
          <Link to="/kurslar" className="btn btn-primary">{t('chooseCourses')} <Icon name="arrow" /></Link>
        </div>
        <div className="hero-photo">
          {heroSlides.map((h, k) => <img key={h.photo} src={img(h.photo, 1000)} alt="" className={k === i ? 'on' : ''} />)}
        </div>
      </div>
      <div className="dots">
        {heroSlides.map((h, k) => (
          <button key={h.photo} type="button" className={k === i ? 'active' : ''} onClick={() => setI(k)} aria-label={`${k + 1}`}><span>0{k + 1}</span></button>
        ))}
      </div>
    </section>
  )
}

function CourseTile({ cat, className }) {
  const { t, L } = useLang()
  return (
    <Link to={`/kurslar?cat=${cat.id}`} className={`tile ${className}`}>
      <img src={img(cat.photo, 900)} alt="" loading="lazy" />
      <div className="tile-body">
        <h3>{L(cat.homeName || cat.name)}</h3>
        <span className="btn btn-primary sm">{t('more')} <Icon name="arrow" /></span>
      </div>
    </Link>
  )
}

function Courses() {
  const { t } = useLang()
  const [prog, design, marketing, logistics, video] = categories
  return (
    <section className="section" id="kurslar">
      <div className="container">
        <h2 className="title">{t('navCourses')}</h2>
        <div className="tiles">
          <div className="tiles-left">
            <div className="tiles-row a"><CourseTile cat={prog} /><CourseTile cat={design} /></div>
            <div className="tiles-row b"><CourseTile cat={logistics} /><CourseTile cat={video} /></div>
          </div>
          <div className="tiles-right">
            <CourseTile cat={marketing} className="tall" />
            <Link to="/kurslar" className="tile soon">
              <h3>{t('soon')}</h3>
              <div className="ribbon"><span>{Array.from({ length: 6 }, () => t('soonShort')).join('   ')}</span></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t, L } = useLang()
  return (
    <section className="section" id="biz-haqimizda">
      <div className="container">
        <h2 className="title">{t('about')}</h2>
        <div className="about">
          <div className="about-col">
            <div className="about-card sand"><Icon name="like" /><p>{L(aboutCards[0])}</p></div>
            <img src={img(photos.aboutCode, 700)} alt="" loading="lazy" className="about-img code" />
          </div>
          <div className="about-col">
            <img src={img(photos.aboutTeam, 1000)} alt="" loading="lazy" className="about-img team" />
            <div className="about-card lilac"><Icon name="people" /><p>{L(aboutCards[1])}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => { document.title = 'Farobiy IT Academy' }, [])
  return (
    <>
      <Hero />
      <Courses />
      <Teachers />
      <About />
      <Faq />
      <ContactForm />
    </>
  )
}
