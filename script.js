// Sample articles data in Persian
const sampleArticles = [
    {
        id: 1,
        title: "پیشرفت‌های محاسبات کوانتومی در کشف دارو",
        authors: "دکتر سارا احمدی، دکتر محمد رضایی، دکتر فاطمه کریمی",
        journal: "مجله محاسبات کوانتومی طبیعت",
        year: "2024",
        category: "physics",
        abstract: "این مطالعه کاربردهای پیشرفته الگوریتم‌های محاسبات کوانتومی در تسریع فرآیندهای کشف دارو را ارائه می‌دهد که زمان محاسبه را نسبت به روش‌های کلاسیک ۷۵ درصد کاهش می‌دهد.",
        downloadUrl: "#"
    },
    {
        id: 2,
        title: "ویرایش ژن CRISPR-Cas9 در اختلالات عصبی",
        authors: "دکتر علی مرادی، دکتر لیلا حسینی، دکتر رضا نوری",
        journal: "مجله پزشکی سلولی",
        year: "2024",
        category: "biology",
        abstract: "ما کاربرد موفقیت‌آمیز فناوری CRISPR-Cas9 در درمان اختلالات عصبی ژنتیکی را نشان می‌دهیم که ۸۵ درصد بهبودی در نتایج بیماران در آزمایشات بالینی نشان می‌دهد.",
        downloadUrl: "#"
    },
    {
        id: 3,
        title: "سنتز پایدار ترکیبات آلی جدید",
        authors: "دکتر مریم غفاری، دکتر حسن عباسی، دکتر آنا پتروف",
        journal: "نامه‌های شیمی سبز",
        year: "2023",
        category: "chemistry",
        abstract: "توسعه مسیرهای سنتزی سازگار با محیط زیست برای مولکول‌های آلی پیچیده با استفاده از منابع تجدیدپذیر و کاهش تولید زباله.",
        downloadUrl: "#"
    },
    {
        id: 4,
        title: "یادگیری ماشین در تصویربرداری تشخیصی",
        authors: "دکتر کیوان زمانی، دکتر نرگس امینی، دکتر تام ویلسون",
        journal: "بررسی هوش مصنوعی پزشکی",
        year: "2024",
        category: "computer-science",
        abstract: "پیاده‌سازی شبکه‌های عصبی پیشرفته برای تجزیه و تحلیل خودکار تصاویر پزشکی، دستیابی به ۹۶ درصد دقت در تشخیص زودهنگام بیماری در چندین روش تصویربرداری.",
        downloadUrl: "#"
    },
    {
        id: 5,
        title: "تأثیر تغییرات اقلیمی بر اکوسیستم‌های دریایی",
        authors: "دکتر سوفیا مارتین، دکتر کارلوس سیلوا، دکتر جنیفر کلارک",
        journal: "زیست‌شناسی دریایی امروز",
        year: "2023",
        category: "biology",
        abstract: "تجزیه و تحلیل جامع تغییرات دمای اقیانوس‌ها و تأثیرات آن بر تنوع زیستی دریایی، نقاط بحرانی برای حفظ اکوسیستم را آشکار می‌کند.",
        downloadUrl: "#"
    },
    {
        id: 6,
        title: "پیشرفت در درمان بیماری آلزایمر",
        authors: "دکتر هلن فاستر، دکتر مارک جانسون، دکتر پاتریشیا دیویس",
        journal: "مجله بین‌المللی مغز و اعصاب",
        year: "2024",
        category: "medicine",
        abstract: "رویکرد درمانی جدید با هدف قرار دادن پلاک‌های آمیلوئید نتایج امیدوارکننده‌ای در آزمایشات بالینی فاز سوم نشان می‌دهد و عملکرد شناختی را در ۷۰ درصد بیماران بهبود می‌بخشد.",
        downloadUrl: "#"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const yearFilter = document.getElementById('yearFilter');
const searchResults = document.getElementById('searchResults');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    
    let filteredArticles = sampleArticles;
    
    // Filter by search query
    if (query) {
        filteredArticles = filteredArticles.filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.authors.toLowerCase().includes(query) ||
            article.abstract.toLowerCase().includes(query) ||
            article.journal.toLowerCase().includes(query)
        );
    }
    
    // Filter by category
    if (selectedCategory) {
        filteredArticles = filteredArticles.filter(article => 
            article.category === selectedCategory
        );
    }
    
    // Filter by year
    if (selectedYear) {
        filteredArticles = filteredArticles.filter(article => 
            article.year === selectedYear
        );
    }
    
    displaySearchResults(filteredArticles);
}

