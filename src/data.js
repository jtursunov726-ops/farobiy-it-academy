// All site content. Texts are { uz, ru, en }; photos are Unsplash (free license).
export const img = (id, w = 800, h) =>
  `https://images.unsplash.com/photo-${id}?w=${w}${h ? `&h=${h}` : ''}&q=80&auto=format&fit=crop`

export const photos = {
  heroCoder: '1550439062-609e1531270e',
  heroTeam: '1522071820081-009f0129c71c',
  heroLaptop: '1498050108023-c5249f4df085',
  coding: '1593720213428-28a5b9e94613',
  design: '1561070791-2526d30994b5',
  marketing: '1600880292203-757bb62b4baf',
  logistics: '1586528116311-ad8dd3c8310d',
  video: '1574717024653-61fd2cf4d44d',
  aboutTeam: '1531482615713-2afd69097998',
  aboutCode: '1461749280684-dccba630e2f6',
  devNight: '1515879218367-8466d910aaa4',
  devWoman: '1573164713988-8665fc963095',
  screenCode: '1555066931-4365d14bab8c',
  desk: '1517694712202-14dd9538aa97',
  analytics: '1460925895917-afdab827c52f',
  editing: '1580894908361-967195033215',
}

export const phone = '+998 91 777 54 11'
export const phoneHref = 'tel:+998917775411'
export const emailAddr = 'info@farobiy.com'

