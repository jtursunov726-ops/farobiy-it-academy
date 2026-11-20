import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DeskArt, Icon } from '../components/Art'
import { ContactForm, Teachers } from '../components/Blocks'
import { categoryById, courseById, curriculum, img, palette, professions } from '../data'
import { useLang } from '../i18n'
import NotFound from './NotFound'

export default function Course() {
  const { id } = useParams()
  const { t, L } = useLang()
  const course = courseById(id)
  useEffect(() => { if (course) document.title = `${course.title} — Farobiy IT Academy` }, [course])
  if (!course) return <NotFound />

  const cat = categoryById(course.cat)
  const prof = professions[course.cat]
  const p = palette[course.color]
  const enroll = () => document.getElementById('ariza')?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <>
      <div className="container crumbs">
        <Link to="/">{t('home')}</Link> / <Link to={`/kurslar?cat=${cat.id}`}>{L(cat.name)}</Link> / <span>{course.title}</span>
      </div>
      <section className="container">
        <div className="course-hero" style={{ background: p.bg }}>
          <div>
            <p className="course-dir">{course.dirName}</p>
            <h1>{course.title}</h1>
            <p>{L(course.desc)}</p>
            <button type="button" className="btn btn-white" onClick={enroll}>{t('enroll')} <Icon name="arrow" /></button>
          </div>
          <DeskArt accent={p.accent} variant={course.art} className="course-hero-art" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title"><span className="circled">{t('profession')}</span></h2>
          <div className="profession">
            <div className="profession-left">
              <p>{L(prof.text)}</p>
              <img src={img(prof.photos[0], 900)} alt="" loading="lazy" />
            </div>
            <img src={img(prof.photos[1], 700, 900)} alt="" loading="lazy" className="profession-tall" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">{t('learn')}</h2>
          <div className="learn">
            {curriculum[course.cat].map((m, i) => (
              <div key={i} className="learn-card">
                <h3>{L(m.t)}</h3>
                <p>{L(m.d)}</p>
                <span className="num">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Teachers cat={course.cat} />
      <ContactForm course={course.title} />
    </>
  )
}
