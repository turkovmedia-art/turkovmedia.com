/* script.js - Dynamic videographer portfolio functionality */

// ==========================================================================
// 1. Video Projects Database (Easy to edit and update!)
// ==========================================================================
let videoProjects = [
    {
        "id": 1,
        "title": "My Journey with Einstein (Final version)",
        "categories": [
            "ai"
        ],
        "desc": "My Journey with Einstein (Final version)",
        "thumbnail": "https://img.youtube.com/vi/GI5NtGSD8lo/hqdefault.jpg",
        "videoUrl": "https://youtu.be/GI5NtGSD8lo",
        "client": "מנדי טורקוב הפקות",
        "year": "2026"
    },
    {
        "id": 2,
        "title": "כינוס השלוחים העולמי תשפ\"ו",
        "categories": [
            "music_summary"
        ],
        "desc": "כינוס השלוחים העולמי תשפ\"ו | קליפ סיכום",
        "thumbnail": "https://img.youtube.com/vi/6MI2JYS-iwY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/6MI2JYS-iwY",
        "client": "קליפ סיכום",
        "year": "2026"
    },
    {
        "id": 3,
        "title": "שורד השבי שגב כלפון",
        "categories": [
            "documentary"
        ],
        "desc": "שורד השבי שגב כלפון | סרטון הרצאות",
        "thumbnail": "https://img.youtube.com/vi/e_MrJiBTwIo/hqdefault.jpg",
        "videoUrl": "https://youtu.be/e_MrJiBTwIo",
        "client": "סרטון הרצאות",
        "year": "2026"
    },
    {
        "id": 4,
        "title": "קווים לדמותו",
        "categories": [
            "documentary"
        ],
        "desc": "קווים לדמותו | צבי קוגן",
        "thumbnail": "https://img.youtube.com/vi/5LRWzQaZB7c/hqdefault.jpg",
        "videoUrl": "https://youtu.be/5LRWzQaZB7c",
        "client": "צבי קוגן",
        "year": "2026"
    },
    {
        "id": 5,
        "title": "סרט מסיבות סיום",
        "categories": [
            "ai"
        ],
        "desc": "סרט מסיבות סיום | Ckids 2026",
        "thumbnail": "https://img.youtube.com/vi/a9ItNdulelw/hqdefault.jpg",
        "videoUrl": "https://youtu.be/a9ItNdulelw",
        "client": "Ckids 2026",
        "year": "2026"
    },
    {
        "id": 6,
        "title": "סרטון החטופים",
        "categories": [
            "music_summary"
        ],
        "desc": "סרטון החטופים | Cteen - טיים סקוור 2026",
        "thumbnail": "https://img.youtube.com/vi/JpbWvSZQetQ/hqdefault.jpg",
        "videoUrl": "https://youtu.be/JpbWvSZQetQ",
        "client": "Cteen - טיים סקוור 2026",
        "year": "2026"
    },
    {
        "id": 7,
        "title": "המנון בין העצים",
        "categories": [
            "music_summary"
        ],
        "desc": "המנון בין העצים | 20 שנה | גן ישראל ארץ הקודש",
        "thumbnail": "https://img.youtube.com/vi/bwGzjwyer7I/hqdefault.jpg",
        "videoUrl": "https://youtu.be/bwGzjwyer7I",
        "client": "גן ישראל ארץ הקודש",
        "year": "2026"
    },
    {
        "id": 8,
        "title": "שוורד השבי אליה כהן",
        "categories": [
            "documentary"
        ],
        "desc": "שוורד השבי אליה כהן | סרטון הרצאות",
        "thumbnail": "https://img.youtube.com/vi/GVkPM7iox8A/hqdefault.jpg",
        "videoUrl": "https://youtu.be/GVkPM7iox8A",
        "client": "סרטון הרצאות",
        "year": "2026"
    },
    {
        "id": 9,
        "title": "הגן של הקב\"ה",
        "categories": [
            "commercial"
        ],
        "desc": "הגן של הקב\"ה | cyp international",
        "thumbnail": "https://img.youtube.com/vi/jkNliTqnlK8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/jkNliTqnlK8",
        "client": "cyp international",
        "year": "2026"
    },
    {
        "id": 10,
        "title": "קליפ חלאקה",
        "categories": [
            "music_summary"
        ],
        "desc": "קליפ חלאקה | לביא לבייב",
        "thumbnail": "https://img.youtube.com/vi/PCQe2RqqoME/hqdefault.jpg",
        "videoUrl": "https://youtu.be/PCQe2RqqoME",
        "client": "לביא לבייב",
        "year": "2026"
    },
    {
        "id": 11,
        "title": "חבדניצע - ספיישל אמריקה",
        "categories": [
            "narrative"
        ],
        "desc": "חבדניצע - ספיישל אמריקה | ערוץ חב\"ד לילדים",
        "thumbnail": "https://img.youtube.com/vi/xRqZ7W3Gf8U/hqdefault.jpg",
        "videoUrl": "https://youtu.be/xRqZ7W3Gf8U",
        "client": "ערוץ חב\"ד לילדים",
        "year": "2026"
    },
    {
        "id": 12,
        "title": "ניגון ניקולייב",
        "categories": [
            "documentary"
        ],
        "desc": "ניגון ניקולייב | הסיפור המלא",
        "thumbnail": "https://img.youtube.com/vi/JGs5E3uHMBg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/JGs5E3uHMBg",
        "client": "הסיפור המלא",
        "year": "2026"
    },
    {
        "id": 13,
        "title": "רון דרמר",
        "categories": [
            "commercial"
        ],
        "desc": "רון דרמר | סרטון פתיחה להרצאה",
        "thumbnail": "https://img.youtube.com/vi/mzJotWYPVtg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/mzJotWYPVtg",
        "client": "סרטון פתיחה להרצאה",
        "year": "2026"
    },
    {
        "id": 14,
        "title": "שורדי השבי סשה טרופנוב וספיר כהן",
        "categories": [
            "documentary"
        ],
        "desc": "שורדי השבי סשה טרופנוב וספיר כהן | סרטון הרצאות",
        "thumbnail": "https://img.youtube.com/vi/X_jTRMKeuKU/hqdefault.jpg",
        "videoUrl": "https://youtu.be/X_jTRMKeuKU",
        "client": "סרטון הרצאות",
        "year": "2026"
    },
    {
        "id": 15,
        "title": "מאחורי הפרגוד",
        "categories": [
            "narrative"
        ],
        "desc": "מאחורי הפרגוד | סרט בר מצווה אביאל טל",
        "thumbnail": "https://img.youtube.com/vi/vb-GJahlBx0/hqdefault.jpg",
        "videoUrl": "https://youtu.be/vb-GJahlBx0",
        "client": "סרט בר מצווה אביאל טל",
        "year": "2026"
    },
    {
        "id": 16,
        "title": "קליפ בר מצווה",
        "categories": [
            "narrative"
        ],
        "desc": "קליפ בר מצווה | איצי אליאס",
        "thumbnail": "https://img.youtube.com/vi/QNTh9OW4paE/hqdefault.jpg",
        "videoUrl": "https://youtu.be/QNTh9OW4paE",
        "client": "איצי אליאס",
        "year": "2026"
    },
    {
        "id": 17,
        "title": "דרך האבות",
        "categories": [
            "narrative"
        ],
        "desc": "דרך האבות | בר מצווה מענדי גולדבערגר",
        "thumbnail": "https://img.youtube.com/vi/8IeILr7ng1k/hqdefault.jpg",
        "videoUrl": "https://youtu.be/8IeILr7ng1k",
        "client": "בר מצווה מענדי גולדבערגר",
        "year": "2026"
    },
    {
        "id": 18,
        "title": "סיפורה של קרן זהבי",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורה של קרן זהבי | האקדמית חמדת",
        "thumbnail": "https://img.youtube.com/vi/FtnSvFi_IpY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/FtnSvFi_IpY",
        "client": "האקדמית חמדת",
        "year": "2026"
    },
    {
        "id": 19,
        "title": "ועד התמימים תשרי",
        "categories": [
            "commercial"
        ],
        "desc": "ועד התמימים תשרי | סרט תדמית",
        "thumbnail": "https://img.youtube.com/vi/Z_rY-ZepJy8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Z_rY-ZepJy8",
        "client": "סרט תדמית",
        "year": "2026"
    },
    {
        "id": 20,
        "title": "זכרונות מהרב קרמר",
        "categories": [
            "documentary"
        ],
        "desc": "זכרונות מהרב קרמר | חב\"ד טבריה",
        "thumbnail": "https://img.youtube.com/vi/KrxaDrxai_Q/hqdefault.jpg",
        "videoUrl": "https://youtu.be/KrxaDrxai_Q",
        "client": "חב\"ד טבריה",
        "year": "2026"
    },
    {
        "id": 21,
        "title": "הקשר שלי עם הרבי",
        "categories": [
            "documentary"
        ],
        "desc": "הקשר שלי עם הרבי | ג' תמוז חב\"ד אשדוד",
        "thumbnail": "https://img.youtube.com/vi/TXm2JM15G2U/hqdefault.jpg",
        "videoUrl": "https://youtu.be/TXm2JM15G2U",
        "client": "ג' תמוז חב\"ד אשדוד",
        "year": "2026"
    },
    {
        "id": 22,
        "title": "חזון הרבי",
        "categories": [
            "commercial"
        ],
        "desc": "חזון הרבי | ג' תמוז חב\"ד אשדוד",
        "thumbnail": "https://img.youtube.com/vi/Ez0QlfPdleg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Ez0QlfPdleg",
        "client": "ג' תמוז חב\"ד אשדוד",
        "year": "2026"
    },
    {
        "id": 23,
        "title": "פרומו שבתון",
        "categories": [
            "commercial"
        ],
        "desc": "פרומו שבתון | Ckids 2025",
        "thumbnail": "https://img.youtube.com/vi/vj--N-MkGlc/hqdefault.jpg",
        "videoUrl": "https://youtu.be/vj--N-MkGlc",
        "client": "Ckids 2025",
        "year": "2026"
    },
    {
        "id": 24,
        "title": "סיום הרמב\"ם העולמי",
        "categories": [
            "commercial"
        ],
        "desc": "סיום הרמב\"ם העולמי | פרומו",
        "thumbnail": "https://img.youtube.com/vi/ws8gRyvxfjc/hqdefault.jpg",
        "videoUrl": "https://youtu.be/ws8gRyvxfjc",
        "client": "פרומו",
        "year": "2026"
    },
    {
        "id": 25,
        "title": "את\"ה כפר חב\"ד",
        "categories": [
            "commercial"
        ],
        "desc": "את\"ה כפר חב\"ד | סרטון קמפיין שותפות",
        "thumbnail": "https://img.youtube.com/vi/7LjO6vPVYxI/hqdefault.jpg",
        "videoUrl": "https://youtu.be/7LjO6vPVYxI",
        "client": "סרטון קמפיין שותפות",
        "year": "2026"
    },
    {
        "id": 26,
        "title": "כינוס השלוחות העולמי תשפ\"ו",
        "categories": [
            "music_summary"
        ],
        "desc": "כינוס השלוחות העולמי תשפ\"ו | קליפ סיכום",
        "thumbnail": "https://img.youtube.com/vi/G7dch9-IW50/hqdefault.jpg",
        "videoUrl": "https://youtu.be/G7dch9-IW50",
        "client": "קליפ סיכום",
        "year": "2026"
    },
    {
        "id": 27,
        "title": "חבדניצע מבזק מלחמה",
        "categories": [
            "narrative",
            "commercial"
        ],
        "desc": "חבדניצע מבזק מלחמה | טריילר",
        "thumbnail": "https://img.youtube.com/vi/eHM1SkmFp84/hqdefault.jpg",
        "videoUrl": "https://youtu.be/eHM1SkmFp84",
        "client": "טריילר",
        "year": "2026"
    },
    {
        "id": 28,
        "title": "גן ישראל מוסקבה תשפ\"ה",
        "categories": [
            "music_summary"
        ],
        "desc": "גן ישראל מוסקבה תשפ\"ה | קליפ סיכום",
        "thumbnail": "https://img.youtube.com/vi/99bCspkjkx8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/99bCspkjkx8",
        "client": "קליפ סיכום",
        "year": "2026"
    },
    {
        "id": 29,
        "title": "להיכנס בבריתו של אברהם אבינו",
        "categories": [
            "music_summary"
        ],
        "desc": "להיכנס בבריתו של אברהם אבינו | גן ישראל מוסקבה תשפ\"ה",
        "thumbnail": "https://img.youtube.com/vi/Jj1TJFl9HNI/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Jj1TJFl9HNI",
        "client": "גן ישראל מוסקבה תשפ\"ה",
        "year": "2026"
    },
    {
        "id": 30,
        "title": "פנסאים סמייל",
        "categories": [
            "commercial"
        ],
        "desc": "פנסאים סמייל | קמפיין שותפות",
        "thumbnail": "https://img.youtube.com/vi/UWe9Hx_kkIU/hqdefault.jpg",
        "videoUrl": "https://youtu.be/UWe9Hx_kkIU",
        "client": "קמפיין שותפות",
        "year": "2026"
    },
    {
        "id": 31,
        "title": "הרב אור זיו בסיפור אישי",
        "categories": [
            "documentary"
        ],
        "desc": "הרב אור זיו בסיפור אישי | 30 שנה חב\"ד במנורה",
        "thumbnail": "https://img.youtube.com/vi/dUpZFF3lWNY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/dUpZFF3lWNY",
        "client": "30 שנה חב\"ד במנורה",
        "year": "2026"
    },
    {
        "id": 32,
        "title": "הרב זעליג אלטוהיז בסיפור אישי מטלטל",
        "categories": [
            "documentary"
        ],
        "desc": "הרב זעליג אלטוהיז בסיפור אישי מטלטל | 30 שנה חב\"ד במנורה",
        "thumbnail": "https://img.youtube.com/vi/kR16o7-IO7s/hqdefault.jpg",
        "videoUrl": "https://youtu.be/kR16o7-IO7s",
        "client": "30 שנה חב\"ד במנורה",
        "year": "2026"
    },
    {
        "id": 33,
        "title": "אפליקציית Met@Chabad",
        "categories": [
            "commercial",
            "social"
        ],
        "desc": "אפליקציית Met@Chabad | פרסומות שיווק",
        "thumbnail": "https://img.youtube.com/vi/ErSIebQi_RU/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/ErSIebQi_RU?feature=share",
        "client": "פרסומות שיווק",
        "year": "2026"
    },
    {
        "id": 34,
        "title": "חנוכה בהיכל הקרח",
        "categories": [
            "social"
        ],
        "desc": "חנוכה בהיכל הקרח | חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/KCwAS88ofO4/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/KCwAS88ofO4?feature=share",
        "client": "חב\"ד וירג'יניה ביץ'",
        "year": "2026"
    },
    {
        "id": 35,
        "title": "אירוע חנוכה המרכזי",
        "categories": [
            "social"
        ],
        "desc": "אירוע חנוכה המרכזי | חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/lpXerr_6s-Y/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/lpXerr_6s-Y?feature=share",
        "client": "חב\"ד וירג'יניה ביץ'",
        "year": "2026"
    },
    {
        "id": 36,
        "title": "שיירת האור",
        "categories": [
            "social"
        ],
        "desc": "שיירת האור | חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/rqn5dGsqht0/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/rqn5dGsqht0?feature=share",
        "client": "חב\"ד וירג'יניה ביץ'",
        "year": "2026"
    },
    {
        "id": 37,
        "title": "חגיגת ל\"ג בעומר",
        "categories": [
            "social"
        ],
        "desc": "חגיגת ל\"ג בעומר | חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/cA6nHM-Ywec/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/cA6nHM-Ywec?feature=share",
        "client": "חב\"ד וירג'יניה ביץ'",
        "year": "2026"
    }
];

