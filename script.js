document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon from bars to cross
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Menu Filtering Logic (Advanced UI Feature)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                menuCategories.forEach(category => {
                    if(filterValue === 'all') {
                        category.style.display = 'block';
                        category.style.animation = 'fadeIn 0.5s ease';
                    } else if (category.getAttribute('data-category') === filterValue) {
                        category.style.display = 'block';
                        category.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        category.style.display = 'none';
                    }
                });
            });
        });
    }
});
