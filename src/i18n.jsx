import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/* UI texts. Content texts (courses, FAQ…) live in data.js as { uz, ru, en } objects. */
const dict = {
  uz: {
    courses: 'Kurslar',
    navCourses: "Biz o'rgatadigan kurslar",
    navTeachers: 'Bizning ustozlarimiz',
    navAbout: 'Biz haqimizda',
    navFaq: "Ko'p beriladigan savollar",
    heroBadge: "Zamonaviy IT o'quv markazi",
    chooseCourses: 'Kurslarni tanlash',
    more: 'Batafsil',
    soon: 'Tez orada yangi kurs!',
    soonShort: 'Tez orada yangi kurs!',
    teachers: 'Bizning ustozlarimiz',
    about: 'Biz haqimizda',
    faq: "Ko'p so'raladigan savollar",
    formTitle: 'Tanlovda yordam beramiz!',
    formText: "Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.",
    name: 'Ismingiz',
    phone: 'Telefon raqamingiz',
    email: 'Pochtangiz',
    course: 'Kurs',
    send: 'Yuborish',
    sent: "Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
    phoneError: "Telefon raqamini to'liq kiriting",
    address: 'Manzil',
    addressText: "Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B",
    help: 'Yordam',
    mail: 'Pochta',
    footerText: 'Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz orqali qiymat sotamiz.',
    rights: 'Farobiy IT Academy',
    enroll: 'Kursga yozilish',
    profession: 'Professiya haqida',
    learn: "Kursda nimalarga o'rganasiz",
    allCourses: 'Barcha kurslar',
    showMore: "Ko'proq ko'rsatish",
    notFound: 'Sahifa topilmadi',
    notFoundText: "Siz qidirgan sahifa mavjud emas yoki ko'chirilgan.",
    home: 'Bosh sahifa',
    menu: 'Menyu',
    close: 'Yopish',
    language: 'Til',
    selectCourse: 'Kursni tanlang',
  },
  ru: {
    courses: 'Курсы',
    navCourses: 'Наши курсы',
    navTeachers: 'Наши преподаватели',
    navAbout: 'О нас',
    navFaq: 'Частые вопросы',
    heroBadge: 'Современный IT учебный центр',
    chooseCourses: 'Выбрать курс',
    more: 'Подробнее',
    soon: 'Скоро новый курс!',
    soonShort: 'Скоро новый курс!',
    teachers: 'Наши преподаватели',
    about: 'О нас',
    faq: 'Часто задаваемые вопросы',
    formTitle: 'Поможем с выбором!',
    formText: 'Если у вас есть вопросы о курсе или вы не знаете, что выбрать, оставьте номер — мы ответим на все вопросы.',
    name: 'Ваше имя',
    phone: 'Номер телефона',
    email: 'Ваша почта',
    course: 'Курс',
    send: 'Отправить',
    sent: 'Спасибо! Заявка принята. Мы скоро с вами свяжемся.',
    phoneError: 'Введите номер телефона полностью',
    address: 'Адрес',
    addressText: 'г. Ташкент, Юнусабадский район, ул. Амира Темура 129Б',
    help: 'Помощь',
    mail: 'Почта',
    footerText: 'Мы здесь не для того, чтобы продавать вам продукт — мы делимся ценностью через наш опыт.',
    rights: 'Farobiy IT Academy',
    enroll: 'Записаться на курс',
    profession: 'О профессии',
    learn: 'Чему вы научитесь',
    allCourses: 'Все курсы',
    showMore: 'Показать ещё',
    notFound: 'Страница не найдена',
    notFoundText: 'Страница, которую вы ищете, не существует или была перемещена.',
    home: 'Главная',
    menu: 'Меню',
    close: 'Закрыть',
    language: 'Язык',
    selectCourse: 'Выберите курс',
  },
  en: {
    courses: 'Courses',
    navCourses: 'Our courses',
    navTeachers: 'Our teachers',
    navAbout: 'About us',
    navFaq: 'FAQ',
    heroBadge: 'Modern IT training center',
    chooseCourses: 'Choose a course',
    more: 'Learn more',
    soon: 'New course coming soon!',
    soonShort: 'Coming soon!',
    teachers: 'Our teachers',
    about: 'About us',
    faq: 'Frequently asked questions',
    formTitle: 'We will help you choose!',
    formText: "If you have questions about a course or don't know what to choose, leave your number — we will answer all your questions.",
    name: 'Your name',
    phone: 'Phone number',
    email: 'Your email',
    course: 'Course',
    send: 'Send',
    sent: 'Thank you! Your request has been received. We will contact you soon.',
    phoneError: 'Please enter the full phone number',
    address: 'Address',
    addressText: 'Tashkent, Yunusabad district, Amir Temur street 129B',
    help: 'Help',
    mail: 'Email',
    footerText: "We are not here to sell you a product — we deliver value through our experience.",
    rights: 'Farobiy IT Academy',
    enroll: 'Enroll in the course',
    profession: 'About the profession',
    learn: 'What you will learn',
    allCourses: 'All courses',
    showMore: 'Show more',
    notFound: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or has been moved.',
    home: 'Home',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    selectCourse: 'Choose a course',
  },
}

export const languages = [
  { code: 'uz', label: 'UZ', name: "O'zbekcha" },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
]

const KEY = 'farobiy-lang'
const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY)
    if (dict[saved]) return saved
  } catch { /* storage unavailable */ }
  return 'uz'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(KEY, lang) } catch { /* storage unavailable */ }
  }, [lang])
  const value = useMemo(() => ({
    lang,
    setLang,
    t: (key) => dict[lang][key] ?? dict.uz[key] ?? key,
    /** Picks the current language from a { uz, ru, en } object (plain strings pass through). */
    L: (v) => (v && typeof v === 'object' ? v[lang] ?? v.uz : v),
  }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext)
