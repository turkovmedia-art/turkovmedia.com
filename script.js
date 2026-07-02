/* script.js - Dynamic videographer portfolio functionality */

// Dynamically load the YouTube Iframe Player API (needed for custom player controls overlay)
if (!window.YT) {
    const ytScript = document.createElement('script');
    ytScript.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(ytScript, firstScript);
}

// ==========================================================================
// 1. Video Projects Database (Easy to edit and update!)
// ==========================================================================
let videoProjects = [
    {
        "id": 3,
        "title": "מעזה לטיימס סקוור",
        "categories": [
            "documentary"
        ],
        "desc": "שורד השבי שגב כלפון | סרטון הרצאות",
        "thumbnail": "https://img.youtube.com/vi/e_MrJiBTwIo/hqdefault.jpg",
        "videoUrl": "https://youtu.be/e_MrJiBTwIo",
        "client": "שגב כלפון",
        "year": "2026",
        "aspectRatio": "21 / 9"
    },
    {
        "id": 1,
        "title": "המסע שלי עם אינשטיין",
        "categories": [
            "ai"
        ],
        "desc": "מרכז חב\"ד העולמי",
        "thumbnail": "https://img.youtube.com/vi/GI5NtGSD8lo/hqdefault.jpg",
        "videoUrl": "https://youtu.be/GI5NtGSD8lo",
        "client": "מרכז חב\"ד העולמי",
        "year": "2026"
    },
    {
        "id": 2,
        "title": "כינוס השלוחים העולמי",
        "categories": [
            "music_summary"
        ],
        "desc": "הרגעים הגדולים",
        "thumbnail": "https://img.youtube.com/vi/6MI2JYS-iwY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/6MI2JYS-iwY",
        "client": "מרכז חב\"ד העולמי",
        "year": "2026"
    },
    {
        "id": 8,
        "title": "505 ימים במנהרות עזה",
        "categories": [
            "documentary"
        ],
        "desc": "הסיפור של אליה כהן",
        "thumbnail": "https://img.youtube.com/vi/GVkPM7iox8A/hqdefault.jpg",
        "videoUrl": "https://youtu.be/GVkPM7iox8A",
        "client": "אליה כהן",
        "year": "2026",
        "aspectRatio": "21 / 9"
    },
    {
        "id": 13,
        "title": "רון דרמר",
        "categories": [
            "documentary"
        ],
        "desc": "האיש מאחורי הקלעים",
        "thumbnail": "https://img.youtube.com/vi/mzJotWYPVtg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/mzJotWYPVtg",
        "client": "רון דרמר",
        "year": "2026",
        "aspectRatio": "21 / 9"
    },
    {
        "id": 14,
        "title": "מאפילה לאורה",
        "categories": [
            "documentary"
        ],
        "desc": "שורדי השבי סשה טרופנוב וספיר כהן | סרטון הרצאות",
        "thumbnail": "https://img.youtube.com/vi/X_jTRMKeuKU/hqdefault.jpg",
        "videoUrl": "https://youtu.be/X_jTRMKeuKU",
        "client": "בית תפילה - אריזונה",
        "year": "2026",
        "aspectRatio": "21 / 9"
    },
    {
        "id": 6,
        "title": "אמונה מתחת לאדמה",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורם של מתן אילנה ושגב",
        "thumbnail": "https://img.youtube.com/vi/JpbWvSZQetQ/hqdefault.jpg",
        "videoUrl": "https://youtu.be/JpbWvSZQetQ",
        "client": "Cteen - טיים סקוור",
        "year": "2026",
        "aspectRatio": "21 / 9"
    },
    {
        "id": 26,
        "title": "כינוס השלוחות העולמי",
        "categories": [
            "music_summary"
        ],
        "desc": "הרגעים הגדולים",
        "thumbnail": "https://img.youtube.com/vi/G7dch9-IW50/hqdefault.jpg",
        "videoUrl": "https://youtu.be/G7dch9-IW50",
        "client": "מרכז חב\"ד העולמי",
        "year": "2026"
    },
    {
        "id": 5,
        "title": "מצטרפים לשרשרת הדורות",
        "categories": [
            "ai"
        ],
        "desc": "סרט מסיבות הסיום | Ckids 2026",
        "thumbnail": "https://img.youtube.com/vi/a9ItNdulelw/hqdefault.jpg",
        "videoUrl": "https://youtu.be/a9ItNdulelw",
        "client": "Ckids",
        "year": "2026"
    },
    {
        "id": 1782784852037,
        "title": "חבורת תריסר",
        "categories": [
            "narrative"
        ],
        "desc": "פרק הבכורה",
        "thumbnail": "https://img.youtube.com/vi/FcdM8uwvaFE/hqdefault.jpg",
        "videoUrl": "https://youtu.be/FcdM8uwvaFE",
        "client": "ערוץ חב\"ד לילדים",
        "year": "2026"
    },
    {
        "id": 1782878320253,
        "title": "שליחות בכל מצב",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורה של חיה קוגו",
        "thumbnail": "https://img.youtube.com/vi/dQOcX60wSIs/hqdefault.jpg",
        "videoUrl": "https://youtu.be/dQOcX60wSIs",
        "client": "צעירי אגודת חב\"ד",
        "year": "2024"
    },
    {
        "id": 1782800686794,
        "title": "החלטה של דורות",
        "categories": [
            "documentary"
        ],
        "desc": "משפחת טריסטר | ג' תמוז הפנסאים",
        "thumbnail": "https://img.youtube.com/vi/hMcE6F0RvBY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/hMcE6F0RvBY",
        "client": "הפנסאים",
        "year": "2026"
    },
    {
        "id": 10,
        "title": "החלאקה של לביא",
        "categories": [
            "music_summary"
        ],
        "desc": "קליפ מוזיקלי",
        "thumbnail": "https://img.youtube.com/vi/PCQe2RqqoME/hqdefault.jpg",
        "videoUrl": "https://youtu.be/PCQe2RqqoME",
        "client": "משפחת לבייב",
        "year": "2026"
    },
    {
        "id": 4,
        "title": "קווים לדמותו",
        "categories": [
            "documentary"
        ],
        "desc": "צבי קוגן הי\"ד",
        "thumbnail": "https://img.youtube.com/vi/5LRWzQaZB7c/hqdefault.jpg",
        "videoUrl": "https://youtu.be/5LRWzQaZB7c",
        "client": "חב\"ד דובאי",
        "year": "2025"
    },
    {
        "id": 17,
        "title": "דרך האבות",
        "categories": [
            "narrative"
        ],
        "desc": "סרט בר מצווה יודי גולדברגר",
        "thumbnail": "https://img.youtube.com/vi/8IeILr7ng1k/hqdefault.jpg",
        "videoUrl": "https://youtu.be/8IeILr7ng1k",
        "client": "יוסי גולדברגר",
        "year": "2025"
    },
    {
        "id": 1782874956448,
        "title": "אחדות תחת אש",
        "categories": [
            "documentary"
        ],
        "desc": "משה גרונברג | כינוס השלוחים",
        "thumbnail": "https://img.youtube.com/vi/H7KqI6S1JOY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/H7KqI6S1JOY",
        "client": "צעירי אגודת חב\"ד",
        "year": "2024"
    },
    {
        "id": 1782878869753,
        "title": "במקום שבו נולד הנס",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורה של בסי בן שחר",
        "thumbnail": "https://img.youtube.com/vi/LH_qz_n00Vs/hqdefault.jpg",
        "videoUrl": "https://youtu.be/LH_qz_n00Vs",
        "client": "צעירי אגודת חב\"ד",
        "year": "2024"
    },
    {
        "id": 1782881879381,
        "title": "מקטמנדו לכינוס השלוחים",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורו של מיכאל מושונוב",
        "thumbnail": "https://img.youtube.com/vi/zQzofGz-dLo/hqdefault.jpg",
        "videoUrl": "https://youtu.be/zQzofGz-dLo",
        "client": "צעירי אגודת חב\"ד",
        "year": "2024"
    },
    {
        "id": 9,
        "title": "האם העולם שבור?",
        "categories": [
            "commercial"
        ],
        "desc": "החזון של הרבי",
        "thumbnail": "https://img.youtube.com/vi/jkNliTqnlK8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/jkNliTqnlK8",
        "client": "cyp international",
        "year": "2026"
    },
    {
        "id": 7,
        "title": "המנון בין העצים",
        "categories": [
            "music_summary"
        ],
        "desc": "20 שנה לגן ישראל ארץ הקודש",
        "thumbnail": "https://img.youtube.com/vi/bwGzjwyer7I/hqdefault.jpg",
        "videoUrl": "https://youtu.be/bwGzjwyer7I",
        "client": "גן ישראל ארץ הקודש",
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
        "desc": "הסיפור המלא",
        "thumbnail": "https://img.youtube.com/vi/JGs5E3uHMBg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/JGs5E3uHMBg",
        "client": "פנסאים",
        "year": "2026"
    },
    {
        "id": 15,
        "title": "מאחורי הפרגוד",
        "categories": [
            "narrative"
        ],
        "desc": "סרט בר מצווה אביאל טל",
        "thumbnail": "https://img.youtube.com/vi/vb-GJahlBx0/hqdefault.jpg",
        "videoUrl": "https://youtu.be/vb-GJahlBx0",
        "client": "דני טל",
        "year": "2025"
    },
    {
        "id": 16,
        "title": "קרב הנפשות",
        "categories": [
            "narrative"
        ],
        "desc": "סרט בר מצווה איצי אליאס",
        "thumbnail": "https://img.youtube.com/vi/QNTh9OW4paE/hqdefault.jpg",
        "videoUrl": "https://youtu.be/QNTh9OW4paE",
        "client": "מנדי אליאס",
        "year": "2026"
    },
    {
        "id": 1782885226674,
        "title": "נבחרת ישראל",
        "categories": [
            "narrative"
        ],
        "desc": "סרט בר מצווה יעקב מרגולין",
        "thumbnail": "https://img.youtube.com/vi/PeQBGxj8kLI/hqdefault.jpg",
        "videoUrl": "https://youtu.be/PeQBGxj8kLI",
        "client": "משפחת מרגולין - בריסל",
        "year": "2024"
    },
    {
        "id": 18,
        "title": "חוסן מתוך השבר",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורה של קרן זהבי",
        "thumbnail": "https://img.youtube.com/vi/FtnSvFi_IpY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/FtnSvFi_IpY",
        "client": "האקדמית חמדת",
        "year": "2026"
    },
    {
        "id": 19,
        "title": "לוקחים אחריות",
        "categories": [
            "commercial"
        ],
        "desc": "קמפיין שותפות ועד התמימים העולמי",
        "thumbnail": "https://img.youtube.com/vi/Z_rY-ZepJy8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Z_rY-ZepJy8",
        "client": "ועד התמימים העולמי",
        "year": "2025"
    },
    {
        "id": 20,
        "title": "דמותו של שליח",
        "categories": [
            "documentary"
        ],
        "desc": "הרב יוסף קרמר ע\"ה",
        "thumbnail": "https://img.youtube.com/vi/KrxaDrxai_Q/hqdefault.jpg",
        "videoUrl": "https://youtu.be/KrxaDrxai_Q",
        "client": "חב\"ד טבריה",
        "year": "2026"
    },
    {
        "id": 21,
        "title": "שלושה סיפורים | רבי אחד",
        "categories": [
            "documentary"
        ],
        "desc": "ג' תמוז חב\"ד אשדוד",
        "thumbnail": "https://img.youtube.com/vi/TXm2JM15G2U/hqdefault.jpg",
        "videoUrl": "https://youtu.be/TXm2JM15G2U",
        "client": "חב\"ד אשדוד",
        "year": "2026"
    },
    {
        "id": 22,
        "title": "חזון הרבי",
        "categories": [
            "documentary"
        ],
        "desc": "ג' תמוז חב\"ד אשדוד",
        "thumbnail": "https://img.youtube.com/vi/Ez0QlfPdleg/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Ez0QlfPdleg",
        "client": "חב\"ד אשדוד",
        "year": "2026"
    },
    {
        "id": 23,
        "title": "פרומו שבתון",
        "categories": [
            "commercial"
        ],
        "desc": "Ckids העולמי",
        "thumbnail": "https://img.youtube.com/vi/vj--N-MkGlc/hqdefault.jpg",
        "videoUrl": "https://youtu.be/vj--N-MkGlc",
        "client": "Ckids",
        "year": "2024"
    },
    {
        "id": 24,
        "title": "פרומו סיום הרמב\"ם העולמי",
        "categories": [
            "commercial"
        ],
        "desc": "סרטון פרומו",
        "thumbnail": "https://img.youtube.com/vi/ws8gRyvxfjc/hqdefault.jpg",
        "videoUrl": "https://youtu.be/ws8gRyvxfjc",
        "client": "סיום הרמב\"ם העולמי",
        "year": "2024"
    },
    {
        "id": 25,
        "title": "איפה אתה בתמונה?",
        "categories": [
            "commercial"
        ],
        "desc": "קמפיין שותפות | את\"ה כפר חב\"ד",
        "thumbnail": "https://img.youtube.com/vi/7LjO6vPVYxI/hqdefault.jpg",
        "videoUrl": "https://youtu.be/7LjO6vPVYxI",
        "client": "את\"ה כפר חב\"ד",
        "year": "2026"
    },
    {
        "id": 27,
        "title": "חבדניצע | מבזק מלחמה",
        "categories": [
            "narrative"
        ],
        "desc": "ערוץ חב\"ד לילדים",
        "thumbnail": "https://img.youtube.com/vi/eHM1SkmFp84/hqdefault.jpg",
        "videoUrl": "https://youtu.be/eHM1SkmFp84",
        "client": "ערוץ חב\"ד לילדים",
        "year": "2026"
    },
    {
        "id": 29,
        "title": "ברית אברהם",
        "categories": [
            "music_summary"
        ],
        "desc": "גן ישראל מוסקבה תשפ\"ה",
        "thumbnail": "https://img.youtube.com/vi/Jj1TJFl9HNI/hqdefault.jpg",
        "videoUrl": "https://youtu.be/Jj1TJFl9HNI",
        "client": "חב\"ד מוסקבה",
        "year": "2026"
    },
    {
        "id": 30,
        "title": "פנסאים סמייל",
        "categories": [
            "commercial"
        ],
        "desc": "קמפיין שותפות | הפנסאים",
        "thumbnail": "https://img.youtube.com/vi/UWe9Hx_kkIU/hqdefault.jpg",
        "videoUrl": "https://youtu.be/UWe9Hx_kkIU",
        "client": "פנסאים",
        "year": "2025"
    },
    {
        "id": 31,
        "title": "האור מרעננה",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורו של אור זיו | חב\"ד במנורה",
        "thumbnail": "https://img.youtube.com/vi/dUpZFF3lWNY/hqdefault.jpg",
        "videoUrl": "https://youtu.be/dUpZFF3lWNY",
        "client": "צעירי אגודת חב\"ד",
        "year": "2026"
    },
    {
        "id": 32,
        "title": "הסוד שהחזיק אותי ברגעים הקשים",
        "categories": [
            "documentary"
        ],
        "desc": "סיפורו המטלטל של הרב זעליג אלטהויז | חב\"ד במנורה",
        "thumbnail": "https://img.youtube.com/vi/kR16o7-IO7s/hqdefault.jpg",
        "videoUrl": "https://youtu.be/kR16o7-IO7s",
        "client": "צעירי אגודת חב\"ד",
        "year": "2025"
    },
    {
        "id": 28,
        "title": "גן ישראל מוסקבה",
        "categories": [
            "music_summary"
        ],
        "desc": "קליפ סיכום",
        "thumbnail": "https://img.youtube.com/vi/99bCspkjkx8/hqdefault.jpg",
        "videoUrl": "https://youtu.be/99bCspkjkx8",
        "client": "חב\"ד מוסקבה",
        "year": "2025"
    },
    {
        "id": 33,
        "title": "אפליקציית Met@Chabad",
        "categories": [
            "commercial",
            "social"
        ],
        "desc": "פרסומות שיווק",
        "thumbnail": "https://img.youtube.com/vi/ErSIebQi_RU/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/ErSIebQi_RU?feature=share",
        "client": "פרסומות שיווק",
        "year": "2026"
    },
    {
        "id": 36,
        "title": "שיירת האור",
        "categories": [
            "social"
        ],
        "desc": "חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/rqn5dGsqht0/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/rqn5dGsqht0?feature=share",
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
        "id": 34,
        "title": "חנוכה בהיכל הקרח",
        "categories": [
            "social"
        ],
        "desc": "חב\"ד וירג'יניה ביץ'",
        "thumbnail": "https://img.youtube.com/vi/KCwAS88ofO4/hqdefault.jpg",
        "videoUrl": "https://youtube.com/shorts/KCwAS88ofO4?feature=share",
        "client": "חב\"ד וירג'יניה ביץ'",
        "year": "2026"
    },
    {
        "id": 37,
        "title": "חגיגת ל\"ג בעומר",
        "categories": [
            "social"
        ],
        "desc": "חב\"ד וירג'יניה ביץ'",
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
    {
        "name": "ברדק",
        "src": "ברדק.png",
        "scale": 1.15
    },
    {
        "name": "בית הכנסת הגדול חולון",
        "scale": 1.7,
        "src": "בית הכנסת הגדול חולון.png"
    },
    "בית תפילה אריזונה.png",
    {
        "name": "גן ישראל ארץ הקודש",
        "src": "גן ישראל ארץ הקודש.png",
        "scale": 0.95
    },
    "בני מנחם חבד חולון.png",
    {
        "name": "האקדמית חמדת",
        "src": "האקדמית חמדת.png",
        "scale": 1.45
    },
    "הידור מצווה.png",
    {
        "name": "וואן מצווה",
        "scale": 1.05,
        "src": "וואן מצווה.png"
    },
    "ועד התמימים.png",
    "חב\"ד דובאי.png",
    "חב\"ד וירג'יניה ביץ'.png",
    "חב\"ד מוסקבה.png",
    {
        "name": "חב\"ד-מסגרת",
        "src": "חב\"ד-מסגרת.png",
        "scale": 0.8
    },
    "חרדים 10.png",
    "טענט.png",
    "כולל חב\"ד.png",
    "כינוס השלוחות.png",
    "כינוס השלוחים.png",
    "כינוס ילדי השלוחים.png",
    {
        "src": "מט אט חב\"ד.png",
        "scale": 0.95,
        "name": "מט אט חב\"ד"
    },
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
    {
        "name": "צבאות השם",
        "src": "צבאות השם.png",
        "scale": 1
    },
    {
        "scale": 0.95,
        "src": "צבעים הפקות.png",
        "name": "צבעים הפקות"
    },
    "רשת אהלי יוסף יצחק.png",
    "צה\"ל.png",
    "שפרה ופועה חולון.png",
    {
        "src": "שניאור קורטס.png",
        "scale": 0.85,
        "name": "שניאור קורטס"
    },
    {
        "name": "תמים",
        "src": "תמים.png",
        "scale": 0.95
    }
];

// ==========================================================================
// 2. DOM Elements & Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDatabase();
    initLanguageSwitcher(); // Setup language translations
    initServicesAccordion(); // Setup expanding services slices
    initHeaderScroll();
    initMobileMenu();
    initVideoModal();
    initScrollReveal();
    initStatsAnimator();
    initContactForm();
    initActiveNavLinkTracker();
    initLogosMarquee();
    initMarqueeDragAndScroll(); // Start smooth auto-scroll with mouse/touch drag support
    initAdminPanel();
    initAccessibilityWidget(); // Accessibility adjustments
    initLegalDialogs(); // Legal policies dialog triggers
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
    
    // Render all categories as horizontal scrolling tracks
    categoriesList.forEach(cat => {
        const catProjects = videoProjects.filter(p => p.categories.includes(cat.id));
        if (catProjects.length === 0) return; // Skip empty categories
        
        const rowDiv = document.createElement('div');
        rowDiv.className = 'portfolio-category-row scroll-reveal';
        rowDiv.id = `row-cat-${cat.id}`;
        
        const titleH3 = document.createElement('h3');
        titleH3.className = 'portfolio-row-title';
        titleH3.textContent = getCategoryHebrew(cat.id);
        rowDiv.appendChild(titleH3);
        
        const trackDiv = document.createElement('div');
        trackDiv.className = 'portfolio-row-track';
        
        catProjects.forEach(project => {
            const displayProj = getTranslatedProject(project);
            const card = document.createElement('div');
            
            // Check if card is configured in portrait (9/16) mode
            const isVert = project.aspectRatio === '9 / 16';
            card.className = `portfolio-item scroll-reveal ${isVert ? 'vertical-card' : ''}`;
            card.setAttribute('data-id', project.id);
            
            card.innerHTML = `
                <div class="portfolio-thumb-box">
                    <img src="${displayProj.thumbnail}" alt="${displayProj.title}" class="portfolio-thumb" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="play-trigger">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="portfolio-meta">
                    <div class="portfolio-category">${displayProj.categories ? displayProj.categories.map(c => getCategoryHebrew(c)).join(' | ') : ''}</div>
                    <h3 class="portfolio-item-title">${displayProj.title}</h3>
                </div>
            `;
            
            card.addEventListener('click', () => {
                openVideoPlayer(project);
            });
            
            trackDiv.appendChild(card);
        });
        
        rowDiv.appendChild(trackDiv);
        grid.appendChild(rowDiv);
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
        }, { threshold: 0.05 });
        
        reveals.forEach(el => observer.observe(el));
    }, 50);
}