let clientLogos = [
    "C KIDS.png",
    "CYP.png",
    "JRNU.png",
    "בית הכנסת הגדול חולון.png",
    "בית תפילה אריזונה.png",
    "בני מנחם חבד חולון.png",
    "גן ישראל ארץ הקודש.png",
    "האקדמית חמדת.png",
    "הידור מצווה.png",
    "וואן מצווה.png",
    "ועד התמימים.png",
    "חב\"ד דובאי.png",
    "חב\"ד וירג'יניה ביץ'.png",
    "חב\"ד מוסקבה.png",
    "חב\"ד-מסגרת.png",
    "חרדים 10.png",
    "טענט.png",
    "כולל חב\"ד.png",
    "כינוס השלוחות.png",
    "כינוס השלוחים.png",
    "כינוס ילדי השלוחים.png",
    "מט אט חב\"ד.png",
    "מי שליח.png",
    "מינט.png",
    "מרכז 302.png",
    "מרכז רבני אירופה.png",
    "משפחות הגיבורים.png",
    "מתניה.png",
    "נפשי.png",
    "סי טין.png",
    "סיום הרמבם העולמי.png",
    "פנסאים.png",
    "צבאות השם.png",
    "צבעים הפקות.png",
    "צה\"ל.png",
    "רשת אהלי יוסף יצחק.png",
    "שפרה ופועה חולון.png",
    "שניאור קורטס.png",
    "תמים.png"
];

// ==========================================================================
// 2. DOM Elements & Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
    await initializeDatabase();
    renderCategoryFilters();
    initHeaderScroll();
    initMobileMenu();
    renderPortfolioGrid('all');
    initVideoModal();
    initScrollReveal();
    initStatsAnimator();
    initContactForm();
    initActiveNavLinkTracker();
    initLogosMarquee();
    initMarqueeDragAndScroll(); // Start smooth auto-scroll with mouse/touch drag support
    initAdminPanel();
    initVisitorAlert();
});

// ==========================================================================
// 3. Header Scroll Effect
// ==========================================================================
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==========================================================================
// 4. Mobile Menu Toggle
// ==========================================================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Toggle hamburger icon
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });
    
    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
}

// ==========================================================================
// 5. Portfolio Grid Rendering & Filtering
// ==========================================================================
function renderPortfolioGrid(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? videoProjects 
        : videoProjects.filter(p => p.categories.includes(filter));
        
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = `portfolio-item scroll-reveal`;
        card.setAttribute('data-id', project.id);
        
        card.innerHTML = `
            <div class="portfolio-thumb-box">
                <img src="${project.thumbnail}" alt="${project.title}" class="portfolio-thumb" loading="lazy">
                <div class="portfolio-overlay">
                    <div class="play-trigger">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="portfolio-meta">
                <div class="portfolio-category">${project.categories ? project.categories.map(c => getCategoryHebrew(c)).join(' | ') : getCategoryHebrew(project.category)}</div>
                <h3 class="portfolio-item-title">${project.title}</h3>
                <p class="portfolio-item-desc">${project.desc}</p>
            </div>
        `;
        
        // Add reveal classes dynamically
        grid.appendChild(card);
        
        // Immediately add click listener to trigger player
        card.addEventListener('click', () => {
            openVideoPlayer(project);
        });
    });
    
    // Trigger scroll reveal update for newly added elements
    setTimeout(() => {
        const reveals = grid.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15 });
        
        reveals.forEach(el => observer.observe(el));
    }, 50);
}

