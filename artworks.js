// Fine Art Photography Exhibition JavaScript (artworks.js)
// 3D Mouse Physics & Cynx.io Hover Animation Controller

document.addEventListener('DOMContentLoaded', () => {
    initCursorTracker();
    initCynxHoverPhysics();
    initPortraitToggle();
    initFilterSystem();
    initLightboxModal();
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
    const interactiveSelector = 'a, button, input, .art-card, .filter-pill, .explore-btn, .sc-pill, .portrait-card';
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
                if (filterValue === 'all' || category === filterValue) {
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
    
    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            const newIndex = (currentIndex - 1 + cards.length) % cards.length;
            openLightbox(newIndex);
        } else if (e.key === 'ArrowRight') {
            const newIndex = (currentIndex + 1) % cards.length;
            openLightbox(newIndex);
        }
    });
}