function getCategoryHebrew(cat) {
    const found = categoriesList.find(c => c.id === cat);
    if (!found) return cat;
    
    const currentLang = localStorage.getItem('mendy_portfolio_lang') || 'he';
    if (currentLang === 'en') {
        const enMap = {
            documentary: "Documentaries",
            narrative: "Narrative Films",
            commercial: "Commercials & Campaigns",
            music_summary: "Music Videos & Recaps",
            ai: "AI Videos",
            social: "Social Media"
        };
        return enMap[found.id] || found.name;
    }
    return found.name;
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
            
            if (filterValue === 'all') {
                const section = document.getElementById('portfolio');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                const row = document.getElementById(`row-cat-${filterValue}`);
                if (row) {
                    // Smooth scroll directly to corresponding category row
                    row.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
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

let lastVideoScrollY = 0;
let plyrInstance = null;

// Helper to extract YouTube video ID from various URL formats
function getYouTubeId(url) {
    if (!url) return '';
    let id = '';
    if (url.includes('youtube.com/shorts/')) {
        id = url.split('youtube.com/shorts/')[1].split('?')[0].split('/')[0];
    } else if (url.includes('youtu.be/')) {
        id = url.split('youtu.be/')[1].split('?')[0].split('/')[0];
    } else if (url.includes('youtube.com/watch')) {
        try {
            const urlParams = new URLSearchParams(new URL(url).search);
            id = urlParams.get('v');
        } catch(e) {
            const parts = url.split('v=');
            if (parts.length > 1) id = parts[1].split('&')[0];
        }
    } else if (url.includes('youtube.com/embed/')) {
        id = url.split('youtube.com/embed/')[1].split('?')[0].split('/')[0];
    }
    return id;
}

function openVideoPlayer(project) {
    const dialog = document.getElementById('videoDialog');
    const container = document.getElementById('dialogVideoContainer');
    const title = document.getElementById('dialogVideoTitle');
    const desc = document.getElementById('dialogVideoDesc');
    
    if (!dialog || !container || !title || !desc) return;
    
    const displayProj = getTranslatedProject(project);
    lastVideoScrollY = window.scrollY;
    
    // Disable smooth scroll temporarily to prevent visual slide/jump animations
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    
    title.textContent = displayProj.title;
    
    // Destroy previous Plyr player instance to prevent memory leaks
    if (plyrInstance) {
        plyrInstance.destroy();
        plyrInstance = null;
    }
    
    const ytId = getYouTubeId(project.videoUrl);
    
    if (ytId) {
        // Determine dynamic aspect ratio and vertical stretch proportions based on video layout
        let aspectRatio = project.aspectRatio || '16 / 9';
        let topPercent = '-9.5%';     // Shifts iframe up to fully hide top title bar and channel details
        let heightPercent = '119%';  // Stretches height to hide bottom player bar and logos
        
        if (project.videoUrl && project.videoUrl.includes('/shorts/')) {
            aspectRatio = '9 / 16';
            topPercent = '0%';
            heightPercent = '100%';
        } else if (aspectRatio.includes('21') || aspectRatio.includes('2.3')) {
            aspectRatio = '21 / 9';  // Set container format to widescreen
        }
        
        // Allow explicit custom database override parameters
        if (project.videoTop !== undefined) {
            topPercent = project.videoTop;
        }
        if (project.videoHeight !== undefined) {
            heightPercent = project.videoHeight;
        }
        
        container.style.aspectRatio = aspectRatio;
        container.style.setProperty('--video-top', topPercent);
        container.style.setProperty('--video-height', heightPercent);
        
        // Render Plyr video embed wrapper
        container.innerHTML = `
            <div class="plyr__video-embed" id="custom-youtube-player" style="width: 100%; height: 100%;">
                <iframe
                    src="https://www.youtube.com/embed/${ytId}?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay; fullscreen"
                ></iframe>
            </div>
        `;
        
        // Initialize Plyr player wrapper
        plyrInstance = new Plyr('#custom-youtube-player', {
            controls: [
                'play',         // Play/Pause button
                'progress',     // Timeline progress slider (drag/click to seek)
                'current-time', // Running play time
                'mute',         // Mute toggle
                'volume',       // Volume bar
                'fullscreen'    // Fullscreen toggle button
            ],
            clickToPlay: true
        });
        
        // Auto-play the video when Plyr indicates it is ready
        plyrInstance.on('ready', () => {
            plyrInstance.play().catch(e => console.log("Auto-play blocked or failed", e));
        });
        
    } else {
        // Fallback for non-YouTube files (HTML5 video player via Plyr)
        container.style.aspectRatio = '16 / 9';
        container.style.setProperty('--video-top', '0%');
        container.style.setProperty('--video-height', '100%');
        const embedUrl = resolveEmbedUrl(displayProj.videoUrl);
        container.innerHTML = `
            <video id="custom-native-player" playsinline controls style="width: 100%; height: 100%; border: none;">
                <source src="${embedUrl.url}" type="video/mp4">
            </video>
        `;
        
        plyrInstance = new Plyr('#custom-native-player', {
            controls: [
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'fullscreen'
            ],
            clickToPlay: true
        });
    }
    
    dialog.showModal();
    
    // Re-enable smooth scroll for normal navigation after dialog has rendered
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
    }, 50);
}

function closeVideoPlayer() {
    const dialog = document.getElementById('videoDialog');
    const container = document.getElementById('dialogVideoContainer');
    
    if (!dialog || !container) return;
    
    // Safely destroy the active Plyr instance to stop playback and clean up memory
    if (plyrInstance) {
        plyrInstance.destroy();
        plyrInstance = null;
    }
    
    // Disable smooth scroll temporarily so snap-back is instant and invisible
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Clear innerHTML to stop video sound playing in background
    container.innerHTML = '';
    dialog.close();
    
    // Remove freeze body scrolling class
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    
    // Restore the scroll position immediately (without animation)
    window.scrollTo(0, lastVideoScrollY);
    
    // Restore on the next frame to prevent browser default focus jumping override
    setTimeout(() => {
        window.scrollTo(0, lastVideoScrollY);
        // Re-enable smooth scroll behavior for the rest of the site
        document.documentElement.style.scrollBehavior = '';
    }, 50);
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

// Synchronously load default/cached data so that rendering can happen instantly (0ms delay)
function initializeDatabase() {
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

    // Run migrations on clientLogos immediately to ensure consistency
    let modified = false;
    if (Array.isArray(sourceLogos)) {
        sourceLogos.forEach(srcLogo => {
            const srcDetails = getLogoDetails(srcLogo);
            const exists = clientLogos.some(l => {
                const details = getLogoDetails(l);
                return details.src === srcDetails.src;
            });
            if (!exists) {
                clientLogos.push(srcLogo);
                modified = true;
            }
        });
    }

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
        localStorage.setItem(DB_LOGOS_KEY, JSON.stringify(clientLogos));
    }

    // Start background revalidation from Firestore (async, non-blocking)
    if (db) {
        revalidateDatabaseFromFirestore();
    }
}

// Revalidate cached state against Firestore in the background
async function revalidateDatabaseFromFirestore() {
    try {
        const doc = await db.collection("portfolio").doc("data").get();
        if (doc.exists) {
            const data = doc.data();
            
            // Compare stringified versions to check for changes
            const videosChanged = JSON.stringify(videoProjects) !== JSON.stringify(data.videoProjects);
            const logosChanged = JSON.stringify(clientLogos) !== JSON.stringify(data.clientLogos);
            const categoriesChanged = JSON.stringify(categoriesList) !== JSON.stringify(data.categoriesList);
            
            if (videosChanged || logosChanged || categoriesChanged) {
                console.log("Firestore revalidation: updating local state with cloud database updates.");
                
                if (data.videoProjects) videoProjects = data.videoProjects;
                if (data.clientLogos) clientLogos = data.clientLogos;
                if (data.categoriesList) categoriesList = data.categoriesList;
                
                // Re-run migration/merges to ensure consistency
                const sourceLogos = (typeof defaultClientLogos !== 'undefined') ? defaultClientLogos : clientLogos;
                if (Array.isArray(sourceLogos)) {
                    sourceLogos.forEach(srcLogo => {
                        const srcDetails = getLogoDetails(srcLogo);
                        const exists = clientLogos.some(l => {
                            const details = getLogoDetails(l);
                            return details.src === srcDetails.src;
                        });
                        if (!exists) {
                            clientLogos.push(srcLogo);
                        }
                    });
                }
                
                // Save locally to cache it
                localStorage.setItem(DB_VIDEOS_KEY, JSON.stringify(videoProjects));
                localStorage.setItem(DB_LOGOS_KEY, JSON.stringify(clientLogos));
                localStorage.setItem(DB_CATEGORIES_KEY, JSON.stringify(categoriesList));
                
                // Re-render the portfolio grid
                const activeFilterBtn = document.querySelector('.filter-btn.active');
                const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
                renderCategoryFilters();
                renderPortfolioGrid(activeFilter);
                
                // Re-initialize dynamic elements
                initLogosMarquee();
            }
        } else {
            console.log("Firestore empty. Initializing with local/default data...");
            await saveDatabaseToFirestore();
        }
    } catch (e) {
        console.error("Firestore background revalidation error:", e);
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

    const currentLang = localStorage.getItem('mendy_portfolio_lang') || 'he';
    const allText = currentLang === 'en' ? 'All' : 'הכל';
    container.innerHTML = `<button class="filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">${allText}</button>` + 
        categoriesList.map(cat => `
            <button class="filter-btn ${activeFilter === cat.id ? 'active' : ''}" data-filter="${cat.id}">${getCategoryHebrew(cat.id)}</button>
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
    const authDialog = document.getElementById('adminAuthDialog');
    const panelDialog = document.getElementById('adminPanelDialog');
    
    if (!authDialog || !panelDialog) return;
    
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
    const videoNameEnField = document.getElementById('admin-video-name-en');
    const videoLinkField = document.getElementById('admin-video-link');
    const videoClientField = document.getElementById('admin-video-client');
    const videoClientEnField = document.getElementById('admin-video-client-en');
    const videoYearField = document.getElementById('admin-video-year');
    const videoDescField = document.getElementById('admin-video-desc');
    const videoDescEnField = document.getElementById('admin-video-desc-en');
    const videoTagsContainer = document.getElementById('admin-video-tags-container');
    const videoThumbnailField = document.getElementById('admin-video-thumbnail');
    const videoIsVerticalField = document.getElementById('admin-video-is-vertical');
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
    // URL-based Admin Trigger (Stealth Access via /?mendy or /#mendy)
    // ----------------------------------------------------------------------
    const checkAdminTrigger = () => {
        const searchStr = window.location.search.toLowerCase();
        const hashStr = window.location.hash.toLowerCase();
        const hasAdminParam = searchStr.includes('mendy') || hashStr.includes('mendy');
        
        if (hasAdminParam) {
            if (localStorage.getItem('mendy_portfolio_admin_remembered') === 'true') {
                openAdminPanel();
            } else {
                passcodeField.value = '';
                authError.style.display = 'none';
                authDialog.showModal();
            }
        }
    };
    
    // Run the check on load
    checkAdminTrigger();
    
    // Also listen for hash changes so they can trigger it dynamically
    window.addEventListener('hashchange', checkAdminTrigger);
    
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
        if (videoNameEnField) videoNameEnField.value = '';
        if (videoClientEnField) videoClientEnField.value = '';
        if (videoDescEnField) videoDescEnField.value = '';
        if (videoThumbnailField) videoThumbnailField.value = '';
        if (videoIsVerticalField) videoIsVerticalField.checked = false;
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
        const titleEn = videoNameEnField ? videoNameEnField.value.trim() : '';
        const videoUrl = videoLinkField.value.trim();
        const client = videoClientField.value.trim() || "מנדי טורקוב הפקות";
        const clientEn = videoClientEnField ? videoClientEnField.value.trim() : '';
        const year = videoYearField.value.trim() || new Date().getFullYear().toString();
        const desc = videoDescField.value.trim() || title;
        const descEn = videoDescEnField ? videoDescEnField.value.trim() : '';
        
        const customThumbnail = videoThumbnailField ? videoThumbnailField.value.trim() : '';
        const isVertical = videoIsVerticalField ? videoIsVerticalField.checked : false;
        
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
        
        const thumbnail = customThumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        const aspectRatio = isVertical ? '9 / 16' : '16 / 9';
        
        if (idVal) {
            // EDITING EXISTING VIDEO
            const targetId = parseInt(idVal);
            const index = videoProjects.findIndex(v => v.id === targetId);
            if (index !== -1) {
                videoProjects[index].title = title;
                videoProjects[index].titleEn = titleEn;
                videoProjects[index].videoUrl = videoUrl;
                videoProjects[index].categories = categories;
                videoProjects[index].desc = desc;
                videoProjects[index].descEn = descEn;
                videoProjects[index].client = client;
                videoProjects[index].clientEn = clientEn;
                videoProjects[index].year = year;
                videoProjects[index].thumbnail = thumbnail;
                videoProjects[index].customThumbnail = customThumbnail;
                videoProjects[index].aspectRatio = aspectRatio;
            }
            alert('הסרטון עודכן בהצלחה!');
        } else {
            // ADDING NEW VIDEO
            const newProject = {
                id: Date.now(),
                title: title,
                titleEn: titleEn,
                categories: categories,
                desc: desc,
                descEn: descEn,
                thumbnail: thumbnail,
                customThumbnail: customThumbnail,
                videoUrl: videoUrl,
                client: client,
                clientEn: clientEn,
                year: year,
                aspectRatio: aspectRatio
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
        if (videoNameEnField) videoNameEnField.value = video.titleEn || "";
        videoLinkField.value = video.videoUrl;
        videoClientField.value = video.client || "";
        if (videoClientEnField) videoClientEnField.value = video.clientEn || "";
        videoYearField.value = video.year || "";
        videoDescField.value = video.desc || "";
        if (videoDescEnField) videoDescEnField.value = video.descEn || "";
        if (videoThumbnailField) videoThumbnailField.value = video.customThumbnail || "";
        if (videoIsVerticalField) videoIsVerticalField.checked = video.aspectRatio === '9 / 16';
        
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

// ==========================================================================
// Language Switcher & i18n System
// ==========================================================================

const translationDictionary = {
    he: {
        // Nav Menu
        nav_home: "בית",
        nav_about: "אודות",
        nav_services: "שירותים",
        nav_portfolio: "תיק עבודות",
        nav_contact: "צרו קשר",
        btn_lets_talk: "בואו נדבר",
        
        // Hero Section
        hero_main_tagline: "הדמיון שלכם. המציאות שלנו!",
        hero_subtitle: "יוצר סרטים | צלם | עורך וידאו מתקדם",
        hero_btn_portfolio: "צפו בעבודות",
        hero_btn_talk: "בואו נדבר",
        
        // About Section
        about_tag: "מי אני",
        about_title: "יוצרים מציאות דרך העדשה",
        about_bio: "שלום, אני מנדי טורקוב.",
        about_bio_detail: "יוצר סרטים, צלם שטח ואוויר, ועורך וידאו, המתמחה ביצירת תוכן קולנועי, פרסומות, קליפים וסרטוני רשת שמשאירים חותם. אני משלב צילום קרקעי ואווירי מתקדם (רחפן), עריכה קולנועית וטכנולוגיות AI כדי להפוך כל רעיון ליצירה ויזואלית סוחפת ויוצאת דופן. ברוכים הבאים לתיק העבודות שלי.",
        about_clients_title: "הגופים והמותגים שבחרו בנו:",
        stat_completed_works: "עבודות שהושלמו",
        stat_years_exp: "שנות ניסיון",
        stat_happy_clients: "לקוחות מרוצים %",
        
        // Services Section
        services_tag: "מה אני עושה",
        services_title: "תחומי התמחות",
        services_desc: "פתרונות וידאו מקיפים משלב הרעיון ועד לתוצר המוגמר ברמה הקולנועית הגבוהה ביותר.",
        
        service1_title: "צילום קולנועי",
        service1_text: "להביא את הסיפור שלך למסך הגדול. צילום שטח וסטודיו בעזרת ציוד קולנוע מקצועי, עדשות פריים אנאמורפיות, ותאורה דרמטית שמייצרת אווירה ולא רק מאירה את הסצנה.",
        
        service2_title: "עריכה קולנועית וצבע",
        service2_text: "הקסם קורה בחדר העריכה. בניית קצב וזרימה סיפורית, עיצוב פסקול ועיבוד צבע (Color Grading) המעניק לכל שוט את ה-Look הייחודי והטקסטורה הקולנועית שלו.",
        
        service3_title: "צילום אווירי ורחפן",
        service3_text: "לראות את העולם מזוויות שאף אחד לא רגיל לראות. שוטים אוויריים מרהיבים, תנועות מצלמה מורכבות ותכנון נתיבי טיסה שמכניסים אפיות, מרחב ונפח לכל הפקה.",
        
        service4_title: "בימוי וקריאייטיב",
        service4_text: "סרט טוב מתחיל ברעיון מנצח. פיצוח קונספט, כתיבת תסריט, סטוריבורד ובימוי שמוודא שכל שוט משרת את הרגש והמטרה של הפרויקט.",
        btn_view_works: "לצפייה בעבודות",
        
        // Portfolio Section
        portfolio_tag: "עבודות נבחרות",
        portfolio_title: "תיק עבודות",
        portfolio_desc: "הצצה לכמה מהפרויקטים שהובלתי. לחיצה על כל פרויקט תפתח את הסרטון לצפייה מהירה.",
        
        // Contact Section
        contact_tag: "בואו ניצור משהו מטורף",
        contact_title: "מוכנים להתחיל בפרויקט הבא?",
        contact_desc: "צרו איתי קשר לתיאום פגישה, הזמנת עבודה או סתם כדי להתייעץ על הרעיון הבא שלכם.",
        
        contact_whatsapp: "וואטסאפ מהיר",
        contact_whatsapp_desc: "לחצו לשליחת הודעה",
        contact_email: "אימייל",
        contact_phone: "טלפון",
        
        contact_form_title: "שלחו לי הודעה",
        contact_form_name: "שם מלא",
        contact_form_phone: "טלפון ליצירת קשר",
        contact_form_email: "כתובת אימייל",
        contact_form_desc: "פרטים על הפרויקט",
        contact_form_submit: "שליחת הודעה",
        
        // Placeholders
        contact_form_name_ph: "ישראל ישראלי",
        contact_form_phone_ph: "050-1234567",
        contact_form_email_ph: "name@example.com",
        contact_form_desc_ph: "ספרו לי על הפרויקט שלכם... (סוג הסרטון, אורך משוער, לוח זמנים וכדומה)",
        
        // Footer
        footer_copyright: "מנדי טורקוב הפקות מולטימדיה. כל הזכויות שמורות.",

        // Accessibility Widget
        a11y_title: "התאמות נגישות",
        a11y_text_size: "גודל טקסט",
        a11y_contrast: "ניגודיות גבוהה",
        a11y_invert: "היפוך צבעים",
        a11y_grayscale: "גווני אפור",
        a11y_links: "הדגשת קישורים",
        a11y_font: "גופן קריא",
        a11y_spacing: "ריווח טקסט מוגדל",
        a11y_animations: "עצירת אנימציות",
        a11y_cursor: "סמן עכבר גדול",
        a11y_focus: "הדגשת מיקוד מקלדת",
        a11y_reset: "איפוס הכל",
        a11y_statement_link: "הצהרת הנגישות שלנו",

        // Footer links
        link_terms: "תנאי שימוש",
        link_privacy: "מדיניות פרטיות",
        link_a11y_statement: "הצהרת נגישות",

        // Dialog titles
        terms_title: "תנאי שימוש",
        privacy_title: "מדיניות פרטיות",
        accessibility_statement_title: "הצהרת נגישות"
    },
    en: {
        // Nav Menu
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        btn_lets_talk: "Let's Talk",
        
        // Hero Section
        hero_main_tagline: "Your imagination. Our reality!",
        hero_subtitle: "Filmmaker | Photographer | Advanced Video Editor",
        hero_btn_portfolio: "View Portfolio",
        hero_btn_talk: "Let's Talk",
        
        // About Section
        about_tag: "Who Am I",
        about_title: "Creating Reality Through the Lens",
        about_bio: "Hello, I'm Mendy Turkov.",
        about_bio_detail: "Filmmaker, field and aerial videographer, and video editor specializing in cinematic content, commercials, music videos, and social media videos that leave a mark. I combine advanced ground and aerial drone shooting, cinematic editing, and AI technologies to turn every idea into an immersive and extraordinary visual piece. Welcome to my portfolio.",
        about_clients_title: "Clients and brands who chose us:",
        stat_completed_works: "Completed Projects",
        stat_years_exp: "Years Experience",
        stat_happy_clients: "Happy Clients %",
        
        // Services Section
        services_tag: "What I Do",
        services_title: "Areas of Expertise",
        services_desc: "Comprehensive video solutions from the concept stage to the final product at the highest cinematic level.",
        
        service1_title: "Cinematic Videography",
        service1_text: "Bringing your story to the big screen. Premium field and studio shooting utilizing professional cinema rigs, anamorphic prime lenses, and dramatic lighting designed to build atmosphere, not just light a scene.",
        
        service2_title: "Color & Post-Production",
        service2_text: "The magic happens in the cutting room. Shaping narrative rhythm and flow, immersive sound design, and color grading that gives every shot its signature cinematic look and texture.",
        
        service3_title: "Aerial Cinematography",
        service3_text: "Seeing the world from perspectives people aren't used to. Dynamic aerial shots, complex camera movements, and flight path designs that add epic scale, depth, and production value.",
        
        service4_title: "Creative Direction & Directing",
        service4_text: "A great film starts with a powerful idea. Conceptual development, scripting, storyboarding, and directing that ensures every visual element serves the emotion and objective of the project.",
        btn_view_works: "View Projects",
        
        // Portfolio Section
        portfolio_tag: "Selected Works",
        portfolio_title: "Portfolio",
        portfolio_desc: "A glimpse of some of the projects I've led. Click on any project to watch the video.",
        
        // Contact Section
        contact_tag: "Let's Build Something Crazy",
        contact_title: "Ready to start your next project?",
        contact_desc: "Contact me to schedule a meeting, order a video, or just consult on your next big idea.",
        
        contact_whatsapp: "Quick WhatsApp",
        contact_whatsapp_desc: "Click to send a message",
        contact_email: "Email",
        contact_phone: "Phone",
        
        contact_form_title: "Send Me a Message",
        contact_form_name: "Full Name",
        contact_form_phone: "Phone Number",
        contact_form_email: "Email Address",
        contact_form_desc: "Project details",
        contact_form_submit: "Send Message",
        
        // Placeholders
        contact_form_name_ph: "John Doe",
        contact_form_phone_ph: "050-1234567",
        contact_form_email_ph: "name@example.com",
        contact_form_desc_ph: "Tell me about your project... (video type, estimated duration, timeline, etc.)",
        
        // Footer
        footer_copyright: "Mendy Turkov Multimedia Productions. All rights reserved.",

        // Accessibility Widget
        a11y_title: "Accessibility Adjustments",
        a11y_text_size: "Text Size",
        a11y_contrast: "High Contrast",
        a11y_invert: "Invert Colors",
        a11y_grayscale: "Grayscale / Monochrome",
        a11y_links: "Underline Links",
        a11y_font: "Readable Font",
        a11y_spacing: "Increased Spacing",
        a11y_animations: "Stop Animations",
        a11y_cursor: "Large Cursor",
        a11y_focus: "Keyboard Focus Highlight",
        a11y_reset: "Reset All",
        a11y_statement_link: "Accessibility Statement",

        // Footer links
        link_terms: "Terms of Use",
        link_privacy: "Privacy Policy",
        link_a11y_statement: "Accessibility Statement",

        // Dialog titles
        terms_title: "Terms of Use",
        privacy_title: "Privacy Policy",
        accessibility_statement_title: "Accessibility Statement"
    }
};

function updateLanguageUI() {
    const currentLang = localStorage.getItem('mendy_portfolio_lang') || 'he';
    
    // Set html attributes for language and layout direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    
    // Translate text of all marked elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translationDictionary[currentLang][key];
        if (translation) {
            // Keep icons inside the buttons if there are any
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = translation + ' ' + icon.outerHTML;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Translate form input placeholders
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const descInput = document.getElementById('message');
    
    if (nameInput) nameInput.placeholder = translationDictionary[currentLang].contact_form_name_ph;
    if (phoneInput) phoneInput.placeholder = translationDictionary[currentLang].contact_form_phone_ph;
    if (emailInput) emailInput.placeholder = translationDictionary[currentLang].contact_form_email_ph;
    if (descInput) descInput.placeholder = translationDictionary[currentLang].contact_form_desc_ph;
    
    // Update language switcher button text
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'עב' : 'EN';
    }
    
    // Rerender category filters in the newly selected language
    renderCategoryFilters();
    
    // Keep active portfolio filter active, then refresh grid to reflect translations
    const filtersContainer = document.getElementById('portfolio-filters');
    let activeFilter = 'all';
    if (filtersContainer) {
        const activeBtn = filtersContainer.querySelector('.filter-btn.active');
        if (activeBtn) {
            activeFilter = activeBtn.getAttribute('data-filter');
        }
    }
    renderPortfolioGrid(activeFilter);
    
    // Update legal policies content in dialogs
    if (typeof updateLegalTextsContent === 'function') {
        updateLegalTextsContent(currentLang);
    }
}

function initLanguageSwitcher() {
    const langBtn = document.getElementById('langSwitch');
    if (!langBtn) return;
    
    // Set initial state from localStorage or default to Hebrew
    if (!localStorage.getItem('mendy_portfolio_lang')) {
        localStorage.setItem('mendy_portfolio_lang', 'he');
    }
    
    // Update the UI to match the current selection
    updateLanguageUI();
    
    // Add click listener to switch language
    langBtn.addEventListener('click', () => {
        const currentLang = localStorage.getItem('mendy_portfolio_lang') || 'he';
        const newLang = currentLang === 'en' ? 'he' : 'en';
        localStorage.setItem('mendy_portfolio_lang', newLang);
        updateLanguageUI();
    });
}

// ==========================================================================
// Accessibility & Legal Documents Logic
// ==========================================================================

const legalTexts = {
    he: {
        terms: `
            <p>ברוכים הבאים לאתר תיק העבודות של מנדי טורקוב הפקות מולטימדיה. השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. גלישה או שימוש כלשהו באתר מהווים הסכמה מלאה לתנאים אלו.</p>
            
            <h4>1. מטרת האתר והשימוש בו</h4>
            <p>האתר הינו אתר תדמיתי ותיק עבודות המציג סרטונים, צילומים, עבודות עריכה ויצירות ויזואליות שהופקו על ידי מנדי טורקוב. האתר מיועד לשימוש אישי והתרשמות בלבד של לקוחות פוטנציאליים ומבקרים.</p>
            
            <h4>2. קניין רוחני וזכויות יוצרים</h4>
            <p>כל התכנים באתר, לרבות סרטוני וידאו, מוזיקה, שירים, תמונות, גרפיקה, לוגו, עיצובים, קוד מקור וטקסטים, מוגנים על ידי חוקי זכויות יוצרים של מדינת ישראל ואמנות בינלאומיות. כל הזכויות שמורות למנדי טורקוב ו/או ליוצרים ושותפים בהתאמה.</p>
            <p>חל איסור מוחלט להעתיק, לשכפל, להפיץ, להציג בפומבי, לשדר, למכור או לעשות כל שימוש מסחרי או אחר בתכני האתר ללא קבלת אישור מפורש בכתב ומראש ממנדי טורקוב.</p>
            
            <h4>3. הגבלת אחריות</h4>
            <p>האתר ותכניו מוצעים למשתמשים כפי שהם ("AS IS"). מנדי טורקוב אינו נושא באחריות כלשהי, מפורשת או משתמעת, לגבי תפקוד האתר, זמינותו או התאמתו למטרה מסוימת. כמו כן, בעל האתר לא יהיה אחראי לכל נזק ישיר או עקיף שייגרם כתוצאה מהשימוש באתר או מתקלות טכניות.</p>
            
            <h4>4. שינויים באתר ובתנאים</h4>
            <p>בעל האתר שומר לעצמו את הזכות לעדכן, לשנות או להסיר תכנים מהאתר, או לעדכן את תנאי שימוש אלו בכל עת וללא הודעה מוקדמת.</p>
            
            <h4>5. סמכות שיפוט</h4>
            <p>על תנאים אלו יחולו אך ורק דיני מדינת ישראל. כל מחלוקת או הליך משפטי הנוגע לאתר או לתנאי שימוש אלו יתבררו אך ורק בבתי המשפט המוסמכים במחוז תל אביב-יפו.</p>
        `,
        privacy: `
            <p>מנדי טורקוב הפקות מולטימדיה מייחס חשיבות עליונה להגנה על פרטיות המשתמשים באתר. מדיניות פרטיות זו מפרטת איזה מידע נאסף וכיצד נעשה בו שימוש, בהתאם לחוק הגנת הפרטיות הישראלי (התשמ"א-1981) ולתקנות הגנת המידע הכלליות של האיחוד האירופי (GDPR).</p>
            
            <h4>1. איזה מידע אנו אוספים?</h4>
            <p>אנו אוספים מידע אישי מזהה רק כאשר אתה בוחר למלא את טופס יצירת הקשר באתר. המידע כולל:</p>
            <ul>
                <li>שם מלא</li>
                <li>מספר טלפון ליצירת קשר</li>
                <li>כתובת אימייל</li>
                <li>פרטים והסברים על הפרויקט שאתה מעוניין בו</li>
            </ul>
            <p>בנוסף, האתר עושה שימוש בקבצי זיכרון מקומיים (LocalStorage) כדי לשמור את העדפות השפה והגדרות הנגישות שבחרת, לשיפור חווית הגלישה שלך.</p>
            
            <h4>2. מה אנו עושים עם המידע?</h4>
            <p>המידע האישי שנמסר על ידך משמש אך ורק למטרות הבאות:</p>
            <ul>
                <li>מתן מענה לפנייתך ויצירת קשר חוזר לגבי הזמנת עבודות הפקה וצילום.</li>
                <li>תיאום פרויקטים ומתן שירות איכותי ומותאם אישית.</li>
            </ul>
            <p>אנו מתחייבים שלא למכור, להשכיר, להפיץ או לשתף את המידע האישי שלך עם שום גורם שלישי ללא הסכמתך המפורשת, למעט במקרים בהם נידרש לעשות כן על פי חוק.</p>
            
            <h4>3. שמירה ואבטחת מידע</h4>
            <p>אנו מיישמים אמצעי אבטחה טכנולוגיים וארגוניים מתאימים כדי להגן על המידע האישי שלך מפני גישה לא מורשית, אובדן, שינוי או חשיפה.</p>
            
            <h4>4. זכויותיך על המידע (GDPR וחוקי הגנת הפרטיות)</h4>
            <p>בהתאם לחוק, אתה זכאי בכל עת לממש את הזכויות הבאות לגבי המידע האישי שלך שנשמר אצלנו:</p>
            <ul>
                <li>לעיין במידע האישי שלך המוחזק על ידינו.</li>
                <li>לבקש לתקן מידע שאינו מדויק או אינו מעודכן.</li>
                <li>לבקש למחוק לצמיתות את המידע האישי שלך ממערכותינו ("הזכות להישכח").</li>
            </ul>
            <p>למימוש זכויות אלו, ניתן לפנות אלינו ישירות בדוא"ל: <a href="mailto:turkovmedia@gmail.com" style="color:var(--accent-cyan);text-decoration:underline;">turkovmedia@gmail.com</a>.</p>
        `,
        accessibility: `
            <p>אנו במנדי טורקוב הפקות מולטימדיה מאמינים בשוויון הזדמנויות ובמתן גישה מלאה לתכנים דיגיטליים עבור כלל הגולשים. האתר נבנה והונגש מתוך כוונה לספק חווית גלישה שוויונית, נוחה ועצמאית עבור אנשים עם מוגבלויות, תוך עמידה בדרישות החוק הישראלי והתקנים הבינלאומיים.</p>
            
            <h4>1. עמידה בתקן ורמת הנגישות</h4>
            <p>אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013. התאמות הנגישות בוצעו על פי המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת **AA** ובהתאם למסמך ההנחיות הבינלאומי WCAG 2.1.</p>
            
            <h4>2. התאמות עיקריות שבוצעו באתר</h4>
            <ul>
                <li><strong>ניווט מקלדת:</strong> תמיכה מלאה בניווט והפעלת קישורים וכפתורים באמצעות מקשי המקלדת בלבד (Tab, Enter, Space).</li>
                <li><strong>הדגשת פוקוס:</strong> הוספת מסגרת בולטת ומוארת לכל אלמנט שמקבל פוקוס מקלדת.</li>
                <li><strong>נגן וידאו נגיש:</strong> תמיכה בנגנים נגישים (YouTube ו-HTML5) המאפשרים שליטה מלאה מהמקלדת.</li>
                <li><strong>כלי נגישות צף:</strong> הוספת תפריט נגישות ייעודי המאפשר שליטה דינמית על:
                    <ul>
                        <li>הגדלת והקטנת גופנים ללא פגיעה במבנה האתר.</li>
                        <li>ניגודיות צבעים גבוהה (ערכת נושא שחור-צהוב).</li>
                        <li>היפוך צבעים מלא.</li>
                        <li>המרת צבעי האתר לגווני אפור (עבור עיוורי צבעים).</li>
                        <li>הדגשה קו תחתון בולט לכל הקישורים.</li>
                        <li>שינוי גופן הגלילה לגופן קריא וברור (Sans-Serif).</li>
                        <li>ריווח טקסט מוגדל (מרווחי שורות ואותיות).</li>
                        <li>עצירת אנימציות וסרטוני רקע.</li>
                        <li>סמן עכבר שחור וגדול במיוחד.</li>
                    </ul>
                </li>
            </ul>
            
            <h4>3. פרטי רכז הנגישות ויצירת קשר</h4>
            <p>אם במהלך הגלישה באתר נתקלתם בקושי, תקלה או בעיית נגישות, אנו מתנצלים על כך ונשמח אם תפנו אלינו כדי שנוכל לתקן ולשפר את הנושא בהקדם האפשרי.</p>
            <p>פרטי רכז הנגישות באתר:</p>
            <ul>
                <li><strong>שם:</strong> מנדי טורקוב</li>
                <li><strong>טלפון ליצירת קשר:</strong> <a href="tel:+972548010231" style="color:var(--accent-cyan);text-decoration:underline;">054-801-0231</a></li>
                <li><strong>כתובת אימייל לפניות:</strong> <a href="mailto:turkovmedia@gmail.com" style="color:var(--accent-cyan);text-decoration:underline;">turkovmedia@gmail.com</a></li>
            </ul>
            <p>תאריך עדכון הצהרת הנגישות: 1 ביולי 2026.</p>
        `
    },
    en: {
        terms: `
            <p>Welcome to the portfolio website of Mendy Turkov Multimedia Productions. Your access to and use of this website is conditioned on your acceptance of and compliance with these Terms of Use. By browsing or using this site, you agree to these terms in full.</p>
            
            <h4>1. Purpose of the Website and Usage</h4>
            <p>This website is a promotional showcase and portfolio exhibiting videos, photography, and multimedia productions created by Mendy Turkov. The site is intended for personal review and informational purposes of potential clients and visitors only.</p>
            
            <h4>2. Intellectual Property and Copyrights</h4>
            <p>All content on this website, including but not limited to video clips, music, audio, photos, graphics, logos, layouts, source code, and text, is protected by copyright laws of the State of Israel and international treaties. All rights are reserved to Mendy Turkov and/or respective creators or partners.</p>
            <p>Any reproduction, copying, distribution, public display, broadcasting, selling, or commercial usage of any content from this site is strictly prohibited without prior explicit written authorization from Mendy Turkov.</p>
            
            <h4>3. Limitation of Liability</h4>
            <p>The website and its contents are provided to users "AS IS". Mendy Turkov makes no warranties, express or implied, regarding the website's functionality, availability, or suitability for any specific purpose. Furthermore, the owner of this website shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or from technical errors.</p>
            
            <h4>4. Amendments to Site and Terms</h4>
            <p>We reserve the right to update, modify, or remove content from the website, or update these Terms of Use at any time without prior notice.</p>
            
            <h4>5. Governing Law and Jurisdiction</h4>
            <p>These terms shall be governed solely by the laws of the State of Israel. Any dispute or legal proceeding relating to this website or these terms shall be resolved exclusively in the competent courts of the Tel Aviv-Yafo district.</p>
        `,
        privacy: `
            <p>Mendy Turkov Multimedia Productions values your privacy. This Privacy Policy details what information is collected, how it is processed and protected, in accordance with the Israeli Privacy Protection Law (5741-1981) and the European Union General Data Protection Regulation (GDPR).</p>
            
            <h4>1. What Information Do We Collect?</h4>
            <p>We collect personally identifiable information only when you choose to fill out the contact form on our website. This information includes:</p>
            <ul>
                <li>Full Name</li>
                <li>Contact Phone Number</li>
                <li>Email Address</li>
                <li>Project Description and details</li>
            </ul>
            <p>In addition, the website uses browser local storage (LocalStorage) to store your language preferences and accessibility adjustments in order to improve your browsing experience.</p>
            
            <h4>2. How Do We Use the Information?</h4>
            <p>Personal information provided by you is used exclusively for the following purposes:</p>
            <ul>
                <li>Answering your inquiries and getting in touch regarding production, editing, or filming services.</li>
                <li>Coordinating projects and providing customized, high-quality production services.</li>
            </ul>
            <p>We guarantee that we do not sell, rent, distribute, or share your personal data with any third party without your explicit consent, unless required to do so by law.</p>
            
            <h4>3. Security and Storage</h4>
            <p>We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, alteration, or disclosure.</p>
            
            <h4>4. Your Data Rights (GDPR & Privacy Laws)</h4>
            <p>Under privacy regulations, you have the right at any time to exercise the following rights regarding your personal data:</p>
            <ul>
                <li>Access your personal data held by us.</li>
                <li>Request correction of inaccurate or outdated information.</li>
                <li>Request permanent deletion of your personal data from our systems ("Right to be Forgotten").</li>
            </ul>
            <p>To exercise these rights, please contact us directly via email at: <a href="mailto:turkovmedia@gmail.com" style="color:var(--accent-cyan);text-decoration:underline;">turkovmedia@gmail.com</a>.</p>
        `,
        accessibility: `
            <p>We at Mendy Turkov Multimedia Productions believe in equal opportunities and providing full digital access to our content for all visitors. The website has been designed and accessible with the intention of providing a comfortable, equal, and independent browsing experience for people with disabilities, complying with Israeli regulations and international accessibility standards.</p>
            
            <h4>1. Standard Compliance and Level</h4>
            <p>This website complies with the Equal Rights for Persons with Disabilities Regulations (Accessibility Adjustments for Services), 5773-2013. Adjustments have been carried out in accordance with Israeli Standard IS 5568 Level **AA** and Web Content Accessibility Guidelines (WCAG) 2.1.</p>
            
            <h4>2. Key Accessibility Features Implemented</h4>
            <ul>
                <li><strong>Keyboard Navigation:</strong> Full support for navigating and activating links/buttons using only the keyboard (Tab, Enter, Space).</li>
                <li><strong>Focus Indicator:</strong> Added a high-contrast glowing outline to all elements receiving keyboard focus.</li>
                <li><strong>Accessible Video Player:</strong> Supports keyboard control for embedded video frames (YouTube & HTML5).</li>
                <li><strong>Floating Accessibility Widget:</strong> Allows dynamic adjustments including:
                    <ul>
                        <li>Increasing or decreasing text size without breaking layout.</li>
                        <li>High contrast display (yellow text on black background).</li>
                        <li>Full color inversion.</li>
                        <li>Monochrome/grayscale display (for colorblind users).</li>
                        <li>Underlining all active links.</li>
                        <li>Changing typography to a highly readable Sans-Serif font (Arial/Assistant).</li>
                        <li>Increased text spacing (letters, words, line spacing).</li>
                        <li>Pausing animations, transition delays, and hero video loops.</li>
                        <li>Enabling an extra-large dark mouse cursor.</li>
                    </ul>
                </li>
            </ul>
            
            <h4>3. Accessibility Coordinator & Feedback</h4>
            <p>If you encounter any difficulty, bug, or accessibility barrier while browsing our site, we apologize and encourage you to contact us directly so we can resolve it as soon as possible.</p>
            <p>Accessibility Coordinator contact details:</p>
            <ul>
                <li><strong>Name:</strong> Mendy Turkov</li>
                <li><strong>Phone Number:</strong> <a href="tel:+972548010231" style="color:var(--accent-cyan);text-decoration:underline;">+972-54-801-0231</a></li>
                <li><strong>Email Address:</strong> <a href="mailto:turkovmedia@gmail.com" style="color:var(--accent-cyan);text-decoration:underline;">turkovmedia@gmail.com</a></li>
            </ul>
            <p>Accessibility Statement Last Updated: July 1, 2026.</p>
        `
    }
};

function updateLegalTextsContent(lang) {
    const termsBody = document.getElementById('termsBody');
    const privacyBody = document.getElementById('privacyBody');
    const accessibilityStatementBody = document.getElementById('accessibilityStatementBody');
    
    if (termsBody) termsBody.innerHTML = legalTexts[lang].terms;
    if (privacyBody) privacyBody.innerHTML = legalTexts[lang].privacy;
    if (accessibilityStatementBody) accessibilityStatementBody.innerHTML = legalTexts[lang].accessibility;
}

// ==========================================================================
// Accessibility Settings State & Logic
// ==========================================================================

let a11yState = {
    textSize: 100, // 100% to 150% in steps of 10
    contrast: false,
    invert: false,
    grayscale: false,
    links: false,
    font: false,
    spacing: false,
    animations: false,
    cursor: false,
    focus: false
};

function loadAccessibilitySettings() {
    const saved = localStorage.getItem('mendy_portfolio_a11y');
    if (saved) {
        try {
            a11yState = { ...a11yState, ...JSON.parse(saved) };
        } catch (e) {
            console.error("Error parsing saved accessibility settings", e);
        }
    }
    applyAccessibilitySettings();
    updateAccessibilityWidgetUI();
}

function saveAccessibilitySettings() {
    localStorage.setItem('mendy_portfolio_a11y', JSON.stringify(a11yState));
}

function applyAccessibilitySettings() {
    // 1. Text Size (adjust html base font size)
    const sizePercent = a11yState.textSize;
    document.documentElement.style.fontSize = sizePercent === 100 ? '' : `${sizePercent}%`;
    const percentDisplay = document.getElementById('a11y-text-percent');
    if (percentDisplay) percentDisplay.textContent = `${sizePercent}%`;

    // 2. Class-based toggles on body
    const body = document.body;
    
    const classMappings = {
        contrast: 'a11y-contrast',
        invert: 'a11y-invert',
        grayscale: 'a11y-grayscale',
        links: 'a11y-links',
        font: 'a11y-font',
        spacing: 'a11y-spacing',
        animations: 'a11y-animations',
        cursor: 'a11y-cursor',
        focus: 'a11y-focus'
    };

    for (const [key, className] of Object.entries(classMappings)) {
        if (a11yState[key]) {
            body.classList.add(className);
        } else {
            body.classList.remove(className);
        }
    }

    // 3. Stop animations extra: pause background video playback if animations are disabled
    const desktopVideo = document.getElementById('heroVideoBgDesktop');
    const mobileVideo = document.getElementById('heroVideoBgMobile');
    
    if (a11yState.animations) {
        if (desktopVideo) desktopVideo.pause();
        if (mobileVideo) mobileVideo.pause();
    } else {
        // Only play if they were playing before
        if (desktopVideo && desktopVideo.paused) desktopVideo.play().catch(() => {});
        if (mobileVideo && mobileVideo.paused) mobileVideo.play().catch(() => {});
    }
}

function updateAccessibilityWidgetUI() {
    // Update active class on toggle buttons inside panel
    const toggles = ['contrast', 'invert', 'grayscale', 'links', 'font', 'spacing', 'animations', 'cursor', 'focus'];
    toggles.forEach(key => {
        const btn = document.getElementById(`toggle-${key}`);
        if (btn) {
            if (a11yState[key]) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        }
    });
}

function resetAccessibilitySettings() {
    a11yState = {
        textSize: 100,
        contrast: false,
        invert: false,
        grayscale: false,
        links: false,
        font: false,
        spacing: false,
        animations: false,
        cursor: false,
        focus: false
    };
    applyAccessibilitySettings();
    updateAccessibilityWidgetUI();
    saveAccessibilitySettings();
}

// ==========================================================================
// Accessibility Panel & Legal Dialogs Event Listeners
// ==========================================================================

function initAccessibilityWidget() {
    const floaterBtn = document.getElementById('accessibility-btn');
    const widgetPanel = document.getElementById('accessibility-widget');
    const closeBtn = document.getElementById('close-a11y');
    const resetBtn = document.getElementById('a11y-reset-btn');
    
    const textDecBtn = document.getElementById('a11y-text-dec');
    const textIncBtn = document.getElementById('a11y-text-inc');
    
    if (!floaterBtn || !widgetPanel) return;

    // Load initial settings
    loadAccessibilitySettings();

    // Toggle panel visibility
    floaterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = widgetPanel.style.display !== 'none';
        widgetPanel.style.display = isOpen ? 'none' : 'flex';
        floaterBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    // Close panel
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            widgetPanel.style.display = 'none';
            floaterBtn.setAttribute('aria-expanded', 'false');
        });
    }

    // Close on click outside panel
    document.addEventListener('click', (e) => {
        if (widgetPanel.style.display !== 'none' && !widgetPanel.contains(e.target) && e.target !== floaterBtn && !floaterBtn.contains(e.target)) {
            widgetPanel.style.display = 'none';
            floaterBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Prevent clicks inside panel from closing it
    widgetPanel.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Text size controllers
    if (textDecBtn) {
        textDecBtn.addEventListener('click', () => {
            if (a11yState.textSize > 100) {
                a11yState.textSize -= 10;
                applyAccessibilitySettings();
                saveAccessibilitySettings();
            }
        });
    }

    if (textIncBtn) {
        textIncBtn.addEventListener('click', () => {
            if (a11yState.textSize < 150) {
                a11yState.textSize += 10;
                applyAccessibilitySettings();
                saveAccessibilitySettings();
            }
        });
    }

    // Toggle buttons
    const toggles = ['contrast', 'invert', 'grayscale', 'links', 'font', 'spacing', 'animations', 'cursor', 'focus'];
    toggles.forEach(key => {
        const btn = document.getElementById(`toggle-${key}`);
        if (btn) {
            btn.addEventListener('click', () => {
                a11yState[key] = !a11yState[key];
                
                // Exclusivity: Contrast and Invert shouldn't work together nicely
                if (key === 'contrast' && a11yState.contrast) {
                    a11yState.invert = false;
                } else if (key === 'invert' && a11yState.invert) {
                    a11yState.contrast = false;
                }

                applyAccessibilitySettings();
                updateAccessibilityWidgetUI();
                saveAccessibilitySettings();
            });
        }
    });

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetAccessibilitySettings();
        });
    }

    // Accessibility statement button inside widget
    const statementBtn = document.getElementById('a11y-statement-btn');
    const a11yDialog = document.getElementById('accessibilityStatementDialog');
    if (statementBtn && a11yDialog) {
        statementBtn.addEventListener('click', () => {
            widgetPanel.style.display = 'none';
            floaterBtn.setAttribute('aria-expanded', 'false');
            a11yDialog.showModal();
        });
    }
}

function initLegalDialogs() {
    const termsDialog = document.getElementById('termsDialog');
    const privacyDialog = document.getElementById('privacyDialog');
    const a11yDialog = document.getElementById('accessibilityStatementDialog');

    const openTermsBtn = document.getElementById('btn-open-terms');
    const openPrivacyBtn = document.getElementById('btn-open-privacy');
    const openA11yBtn = document.getElementById('btn-open-a11y');

    const closeTermsBtn = document.getElementById('closeTerms');
    const closePrivacyBtn = document.getElementById('closePrivacy');
    const closeA11yBtn = document.getElementById('closeAccessibilityStatement');

    // Open listeners
    if (openTermsBtn && termsDialog) openTermsBtn.addEventListener('click', () => termsDialog.showModal());
    if (openPrivacyBtn && privacyDialog) openPrivacyBtn.addEventListener('click', () => privacyDialog.showModal());
    if (openA11yBtn && a11yDialog) openA11yBtn.addEventListener('click', () => a11yDialog.showModal());

    // Close listeners
    if (closeTermsBtn && termsDialog) closeTermsBtn.addEventListener('click', () => termsDialog.close());
    if (closePrivacyBtn && privacyDialog) closePrivacyBtn.addEventListener('click', () => privacyDialog.close());
    if (closeA11yBtn && a11yDialog) closeA11yBtn.addEventListener('click', () => a11yDialog.close());

    // Close on overlay backdrop clicks
    const setupBackdropClose = (dialog) => {
        if (!dialog) return;
        dialog.addEventListener('click', (e) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialog.close();
            }
        });
    };

    setupBackdropClose(termsDialog);
    setupBackdropClose(privacyDialog);
    setupBackdropClose(a11yDialog);
}

// Video Projects Translation Dictionary
const videoTranslations = {
    "ברדק": {
        title: "Bardak",
        desc: "Internet Room | Comedy Sketch",
        client: "Bardak"
    },
    "שניאור קורטס": {
        title: "Shneor Cortes",
        desc: "Special Summary Film",
        client: "Shneor Cortes"
    },
    "מעזה לטיימס סקוור": {
        title: "From Gaza to Times Square",
        desc: "Hostage Survivor Segev Khalfian | Lecture Video",
        client: "Segev Khalfian"
    },
    "המסע שלי עם אינשטיין": {
        title: "My Journey with Einstein",
        desc: "Chabad World Center Special Documentary",
        client: "Chabad World Center"
    },
    "כינוס השלוחים העולמי": {
        title: "International Conference of Chabad Shluchim",
        desc: "The Greatest Highlights and Moments",
        client: "Chabad World Center"
    },
    "505 ימים במנהרות עזה": {
        title: "505 Days in Gaza Tunnels",
        desc: "The Story of Hostage Eliya Cohen",
        client: "Eliya Cohen"
    },
    "רון דרמר": {
        title: "Ron Dermer",
        desc: "The Man Behind the Scenes of Israel's Diplomacy",
        client: "Ron Dermer"
    },
    "מאפילה לאורה": {
        title: "From Darkness to Light",
        desc: "Hostage Survivors Sasha Trupanov & Sapir Cohen | Lecture Film",
        client: "Chabad AZ Temple"
    },
    "אמונה מתחת לאדמה": {
        title: "Faith Underground",
        desc: "The Story of Matan, Ilana, and Segev in times of crisis",
        client: "Cteen - Times Square"
    },
    "כינוס השלוחות העולמי": {
        title: "International Conference of Chabad Shluchot",
        desc: "The Greatest Highlights and Moments of the Shluchot",
        client: "Chabad World Center"
    },
    "מצטרפים לשרשרת הדורות": {
        title: "Joining the Chain of Generations",
        desc: "Graduation Gala Video | CKids 2026",
        client: "CKids"
    },
    "חבורת תריסר": {
        title: "The Dozen Gang",
        desc: "The Premiere Launch Episode",
        client: "Chabad Kids Channel"
    },
    "שליחות בכל מצב": {
        title: "Shlichus in Every Situation",
        desc: "The Inspiring Story of Chaya Kogo",
        client: "Chaya Kogo"
    },
    "החלטה של דורות": {
        title: "A Generational Decision",
        desc: "The Trister Family Story | Gimmel Tammuz HaPansaim",
        client: "HaPansaim"
    },
    "החלאקה של לביא": {
        title: "Lavi's Upsherin",
        desc: "Celebrating Lavi's first haircut | Music Video",
        client: "Lavi's Family"
    },
    "קווים לדמותו": {
        title: "In Memory Of Zvi Kogan",
        desc: "Rabbi Zvi Kogan HY\"D | Memorial Highlights",
        client: "Zvi Kogan Memorial"
    },
    "דרך האבות": {
        title: "The Path of the Fathers",
        desc: "Yudi Goldberger Bar Mitzvah Film",
        client: "Goldberger Family"
    },
    "אחדות תחת אש": {
        title: "Unity Under Fire",
        desc: "Moshe Grunberg | Conference of Shluchim Keynote",
        client: "Conference of Shluchim"
    },
    "במקום שבו נולד הנס": {
        title: "Where the Miracle Was Born",
        desc: "The Story of Bessie Ben Shachar",
        client: "Bessie Ben Shachar"
    },
    "מקטמנדו לכינוס השלוחים": {
        title: "From Kathmandu to the Shluchim Conference",
        desc: "The Story of Michael Moshonov in Nepal",
        client: "Chabad of Nepal"
    },
    "האם העולם שבור?": {
        title: "Is the World Broken?",
        desc: "The Rebbe's Vision on Global Challenges",
        client: "The Rebbe's Vision"
    },
    "המנון בין העצים": {
        title: "Anthem Among the Trees",
        desc: "Celebrating 20 Years of Gan Israel Holy Land",
        client: "Gan Israel Holy Land"
    },
    "חבדניצע - ספיישל אמריקה": {
        title: "Chabadnitza - America Special",
        desc: "Chabadnitza America Road Trip Special | Kids Channel",
        client: "Chabad Kids Channel"
    },
    "ניגון ניקולייב": {
        title: "Niggun Nikolayev",
        desc: "The Full Historical Story of the Famous Melody",
        client: "Niggun Project"
    },
    "מאחורי הפרגוד": {
        title: "Behind the Scenes",
        desc: "Aviel Tal Bar Mitzvah Celebration Film",
        client: "Aviel Tal Family"
    },
    "קרב הנפשות": {
        title: "Battle of Souls",
        desc: "Itzi Elias Bar Mitzvah Celebration Film",
        client: "Itzi Elias Family"
    },
    "נבחרת ישראל": {
        title: "Team Israel",
        desc: "Yaakov Margolin Bar Mitzvah Celebration Film",
        client: "Margolin Family"
    },
    "חוסן מתוך השבר": {
        title: "Resilience From the Crisis",
        desc: "The Heartbreaking yet Inspiring Story of Keren Zehavi",
        client: "Keren Zehavi"
    },
    "לוקחים אחריות": {
        title: "Taking Responsibility",
        desc: "Vaad Talmidei Hatmimim International Partnership Campaign",
        client: "Vaad Hatmimim"
    },
    "דמותו של שליח": {
        title: "The Image of a Shliach",
        desc: "In Memory of Rabbi Yosef Kramer OB\"M",
        client: "Rabbi Yosef Kramer OB\"M"
    },
    "שלושה סיפורים | רבי אחד": {
        title: "Three Stories | One Rebbe",
        desc: "Gimmel Tammuz Special | Chabad Ashdod",
        client: "Chabad Ashdod"
    },
    "חזון הרבי": {
        title: "The Rebbe's Vision",
        desc: "Gimmel Tammuz Special Presentation | Chabad Ashdod",
        client: "Chabad Ashdod"
    },
    "פרומו שבתון": {
        title: "CKids Shabbaton Promo",
        desc: "International CKids Shabbaton Promotional Video",
        client: "International CKids"
    },
    "פרומו סיום הרמב\"ם העולמי": {
        title: "International Siyum HaRambam Promo",
        desc: "Promotional campaign video for the global celebration",
        client: "Siyum HaRambam Committee"
    },
    "איפה אתה בתמונה?": {
        title: "Where Are You in the Picture?",
        desc: "Partnership Campaign | Ateh Kfar Chabad",
        client: "Ateh Kfar Chabad"
    },
    "חבדניצע | מבזק מלחמה": {
        title: "Chabadnitza | Special War Report for Children",
        desc: "Chabad Kids Channel wartime broadcast",
        client: "Chabad Kids Channel"
    },
    "ברית אברהם": {
        title: "Covenant of Abraham",
        desc: "Gan Israel Moscow Summer Summary Video",
        client: "Gan Israel Moscow"
    },
    "פנסאים סמייל": {
        title: "Pansaim Smile",
        desc: "Annual Partnership Campaign | HaPansaim Network",
        client: "HaPansaim Network"
    },
    "האור מרעננה": {
        title: "The Light from Raanana",
        desc: "The Story of Or Ziv | Chabad Menorah",
        client: "Chabad Menorah"
    },
    "הסוד שהחזיק אותי ברגעים הקשים": {
        title: "The Secret That Kept Me in Hard Times",
        desc: "The Powerful Story of Rabbi Zelig Althaus | Chabad Menorah",
        client: "Chabad Menorah"
    },
    "גן ישראל מוסקבה": {
        title: "Gan Israel Moscow Camp",
        desc: "Summer Camp Summary Video Clip",
        client: "Gan Israel Moscow"
    },
    "אפליקציית Met@Chabad": {
        title: "Met@Chabad Mobile App",
        desc: "Marketing & Promotional Commercial video",
        client: "Met@Chabad"
    },
    "שיירת האור": {
        title: "Parade of Light",
        desc: "Hanukkah Parade | Chabad of Virginia Beach",
        client: "Chabad of Virginia Beach"
    },
    "אירוע חנוכה המרכזי": {
        title: "Grand Chanukah Event",
        desc: "Grand Chanukah Event | Chabad of Virginia Beach",
        client: "Chabad of Virginia Beach"
    },
    "חנוכה בהיכל הקרח": {
        title: "Chanukah on Ice",
        desc: "Grand Ice Arena Event | Chabad of Virginia Beach",
        client: "Chabad of Virginia Beach"
    },
    "חגיגת ל\"ג בעומר": {
        title: "Lag BaOmer Celebration",
        desc: "Lag BaOmer Festival | Chabad of Virginia Beach",
        client: "Chabad of Virginia Beach"
    },
};

function getTranslatedProject(project) {
    const currentLang = localStorage.getItem('mendy_portfolio_lang') || 'he';
    if (currentLang === 'he') return project;

    // If direct English translations are stored on the project object, prioritize them
    if (project.titleEn || project.descEn || project.clientEn) {
        return {
            ...project,
            title: project.titleEn || project.title,
            desc: project.descEn || project.desc,
            client: project.clientEn || project.client
        };
    }

    const title = project.title || '';
    const desc = project.desc || '';
    const client = project.client || '';

    // 1. Direct match with key normalization (spaces, quotes and case insensitivity)
    const normKey = title.trim().toLowerCase().replace(/["'״״`]/g, '').replace(/[\s\-_|]/g, '');
    
    const normTranslations = {};
    for (const [hebrewKey, trans] of Object.entries(videoTranslations)) {
        const nKey = hebrewKey.trim().toLowerCase().replace(/["'״״`]/g, '').replace(/[\s\-_|]/g, '');
        normTranslations[nKey] = trans;
    }
    
    if (normTranslations[normKey]) {
        const trans = normTranslations[normKey];
        return {
            ...project,
            title: trans.title,
            desc: trans.desc,
            client: trans.client || project.client
        };
    }

    // 2. Keyword/Substring fallback matching for high resilience on minor variations or admin edits
    if (title.includes('ברדק')) {
        return {
            ...project,
            title: "Bardak",
            desc: "Internet Room | Comedy Sketch",
            client: "Bardak"
        };
    }
    if (title.includes('דרמר') || title.includes('Dermer')) {
        return {
            ...project,
            title: "Ron Dermer",
            desc: "The Man Behind the Scenes of Israel's Diplomacy",
            client: "Ron Dermer"
        };
    }
    if (title.includes('שלוחים') && title.includes('כינוס')) {
        return {
            ...project,
            title: "International Conference of Chabad Shluchim",
            desc: "The Greatest Highlights and Moments",
            client: "Chabad World Center"
        };
    }
    if (title.includes('505') && title.includes('מנהרות')) {
        return {
            ...project,
            title: "505 Days in Gaza Tunnels",
            desc: "The Story of Hostage Eliya Cohen",
            client: "Eliya Cohen"
        };
    }
    if (title.includes('טיימס סקוור') || title.includes('עזה לטיימס')) {
        return {
            ...project,
            title: "From Gaza to Times Square",
            desc: "Hostage Survivor Segev Khalfian | Lecture Video",
            client: "Segev Khalfian"
        };
    }

    return project;
}

// Initialize expanding image-slice services accordion (Inspired by tzvaim.com)
function initServicesAccordion() {
    const servicesSection = document.querySelector('.services-section');
    const slices = document.querySelectorAll('.service-slice');
    
    slices.forEach(slice => {
        slice.addEventListener('mouseenter', () => {
            slices.forEach(s => s.classList.remove('active'));
            slice.classList.add('active');
        });
        
        // Touch screens click to expand support
        slice.addEventListener('click', () => {
            slices.forEach(s => s.classList.remove('active'));
            slice.classList.add('active');
        });
    });

    // High-performance single-blob trailing Siri glow (GPU accelerated, no layout thrashes, zero flashes!)
    if (servicesSection) {
        let blob = document.getElementById('mouse-glow-blob');
        if (!blob) {
            blob = document.createElement('div');
            blob.id = 'mouse-glow-blob';
            blob.className = 'interactive-glow-blob';
            blob.style.opacity = '0';
            blob.style.transform = 'translate3d(0, 0, 0) scale(0.1)';
            servicesSection.appendChild(blob);
        }
        
        servicesSection.addEventListener('mouseenter', () => {
            blob.style.opacity = '0.35';
        });
        
        servicesSection.addEventListener('mouseleave', () => {
            blob.style.opacity = '0';
        });
        
        servicesSection.addEventListener('mousemove', (e) => {
            // Hide the glow when hovering directly over card elements to keep cards clean
            if (e.target.closest('.service-slice')) {
                blob.style.opacity = '0';
                return;
            } else {
                blob.style.opacity = '0.35';
            }
            
            // Calculate cursor coordinates relative to servicesSection
            const rect = servicesSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Apply GPU accelerated translate3d position with scale burst (centered on cursor offset)
            blob.style.transform = `translate3d(${x - 80}px, ${y - 80}px, 0) scale(4.2)`;
        });
    }
}

// Scroll to portfolio gallery section and activate category filter
window.scrollToPortfolioAndFilter = function(filter) {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection) return;
    
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (filterBtn) {
        filterBtn.click();
    }
    
    // Smooth scroll bypass to center alignment
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
