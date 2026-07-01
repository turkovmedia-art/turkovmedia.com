// data.js - External database for Mendy Turkov Portfolio
// This file is loaded first to provide the default database state.

const defaultVideoProjects = [
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
        "year": "2026"
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
        "year": "2026"
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
        "year": "2026"
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
        "year": "2026"
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
        "year": "2026"
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

const defaultClientLogos = [
    "C KIDS.png",
    "CYP.png",
    "JRNU.png",
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

const defaultCategories = [
    {
        "name": "תוכן דוקומנטרי",
        "id": "documentary"
    },
    {
        "id": "narrative",
        "name": "תוכן עלילתי"
    },
    {
        "id": "commercial",
        "name": "פרסומות וקמפיינים"
    },
    {
        "name": "קליפים וסיכומים",
        "id": "music_summary"
    },
    {
        "id": "ai",
        "name": "סרטוני AI"
    },
    {
        "id": "social",
        "name": "סושיאל"
    }
];
