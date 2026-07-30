/* ==========================================================
   MASTER JAVASCRIPT - INDIAN FOOD FOREST 
   Engineered by QwickDesk Solutions
========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. STICKY HEADER LOGIC
    const header = document.getElementById('navbar');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. MOBILE MENU TOGGLE LOGIC
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const mobileIcon = document.querySelector('.mobile-menu-btn i');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            // Toggle active class on menu
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                mobileIcon.classList.remove('fa-bars');
                mobileIcon.classList.add('fa-times');
            } else {
                document.body.style.overflow = 'auto';
                mobileIcon.classList.remove('fa-times');
                mobileIcon.classList.add('fa-bars');
            }
        });
    }

    // 3. MOBILE DROPDOWN ACCORDION LOGIC
    // Desktop par CSS hover kaam karega, Mobile par click se khulega
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', (e) => {
            // Check if it's mobile view (window width < 991px)
            if (window.innerWidth <= 991) {
                e.preventDefault(); // Stop link from navigating instantly on mobile
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            mobileIcon.classList.remove('fa-times');
            mobileIcon.classList.add('fa-bars');
        }
    });

});