function getCategoryHebrew(cat) {
    const found = categoriesList.find(c => c.id === cat);
    return found ? found.name : cat;
}

function initPortfolioFilters() {
    const filtersContainer = document.getElementById('portfolio-filters');
    if (!filtersContainer) return;
    
    const buttons = filtersContainer.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Add a beautiful smooth exit transition to grid items before rendering new ones
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(15px)';
            });
            
            setTimeout(() => {
                renderPortfolioGrid(filterValue);
            }, 300);
        });
    });
}

// ==========================================================================
// 6. Video Player Modal (HTML5 Dialog & Embed Link Resolver)
// ==========================================================================
function initVideoModal() {
    const dialog = document.getElementById('videoDialog');
    const closeBtn = document.getElementById('closeDialog');
    
    if (!dialog || !closeBtn) return;
    
    closeBtn.addEventListener('click', () => {
        closeVideoPlayer();
    });
    
    // Close dialog when clicking outside the content area (on the backdrop)
    dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            closeVideoPlayer();
        }
    });
}

function openVideoPlayer(project) {
    const dialog = document.getElementById('videoDialog');
    const container = document.getElementById('dialogVideoContainer');
    const title = document.getElementById('dialogVideoTitle');
    const desc = document.getElementById('dialogVideoDesc');
    
    if (!dialog || !container || !title || !desc) return;
    
    title.textContent = project.title;
    desc.innerHTML = `
        <strong>לקוח:</strong> ${project.client} | <strong>שנה:</strong> ${project.year} <br>
        ${project.desc}
    `;
    
    const embedUrl = resolveEmbedUrl(project.videoUrl);
    
    if (embedUrl.isDirectVideo) {
        container.innerHTML = `
            <video controls autoplay class="modal-video-element">
                <source src="${embedUrl.url}" type="video/mp4">
                הדפדפן שלך אינו תומך בנגן הוידאו.
            </video>
        `;
    } else {
        container.innerHTML = `
            <iframe 
                src="${embedUrl.url}" 
                title="${project.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        `;
    }
    
    dialog.showModal();
}

function closeVideoPlayer() {
    const dialog = document.getElementById('videoDialog');
    const container = document.getElementById('dialogVideoContainer');
    
    if (!dialog || !container) return;
    
    // Clear innerHTML to stop video sound playing in background
    container.innerHTML = '';
    dialog.close();
}

/**
 * Resolves standard YouTube/Vimeo URLs to their Embed counterpart.
 * Supports direct .mp4 files too.
 */
function resolveEmbedUrl(url) {
    let embedObj = { url: url, isDirectVideo: false };
    
    if (!url) return embedObj;
    
    // Direct video file check
    if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) {
        embedObj.isDirectVideo = true;
        return embedObj;
    }
    
    // YouTube Shorts: youtube.com/shorts/XXXX
    if (url.includes('youtube.com/shorts/')) {
        const id = url.split('youtube.com/shorts/')[1].split('?')[0];
        embedObj.url = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
        return embedObj;
    }
    
    // YouTube Short URL: youtu.be/XXXX
    if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split('?')[0].split('/')[0];
        embedObj.url = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
        return embedObj;
    }
    
    // YouTube Full URL: youtube.com/watch?v=XXXX
    if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const id = urlParams.get('v');
        if (id) {
            embedObj.url = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
            return embedObj;
        }
    }
    
    // Vimeo: vimeo.com/XXXX
    if (url.includes('vimeo.com/')) {
        const parts = url.split('/');
        const id = parts[parts.length - 1].split('?')[0];
        embedObj.url = `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`;
        return embedObj;
    }
    
    return embedObj;
}

// ==========================================================================
// 7. Scroll Reveal Animations (IntersectionObserver)
// ==========================================================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once active, no need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
    });
    
    reveals.forEach(el => observer.observe(el));
}

// ==========================================================================
// 8. Stats Counting Animation
// ==========================================================================
function initStatsAnimator() {
    const statsSection = document.getElementById('stats-section');
    const numbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    if (!statsSection || numbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateNumbers();
                animated = true;
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(statsSection);
    
    function animateNumbers() {
        numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'), 10);
            let count = 0;
            const duration = 2000; // 2 seconds
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            const timer = setInterval(() => {
                count += Math.ceil(target / (duration / stepTime));
                if (count >= target) {
                    num.textContent = target + (target === 1000 || target === 7 ? '+' : '');
                    clearInterval(timer);
                } else {
                    num.textContent = count;
                }
            }, stepTime);
        });
    }
}

// ==========================================================================
// 9. Contact Form Handler (Direct WhatsApp Redirect Integration)
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const emailEl = document.getElementById('email');
        const email = emailEl ? emailEl.value.trim() : '';
        const message = document.getElementById('message').value.trim();
        
        if (!name || !message) {
            return; // Browser validation handles required fields, but just in case
        }
        
        if (!phone && !email) {
            alert('אנא הזן לפחות פרט קשר אחד: מספר טלפון או כתובת אימייל.');
            return;
        }
        
        // Send details to Telegram Bot
        const telegramText = `<b>📬 פנייה חדשה מאתר הפקות מולטימדיה!</b>\n\n` +
                             `👤 <b>שם מלא:</b> ${name}\n` +
                             `📞 <b>טלפון:</b> <code>${phone}</code>\n` +
                             `📧 <b>אימייל:</b> <code>${email}</code>\n\n` +
                             `💬 <b>פרטי הפרויקט:</b>\n${message}`;
        
        sendTelegramMessage(telegramText);
        
        // Send details to Email via Web3Forms
        sendEmailMessage(name, email, phone, message);
        
        // Show success animation overlay
        const formBox = document.querySelector('.contact-form-box');
        const originalContent = formBox.innerHTML;
        
        formBox.innerHTML = `
            <div class="success-message" style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease forwards;">
                <div class="success-icon" style="font-size: 4rem; color: #00f0ff; margin-bottom: 20px;">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 15px;">הודעתך התקבלה בהצלחה!</h3>
                <p style="color: #94a3b8; font-size: 1.1rem; margin-bottom: 30px;">מנדי יחזור אליך בהקדם האפשרי.</p>
                
                <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
                    <button id="sendToWhatsAppBtn" class="btn btn-primary" style="background: #25D366; box-shadow: 0 4px 15px rgba(37,211,102,0.3); border: none;">
                        שליחה ישירה לוואטסאפ של מנדי <i class="fa-brands fa-whatsapp"></i>
                    </button>
                    <button id="backToFormBtn" class="btn btn-secondary" style="font-size: 0.9rem; padding: 8px 16px;">חזרה לטופס</button>
                </div>
            </div>
        `;
        
        // Set up WhatsApp direct message redirection
        const whatsAppBtn = document.getElementById('sendToWhatsAppBtn');
        if (whatsAppBtn) {
            whatsAppBtn.addEventListener('click', () => {
                const waNumber = "972548010231"; // Mendy's actual phone number
                const text = encodeURIComponent(`היי מנדי, אני ${name}.\nהשארתי לך הודעה באתר:\n"${message}"\nטלפון לחזרה: ${phone}`);
                window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
            });
        }
        
        const backBtn = document.getElementById('backToFormBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                formBox.innerHTML = originalContent;
                // Reinitialize contact form listener
                initContactForm();
            });
        }
    });
}

// ==========================================================================
// 10. Active Nav Link Tracking on Scroll
// ==========================================================================
function initActiveNavLinkTracker() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-80px 0px -40% 0px' // Account for sticky navbar height
    });
    
    sections.forEach(sec => observer.observe(sec));
}


// ==========================================================================
// 11. Client Logos Infinite Ticker (Marquee)
// ==========================================================================

// Helper: Normalize logo elements to objects with name, src, and scale properties
function getLogoDetails(logo) {
    if (typeof logo === 'string') {
        let name = logo;
        if (logo.startsWith('data:image/')) {
            name = 'לוגו מותאם אישית';
        } else {
            name = logo.endsWith('.png') ? logo.slice(0, -4) : logo;
        }
        let scale = 1.0;
        if (name === 'שניאור קורטס') scale = 1.45;
        else if (name === 'שפרה ופועה חולון') scale = 1.25;
        else if (name === 'חב"ד' || name === 'חב"ד-מסגרת') scale = 1.25;
        else if (name === 'JRNU') scale = 0.72;
        
        return { name: name, src: logo, scale: scale };
    }
    
    let scale = logo.scale;
    if (scale === undefined) {
        if (logo.name === 'שניאור קורטס') scale = 1.45;
        else if (logo.name === 'שפרה ופועה חולון') scale = 1.25;
        else if (logo.name === 'חב"ד' || logo.name === 'חב"ד-מסגרת') scale = 1.25;
        else if (logo.name === 'JRNU') scale = 0.72;
        else scale = 1.0;
    }
    return { name: logo.name, src: logo.src, scale: parseFloat(scale) };
}

