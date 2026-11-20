# Farobiy IT Academy

Figma'dagi "Farobiy" dizayni asosida qilingan sayt (React + Vite).

## Ishga tushirish

`start.bat` faylini ikki marta bosing yoki terminalda:

```bash
npm install
npm run dev
```

## Sahifalar

- `/` — bosh sahifa: hero slayder, kurslar, ustozlar, biz haqimizda, savollar, ariza formasi
- `/kurslar?cat=dasturlash` — barcha kurslar (kategoriya bo'yicha)
- `/kurslar/json` — kurs sahifasi

## Tuzilishi

- `src/data.js` — kurslar, ustozlar, savollar va boshqa matnlar (UZ / RU / EN)
- `src/i18n.jsx` — til almashtirish va interfeys matnlari
- `src/components/` — Header (Kurslar menyusi), Footer, forma, rasmlar (SVG)
- `src/pages/` — sahifalar
