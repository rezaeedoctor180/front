// Sample articles data with detailed academic fields
const sampleArticles = [
    {
        id: 1,
        title: "The Emergence of Sound art: Opening the Cages of Sound",
        subtitle: "The Emergence of Sound art",
        author: "CARMEN PARDO",
        contentType: "journal-article",
        journal: "The Journal of Aesthetics and Art Criticism",
        doi: "10.1111/jaac.12340",
        pages: "35-48",
        issn: "0021-8529",
        volume: "75",
        publisher: "Oxford University Press (OUP)",
        publishedDate: "2017-01-00",
        year: "2017",
        category: "art",
        url: "https://doi.org/10.1111/jaac.12340",
        abstract: "این مقاله به بررسی ظهور هنر صوت به عنوان یک رشته هنری مستقل می‌پردازد و چگونگی رهایی صدا از قفس‌های سنتی موسیقی را تحلیل می‌کند."
    },
    {
        id: 2,
        title: "Digital Humanities and Literary Analysis: New Approaches",
        subtitle: "New Approaches in Digital Humanities",
        author: "محمد رضایی، سارا احمدی",
        contentType: "journal-article",
        journal: "مجله علوم انسانی دیجیتال",
        doi: "10.1234/dh.2023.456",
        pages: "112-128",
        issn: "2345-6789",
        volume: "12",
        publisher: "انتشارات دانشگاه تهران",
        publishedDate: "2023-03-15",
        year: "2023",
        category: "literature",
        url: "https://doi.org/10.1234/dh.2023.456",
        abstract: "این پژوهش به کاربرد تکنولوژی‌های دیجیتال در تحلیل ادبی می‌پردازد و روش‌های نوین تجزیه و تحلیل متون ادبی را معرفی می‌کند."
    },
    {
        id: 3,
        title: "Phenomenology and Consciousness Studies",
        subtitle: "Contemporary Perspectives",
        author: "علی کریمی، فاطمه موسوی",
        contentType: "journal-article",
        journal: "مجله فلسفه معاصر",
        doi: "10.1111/phil.2024.789",
        pages: "45-67",
        issn: "1234-5678",
        volume: "28",
        publisher: "انتشارات فلسفه و منطق",
        publishedDate: "2024-01-20",
        year: "2024",
        category: "philosophy",
        url: "https://doi.org/10.1111/phil.2024.789",
        abstract: "بررسی جامع پدیدارشناسی و مطالعات آگاهی از دیدگاه فلاسفه معاصر و تأثیر آن بر فهم ما از ذهن انسان."
    },
    {
        id: 4,
        title: "Social Media and Cultural Transformation",
        subtitle: "A Sociological Analysis",
        author: "نرگس امینی، حسن علوی",
        contentType: "journal-article",
        journal: "مجله جامعه‌شناسی فرهنگی",
        doi: "10.1234/soc.2023.321",
        pages: "89-105",
        issn: "3456-7890",
        volume: "15",
        publisher: "مؤسسه مطالعات اجتماعی",
        publishedDate: "2023-09-10",
        year: "2023",
        category: "sociology",
        url: "https://doi.org/10.1234/soc.2023.321",
        abstract: "تحلیل تأثیر شبکه‌های اجتماعی بر تحولات فرهنگی جامعه و بررسی الگوهای رفتاری جدید در عصر دیجیتال."
    },
    {
        id: 5,
        title: "Memory and Trauma: Psychological Perspectives",
        subtitle: "Clinical and Theoretical Approaches",
        author: "دکتر مریم حسینی، دکتر رضا نجفی",
        contentType: "journal-article",
        journal: "مجله روان‌شناسی بالینی",
        doi: "10.1111/psyc.2024.567",
        pages: "78-94",
        issn: "4567-8901",
        volume: "22",
        publisher: "انجمن روان‌شناسان ایران",
        publishedDate: "2024-02-05",
        year: "2024",
        category: "psychology",
        url: "https://doi.org/10.1111/psyc.2024.567",
        abstract: "بررسی رابطه میان حافظه و تروما از منظر روان‌شناسی بالینی و ارائه رویکردهای درمانی نوین."
    },
    {
        id: 6,
        title: "Islamic Art and Architecture in Medieval Period",
        subtitle: "Historical and Cultural Analysis",
        author: "دکتر احمد تبریزی، دکتر زهرا اصفهانی",
        contentType: "journal-article",
        journal: "مجله تاریخ و تمدن اسلامی",
        doi: "10.1234/hist.2022.890",
        pages: "156-178",
        issn: "5678-9012",
        volume: "18",
        publisher: "مرکز مطالعات تاریخی",
        publishedDate: "2022-11-12",
        year: "2022",
        category: "history",
        url: "https://doi.org/10.1234/hist.2022.890",
        abstract: "تحلیل تاریخی و فرهنگی هنر و معماری اسلامی در دوره قرون وسطی و تأثیر آن بر فرهنگ عصر حاضر."
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
            article.author.toLowerCase().includes(query) ||
            article.abstract.toLowerCase().includes(query) ||
            article.journal.toLowerCase().includes(query) ||
            article.doi.toLowerCase().includes(query)
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
            <div class="article-header">
                <h3 class="article-title">${article.title}</h3>
                ${article.subtitle ? `<p class="article-subtitle">${article.subtitle}</p>` : ''}
            </div>
            
            <div class="article-authors">
                <i class="fas fa-user"></i>
                <span>${article.author}</span>
            </div>
            
            <div class="article-journal">
                <i class="fas fa-book-open"></i>
                <span>${article.journal}</span>
            </div>
            
            <div class="article-details">
                <div class="detail-row">
                    <span class="detail-label">نوع محتوا:</span>
                    <span class="detail-value">${formatContentType(article.contentType)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">DOI:</span>
                    <span class="detail-value doi-link">${article.doi}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">صفحات:</span>
                    <span class="detail-value">${article.pages}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">شماره مجله:</span>
                    <span class="detail-value">${article.volume}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">ISSN:</span>
                    <span class="detail-value">${article.issn}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">ناشر:</span>
                    <span class="detail-value">${article.publisher}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">تاریخ انتشار:</span>
                    <span class="detail-value">${formatDate(article.publishedDate)}</span>
                </div>
            </div>
            
            <p class="article-abstract">${article.abstract}</p>
            
            <div class="article-meta">
                <span class="article-year">${article.year}</span>
                <span class="article-category">${formatCategory(article.category)}</span>
            </div>
            
            <div class="article-actions">
                <a href="${article.url}" target="_blank" class="view-btn">
                    <i class="fas fa-external-link-alt"></i>
                    مشاهده مقاله
                </a>
                <button class="download-btn" onclick="downloadArticle(${article.id})">
                    <i class="fas fa-download"></i>
                    دانلود
                </button>
            </div>
        </div>
    `).join('');
}

function formatCategory(category) {
    const categoryMap = {
        'art': 'هنر و زیبایی‌شناسی',
        'literature': 'ادبیات',
        'philosophy': 'فلسفه',
        'history': 'تاریخ',
        'sociology': 'جامعه‌شناسی',
        'psychology': 'روان‌شناسی'
    };
    return categoryMap[category] || category;
}

function formatContentType(type) {
    const typeMap = {
        'journal-article': 'مقاله مجله',
        'book': 'کتاب',
        'conference-paper': 'مقاله کنفرانس',
        'thesis': 'پایان‌نامه'
    };
    return typeMap[type] || type;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
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
            article.author.toLowerCase().includes(query) ||
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
            ['عنوان', 'نویسنده', 'مجله', 'سال', 'DOI', 'ناشر'],
            ...filteredArticles.map(article => [
                article.title,
                article.author,
                article.journal,
                article.year,
                article.doi,
                article.publisher
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'megapaper_search_results.csv';
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