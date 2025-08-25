document.addEventListener('DOMContentLoaded', () => {
    // تشغيل سلايدر العرض الرئيسي (Hero Slider)
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const heroSlides = heroSlider.querySelectorAll('img');
        const totalSlides = heroSlides.length;
        const heroLeftBtn = document.querySelector('.hero-btn.left');
        const heroRightBtn = document.querySelector('.hero-btn.right');
        let currentHeroIndex = 0;

        heroLeftBtn.addEventListener('click', () => {
            currentHeroIndex = (currentHeroIndex > 0) ? currentHeroIndex - 1 : totalSlides - 1;
            updateHeroSlider();
        });

        heroRightBtn.addEventListener('click', () => {
            currentHeroIndex = (currentHeroIndex < totalSlides - 1) ? currentHeroIndex + 1 : 0;
            updateHeroSlider();
        });

        function updateHeroSlider() {
            heroSlider.style.transform = `translateX(-${currentHeroIndex * 100}%)`;
        }
    }

    // تشغيل سلايدرات المنتجات (Product Sliders)
    const productSliders = document.querySelectorAll('.product-slider');
    productSliders.forEach(slider => {
        const sliderTrack = slider.querySelector('.slider-track');
        const leftBtn = slider.querySelector('.slider-btn.left');
        const rightBtn = slider.querySelector('.slider-btn.right');
        let scrollPosition = 0;
        const cardWidth = -220; // عرض البطاقة + الهامش

        leftBtn.addEventListener('click', () => {
            scrollPosition += cardWidth;
            if (scrollPosition > 0) {
                scrollPosition = 0;
            }
            sliderTrack.style.transform = `translateX(${scrollPosition}px)`;
        });

        rightBtn.addEventListener('click', () => {
            scrollPosition -= cardWidth;
            const maxScroll = (sliderTrack.scrollWidth - sliderTrack.clientWidth) * -1;
            if (scrollPosition < maxScroll) {
                scrollPosition = maxScroll;
            }
            sliderTrack.style.transform = `translateX(${scrollPosition}px)`;
        });
    });

    // إنشاء روابط واتساب للطلب
    document.querySelectorAll('.order-btn, .order-btn-grid, #product-order-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productUrl = e.target.getAttribute('data-product-url');
            const phoneNumber = '966537633839'; // ضع رقم جوالك هنا
            const message = `أود طلب المنتج: ${window.location.href}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

});
