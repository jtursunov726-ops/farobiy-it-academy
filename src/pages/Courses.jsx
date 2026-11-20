import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DeskArt, Icon } from '../components/Art'
import { ContactForm } from '../components/Blocks'
import { categories, courses, palette } from '../data'
import { useLang } from '../i18n'

export function CourseCard({ course }) {
  const p = palette[course.color]
  return (
    <Link to={`/kurslar/${course.id}`} className="course-card" style={{ background: p.bg }}>
      <DeskArt accent={p.accent} variant={course.art} className="course-art" />
      <h3>{course.title}</h3>
    </Link>
  )
}

const PAGE = 9

export default function Courses() {
  const { t, L } = useLang()
  const [params, setParams] = useSearchParams()
  const cat = categories.find((c) => c.id === params.get('cat')) || categories[0]
  const list = courses.filter((c) => c.cat === cat.id)
  const [shown, setShown] = useState(PAGE)
  useEffect(() => { setShown(PAGE) }, [cat.id])
  useEffect(() => { document.title = `${L(cat.name)} — Farobiy IT Academy` }, [cat, L])

  return (
    <>
      <section className="section first">
        <div className="container">
          <div className="cat-tabs" role="tablist">
            {categories.map((c) => (
              <button key={c.id} type="button" role="tab" aria-selected={c.id === cat.id} className={c.id === cat.id ? 'active' : ''} onClick={() => setParams({ cat: c.id })}>
                <Icon name={c.icon} /> {L(c.name)}
              </button>
            ))}
          </div>
          <div className="course-grid">
            {list.slice(0, shown).map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
          {shown < list.length && (
            <div className="center"><button type="button" className="btn btn-soft" onClick={() => setShown((n) => n + PAGE)}>{t('showMore')} ({list.length - shown})</button></div>
          )}
        </div>
      </section>
      <ContactForm />
    </>
  )
}