/* ---------------- Categories → directions → topics ---------------- */
export const categories = [
  {
    id: 'dasturlash', icon: 'code', photo: photos.coding,
    name: { uz: 'Dasturlash', ru: 'Программирование', en: 'Programming' },
    directions: [
      { id: 'java', name: 'Java Backend Development', topics: ['Java Core', 'Java OOP', 'Java advance', 'Maven', 'Poi', 'Json', 'API', 'Telegram bot', 'Databases', 'JDBC', 'Java servlet', 'Spring MVC', 'Spring boot', 'Jpa Hibernate', 'Security', 'REST API', 'React Js'] },
      { id: 'frontend', name: 'Frontend Development', topics: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git & GitHub'] },
      { id: 'python', name: 'Python development', topics: ['Python Core', 'Python OOP', 'Django', 'FastAPI', 'Python Telegram bot', 'Data analysis'] },
      { id: 'foundation', name: 'Foundation', topics: ['Computer literacy', 'Algorithms', 'English for IT'] },
      { id: 'database', name: 'Database Development', topics: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
      { id: 'flutter', name: 'Flutter App Development', topics: ['Dart', 'Flutter', 'Firebase'] },
    ],
  },
  {
    id: 'dizayn', icon: 'pen', photo: photos.design,
    name: { uz: 'Dizayn', ru: 'Дизайн', en: 'Design' },
    directions: [
      { id: 'uiux', name: 'UI/UX Design', topics: ['Figma', 'UX research', 'Prototyping', 'Design systems'] },
      { id: 'graphic', name: 'Graphic Design', topics: ['Photoshop', 'Illustrator', 'Branding'] },
    ],
  },
  {
    id: 'marketing', icon: 'funnel', photo: photos.marketing,
    name: { uz: 'Marketing', ru: 'Маркетинг', en: 'Marketing' },
    directions: [
      { id: 'smm', name: 'SMM', topics: ['Instagram marketing', 'Content creation', 'Target ads'] },
      { id: 'digital', name: 'Digital Marketing', topics: ['Google Ads', 'SEO', 'Email marketing'] },
    ],
  },
  {
    id: 'logistika', icon: 'bars', photo: photos.logistics,
    name: { uz: 'Logistika brokerligi', ru: 'Логистический брокер', en: 'Logistics brokerage' },
    directions: [
      { id: 'broker', name: 'Freight Brokerage', topics: ['Dispatching', 'Freight broker basics', 'English for logistics'] },
    ],
  },
  {
    id: 'videomontaj', icon: 'spark', photo: photos.video,
    name: { uz: 'Videomontaj', ru: 'Видеомонтаж', en: 'Video editing' },
    homeName: { uz: 'Videomontaj va maxsus effektlar', ru: 'Видеомонтаж и спецэффекты', en: 'Video editing & special effects' },
    directions: [
      { id: 'editing', name: 'Video Editing', topics: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Special effects'] },
    ],
  },
]

/* Card colours of the course grid (from the design) and matching illustration accents. */
export const palette = [
  { bg: '#A7E3C4', accent: '#2f9e6b' },
  { bg: '#C8DDEB', accent: '#3a78b5' },
  { bg: '#A9E4D6', accent: '#2b8f7d' },
  { bg: '#CDCBF3', accent: '#5b54c9' },
  { bg: '#EEDAA8', accent: '#b4862a' },
  { bg: '#DFC0A5', accent: '#9a6a43' },
]

const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

/* Hand-written descriptions; other courses get a description built from their direction. */
const descriptions = {
  json: {
    uz: "Json chiquvchi biz har kuni foydalanadigan veb-saytlar, xizmatlar va ilovalar yaratadi. U onlayn-do'konlar, onlayn banklar, qidiruv tizimlari, xaritalar va elektron pochta mijozlarini ishlab chiqadi. Veb-ishlab chiquvchi saytning tashqi ko'rinishini loyihalashtiradi - frontend va xizmat qismini dasturlaydi - backend.",
    ru: 'Json-разработчик создаёт сайты, сервисы и приложения, которыми мы пользуемся каждый день: интернет-магазины, онлайн-банки, поисковые системы, карты и почтовые клиенты. Веб-разработчик проектирует внешний вид сайта — frontend — и программирует серверную часть — backend.',
    en: 'A Json developer builds the websites, services and apps we use every day: online stores, online banks, search engines, maps and email clients. A web developer designs how a site looks — the frontend — and programs its server side — the backend.',
  },
}

function buildDesc(title, dirName, catName) {
  return {
    uz: `${title} kursida siz ${dirName} yo'nalishining eng muhim bilimlarini amaliy loyihalar orqali o'rganasiz. Darslar tajribali ustozlar bilan, kichik guruhlarda o'tadi va kurs oxirida portfolioga qo'shiladigan real loyiha tayyorlaysiz. Bu ${catName.uz.toLowerCase()} sohasida ish boshlash uchun mustahkam poydevor.`,
    ru: `На курсе ${title} вы освоите ключевые знания направления ${dirName} на практических проектах. Занятия проходят в небольших группах с опытными преподавателями, а в конце курса вы подготовите реальный проект для портфолио. Это надёжная основа для старта карьеры в сфере «${catName.ru}».`,
    en: `In the ${title} course you will learn the key skills of ${dirName} through hands-on projects. Classes run in small groups with experienced teachers, and by the end you will build a real project for your portfolio. It is a solid foundation for starting a career in ${catName.en.toLowerCase()}.`,
  }
}

/* Every topic of every direction becomes a course page. */
export const courses = []
categories.forEach((cat) => {
  cat.directions.forEach((dir) => {
    dir.topics.forEach((title) => {
      const id = slug(title)
      if (courses.some((c) => c.id === id)) return
      courses.push({
        id, title, cat: cat.id, dir: dir.id, dirName: dir.name,
        color: courses.filter((c) => c.cat === cat.id).length % palette.length,
        art: courses.length % 4,
        desc: descriptions[id] || buildDesc(title, dir.name, cat.name),
      })
    })
  })
})
export const courseById = (id) => courses.find((c) => c.id === id)
export const categoryById = (id) => categories.find((c) => c.id === id)

/* What each category's courses teach (4 steps on the course page). */
export const curriculum = {
  dasturlash: [
    { t: { uz: 'HTML va CSS-da veb-saytlar yarating', ru: 'Создавайте сайты на HTML и CSS', en: 'Build websites with HTML and CSS' }, d: { uz: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling.", ru: 'Освойте самые популярные языки разметки и создавайте сайты, которые хорошо выглядят на любом экране.', en: 'Master the most popular markup languages and build sites that look great on any screen.' } },
    { t: { uz: 'JavaScript va PHP da dastur', ru: 'Программируйте на JavaScript и PHP', en: 'Program in JavaScript and PHP' }, d: { uz: "Bir vaqtning o'zida ikkita mashhur dasturlash tilini o'zlashtiring. JavaScript-da siz interaktiv sahifalar yaratasiz.", ru: 'Освойте сразу два популярных языка программирования. На JavaScript вы создадите интерактивные страницы.', en: 'Learn two popular programming languages at once. With JavaScript you will build interactive pages.' } },
    { t: { uz: "Ma'lumotlar bazasi bilan ishlang", ru: 'Работайте с базами данных', en: 'Work with databases' }, d: { uz: "SQL so'rovlarini yozing, jadvallarni loyihalang va ilovangiz ma'lumotlarini ishonchli saqlang.", ru: 'Пишите SQL-запросы, проектируйте таблицы и надёжно храните данные приложения.', en: 'Write SQL queries, design tables and store your app data reliably.' } },
    { t: { uz: "Real loyiha va portfolio", ru: 'Реальный проект и портфолио', en: 'Real project and portfolio' }, d: { uz: "Kurs oxirida jamoada real loyiha qilasiz va uni ish beruvchilarga ko'rsatadigan portfolioga qo'shasiz.", ru: 'В конце курса вы сделаете реальный проект в команде и добавите его в портфолио для работодателей.', en: 'At the end you build a real team project and add it to the portfolio you show employers.' } },
  ],
  dizayn: [
    { t: { uz: 'Dizayn asoslari', ru: 'Основы дизайна', en: 'Design fundamentals' }, d: { uz: "Rang, tipografiya va kompozitsiya qoidalarini o'rganib, toza va chiroyli maketlar yarating.", ru: 'Изучите правила цвета, типографики и композиции и создавайте чистые красивые макеты.', en: 'Learn colour, typography and composition and create clean, beautiful layouts.' } },
    { t: { uz: 'Figma-da professional ishlash', ru: 'Профессиональная работа в Figma', en: 'Work professionally in Figma' }, d: { uz: "Komponentlar, auto-layout va prototiplar bilan tez va tartibli ishlashni o'rganing.", ru: 'Научитесь быстро и аккуратно работать с компонентами, auto-layout и прототипами.', en: 'Work fast and tidy with components, auto-layout and prototypes.' } },
    { t: { uz: 'UX tadqiqot', ru: 'UX-исследования', en: 'UX research' }, d: { uz: "Foydalanuvchilarni tushunish, intervyu va testlar o'tkazish orqali qulay mahsulot yarating.", ru: 'Создавайте удобные продукты, понимая пользователей через интервью и тесты.', en: 'Build usable products by understanding users through interviews and tests.' } },
    { t: { uz: 'Portfolio va buyurtmalar', ru: 'Портфолио и заказы', en: 'Portfolio and clients' }, d: { uz: "Kuchli portfolio tayyorlang va birinchi buyurtmalaringizni oling.", ru: 'Соберите сильное портфолио и получите первые заказы.', en: 'Build a strong portfolio and land your first clients.' } },
  ],
  marketing: [
    { t: { uz: 'Marketing strategiyasi', ru: 'Маркетинговая стратегия', en: 'Marketing strategy' }, d: { uz: "Auditoriyani aniqlash, raqobatchilarni tahlil qilish va strategiya tuzishni o'rganing.", ru: 'Научитесь определять аудиторию, анализировать конкурентов и строить стратегию.', en: 'Define your audience, analyse competitors and build a strategy.' } },
    { t: { uz: 'Kontent va SMM', ru: 'Контент и SMM', en: 'Content and SMM' }, d: { uz: "Ijtimoiy tarmoqlar uchun qiziqarli kontent yarating va obunachilar sonini oshiring.", ru: 'Создавайте интересный контент для соцсетей и растите аудиторию.', en: 'Create engaging social content and grow your followers.' } },
    { t: { uz: 'Reklama kampaniyalari', ru: 'Рекламные кампании', en: 'Ad campaigns' }, d: { uz: "Target va Google reklamani sozlab, byudjetni samarali sarflang.", ru: 'Настраивайте таргет и Google-рекламу и тратьте бюджет эффективно.', en: 'Set up targeted and Google ads and spend your budget wisely.' } },
    { t: { uz: 'Tahlil va natija', ru: 'Аналитика и результат', en: 'Analytics and results' }, d: { uz: "Natijalarni o'lchang, hisobot tayyorlang va kampaniyalarni yaxshilang.", ru: 'Измеряйте результаты, готовьте отчёты и улучшайте кампании.', en: 'Measure results, report on them and improve your campaigns.' } },
  ],
  logistika: [
    { t: { uz: 'Logistika asoslari', ru: 'Основы логистики', en: 'Logistics basics' }, d: { uz: "AQSh yuk tashish bozori, asosiy atamalar va ish jarayoni bilan tanishing.", ru: 'Познакомьтесь с рынком грузоперевозок США, терминами и процессами.', en: 'Get to know the US freight market, key terms and workflow.' } },
    { t: { uz: 'Dispetcherlik', ru: 'Диспетчеризация', en: 'Dispatching' }, d: { uz: "Haydovchilar bilan ishlash, yo'nalishlarni rejalashtirish va yuklarni topishni o'rganing.", ru: 'Научитесь работать с водителями, планировать маршруты и находить грузы.', en: 'Work with drivers, plan routes and find loads.' } },
    { t: { uz: 'Muzokaralar', ru: 'Переговоры', en: 'Negotiation' }, d: { uz: "Mijozlar bilan ingliz tilida muzokara olib borish va narxni kelishish ko'nikmalari.", ru: 'Навыки переговоров с клиентами на английском и согласования цены.', en: 'Negotiate with clients in English and agree on rates.' } },
    { t: { uz: 'Amaliyot va ish', ru: 'Практика и работа', en: 'Practice and job' }, d: { uz: "Real kompaniyada amaliyot o'tang va ishga joylashishga tayyorlaning.", ru: 'Пройдите практику в реальной компании и подготовьтесь к трудоустройству.', en: 'Intern at a real company and get ready for a job.' } },
  ],
  videomontaj: [
    { t: { uz: 'Montaj asoslari', ru: 'Основы монтажа', en: 'Editing basics' }, d: { uz: "Kadrlarni kesish, ulash va ritmni his qilishni o'rganing.", ru: 'Научитесь резать, склеивать кадры и чувствовать ритм.', en: 'Learn to cut and join shots and feel the rhythm.' } },
    { t: { uz: 'Rang va ovoz', ru: 'Цвет и звук', en: 'Colour and sound' }, d: { uz: "Rang korreksiyasi va ovozni tozalash orqali videoni professional darajaga olib chiqing.", ru: 'Выведите видео на профессиональный уровень с цветокоррекцией и обработкой звука.', en: 'Take video to a professional level with colour grading and sound cleanup.' } },
    { t: { uz: 'Maxsus effektlar', ru: 'Спецэффекты', en: 'Special effects' }, d: { uz: "After Effects-da animatsiya, titrlar va vizual effektlar yarating.", ru: 'Создавайте анимацию, титры и визуальные эффекты в After Effects.', en: 'Create animation, titles and visual effects in After Effects.' } },
    { t: { uz: 'Showreel', ru: 'Шоурил', en: 'Showreel' }, d: { uz: "O'z showreel videongizni tayyorlab, mijozlar topishni boshlang.", ru: 'Подготовьте свой шоурил и начните находить клиентов.', en: 'Make your own showreel and start finding clients.' } },
  ],
}

/* "About the profession" per category. */
export const professions = {
  dasturlash: { photos: [photos.devNight, photos.devWoman], text: { uz: "Veb-ishlab chiquvchilarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Bozorda mutaxassislar etarli emas, shuning uchun kompaniyalar yuqori maosh va masofadan ishlashni taklif qilishadi.", ru: 'Спрос на веб-разработчиков остаётся высоким — доход бизнеса напрямую зависит от того, насколько удобен сайт компании для клиентов. Специалистов на рынке не хватает, поэтому компании предлагают высокую зарплату и удалённую работу.', en: 'Demand for web developers remains high — a business’s revenue depends directly on how easy its website is for customers to use. There are not enough specialists, so companies offer high salaries and remote work.' } },
  dizayn: { photos: [photos.design, photos.desk], text: { uz: "Har bir mahsulot va brend yaxshi dizaynga muhtoj. Dizaynerlar ilovalar, saytlar va reklamalarni foydalanuvchi uchun qulay va chiroyli qiladi va masofadan ishlash imkoniyatiga ega.", ru: 'Каждому продукту и бренду нужен хороший дизайн. Дизайнеры делают приложения, сайты и рекламу удобными и красивыми и могут работать удалённо.', en: 'Every product and brand needs good design. Designers make apps, sites and ads usable and beautiful, and can work remotely.' } },
  marketing: { photos: [photos.analytics, photos.marketing], text: { uz: "Marketologlar biznesni mijozlar bilan bog'laydi. Raqamli marketing mutaxassislariga talab har yili o'smoqda, chunki savdoning katta qismi internetga ko'chmoqda.", ru: 'Маркетологи связывают бизнес с клиентами. Спрос на специалистов цифрового маркетинга растёт каждый год, ведь продажи уходят в интернет.', en: 'Marketers connect businesses with customers. Demand for digital marketers grows every year as sales move online.' } },
  logistika: { photos: [photos.logistics, photos.desk], text: { uz: "Logistika brokerlari yuk egalari va tashuvchilarni bog'laydi. Bu kasb ingliz tili va muzokara ko'nikmalarini talab qiladi va dollarda daromad olish imkonini beradi.", ru: 'Логистические брокеры связывают владельцев грузов и перевозчиков. Профессия требует английского и навыков переговоров и даёт доход в долларах.', en: 'Logistics brokers connect shippers and carriers. The job needs English and negotiation skills and pays in dollars.' } },
  videomontaj: { photos: [photos.editing, photos.video], text: { uz: "Video - internetdagi eng mashhur kontent turi. Montajchilar bloggerlar, kompaniyalar va kino uchun ishlaydi va o'z ishini istalgan joydan bajarishi mumkin.", ru: 'Видео — самый популярный контент в интернете. Монтажёры работают для блогеров, компаний и кино и могут работать откуда угодно.', en: 'Video is the most popular content online. Editors work for bloggers, companies and film, and can work from anywhere.' } },
}

/* ---------------- Teachers ---------------- */
export const teachers = [
  { name: 'Alisherova Anvara', cat: 'dasturlash', photo: '1494790108377-be9c29b29330' },
  { name: 'Antota Nargiza', cat: 'dizayn', photo: '1534528741775-53994a69daeb' },
  { name: 'Jorayev Akbar', cat: 'logistika', photo: '1500648767791-00dcc994a43e' },
  { name: 'Mamaraimov Grichka', cat: 'marketing', photo: '1539571696357-5a69c17a67c6' },
  { name: 'Zokir Malikov', cat: 'videomontaj', photo: '1506794778202-cad84cf45f1d' },
  { name: 'Anvara Xoliqova', cat: 'dasturlash', photo: '1544005313-94ddf0286df2' },
  { name: 'Alisherov Anvar', cat: 'dasturlash', photo: '1507003211169-0a1dd7228f2d' },
]
export const teacherRole = {
  dasturlash: { uz: 'Dasturlash ustozi', ru: 'Преподаватель программирования', en: 'Programming teacher' },
  dizayn: { uz: 'UX/UI ustozi', ru: 'Преподаватель UX/UI', en: 'UX/UI teacher' },
  marketing: { uz: 'Marketing ustozi', ru: 'Преподаватель маркетинга', en: 'Marketing teacher' },
  logistika: { uz: 'Logistika ustozi', ru: 'Преподаватель логистики', en: 'Logistics teacher' },
  videomontaj: { uz: 'Videomontaj ustozi', ru: 'Преподаватель видеомонтажа', en: 'Video editing teacher' },
}

/* ---------------- Home page ---------------- */
export const heroSlides = [
  { photo: photos.heroCoder, before: { uz: 'Biz sizga', ru: 'Поможем вам освоить', en: 'We help you learn' }, mark: { uz: 'zamonaviy kasbni', ru: 'современную профессию', en: 'a modern profession' }, after: { uz: "o'rganishga va ish boshlashingizga yordam beramiz", ru: 'и начать работать', en: 'and start working' } },
  { photo: photos.heroTeam, before: { uz: 'Tajribali', ru: 'Опытные', en: 'Experienced' }, mark: { uz: 'ustozlar', ru: 'преподаватели', en: 'teachers' }, after: { uz: 'bilan kichik guruhlarda amaliy darslar', ru: 'и практика в небольших группах', en: 'and hands-on classes in small groups' } },
  { photo: photos.heroLaptop, before: { uz: 'Kurs oxirida', ru: 'В конце курса —', en: 'Finish the course with' }, mark: { uz: 'real loyiha', ru: 'реальный проект', en: 'a real project' }, after: { uz: "va ishga joylashishda ko'mak", ru: 'и помощь с трудоустройством', en: 'and help finding a job' } },
]

export const aboutCards = [
  { uz: "Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish.", ru: 'В Farobiy IT Academy мы верим, что простое на вид творчество помогает людям расти.', en: 'At Farobiy IT Academy we believe that the simple act of creating helps people grow.' },
  { uz: 'Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.', ru: 'Farobiy IT Academy — это творческое и любознательное сообщество: иллюстрация, дизайн, фотография, видео, фриланс и многое другое.', en: 'Farobiy IT Academy is a creative, curious community for illustration, design, photography, video, freelancing and more.' },
]

export const faqs = [
  { q: { uz: 'Farobiy IT Academy bu nima?', ru: 'Что такое Farobiy IT Academy?', en: 'What is Farobiy IT Academy?' }, a: { uz: "Farobiy IT Academy - Toshkentdagi zamonaviy IT o'quv markazi. Biz dasturlash, dizayn, marketing, logistika va videomontaj bo'yicha amaliy kurslar o'tkazamiz.", ru: 'Farobiy IT Academy — современный IT учебный центр в Ташкенте. Мы проводим практические курсы по программированию, дизайну, маркетингу, логистике и видеомонтажу.', en: 'Farobiy IT Academy is a modern IT training center in Tashkent. We run hands-on courses in programming, design, marketing, logistics and video editing.' } },
  { q: { uz: "Farobiy IT Academy a'zoligimga nimalar kiradi?", ru: 'Что входит в обучение в Farobiy IT Academy?', en: 'What does membership include?' }, a: { uz: "Darslar, uy vazifalari tekshiruvi, mentor yordami, kutubxona va kompyuter xonasidan foydalanish hamda kurs oxirida sertifikat.", ru: 'Занятия, проверка домашних заданий, помощь ментора, доступ к библиотеке и компьютерному классу, а также сертификат в конце курса.', en: 'Classes, homework reviews, mentor support, access to the library and computer lab, and a certificate at the end.' } },
  { q: { uz: "Farobiy IT Academy dan nimani o'rganishim mumkin?", ru: 'Чему можно научиться в Farobiy IT Academy?', en: 'What can I learn at Farobiy IT Academy?' }, a: { uz: "Java, Python, Frontend, Flutter, UI/UX dizayn, SMM, logistika brokerligi, videomontaj va boshqa yo'nalishlar.", ru: 'Java, Python, Frontend, Flutter, UI/UX-дизайн, SMM, логистический брокер, видеомонтаж и другие направления.', en: 'Java, Python, Frontend, Flutter, UI/UX design, SMM, logistics brokerage, video editing and more.' } },
  { q: { uz: "Sinovim tugagandan keyin nima bo'ladi?", ru: 'Что будет после пробного занятия?', en: 'What happens after my trial lesson?' }, a: { uz: "Sinov darsidan so'ng siz bilan bog'lanib, sizga mos guruh va dars vaqtini tanlaymiz.", ru: 'После пробного занятия мы свяжемся с вами и подберём удобную группу и время.', en: 'After the trial lesson we will contact you and pick a group and schedule that suits you.' } },
  { q: { uz: 'Farobiy IT Academy da dars bera olamanmi?', ru: 'Могу ли я преподавать в Farobiy IT Academy?', en: 'Can I teach at Farobiy IT Academy?' }, a: { uz: "Ha! Tajribangiz bo'lsa, rezyumeingizni info@farobiy.com manziliga yuboring yoki pastdagi formani to'ldiring.", ru: 'Да! Если у вас есть опыт, отправьте резюме на info@farobiy.com или заполните форму ниже.', en: 'Yes! If you have experience, send your CV to info@farobiy.com or fill in the form below.' } },
]