function initLogosMarquee() {
    const row1 = document.getElementById("marquee-track-1");
    const row2 = document.getElementById("marquee-track-2");
    const row3 = document.getElementById("marquee-track-3");
    const row4 = document.getElementById("marquee-track-4");
    const row5 = document.getElementById("marquee-track-5");
    
    // Select the admin panel marquee preview tracks if they exist
    const adminRow1 = document.getElementById("admin-marquee-track-1");
    const adminRow2 = document.getElementById("admin-marquee-track-2");
    const adminRow3 = document.getElementById("admin-marquee-track-3");
    const adminRow4 = document.getElementById("admin-marquee-track-4");
    const adminRow5 = document.getElementById("admin-marquee-track-5");
    
    if (!row1 || !row2 || !row3 || !row4 || !row5) return;
    
    // If no logos are present, hide the marquee wrapper to prevent errors
    const wrapper = document.querySelector('.logos-marquee-wrapper');
    if (clientLogos.length === 0) {
        if (wrapper) wrapper.style.display = 'none';
        return;
    } else {
        if (wrapper) wrapper.style.display = 'flex';
    }
    
    // Helper to get grouped logo lists for each row index (0 to 4)
    const getRowLogos = (rowIdx) => {
        if (clientLogos.length === 0) return [];
        
        const numRows = 5;
        const totalLogos = clientLogos.length;
        const groups = [];
        let startIndex = 0;
        
        // Divide logos into 5 disjoint sequential groups as evenly as possible
        for (let r = 0; r < numRows; r++) {
            const remainingRows = numRows - r;
            const remainingLogos = totalLogos - startIndex;
            const groupSize = Math.ceil(remainingLogos / remainingRows);
            groups.push(clientLogos.slice(startIndex, startIndex + groupSize));
            startIndex += groupSize;
        }
        
        const group = groups[rowIdx % numRows];
        return group || [];
    };
    
    // Generate grouped lists of logos for each of the 5 independent rows
    const logos1 = getRowLogos(0);
    const logos2 = getRowLogos(1);
    const logos3 = getRowLogos(2);
    const logos4 = getRowLogos(3);
    const logos5 = getRowLogos(4);
    
    // Helper to inject and clone images for JS-based smooth scrolling and dragging loop (exactly 3 copies)
    const fillRow = (rowElement, adminRowElement, logosArray) => {
        if (logosArray.length === 0) {
            if (rowElement) rowElement.innerHTML = '';
            if (adminRowElement) adminRowElement.innerHTML = '';
            return;
        }
        const logoHTML = logosArray.map(logo => {
            const details = getLogoDetails(logo);
            const src = details.src.startsWith('data:image/') ? details.src : `assets/client_logos/${encodeURIComponent(details.src)}`;
            const heightPx = Math.round(40 * details.scale);
            return `<img src="${src}" alt="${details.name}" style="height: ${heightPx}px;" loading="lazy">`;
        }).join('');
        
        // Ensure base content is wide enough to fill any screen (min 20 images in base content)
        // Then repeat it exactly 3 times so the translate3d range resides safely in the middle copy
        const minImagesBase = 20;
        const repeatCount = Math.max(1, Math.ceil(minImagesBase / logosArray.length));
        const baseContent = logoHTML.repeat(repeatCount);
        const content = baseContent + baseContent + baseContent;
        
        const numImagesInBase = logosArray.length * repeatCount;
        if (rowElement) {
            rowElement.innerHTML = content;
            rowElement.setAttribute('data-base-count', numImagesInBase);
        }
        if (adminRowElement) {
            adminRowElement.innerHTML = content;
            adminRowElement.setAttribute('data-base-count', numImagesInBase);
        }
    };
    
    fillRow(row1, adminRow1, logos1);
    fillRow(row2, adminRow2, logos2);
    fillRow(row3, adminRow3, logos3);
    fillRow(row4, adminRow4, logos4);
    fillRow(row5, adminRow5, logos5);
}

// 11.5 Marquee Mouse Drag Controller (JS-driven translate3d GPU-composited smooth marquee, touch drag disabled on mobile)
function initMarqueeDragAndScroll() {
    const rows = document.querySelectorAll('.marquee-row');
    rows.forEach((row) => {
        const track = row.querySelector('.marquee-track');
        if (!track) return;
        
        const isLeft = row.classList.contains('marquee-left');
        const speed = 0.6; // pixels per frame (smooth slow flow)
        const numImagesInBase = parseInt(track.getAttribute('data-base-count')) || 0;
        
        let activeDrag = false;
        let startX;
        let translateX = 0;
        
        // Mouse drag events (only active on desktop/mouse)
        row.addEventListener('mousedown', (e) => {
            activeDrag = true;
            row.classList.add('dragging');
            startX = e.pageX;
        });
        
        row.addEventListener('mouseleave', () => {
            activeDrag = false;
            row.classList.remove('dragging');
        });
        
        row.addEventListener('mouseup', () => {
            activeDrag = false;
            row.classList.remove('dragging');
        });
        
        row.addEventListener('mousemove', (e) => {
            if (!activeDrag) return;
            e.preventDefault();
            const x = e.pageX;
            const deltaX = x - startX;
            translateX += deltaX;
            startX = x;
            
            // Apply translation immediately during drag
            track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        });
        
        // Track width change detection for seamless image load scaling
        let lastTrackWidth = 0;
        let W_cached = 0;
        
        // Auto scroll loop with requestAnimationFrame
        function step() {
            const trackWidth = track.offsetWidth;
            if (trackWidth > 0) {
                let W = W_cached;
                
                // If track width changed significantly (e.g. images loaded or window resized), recalculate W
                if (trackWidth !== lastTrackWidth) {
                    if (track.children && track.children[numImagesInBase]) {
                        W = track.children[numImagesInBase].offsetLeft;
                    } else {
                        W = trackWidth / 3;
                    }
                    W_cached = W;
                    
                    // Initialize or rescale position to the middle copy (-W)
                    if (lastTrackWidth === 0) {
                        translateX = -W;
                    } else if (lastTrackWidth > 0 && Math.abs(trackWidth - lastTrackWidth) > 10) {
                        translateX = (translateX / lastTrackWidth) * trackWidth;
                    }
                    lastTrackWidth = trackWidth;
                }
                
                // Auto scroll if the user is not actively dragging
                if (!activeDrag) {
                    if (isLeft) {
                        translateX -= speed;
                    } else {
                        translateX += speed;
                    }
                }
                
                // Wrap translateX instantly into the safe middle range [-2*W, -W]
                while (translateX <= -2 * W) {
                    translateX += W;
                }
                while (translateX >= -W) {
                    translateX -= W;
                }
                
                // Render translation via GPU-composited translate3d
                track.style.transform = `translate3d(${translateX}px, 0, 0)`;
            }
            requestAnimationFrame(step);
        }
        
        // Start loop immediately
        requestAnimationFrame(step);
    });
}

// ==========================================================================
// 12. Dynamic Database Initialization & Management Panel
// ==========================================================================

const DB_VIDEOS_KEY = 'mendy_portfolio_video_projects_db';
const DB_LOGOS_KEY = 'mendy_portfolio_client_logos_db';
const DB_CATEGORIES_KEY = 'mendy_portfolio_categories_db';

let categoriesList = [];

// ==========================================================================
// Firebase Firestore Database Integration
// ==========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyC9249rv6jZ1ffzcuWmXXOqLFM2NM0E3jY",
  authDomain: "turkovmedia-c36af.firebaseapp.com",
  projectId: "turkovmedia-c36af",
  storageBucket: "turkovmedia-c36af.firebasestorage.app",
  messagingSenderId: "354082577982",
  appId: "1:354082577982:web:07e1204be3d9f10afcbb6f",
  measurementId: "G-D91LZNWHMK"
};

let db = null;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        console.log("Firebase initialized successfully!");
    } else {
        console.warn("Firebase SDK is not available.");
    }
} catch (e) {
    console.error("Error initializing Firebase:", e);
}

