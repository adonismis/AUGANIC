/**
 * 澳根尼會館 (AUGANIC) - 房型頁面 JavaScript 功能
 */

// 圖片切換功能
function changeImage(mainImageId, newImageSrc) {
    // 更新主要圖片
    document.getElementById(mainImageId).src = newImageSrc;
    
    // 更新縮圖狀態 (active class)
    const roomId = mainImageId.split('-')[2]; // 獲取房間ID (1, 2, 3)
    const thumbs = document.querySelectorAll(`.gallery-thumbs img[onclick*="'${mainImageId}'"]`);
    
    thumbs.forEach(thumb => {
        if (thumb.src === newImageSrc) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// 頁面載入時
document.addEventListener('DOMContentLoaded', function() {
    // 初始化每個房型的縮圖
    const roomSections = document.querySelectorAll('.room-detail');
    
    roomSections.forEach((section, index) => {
        // 設定縮圖點擊時的邊框高亮
        const thumbs = section.querySelectorAll('.gallery-thumbs img');
        
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // 移除同一區塊中所有縮圖的 active 類別
                thumbs.forEach(t => t.classList.remove('active'));
                // 為當前點擊的縮圖添加 active 類別
                this.classList.add('active');
            });
        });
    });
    
    // 如果有URL錨點，滾動到對應的房型
    if (window.location.hash) {
        const targetRoom = document.querySelector(window.location.hash);
        
        if (targetRoom) {
            // 等待頁面完全加載，確保能正確計算位置
            setTimeout(() => {
                window.scrollTo({
                    top: targetRoom.offsetTop - 100,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
    
    // 增強房型預訂區塊，添加動畫效果
    const roomDetails = document.querySelectorAll('.room-detail');
    roomDetails.forEach(room => {
        room.classList.add('animate-on-scroll');
    });
    
    // 增強訂房須知區塊，添加動畫效果
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.classList.add('animate-on-scroll');
    });
});