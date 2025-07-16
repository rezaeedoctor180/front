// Sample articles data
const sampleArticles = [
    {
        id: 1,
        title: "Quantum Computing Advances in Drug Discovery",
        authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, Dr. Emily Watson",
        journal: "Nature Quantum Computing",
        year: "2024",
        category: "physics",
        abstract: "This study presents breakthrough applications of quantum computing algorithms in accelerating drug discovery processes, reducing computational time by 75% compared to classical methods.",
        downloadUrl: "#"
    },
    {
        id: 2,
        title: "CRISPR-Cas9 Gene Editing in Neurological Disorders",
        authors: "Dr. James Kim, Dr. Lisa Thompson, Dr. Robert Brown",
        journal: "Cell Medicine",
        year: "2024",
        category: "biology",
        abstract: "We demonstrate successful application of CRISPR-Cas9 technology in treating genetic neurological disorders, showing 85% improvement in patient outcomes across clinical trials.",
        downloadUrl: "#"
    },
    {
        id: 3,
        title: "Sustainable Synthesis of Novel Organic Compounds",
        authors: "Dr. Maria Gonzalez, Dr. David Lee, Dr. Anna Petrov",
        journal: "Green Chemistry Letters",
        year: "2023",
        category: "chemistry",
        abstract: "Development of environmentally friendly synthetic pathways for complex organic molecules using renewable resources and minimizing waste production.",
        downloadUrl: "#"
    },
    {
        id: 4,
        title: "Machine Learning in Diagnostic Imaging",
        authors: "Dr. Kevin Zhang, Dr. Rachel Adams, Dr. Tom Wilson",
        journal: "Medical AI Review",
        year: "2024",
        category: "computer-science",
        abstract: "Implementation of advanced neural networks for automated medical image analysis, achieving 96% accuracy in early disease detection across multiple imaging modalities.",
        downloadUrl: "#"
    },
    {
        id: 5,
        title: "Climate Change Impact on Marine Ecosystems",
        authors: "Dr. Sophie Martin, Dr. Carlos Silva, Dr. Jennifer Clark",
        journal: "Marine Biology Today",
        year: "2023",
        category: "biology",
        abstract: "Comprehensive analysis of oceanic temperature changes and their effects on marine biodiversity, revealing critical tipping points for ecosystem preservation.",
        downloadUrl: "#"
    },
    {
        id: 6,
        title: "Breakthrough in Alzheimer's Disease Treatment",
        authors: "Dr. Helen Foster, Dr. Mark Johnson, Dr. Patricia Davis",
        journal: "Neurology International",
        year: "2024",
        category: "medicine",
        abstract: "Novel therapeutic approach targeting amyloid plaques shows promising results in Phase III clinical trials, improving cognitive function in 70% of patients.",
        downloadUrl: "#"
    }
];

// Sample comments data
let comments = [
    {
        id: 1,
        author: "Dr. John Smith",
        text: "This platform has revolutionized how I access scientific literature. The search functionality is incredibly intuitive and saves me hours of research time.",
        date: "2024-01-15"
    },
    {
        id: 2,
        author: "Sarah Research",
        text: "As a graduate student, having access to such a comprehensive database has been invaluable for my thesis research. Thank you for making science more accessible!",
        date: "2024-01-10"
    },
    {
        id: 3,
        author: "Prof. Emily Watson",
        text: "The quality of articles and the user-friendly interface make this my go-to resource for staying updated with the latest research in my field.",
        date: "2024-01-05"
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
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

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
                <h3>No articles found</h3>
                <p>Try adjusting your search criteria or browse our available categories.</p>
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
                Download PDF
            </button>
        </div>
    `).join('');
}

function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function downloadArticle(articleId) {
    const article = sampleArticles.find(a => a.id === articleId);
    if (article) {
        // Simulate download
        const downloadNotification = document.createElement('div');
        downloadNotification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        downloadNotification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Downloading "${article.title.substring(0, 30)}..."
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
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
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
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
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
        `;
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Thank you for your message! We'll get back to you within 24 hours.
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

// Comments functionality
function displayComments() {
    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #6b7280;">
                <p>No comments yet. Be the first to share your thoughts!</p>
            </div>
        `;
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();
    
    if (name && text) {
        const newComment = {
            id: comments.length + 1,
            author: name,
            text: text,
            date: new Date().toISOString().split('T')[0]
        };
        
        comments.unshift(newComment); // Add to beginning of array
        displayComments();
        commentForm.reset();
        
        // Show success animation
        const newCommentElement = commentsList.firstElementChild;
        newCommentElement.style.animation = 'slideIn 0.5s ease';
    }
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
    
    // Initial display of search results and comments
    displaySearchResults(sampleArticles);
    displayComments();
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
            ['Title', 'Authors', 'Journal', 'Year', 'Category'],
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
    color: #6b7280;
    text-align: center;
    margin-top: 0.5rem;
`;
searchShortcutsInfo.innerHTML = 'Press <kbd style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">Ctrl+K</kbd> to focus search';
document.querySelector('.search-bar').parentNode.appendChild(searchShortcutsInfo);