// Save all database arrays to Firestore under a single document for optimized quota consumption
async function saveDatabaseToFirestore() {
    if (!db) return;
    try {
        await db.collection("portfolio").doc("data").set({
            videoProjects: videoProjects,
            clientLogos: clientLogos,
            categoriesList: categoriesList,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Portfolio database successfully saved to Firestore!");
    } catch (e) {
        console.error("Error saving database to Firestore:", e);
        alert("שגיאה בשמירה לענן פיירבייס: " + e.message + "\n\nעל מנת לפתור זאת, ודא שהפעלת את Firestore ב-Firebase Console והגדרת כללי גישה (Rules) פתוחים לקריאה וכתיבה (allow read, write: if true;).");
    }
}

// Load database arrays from Firestore
async function loadDatabaseFromFirestore() {
    if (!db) return false;
    try {
        const doc = await db.collection("portfolio").doc("data").get();
        if (doc.exists) {
            const data = doc.data();
            if (data.videoProjects) videoProjects = data.videoProjects;
            if (data.clientLogos) clientLogos = data.clientLogos;
            if (data.categoriesList) categoriesList = data.categoriesList;
            return true;
        }
    } catch (e) {
        console.error("Error loading database from Firestore:", e);
    }
    return false;
}

// Synchronize all modifications to local preview (localStorage) and cloud database (Firestore)
function syncChanges() {
    // 1. Save locally for fallback
    localStorage.setItem(DB_VIDEOS_KEY, JSON.stringify(videoProjects));
    localStorage.setItem(DB_LOGOS_KEY, JSON.stringify(clientLogos));
    localStorage.setItem(DB_CATEGORIES_KEY, JSON.stringify(categoriesList));
    
    // 2. Save globally to Firestore
    saveDatabaseToFirestore();
}

// Initialize database by fetching from Firestore, and falling back to data.js/localStorage
async function initializeDatabase() {
    // 1. Try to load from Firestore cloud database
    let loaded = await loadDatabaseFromFirestore();
    
    if (loaded) {
        console.log("Successfully loaded dynamic database from Firestore!");
    } else {
        console.log("Firestore document not found or offline. Falling back to data.js defaults.");
        
        // Choose source of truth: use data.js if loaded, otherwise fall back to script.js defaults
        const sourceVideos = (typeof defaultVideoProjects !== 'undefined') ? defaultVideoProjects : videoProjects;
        const sourceLogos = (typeof defaultClientLogos !== 'undefined') ? defaultClientLogos : clientLogos;
        const sourceCategories = (typeof defaultCategories !== 'undefined') ? defaultCategories : [
            { id: "documentary", name: "תוכן דוקומנטרי" },
            { id: "narrative", name: "תוכן עלילתי" },
            { id: "commercial", name: "פרסומות וקמפיינים" },
            { id: "music_summary", name: "קליפים וסיכומים" },
            { id: "ai", name: "סרטוני AI" },
            { id: "social", name: "סושיאל" }
        ];

        const isAdmin = localStorage.getItem('mendy_portfolio_admin_remembered') === 'true';
        
        if (!isAdmin) {
            // Normal visitors load from data.js
            videoProjects = JSON.parse(JSON.stringify(sourceVideos));
            clientLogos = JSON.parse(JSON.stringify(sourceLogos));
            categoriesList = JSON.parse(JSON.stringify(sourceCategories));
        } else {
            // Admins load their pending modifications from localStorage
            const storedVideos = localStorage.getItem(DB_VIDEOS_KEY);
            videoProjects = storedVideos ? JSON.parse(storedVideos) : JSON.parse(JSON.stringify(sourceVideos));

            const storedLogos = localStorage.getItem(DB_LOGOS_KEY);
            clientLogos = storedLogos ? JSON.parse(storedLogos) : JSON.parse(JSON.stringify(sourceLogos));

            const storedCategories = localStorage.getItem(DB_CATEGORIES_KEY);
            categoriesList = storedCategories ? JSON.parse(storedCategories) : JSON.parse(JSON.stringify(sourceCategories));
        }

        // Initialize Firestore with this default data if Firestore is online
        if (db) {
            console.log("Auto-initializing Firestore document with default data...");
            await saveDatabaseToFirestore();
        }
    }

    // Run logo migrations to keep list clean
    let modified = false;
    clientLogos = clientLogos.map(logo => {
        const details = getLogoDetails(logo);
        if (details.name === 'חב"ד' || details.name === 'חבד' || details.name === 'חב"ד-מסגרת') {
            const targetSrc = 'חב\"ד-מסגרת.png';
            if (typeof logo === 'string') {
                if (logo !== targetSrc) {
                    modified = true;
                    return targetSrc;
                }
            } else if (typeof logo === 'object' && logo !== null) {
                if (logo.src !== targetSrc) {
                    modified = true;
                    logo.src = targetSrc;
                    logo.name = 'חב\"ד-מסגרת';
                }
            }
        }
        return logo;
    });
    
    const hasCortes = clientLogos.some(logo => {
        const details = getLogoDetails(logo);
        return details.src === 'שניאור קורטס.png';
    });
    if (!hasCortes) {
        clientLogos.push('שניאור קורטס.png');
        modified = true;
    }

    if (modified) {
        syncChanges();
    }
}

// Render dynamic filter buttons based on categoriesList
function renderCategoryFilters() {
    const container = document.getElementById('portfolio-filters');
    if (!container) return;

    let activeFilter = 'all';
    const activeBtn = container.querySelector('.filter-btn.active');
    if (activeBtn) {
        activeFilter = activeBtn.getAttribute('data-filter');
    }

    container.innerHTML = `<button class="filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">הכל</button>` + 
        categoriesList.map(cat => `
            <button class="filter-btn ${activeFilter === cat.id ? 'active' : ''}" data-filter="${cat.id}">${cat.name}</button>
        `).join('');

    initPortfolioFilters();
}

// Helper: Extract YouTube ID from link
function getYouTubeId(url) {
    let videoId = '';
    if (url.includes('/shorts/')) {
        videoId = url.split('/shorts/')[1].split('?')[0].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
    } else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('/embed/')) {
        videoId = url.split('/embed/')[1].split('?')[0];
    }
    return videoId;
}

// Initialize Admin Panel actions, tabs, validation, and event listeners
function initAdminPanel() {
    const triggerText = document.getElementById('admin-trigger-text');
    const authDialog = document.getElementById('adminAuthDialog');
    const panelDialog = document.getElementById('adminPanelDialog');
    
    if (!triggerText || !authDialog || !panelDialog) return;
    
    const passcodeField = document.getElementById('admin-passcode');
    const btnSubmitAuth = document.getElementById('submitAdminAuth');
    const authError = document.getElementById('admin-auth-error');
    
    const closeAuth = document.getElementById('closeAdminAuth');
    const closePanel = document.getElementById('closeAdminPanel');
    
    // Tab Elements
    const tabButtons = panelDialog.querySelectorAll('.admin-tab-btn');
    const tabContents = panelDialog.querySelectorAll('.admin-tab-content');
    
    // Form & List Elements (Videos)
    const addVideoForm = document.getElementById('admin-add-video-form');
    const videoFormTitle = document.getElementById('admin-video-form-title');
    const btnVideoSubmit = document.getElementById('btn-add-video-submit');
    const btnCancelVideoEdit = document.getElementById('btn-cancel-video-edit');
    const videoIdField = document.getElementById('admin-video-id');
    const videoNameField = document.getElementById('admin-video-name');
    const videoLinkField = document.getElementById('admin-video-link');
    const videoClientField = document.getElementById('admin-video-client');
    const videoYearField = document.getElementById('admin-video-year');
    const videoDescField = document.getElementById('admin-video-desc');
    const videoTagsContainer = document.getElementById('admin-video-tags-container');
    const allVideosContainer = document.getElementById('all-videos-list-container');
    
    // Form & List Elements (Categories)
    const addCategoryForm = document.getElementById('admin-add-category-form');
    const categoryNameField = document.getElementById('admin-category-name');
    const allCategoriesContainer = document.getElementById('all-categories-list-container');
    
    // Form & List Elements (Logos)
    const addLogoForm = document.getElementById('admin-add-logo-form');
    const logoUploadField = document.getElementById('admin-logo-upload');
    const logoPreviewContainer = document.getElementById('admin-logo-preview');
    const allLogosContainer = document.getElementById('all-logos-list-container');
    
    // ----------------------------------------------------------------------
    // Double click footer text -> Open Auth Dialog
    // ----------------------------------------------------------------------
    triggerText.addEventListener('dblclick', (e) => {
        e.preventDefault();
        if (localStorage.getItem('mendy_portfolio_admin_remembered') === 'true') {
            openAdminPanel();
        } else {
            passcodeField.value = '';
            authError.style.display = 'none';
            authDialog.showModal();
        }
    });
    
    closeAuth.addEventListener('click', () => authDialog.close());
    closePanel.addEventListener('click', () => {
        panelDialog.close();
        resetVideoForm();
    });
    
    // Submit Password Auth
    const verifyAuth = () => {
        const passcode = passcodeField.value.trim();
        if (passcode === '77077') {
            authDialog.close();
            setTimeout(() => {
                if (confirm('האם לשמור את המחשב כך שלא תצטרך להקליד שוב את הקוד?')) {
                    localStorage.setItem('mendy_portfolio_admin_remembered', 'true');
                }
                openAdminPanel();
            }, 100);
        } else {
            authError.style.display = 'block';
            const card = authDialog.querySelector('.admin-dialog-card');
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 400);
            passcodeField.value = ''; // Auto-clear incorrect code
        }
    };
    
    btnSubmitAuth.addEventListener('click', verifyAuth);
    passcodeField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyAuth();
    });
    
    // ----------------------------------------------------------------------
    // Drag and Drop Reordering Logic (Desktop Mouse & Mobile Touch)
    // ----------------------------------------------------------------------
    function initDragAndDrop(container, listName, onReorder) {
        if (!container) return;
        
        let draggedElement = null;
        let draggedIndex = -1;
        
        // --- Desktop Drag & Drop (Mouse) ---
        container.addEventListener('dragstart', (e) => {
            const item = e.target.closest('[draggable="true"]');
            if (!item) return;
            draggedElement = item;
            item.classList.add('dragging');
            
            if (listName === 'videos') {
                draggedIndex = videoProjects.findIndex(v => v.id.toString() === item.dataset.id);
            } else if (listName === 'categories') {
                draggedIndex = categoriesList.findIndex(c => c.id === item.dataset.id);
            } else if (listName === 'logos') {
                draggedIndex = parseInt(item.dataset.index);
            }
            
            e.dataTransfer.effectAllowed = 'move';
        });
        
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const item = e.target.closest('[draggable="true"]');
            if (!item || item === draggedElement) return;
            
            const bounding = item.getBoundingClientRect();
            const offset = e.clientY - bounding.top;
            if (offset > bounding.height / 2) {
                item.style.borderBottom = '2px dashed var(--accent-cyan)';
                item.style.borderTop = '';
            } else {
                item.style.borderTop = '2px dashed var(--accent-cyan)';
                item.style.borderBottom = '';
            }
        });
        
        container.addEventListener('dragleave', (e) => {
            const item = e.target.closest('[draggable="true"]');
            if (item) {
                item.style.borderTop = '';
                item.style.borderBottom = '';
            }
        });
        
        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const targetItem = e.target.closest('[draggable="true"]');
            if (!targetItem || targetItem === draggedElement) return;
            
            targetItem.style.borderTop = '';
            targetItem.style.borderBottom = '';
            
            let targetIndex = -1;
            if (listName === 'videos') {
                targetIndex = videoProjects.findIndex(v => v.id.toString() === targetItem.dataset.id);
            } else if (listName === 'categories') {
                targetIndex = categoriesList.findIndex(c => c.id === targetItem.dataset.id);
            } else if (listName === 'logos') {
                targetIndex = parseInt(targetItem.dataset.index);
            }
            
            if (draggedIndex > -1 && targetIndex > -1) {
                let list = [];
                if (listName === 'videos') list = videoProjects;
                else if (listName === 'categories') list = categoriesList;
                else if (listName === 'logos') list = clientLogos;
                
                const [reorderedItem] = list.splice(draggedIndex, 1);
                list.splice(targetIndex, 0, reorderedItem);
                
                syncChanges();
                if (onReorder) onReorder();
            }
        });
        
        container.addEventListener('dragend', (e) => {
            if (draggedElement) {
                draggedElement.classList.remove('dragging');
            }
            const items = container.querySelectorAll('[draggable="true"]');
            items.forEach(item => {
                item.style.borderTop = '';
                item.style.borderBottom = '';
            });
            draggedElement = null;
            draggedIndex = -1;
        });
        
        // --- Mobile Touch Reordering (TouchEvents conversion) ---
        let touchStartY = 0;
        let touchStartItem = null;
        let touchStartIndex = -1;
        
        container.addEventListener('touchstart', (e) => {
            const handle = e.target.closest('.cv-drag-handle, .cat-drag-handle, .logo-drag-handle');
            if (!handle) return;
            
            const item = handle.closest('[draggable="true"]');
            if (!item) return;
            
            touchStartItem = item;
            item.classList.add('dragging');
            touchStartY = e.touches[0].clientY;
            
            if (listName === 'videos') {
                touchStartIndex = videoProjects.findIndex(v => v.id.toString() === item.dataset.id);
            } else if (listName === 'categories') {
                touchStartIndex = categoriesList.findIndex(c => c.id === item.dataset.id);
            } else if (listName === 'logos') {
                touchStartIndex = parseInt(item.dataset.index);
            }
        }, { passive: false });
        
        container.addEventListener('touchmove', (e) => {
            if (!touchStartItem) return;
            
            // Prevent background page scrolling while dragging on mobile touch screen
            if (e.cancelable) {
                e.preventDefault();
            }
            
            const currentY = e.touches[0].clientY;
            const targetElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
            const item = targetElement ? targetElement.closest('[draggable="true"]') : null;
            
            const items = container.querySelectorAll('[draggable="true"]');
            items.forEach(it => {
                it.style.borderTop = '';
                it.style.borderBottom = '';
            });
            
            if (item && item !== touchStartItem) {
                const bounding = item.getBoundingClientRect();
                const offset = currentY - bounding.top;
                if (offset > bounding.height / 2) {
                    item.style.borderBottom = '2px dashed var(--accent-cyan)';
                } else {
                    item.style.borderTop = '2px dashed var(--accent-cyan)';
                }
            }
        }, { passive: false });
        
        container.addEventListener('touchend', (e) => {
            if (!touchStartItem) return;
            touchStartItem.classList.remove('dragging');
            
            const changedTouch = e.changedTouches[0];
            const targetElement = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
            const targetItem = targetElement ? targetElement.closest('[draggable="true"]') : null;
            
            const items = container.querySelectorAll('[draggable="true"]');
            items.forEach(it => {
                it.style.borderTop = '';
                it.style.borderBottom = '';
            });
            
            if (targetItem && targetItem !== touchStartItem) {
                let targetIndex = -1;
                if (listName === 'videos') {
                    targetIndex = videoProjects.findIndex(v => v.id.toString() === targetItem.dataset.id);
                } else if (listName === 'categories') {
                    targetIndex = categoriesList.findIndex(c => c.id === targetItem.dataset.id);
                } else if (listName === 'logos') {
                    targetIndex = parseInt(targetItem.dataset.index);
                }
                
                if (touchStartIndex > -1 && targetIndex > -1) {
                    let list = [];
                    if (listName === 'videos') list = videoProjects;
                    else if (listName === 'categories') list = categoriesList;
                    else if (listName === 'logos') list = clientLogos;
                    
                    const [reorderedItem] = list.splice(touchStartIndex, 1);
                    list.splice(targetIndex, 0, reorderedItem);
                    
                    syncChanges();
                    if (onReorder) onReorder();
                }
            }
            
            touchStartItem = null;
            touchStartIndex = -1;
        });
    }

    // ----------------------------------------------------------------------
    // Tab Navigation Logic
    // ----------------------------------------------------------------------
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Refresh views specific to the tab
            if (tabId === 'tab-videos') {
                renderAdminVideosList();
                initDragAndDrop(allVideosContainer, 'videos', () => { renderAdminVideosList(); renderPortfolioGrid('all'); });
                renderVideoFormCheckboxes();
            } else if (tabId === 'tab-categories') {
                renderAdminCategoriesList();
                initDragAndDrop(allCategoriesContainer, 'categories', () => { renderAdminCategoriesList(); renderCategoryFilters(); renderPortfolioGrid('all'); });
            } else if (tabId === 'tab-logos') {
                renderAdminLogosList();
                initDragAndDrop(allLogosContainer, 'logos', () => { renderAdminLogosList(); initLogosMarquee(); });
            } else if (tabId === 'tab-publish') {
                loadPublishTabToken();
            }
        });
    });
    
    function openAdminPanel() {
        // Default to Videos tab
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        tabButtons[0].classList.add('active');
        document.getElementById('tab-videos').classList.add('active');
        
        renderAdminVideosList();
        initDragAndDrop(allVideosContainer, 'videos', () => { renderAdminVideosList(); renderPortfolioGrid('all'); });
        renderVideoFormCheckboxes();
        panelDialog.showModal();
    }
    
    // ----------------------------------------------------------------------
    // TAB 1: Videos Management Panel
    // ----------------------------------------------------------------------
    
    // Render checkboxes inside the video add/edit form based on categoriesList
    function renderVideoFormCheckboxes() {
        videoTagsContainer.innerHTML = categoriesList.map(cat => `
            <label class="tag-chip-checkbox">
                <input type="checkbox" value="${cat.id}">
                <span>${cat.name}</span>
            </label>
        `).join('');
    }
    
    // Render list of ALL videos inside the panel with edit/delete buttons
    function renderAdminVideosList() {
        if (videoProjects.length === 0) {
            allVideosContainer.innerHTML = '<div class="no-custom-videos">אין סרטונים בגלריה.</div>';
            return;
        }
        
        allVideosContainer.innerHTML = videoProjects.map(video => {
            const tagBadges = (video.categories || []).map(c => `<span class="cv-tag-badge">${getCategoryHebrew(c)}</span>`).join('');
            return `
                <div class="custom-video-item" draggable="true" data-id="${video.id}">
                    <div class="cv-action-buttons">
                        <button class="cv-delete-btn" aria-label="מחק סרטון" onclick="deleteVideoItem(${video.id})">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        <button class="cv-edit-btn" aria-label="ערוך סרטון" onclick="editVideoItem(${video.id})">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>
                    <div class="cv-body" style="cursor: pointer;" onclick="playAdminVideo(${video.id})">
                        <div class="cv-info">
                            <div class="cv-title">${video.title}</div>
                            <div class="cv-tags">${tagBadges}</div>
                        </div>
                        <div class="cv-thumb-box">
                            <img src="${video.thumbnail || 'assets/placeholder.jpg'}" class="cv-thumb" alt="${video.title}">
                            <div class="cv-play-icon">
                                <i class="fa-solid fa-play"></i>
                            </div>
                        </div>
                    </div>
                    <div class="cv-drag-handle" style="cursor: grab; color: rgba(255,255,255,0.3); padding: 10px 5px 10px 15px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-grip-vertical"></i>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Reset Video Form
    function resetVideoForm() {
        addVideoForm.reset();
        videoIdField.value = '';
        videoFormTitle.textContent = 'הוספת סרטון חדש';
        btnVideoSubmit.textContent = 'הוסף סרטון לגלריה';
        btnCancelVideoEdit.style.display = 'none';
    }
    
    btnCancelVideoEdit.addEventListener('click', resetVideoForm);
    
    // Form Submit (Add or Edit)
    addVideoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const idVal = videoIdField.value;
        const title = videoNameField.value.trim();
        const videoUrl = videoLinkField.value.trim();
        const client = videoClientField.value.trim() || "מנדי טורקוב הפקות";
        const year = videoYearField.value.trim() || new Date().getFullYear().toString();
        const desc = videoDescField.value.trim() || title;
        
        const checkedBoxes = videoTagsContainer.querySelectorAll('input:checked');
        const categories = Array.from(checkedBoxes).map(cb => cb.value);
        
        if (!title || !videoUrl) return;
        if (categories.length === 0) {
            alert('אנא בחר לפחות תיוג/קטגוריה אחת עבור הסרטון.');
            return;
        }
        
        const videoId = getYouTubeId(videoUrl);
        if (!videoId) {
            alert('כתובת הסרטון אינה תקינה. אנא הזן קישור יוטיוב תקין.');
            return;
        }
        
        const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        
        if (idVal) {
            // EDITING EXISTING VIDEO
            const targetId = parseInt(idVal);
            const index = videoProjects.findIndex(v => v.id === targetId);
            if (index !== -1) {
                videoProjects[index].title = title;
                videoProjects[index].videoUrl = videoUrl;
                videoProjects[index].categories = categories;
                videoProjects[index].desc = desc;
                videoProjects[index].client = client;
                videoProjects[index].year = year;
                videoProjects[index].thumbnail = thumbnail;
            }
            alert('הסרטון עודכן בהצלחה!');
        } else {
            // ADDING NEW VIDEO
            const newProject = {
                id: Date.now(),
                title: title,
                categories: categories,
                desc: desc,
                thumbnail: thumbnail,
                videoUrl: videoUrl,
                client: client,
                year: year
            };
            videoProjects.unshift(newProject);
            alert('הסרטון נוסף בהצלחה!');
        }
        
        // Save database & refresh views
        syncChanges();
        resetVideoForm();
        renderAdminVideosList();
        renderPortfolioGrid('all');
    });
    
    // Expose edit video callbacks globally
    window.editVideoItem = function(id) {
        const video = videoProjects.find(v => v.id === id);
        if (!video) return;
        
        videoIdField.value = video.id;
        videoNameField.value = video.title;
        videoLinkField.value = video.videoUrl;
        videoClientField.value = video.client || "";
        videoYearField.value = video.year || "";
        videoDescField.value = video.desc || "";
        
        // Check corresponding checkboxes
        const checkboxes = videoTagsContainer.querySelectorAll('input');
        checkboxes.forEach(cb => {
            cb.checked = video.categories.includes(cb.value);
        });
        
        videoFormTitle.textContent = 'עריכת סרטון';
        btnVideoSubmit.textContent = 'עדכן סרטון';
        btnCancelVideoEdit.style.display = 'block';
        
        // Open mobile form view if on mobile screen
        window.openMobileForm('tab-videos');
        
        // Scroll form into view
        addVideoForm.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Expose delete video callbacks globally
    window.deleteVideoItem = function(id) {
        if (!confirm('האם אתה בטוח שברצונך למחוק סרטון זה מהגלריה?')) return;
        
        videoProjects = videoProjects.filter(v => v.id !== id);
        syncChanges();
        
        renderAdminVideosList();
        renderPortfolioGrid('all');
        
        // If the video being edited was deleted, reset the form
        if (videoIdField.value === id.toString()) {
            resetVideoForm();
        }
    };
    
    // Expose play video globally for the admin dashboard list
    window.playAdminVideo = function(id) {
        const video = videoProjects.find(v => v.id === id);
        if (video) {
            openVideoPlayer(video);
        }
    };
    
    // ----------------------------------------------------------------------
    // TAB 2: Categories Management Panel
    // ----------------------------------------------------------------------
    
    // Render list of categories
    function renderAdminCategoriesList() {
        if (categoriesList.length === 0) {
            allCategoriesContainer.innerHTML = '<div class="no-custom-videos">אין קטגוריות מוגדרות.</div>';
            return;
        }
        
        allCategoriesContainer.innerHTML = categoriesList.map(cat => `
            <div class="category-admin-item" draggable="true" data-id="${cat.id}">
                <button class="cat-delete-btn" aria-label="מחק קטגוריה" onclick="deleteCategoryItem('${cat.id}')">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                <div class="cat-info">${cat.name}</div>
                <div class="cat-drag-handle" style="cursor: grab; color: rgba(255,255,255,0.3); padding: 5px 10px; display: flex; align-items: center; justify-content: center;">
                    <i class="fa-solid fa-grip-vertical"></i>
                </div>
            </div>
        `).join('');
    }
    
    // Form Submit Add Category
    addCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = categoryNameField.value.trim();
        if (!name) return;
        
        // Generate safe unique key
        const newKey = `cat_${Date.now()}`;
        
        const newCat = {
            id: newKey,
            name: name
        };
        
        categoriesList.push(newCat);
        syncChanges();
        
        addCategoryForm.reset();
        window.closeMobileForm('tab-categories');
        renderAdminCategoriesList();
        renderCategoryFilters();
        alert('הקטגוריה נוספה בהצלחה!');
    });
    
    // Expose delete category globally
    window.deleteCategoryItem = function(id) {
        if (!confirm('האם אתה בטוח שברצונך למחוק קטגוריה זו? קטגוריה זו תוסר גם מכל הסרטונים המשויכים אליה.')) return;
        
        // 1. Remove from categories list
        categoriesList = categoriesList.filter(c => c.id !== id);
        
        // 2. Remove category from any videos that use it
        videoProjects.forEach(video => {
            if (video.categories && video.categories.includes(id)) {
                video.categories = video.categories.filter(c => c !== id);
            }
        });
        
        // 3. Save globally
        syncChanges();
        
        // 4. Refresh views
        renderAdminCategoriesList();
        renderCategoryFilters();
        renderPortfolioGrid('all');
    };
    
    // ----------------------------------------------------------------------
    // TAB 3: Logos Management Panel
    // ----------------------------------------------------------------------
    let uploadedLogoBase64 = '';
    let uploadedLogoName = '';
    
    // Read local image file and preview it (automatically transparent and white)
    logoUploadField.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        // Soft limit to 5MB to prevent browser freeze during reading
        if (file.size > 5 * 1024 * 1024) {
            alert('הקובץ שבחרת גדול מדי (מעל 5MB). אנא העלה קובץ קטן יותר.');
            logoUploadField.value = '';
            logoPreviewContainer.style.display = 'none';
            return;
        }
        
        // Extract and clean name from filename
        let name = file.name;
        if (name.includes('.')) {
            name = name.substring(0, name.lastIndexOf('.'));
        }
        uploadedLogoName = name;
        
        const reader = new FileReader();
        reader.onload = function(evt) {
            const rawBase64 = evt.target.result;
            
            // Process the logo to be white, transparent background, cropped, and resized
            processLogoToWhiteAndTransparent(rawBase64, function(processedBase64) {
                uploadedLogoBase64 = processedBase64;
                const img = logoPreviewContainer.querySelector('img');
                img.src = uploadedLogoBase64;
                logoPreviewContainer.style.display = 'block';
            });
        };
        reader.readAsDataURL(file);
    });
    
    // Add Logo Form Submit
    addLogoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!uploadedLogoBase64) return;
        
        const newLogo = {
            name: uploadedLogoName || 'לוגו מותאם אישית',
            src: uploadedLogoBase64
        };
        
        clientLogos.push(newLogo);
        syncChanges();
        
        addLogoForm.reset();
        uploadedLogoBase64 = '';
        uploadedLogoName = '';
        logoPreviewContainer.style.display = 'none';
        window.closeMobileForm('tab-logos');
        
        renderAdminLogosList();
        initLogosMarquee(); // Hot-reload the marquee running rows!
        
        alert('הלוגו נוסף בהצלחה לקרוסלה!');
    });
    
    // Render list/grid of current logos
    // Render list/grid of current logos with live scaling controls and simulator boxes
    function renderAdminLogosList() {
        if (clientLogos.length === 0) {
            allLogosContainer.innerHTML = '<div class="no-custom-videos">אין לוגואים בקרוסלה.</div>';
            return;
        }
        
        allLogosContainer.innerHTML = clientLogos.map((logo, index) => {
            const details = getLogoDetails(logo);
            const src = details.src.startsWith('data:image/') ? details.src : `assets/client_logos/${encodeURIComponent(details.src)}`;
            return `
                <div class="logo-admin-row" draggable="true" data-index="${index}">
                    <div class="logo-admin-actions">
                        <button class="logo-admin-delete-btn" aria-label="מחק לוגו" onclick="deleteLogoItem(${index})">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        <div class="scale-control-group">
                            <label>גודל: <span class="scale-val-label-${index}" style="color: var(--accent-cyan); font-weight: bold;">${Math.round(details.scale * 100)}%</span></label>
                            <input type="range" class="logo-scale-slider" min="0.5" max="2.0" step="0.05" value="${details.scale}" oninput="updateLogoScale(${index}, this.value)">
                        </div>
                    </div>
                    <div class="logo-admin-left">
                        <div class="logo-admin-preview-box-simulation">
                            <img src="${src}" alt="${details.name}" style="height: ${Math.round(40 * details.scale)}px;">
                        </div>
                        <span class="logo-admin-name">${details.name}</span>
                    </div>
                    <div class="logo-drag-handle" style="cursor: grab; color: rgba(255,255,255,0.3); padding: 10px 15px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-grip-vertical"></i>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Expose update scale callback globally
    window.updateLogoScale = function(index, val) {
        const scale = parseFloat(val);
        
        // 1. Update text label
        const label = document.querySelector(`.scale-val-label-${index}`);
        if (label) {
            label.textContent = Math.round(scale * 100) + '%';
        }
        
        // 2. Update real-time image preview height in the simulation card
        const img = document.querySelector(`.logo-admin-row[data-index="${index}"] .logo-admin-preview-box-simulation img`);
        if (img) {
            img.style.height = Math.round(40 * scale) + 'px';
        }
        
        // 3. Update database
        const logo = clientLogos[index];
        const details = getLogoDetails(logo);
        clientLogos[index] = {
            name: details.name,
            src: details.src,
            scale: scale
        };
        
        // 4. Save
        syncChanges();
        
        // 5. Hot-reload the main portfolio marquee!
        initLogosMarquee();
    };
    
    // Expose delete logo globally
    window.deleteLogoItem = function(index) {
        if (!confirm('האם אתה בטוח שברצונך למחוק לוגו זה מהקרוסלה?')) return;
        
        clientLogos.splice(index, 1);
        syncChanges();
        
        renderAdminLogosList();
        initLogosMarquee(); // Hot-reload the marquee
    };
    
    // ----------------------------------------------------------------------
    // TAB 4: Cloud Sync Database status
    // ----------------------------------------------------------------------
    const btnDownloadDb = document.getElementById('btn-download-db');
    
    window.loadPublishTabToken = function() {
        // No-op now since we are connected directly to Firebase Firestore
    };
    
    // Helper to format output data.js content
    function generateDataJsContent() {
        // Clean database objects before outputting
        const cleanVideos = videoProjects.map(v => ({
            id: v.id,
            title: v.title,
            categories: v.categories,
            desc: v.desc || v.title,
            thumbnail: v.thumbnail || `https://img.youtube.com/vi/${getYouTubeId(v.videoUrl)}/hqdefault.jpg`,
            videoUrl: v.videoUrl,
            client: v.client || '',
            year: v.year || ''
        }));
        
        return `// data.js - External database for Mendy Turkov Portfolio
// This file is loaded first to provide the default database state.

const defaultVideoProjects = ${JSON.stringify(cleanVideos, null, 4)};

const defaultClientLogos = ${JSON.stringify(clientLogos, null, 4)};

const defaultCategories = ${JSON.stringify(categoriesList, null, 4)};
`;
    }
    
    if (btnDownloadDb) {
        btnDownloadDb.addEventListener('click', () => {
            const fileContent = generateDataJsContent();
            const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'data.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
    
    const btnRestoreLocal = document.getElementById('btn-restore-local');
    if (btnRestoreLocal) {
        btnRestoreLocal.addEventListener('click', async () => {
            const localVideos = localStorage.getItem(DB_VIDEOS_KEY);
            const localLogos = localStorage.getItem(DB_LOGOS_KEY);
            const localCats = localStorage.getItem(DB_CATEGORIES_KEY);
            
            if (!localVideos && !localLogos && !localCats) {
                alert('לא נמצאו שינויים מקומיים שמורים בדפדפן זה.');
                return;
            }
            
            if (!confirm('האם אתה בטוח שברצונך לדרוס את הנתונים הנוכחיים בענן ולהעלות את השינויים השמורים מקומית בדפדפן זה?')) {
                return;
            }
            
            try {
                if (localVideos) videoProjects = JSON.parse(localVideos);
                if (localLogos) clientLogos = JSON.parse(localLogos);
                if (localCats) categoriesList = JSON.parse(localCats);
                
                await saveDatabaseToFirestore();
                
                alert('הנתונים המקומיים שוחזרו וסונכרנו בהצלחה לענן! האתר מתרענן כעת... 🎉');
                window.location.reload();
            } catch (err) {
                console.error(err);
                alert('שגיאה בשחזור הנתונים לענן: ' + err.message);
            }
        });
    }
}

/**
 * Automatically processes any raw logo image base64 data to:
 * 1. Detect background color (from corners) and key it out (make transparent).
 * 2. Convert all non-transparent logo graphic pixels to pure white.
 * 3. Crop empty transparent space surrounding the logo (autocrop).
 * 4. Scale down large logos to a standard height of 80px (maintaining aspect ratio)
 *    to prevent localStorage storage exhaustion.
 */
function processLogoToWhiteAndTransparent(dataUrl, callback) {
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        // 1. Detect background color from corners
        const corners = [
            getPixel(0, 0),
            getPixel(canvas.width - 1, 0),
            getPixel(0, canvas.height - 1),
            getPixel(canvas.width - 1, canvas.height - 1)
        ];
        
        function getPixel(x, y) {
            const idx = (y * canvas.width + x) * 4;
            return { r: data[idx], g: data[idx+1], b: data[idx+2], a: data[idx+3] };
        }
        
        let bg = corners[0];
        let isBgTransparent = (corners[0].a < 15);
        
        if (isBgTransparent) {
            for (let c of corners) {
                if (c.a >= 15) {
                    bg = c;
                    isBgTransparent = false;
                    break;
                }
            }
        }
        
        const threshold = 60;
        
        // 2. Filter pixels: make background transparent, and make foreground white
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            const a = data[i+3];
            
            if (a < 15) {
                data[i+3] = 0;
                continue;
            }
            
            if (isBgTransparent) {
                // Just make all opaque/semi-opaque pixels white, preserving original alpha
                data[i] = 255;
                data[i+1] = 255;
                data[i+2] = 255;
            } else {
                // Calculate distance to background color
                const dist = Math.sqrt(
                    Math.pow(r - bg.r, 2) + 
                    Math.pow(g - bg.g, 2) + 
                    Math.pow(b - bg.b, 2)
                );
                
                if (dist < threshold) {
                    data[i+3] = 0;
                } else {
                    data[i] = 255;
                    data[i+1] = 255;
                    data[i+2] = 255;
                }
            }
        }
        
        ctx.putImageData(imgData, 0, 0);
        
        // 3. Autocrop and scale down to 80px target height
        const croppedCanvas = scaleAndCropCanvas(canvas, 80);
        
        // 4. Return processed base64
        callback(croppedCanvas.toDataURL('image/png'));
    };
    img.src = dataUrl;
}

function scaleAndCropCanvas(canvas, targetHeight = 80) {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    
    let minX = canvas.width, maxX = 0, minY = canvas.height, maxY = 0;
    let found = false;
    
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const alpha = data[((y * canvas.width) + x) * 4 + 3];
            if (alpha > 10) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                found = true;
            }
        }
    }
    
    if (!found) return canvas;
    
    let cropWidth = (maxX - minX) + 1;
    let cropHeight = (maxY - minY) + 1;
    
    let finalWidth = cropWidth;
    let finalHeight = cropHeight;
    if (cropHeight > targetHeight) {
        const ratio = cropWidth / cropHeight;
        finalHeight = targetHeight;
        finalWidth = Math.round(targetHeight * ratio);
    }
    
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = finalWidth;
    cropCanvas.height = finalHeight;
    const cropCtx = cropCanvas.getContext('2d');
    
    cropCtx.drawImage(canvas, minX, minY, cropWidth, cropHeight, 0, 0, finalWidth, finalHeight);
    return cropCanvas;
}

