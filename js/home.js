/**
 * 澳根尼會館 (AUGANIC) - 首頁特定 JavaScript 功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 將歡迎部分和其他區塊添加動畫效果
    const welcomeText = document.querySelector('.welcome-text');
    const welcomeImage = document.querySelector('.welcome-image');
    const roomCards = document.querySelectorAll('.room-card');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    // 添加動畫類別
    if (welcomeText && welcomeImage) {
        welcomeText.classList.add('animate-on-scroll');
        welcomeImage.classList.add('animate-on-scroll');
    }
    
    roomCards.forEach(card => {
        card.classList.add('animate-on-scroll');
    });
    
    experienceItems.forEach(item => {
        item.classList.add('animate-on-scroll');
    });
    
    // 設置一個簡單的自動英雄區文字變換
    const heroTexts = [
        { title: "體驗宜蘭的溫暖與寧靜", subtitle: "澳根尼會館 (AUGANIC)，您在宜蘭的溫馨家園" },
        { title: "遠離塵囂的理想住所", subtitle: "在這裡，感受自然與舒適的完美結合" },
        { title: "特色體驗，難忘回憶", subtitle: "橄欖油展示牆、KTV、泡茶、品酒，多種活動任您選擇" }
    ];
    
    const heroTitle = document.querySelector('.hero h2');
    const heroSubtitle = document.querySelector('.hero p');
    
    if (heroTitle && heroSubtitle) {
        let currentTextIndex = 0;
        
        // 每5秒切換一次文字
        setInterval(() => {
            // 淡出效果
            heroTitle.style.opacity = 0;
            heroSubtitle.style.opacity = 0;
            
            setTimeout(() => {
                currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
                heroTitle.textContent = heroTexts[currentTextIndex].title;
                heroSubtitle.textContent = heroTexts[currentTextIndex].subtitle;
                
                // 淡入效果
                heroTitle.style.opacity = 1;
                heroSubtitle.style.opacity = 1;
            }, 500);
        }, 5000);
    }
    
    // 創建視差滾動效果
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        
        // 英雄區視差效果
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
});