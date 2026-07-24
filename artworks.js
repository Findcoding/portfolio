// Fine Art Photography Exhibition JavaScript (artworks.js)
// 3D Mouse Physics & Cynx.io Hover Animation Controller

document.addEventListener('DOMContentLoaded', () => {
    initCursorTracker();
    initCynxHoverPhysics();
    initPortraitToggle();
    initFilterSystem();
    initLoadMoreSystem();
    initLightboxModal();
    initFeaturedCarousel();
});

// Custom Pointer & Spotlight Follower
function initCursorTracker() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Event delegation for cursor hover effect on interactive elements
    const interactiveSelector = 'a, button, input, .art-card, .filter-pill, .explore-btn, .sc-pill, .portrait-card, .show-more-btn';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelector)) {
            ring.classList.add('hover-active');
            dot.classList.add('hover-active');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelector)) {
            ring.classList.remove('hover-active');
            dot.classList.remove('hover-active');
        }
    });
}

// 3D Mouse Tracking Tilt Physics (for Portrait Card Spotlight)
function initCynxHoverPhysics() {
    const cards = document.querySelectorAll('.portrait-card');
    
    cards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.08s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (-6 to 6 degrees)
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Dual Photographer Portrait Toggle Controller (me1.png vs me2.jpg)
function initPortraitToggle() {
    const btnLight = document.getElementById('btn-mode-light');
    const btnDark = document.getElementById('btn-mode-dark');
    const cardLight = document.getElementById('portrait-card-light');
    const cardDark = document.getElementById('portrait-card-dark');

    if (!btnLight || !btnDark || !cardLight || !cardDark) return;

    btnLight.addEventListener('click', () => {
        btnLight.classList.add('active');
        btnDark.classList.remove('active');
        cardLight.classList.add('focused');
        cardDark.classList.remove('focused');
        cardLight.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    btnDark.addEventListener('click', () => {
        btnDark.classList.add('active');
        btnLight.classList.remove('active');
        cardDark.classList.add('focused');
        cardLight.classList.remove('focused');
        cardDark.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Category Filter Controller
function initFilterSystem() {
    const filterBtns = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.art-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all') {
                    if (card.classList.contains('load-more-hidden')) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    }
                } else if (category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Show More / Load More Gallery System Controller
function initLoadMoreSystem() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreContainer = document.querySelector('.load-more-container');
    const hiddenItems = document.querySelectorAll('.load-more-hidden-item');
    let isExpanded = false;

    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        const btnText = loadMoreBtn.querySelector('span:first-child');
        const btnIcon = loadMoreBtn.querySelector('.btn-icon');

        if (isExpanded) {
            hiddenItems.forEach(card => {
                card.classList.remove('load-more-hidden');
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            });
            if (btnText) btnText.textContent = 'SHOW LESS';
            if (btnIcon) btnIcon.innerHTML = '&uarr;';
        } else {
            hiddenItems.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.classList.add('load-more-hidden');
                    card.style.display = 'none';
                }, 300);
            });
            if (btnText) btnText.textContent = 'SHOW MORE WORKS';
            if (btnIcon) btnIcon.innerHTML = '&darr;';

            const galleryGrid = document.getElementById('gallery-grid');
            if (galleryGrid) {
                galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    });

    const filterBtns = document.querySelectorAll('.filter-pill');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            if (filterValue !== 'all') {
                if (loadMoreContainer) loadMoreContainer.style.display = 'none';
                hiddenItems.forEach(card => {
                    card.classList.remove('load-more-hidden');
                });
            } else {
                if (loadMoreContainer) loadMoreContainer.style.display = 'flex';
                if (!isExpanded) {
                    hiddenItems.forEach(card => {
                        card.classList.add('load-more-hidden');
                        card.style.display = 'none';
                    });
                }
            }
        });
    });
}

