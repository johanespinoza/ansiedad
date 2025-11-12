// Countdown Timer - Resets daily at midnight
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setHours(24, 0, 0, 0);
        
        const timeLeft = tomorrow - now;
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Notification System - Shows every 20 seconds
function initNotifications() {
    const notification = document.getElementById('notification');
    const notificationName = document.getElementById('notification-name');
    
    const names = [
        'María de México',
        'Carlos de Argentina',
        'Laura de España',
        'José de Colombia',
        'Ana de Chile',
        'Pedro de Perú',
        'Sofía de Venezuela',
        'Miguel de Ecuador',
        'Carmen de Uruguay',
        'Roberto de Paraguay',
        'Isabel de Bolivia',
        'Fernando de Costa Rica',
        'Patricia de Guatemala',
        'Diego de Honduras',
        'Valentina de Panamá',
        'Alejandro de El Salvador',
        'Gabriela de Nicaragua',
        'Ricardo de República Dominicana',
        'Daniela de Puerto Rico',
        'Andrés de Cuba'
    ];
    
    function showNotification() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        notificationName.textContent = randomName;
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
    
    // Show first notification after 5 seconds
    setTimeout(() => {
        showNotification();
        // Then show every 20 seconds
        setInterval(showNotification, 20000);
    }, 5000);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Track CTA button clicks with Facebook Pixel
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track with Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout');
            }
        });
    });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
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
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initNotifications();
    initSmoothScroll();
    initCTATracking();
    initScrollAnimations();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility change (pause/resume timer when tab is inactive)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
        // Reinitialize countdown to ensure accuracy
        initCountdown();
    }
});