// ==========================================================================
// 17. Telegram Bot Integration (Form submissions & Visitor alerts)
// ==========================================================================
async function sendTelegramMessage(text) {
    const botToken = '8841422950:AAEUONtHTMkxuyT06KVrmIWBiaX1nEzBZ2o';
    const chatId = '-5430486210';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            })
        });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

function initVisitorAlert() {
    const referrer = document.referrer;
    if (!referrer) return;
    
    try {
        const referrerUrl = new URL(referrer);
        const currentHost = window.location.hostname;
        
        // Only alert if referrer is external
        if (referrerUrl.hostname !== currentHost && !referrerUrl.hostname.endsWith('.' + currentHost)) {
            // Use sessionStorage to prevent spamming on reload/navigation
            if (!sessionStorage.getItem('telegram_visitor_alert_sent')) {
                sessionStorage.setItem('telegram_visitor_alert_sent', 'true');
                
                const timeStr = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                const pagePath = window.location.pathname || '/';
                const text = `<b>🔔 כניסת מבקר חדש לאתר!</b>\n\n` +
                             `🌐 <b>מקור (Referrer):</b> <code>${referrerUrl.hostname}</code>\n` +
                             `📄 <b>דף נחיתה:</b> <code>${pagePath}</code>\n` +
                             `⏰ <b>שעה:</b> ${timeStr}`;
                
                sendTelegramMessage(text);
            }
        }
    } catch (e) {
        console.error('Error checking referrer:', e);
    }
}

