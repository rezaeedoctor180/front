# مگاپیپر - پورتال مقالات پژوهشی

یک صفحه فرود مدرن و ریسپانسیو برای پلتفرم مقالات علمی که دسترسی جامع و تفصیلی به مقالات پژوهشی را فراهم می‌کند. این پلتفرم با نمایش اطلاعات کامل شامل DOI، ناشر، ISSN و متادیتای تفصیلی، مقالات علمی را برای پژوهشگران، دانشجویان و علاقه‌مندان در سراسر جهان قابل دسترس می‌کند.

## ویژگی‌ها

### 🔍 **جستجو و کشف پیشرفته**
- جستجوی یکپارچه در بخش اصلی صفحه
- جستجو بر اساس عنوان، نویسنده، مجله، DOI
- فیلتر بر اساس دسته‌بندی (هنر و زیبایی‌شناسی، ادبیات، فلسفه، تاریخ، جامعه‌شناسی، روان‌شناسی)
- فیلتر بر اساس سال انتشار (2017-2024)
- میانبرهای صفحه کلید (Ctrl+K برای فعال کردن جستجو)

### 📄 **نمایش تفصیلی مقالات**
- **اطلاعات اصلی**: عنوان، زیرعنوان، نویسنده، مجله
- **متادیتای کامل**: DOI، صفحات، شماره مجله، ISSN
- **اطلاعات ناشر**: نام ناشر، تاریخ انتشار
- **نوع محتوا**: مقاله مجله، کتاب، مقاله کنفرانس، پایان‌نامه
- **لینک مستقیم**: دسترسی به متن اصلی مقاله
- **خلاصه فارسی**: توضیح محتوای مقاله

### 🎨 **طراحی مدرن و کاربرپسند**
- کارت‌های مقاله با طراحی تفصیلی و منظم
- نمایش اطلاعات در بخش‌های جداگانه
- دکمه‌های مشاهده مقاله و دانلود
- انیمیشن‌های نرم و تعاملی
- طراحی کاملاً RTL برای زبان فارسی

### 📞 **تماس و پشتیبانی**
- فرم تماس با موضوعات متنوع
- اطلاعات تماس کامل (ایمیل: support@megapaper.ir)
- واکنش فوری و بازخورد کاربر

### ⚡ **عملکرد و دسترسی‌پذیری**
- بارگذاری سریع و بهینه
- پشتیبانی کامل از RTL
- ریسپانسیو برای همه دستگاه‌ها
- فونت وزیرمتن برای نمایش بهتر متن فارسی

## ساختار فایل‌ها

```
├── index.html          # ساختار اصلی HTML با طراحی RTL
├── styles.css          # استایل‌دهی کامل CSS شامل طراحی کارت‌های مقاله
├── script.js           # جاوااسکریپت با داده‌های تفصیلی مقالات
└── README.md          # مستندات پروژه
```

## فناوری‌های استفاده شده

- **HTML5** - ساختار معنایی RTL
- **CSS3** - استایل‌دهی مدرن با Grid Layout برای کارت‌های مقاله
- **Vanilla JavaScript** - مدیریت داده‌های تفصیلی مقالات
- **Font Awesome** - آیکون‌های متنوع
- **Vazirmatn Font** - فونت فارسی حرفه‌ای
- **Responsive Design** - پشتیبانی از همه دستگاه‌ها

## شروع کار

1. **کلون یا دانلود** مخزن پروژه
2. **باز کردن `index.html`** در مرورگر وب
3. **کاوش ویژگی‌ها**:
   - جستجو در بخش اصلی صفحه
   - مشاهده جزئیات کامل مقالات
   - تست فیلترهای دسته‌بندی و سال
   - استفاده از لینک‌های مستقیم مقالات

## ساختار داده‌های مقاله

هر مقاله شامل فیلدهای زیر است:

```javascript
{
    title: "عنوان مقاله",
    subtitle: "زیرعنوان",
    author: "نام نویسنده",
    contentType: "نوع محتوا",
    journal: "نام مجله",
    doi: "شناسه دیجیتال",
    pages: "محدوده صفحات",
    issn: "شماره استاندارد",
    volume: "شماره مجله",
    publisher: "ناشر",
    publishedDate: "تاریخ انتشار",
    year: "سال",
    category: "دسته‌بندی",
    url: "لینک مستقیم",
    abstract: "خلاصه فارسی"
}
```

## نحوه استفاده

### جستجوی پیشرفته
- از نوار جستجو در بخش Hero استفاده کنید
- جستجو در تمام فیلدها شامل DOI
- اعمال فیلترهای دسته‌بندی و سال
- مشاهده نتایج با جزئیات کامل

### مشاهده مقالات
- کلیک روی "مشاهده مقاله" برای دسترسی به متن اصلی
- کلیک روی "دانلود" برای دانلود فایل
- مشاهده تمام متادیتاهای مقاله
- کپی DOI برای استناد

## مقالات نمونه

پلتفرم شامل ۶ مقاله نمونه است:

1. **هنر صوت**: مقاله کارمن پاردو در مجله زیبایی‌شناسی
2. **علوم انسانی دیجیتال**: روش‌های نوین تحلیل ادبی
3. **پدیدارشناسی**: مطالعات آگاهی معاصر
4. **جامعه‌شناسی**: تأثیر شبکه‌های اجتماعی
5. **روان‌شناسی**: رابطه حافظه و تروما
6. **تاریخ**: هنر و معماری اسلامی

## طراحی ریسپانسیو

- **دسکتاپ** (1200px+): نمایش کامل تمام ویژگی‌ها
- **تبلت** (768px-1199px): تطبیق طراحی برای صفحه‌نمایش متوسط
- **موبایل** (< 768px): چیدمان تک ستونی بهینه

## سفارشی‌سازی

### اضافه کردن مقالات جدید
```javascript
// در فایل script.js
const newArticle = {
    id: 7,
    title: "عنوان مقاله جدید",
    author: "نام نویسنده",
    // ... سایر فیلدها
};
sampleArticles.push(newArticle);
```

### تغییر دسته‌بندی‌ها
1. به‌روزرسانی گزینه‌های select در HTML
2. اضافه کردن دسته جدید به `categoryMap` در JavaScript

## ویژگی‌های برجسته

### کارت‌های مقاله تفصیلی
- هدر مقاله با عنوان و زیرعنوان
- نمایش نویسنده و مجله با آیکون
- بخش جزئیات شامل تمام متادیتاها
- خلاصه مقاله در قاب مخصوص
- دکمه‌های عملکرد (مشاهده/دانلود)

### جستجوی یکپارچه
- موتور جستجوی قدرتمند در Hero Section
- فیلترهای هوشمند
- نمایش نتایج بلادرنگ

### تجربه کاربری بهینه
- انیمیشن‌های نرم
- بازخورد فوری
- طراحی بصری جذاب

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## مشارکت

برای بهبود پلتفرم، ارسال issue و pull request آزاد هستید.

---

**مگاپیپر** - دسترسی هوشمند و تفصیلی به مقالات علمی 📄✨
