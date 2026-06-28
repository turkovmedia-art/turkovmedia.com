// data.js - External database for Mendy Turkov Portfolio
// This file is loaded first to provide the default database state.
// Admins can download this file from the admin dashboard and upload it to GitHub to save changes globally.

const defaultVideoProjects = [
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

const defaultClientLogos = [
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

const defaultCategories = [
    { "id": "documentary", "name": "תוכן דוקומנטרי" },
    { "id": "narrative", "name": "תוכן עלילתי" },
    { "id": "commercial", "name": "פרסומות וקמפיינים" },
    { "id": "music_summary", "name": "קליפים וסיכומים" },
    { "id": "ai", "name": "סרטוני AI" },
    { "id": "social", "name": "סושיאל" }
];