async function sendEmailMessage(name, email, phone, message) {
    const accessKey = '711193cc-865b-40ce-a08e-d7ccc9544e3f';
    const url = 'https://api.web3forms.com/submit';
    
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: '📬 פנייה חדשה מאתר מנדי טורקוב!',
                from_name: 'מנדי טורקוב הפקות',
                replyto: email, // מאפשר להשיב ישירות לגולש במייל בלחיצה על "השב"
                title: 'התקבלה פנייה חדשה באתר',
                theme: 'dark', // ערכת נושא כהה ויוקרתית המתאימה למותג
                
                // שמות שדות בעברית שיוצגו בטבלה המעוצבת במייל
                'שם מלא': name,
                'אימייל ליצירת קשר': email,
                'מספר טלפון': phone,
                'פרטי הפרויקט והודעה': message
            })
        });
    } catch (error) {
        console.error('Error sending email via Web3Forms:', error);
    }
}

// Mobile Admin Form Toggle Helpers
window.openMobileForm = function(tabId) {
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.classList.add('form-open');
    }
};

window.closeMobileForm = function(tabId) {
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.classList.remove('form-open');
        // If it was videos tab, reset the form
        if (tabId === 'tab-videos') {
            const btnCancel = document.getElementById('btn-cancel-video-edit');
            if (btnCancel && btnCancel.style.display !== 'none') {
                btnCancel.click();
            }
        }
    }
};