// Full-Screen Lightbox Modal Controller
function initLightboxModal() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');
    const modalSubtitle = document.getElementById('lightbox-subtitle');
    const modalCounter = document.getElementById('lightbox-counter');
    
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    const cards = Array.from(document.querySelectorAll('.art-card'));
    let currentIndex = 0;
    
    function openLightbox(index) {
        if (index < 0 || index >= cards.length) return;
        currentIndex = index;
        
        const card = cards[currentIndex];
        const img = card.querySelector('img');
        const title = card.getAttribute('data-title') || `Artwork ${currentIndex + 1}`;
        const location = card.getAttribute('data-location') || 'Collection 2026';
        
        modalImg.src = img.src;
        modalTitle.textContent = title;
        modalSubtitle.textContent = location;
        modalCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = (currentIndex - 1 + cards.length) % cards.length;
            openLightbox(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = (currentIndex + 1) % cards.length;
            openLightbox(newIndex);
        });
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('lightbox-content') || e.target.classList.contains('lightbox-image-container')) {
            closeLightbox();
        }
    });
    
    // Masterpiece Spotlight Lightbox Trigger (1 (3).jpg)
    const masterpieceBtn = document.getElementById('open-masterpiece-btn');
    const masterpieceImgFrame = document.getElementById('spotlight-img-frame');

    function openSpotlightLightbox() {
        if (!modal || !modalImg) return;
        modalImg.src = 'photos/1 (3).jpg';
        modalTitle.textContent = 'SERENITY IN BLOOM';
        modalSubtitle.textContent = 'Botanical Nature Study • Artist\'s Special Selection';
        modalCounter.textContent = 'SPECIAL FEATURE';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (masterpieceBtn) masterpieceBtn.addEventListener('click', openSpotlightLightbox);
    if (masterpieceImgFrame) masterpieceImgFrame.addEventListener('click', openSpotlightLightbox);

    // Lord Shiva (Adiyogi) Cosmic Sanctuary Lightbox Trigger (1 (21).jpg)
    const shivaBtn = document.getElementById('open-shiva-btn');
    const shivaFrame = document.getElementById('shiva-frame');

    function openShivaLightbox() {
        if (!modal || !modalImg) return;
        modalImg.src = 'photos/1 (21).jpg';
        modalTitle.textContent = 'ADIYOGI: THE FIRST YOGI';
        modalSubtitle.textContent = 'Lord Shiva • Cosmic Sanctuary Chiaroscuro Study';
        modalCounter.textContent = 'DIVINE FEATURE';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (shivaBtn) shivaBtn.addEventListener('click', openShivaLightbox);
    if (shivaFrame) shivaFrame.addEventListener('click', openShivaLightbox);
}

// Carousel Lightbox Global Trigger
function openCarouselLightbox(imageSrc, title, subtitle, counterText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');
    const modalSubtitle = document.getElementById('lightbox-subtitle');
    const modalCounter = document.getElementById('lightbox-counter');

    if (!modal || !modalImg) return;
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalCounter.textContent = counterText;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Featured 5-Card Collapsed Carousel Controller
function initFeaturedCarousel() {
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const stage = document.getElementById('carousel-viewport');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    const total = slides.length;

    function updateCarouselPositions() {
        slides.forEach((slide, i) => {
            // Calculate relative offset from currentIndex for any array length
            let diff = i - currentIndex;
            const half = Math.floor(total / 2);
            while (diff > half) diff -= total;
            while (diff < -half) diff += total;

            // Remove all layout classes
            slide.classList.remove('slide-center', 'slide-prev-1', 'slide-prev-2', 'slide-prev-3', 'slide-next-1', 'slide-next-2', 'slide-next-3', 'slide-hidden');

            if (diff === 0) {
                slide.classList.add('slide-center');
            } else if (diff === -1) {
                slide.classList.add('slide-prev-1');
            } else if (diff === -2) {
                slide.classList.add('slide-prev-2');
            } else if (diff === -3) {
                slide.classList.add('slide-prev-3');
            } else if (diff === 1) {
                slide.classList.add('slide-next-1');
            } else if (diff === 2) {
                slide.classList.add('slide-next-2');
            } else if (diff === 3) {
                slide.classList.add('slide-next-3');
            } else {
                slide.classList.add('slide-hidden');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = (index + total) % total;
        updateCarouselPositions();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    // Click handlers for collapsed preview slides
    slides.forEach((slide, i) => {
        slide.addEventListener('click', (e) => {
            // If clicking lightbox button inside center slide, let it open lightbox
            if (e.target.closest('.slide-lightbox-btn')) return;
            if (i !== currentIndex) {
                goToSlide(i);
                startAutoPlay();
            }
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            startAutoPlay();
        });
    });

    if (stage) {
        stage.addEventListener('mouseenter', stopAutoPlay);
        stage.addEventListener('mouseleave', startAutoPlay);
    }

    // Initial positioning & start 5s timer
    updateCarouselPositions();
    startAutoPlay();
}
