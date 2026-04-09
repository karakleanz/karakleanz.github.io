
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('mainNavbar');
const scrollThreshold = 50;
const sections = document.querySelectorAll('section');

// Navbar scroll styling
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === currentSection);
    });
});

// Anime.js smooth scroll on link click (navbar + back-to-top)
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 96;
                const targetTop = target.offsetTop - navHeight - 8;
                
                anime({
                    targets: 'html, body',
                    scrollTop: targetTop,
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            }
        }
        
        // Close menus
        const offEl = document.getElementById('offcanvasRight');
        if (offEl && offEl.classList.contains('show')) {
            bootstrap.Offcanvas.getInstance(offEl)?.hide();
        }
    });
});