// Lock/Unlock background scroll when any dialog is opened/closed
const initDialogScrollObserver = () => {
    const dialogObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
                const anyDialogOpen = Array.from(document.querySelectorAll('dialog')).some(dialog => dialog.hasAttribute('open'));
                if (anyDialogOpen) {
                    document.documentElement.classList.add('modal-open');
                    document.body.classList.add('modal-open');
                } else {
                    document.documentElement.classList.remove('modal-open');
                    document.body.classList.remove('modal-open');
                }
            }
        });
    });

    document.querySelectorAll('dialog').forEach(dialog => {
        dialogObserver.observe(dialog, { attributes: true, attributeFilter: ['open'] });
        
        // Also ensure background scroll is locked if a dialog was opened prior to execution
        if (dialog.hasAttribute('open')) {
            document.documentElement.classList.add('modal-open');
            document.body.classList.add('modal-open');
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDialogScrollObserver);
} else {
    initDialogScrollObserver();
}

// Force background video autoplay on iOS/Safari (handles Low Power Mode & autoplay restrictions)
const initHeroVideosAutoplay = () => {
    const videos = [
        document.getElementById('heroVideoBgDesktop'),
        document.getElementById('heroVideoBgMobile')
    ].filter(Boolean);

    videos.forEach(video => {
        // Double-check attributes programmatically
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');

        // Try playing immediately
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay failed (e.g. low power mode, browser policies)
                // Try to play again on first user interaction (touchstart, click, scroll)
                const playOnInteraction = () => {
                    video.play().then(() => {
                        removeInteractionListeners();
                    }).catch(err => {
                        console.log("Play failed on interaction, retrying...", err);
                    });
                };

                const removeInteractionListeners = () => {
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('scroll', playOnInteraction);
                };

                document.addEventListener('touchstart', playOnInteraction, { passive: true });
                document.addEventListener('click', playOnInteraction, { passive: true });
                document.addEventListener('scroll', playOnInteraction, { passive: true });
            });
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroVideosAutoplay);
} else {
    initHeroVideosAutoplay();
}