function displaySearchResults(articles) {
    if (articles.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>هیچ مقاله‌ای یافت نشد</h3>
                <p>معیارهای جستجوی خود را تنظیم کنید یا دسته‌های موجود ما را مرور کنید.</p>
            </div>
        `;
        return;
    }
    
    searchResults.innerHTML = articles.map(article => `
        <div class="article-card">
            <h3 class="article-title">${article.title}</h3>
            <p class="article-authors">${article.authors}</p>
            <p class="article-journal">${article.journal}</p>
            <p class="article-abstract">${article.abstract}</p>
            <div class="article-meta">
                <span class="article-year">${article.year}</span>
                <span class="article-category">${formatCategory(article.category)}</span>
            </div>
            <button class="download-btn" onclick="downloadArticle(${article.id})">
                <i class="fas fa-download"></i>
                دانلود PDF
            </button>
        </div>
    `).join('');
}

function formatCategory(category) {
    const categoryMap = {
        'biology': 'زیست‌شناسی',
        'physics': 'فیزیک',
        'chemistry': 'شیمی',
        'medicine': 'پزشکی',
        'computer-science': 'علوم کامپیوتر',
        'mathematics': 'ریاضیات'
    };
    return categoryMap[category] || category;
}

function downloadArticle(articleId) {
    const article = sampleArticles.find(a => a.id === articleId);
    if (article) {
        // Simulate download
        const downloadNotification = document.createElement('div');
        downloadNotification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: 'Vazirmatn', sans-serif;
        `;
        downloadNotification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            در حال دانلود "${article.title.substring(0, 30)}..."
        `;
        
        document.body.appendChild(downloadNotification);
        
        setTimeout(() => {
            downloadNotification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(downloadNotification);
            }, 300);
        }, 3000);
    }
}

// Add CSS animations for download notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Event listeners for search
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});
categoryFilter.addEventListener('change', performSearch);
yearFilter.addEventListener('change', performSearch);

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'در حال ارسال...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'پیام ارسال شد!';
        submitBtn.style.background = '#10b981';
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            background: #d1fae5;
            color: #065f46;
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-align: center;
            border: 1px solid #a7f3d0;
            font-family: 'Vazirmatn', sans-serif;
        `;
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            از پیام شما متشکریم! ظرف ۲۴ ساعت با شما تماس خواهیم گرفت.
        `;
        
        contactForm.appendChild(successMessage);
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            if (successMessage.parentNode) {
                contactForm.removeChild(successMessage);
            }
        }, 3000);
    }, 1500);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(animationStyle);
    
    // Add animation class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Initial display of search results
    displaySearchResults(sampleArticles);
});

// Advanced search features
function highlightSearchTerms(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background: #fef3c7; padding: 0 2px;">$1</mark>');
}

// Export functionality for search results
function exportSearchResults(format = 'csv') {
    const query = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    
    let filteredArticles = sampleArticles;
    
    if (query) {
        filteredArticles = filteredArticles.filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.authors.toLowerCase().includes(query) ||
            article.abstract.toLowerCase().includes(query)
        );
    }
    
    if (selectedCategory) {
        filteredArticles = filteredArticles.filter(article => 
            article.category === selectedCategory
        );
    }
    
    if (selectedYear) {
        filteredArticles = filteredArticles.filter(article => 
            article.year === selectedYear
        );
    }
    
    if (format === 'csv') {
        const csvContent = [
            ['عنوان', 'نویسندگان', 'مجله', 'سال', 'دسته‌بندی'],
            ...filteredArticles.map(article => [
                article.title,
                article.authors,
                article.journal,
                article.year,
                formatCategory(article.category)
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'search_results.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        categoryFilter.value = '';
        yearFilter.value = '';
        performSearch();
    }
});

// Add search shortcuts info
const searchShortcutsInfo = document.createElement('div');
searchShortcutsInfo.style.cssText = `
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-top: 0.5rem;
    font-family: 'Vazirmatn', sans-serif;
`;
searchShortcutsInfo.innerHTML = 'برای فعال کردن جستجو <kbd style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; color: white;">Ctrl+K</kbd> را فشار دهید';

// Add the shortcuts info to hero search container after page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroSearchContainer = document.querySelector('.hero-search-container');
    if (heroSearchContainer) {
        heroSearchContainer.appendChild(searchShortcutsInfo);
    }
});