/* ==========================================================
   PART 4: ENTERPRISE LOGIC & INTERACTIVITY (APP.JS)
   Engineered by QwickDesk Solutions for Indian Food Forest
========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. PRELOADER LOGIC ---
    // Page load hone ke baad forest loading screen ko hide karna
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.remove('hidden-scroll');
            }, 500);
        }, 1000); // 1 sec ka premium delay
    });

    // --- 2. NAVBAR SCROLL EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    });

    // --- 3. MOBILE MENU TOGGLE ---
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = 'auto';
        });
    }

    // Menu link par click karne ke baad mobile menu auto-close karna
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = 'auto';
        });
    });

    // --- 4. DYNAMIC MENU RENDERING ENGINE ---
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    let currentSelectedItem = null; // Store item for WhatsApp order

    // Render Function
    const renderMenuItems = (categoryFilter) => {
        menuGrid.style.opacity = 0; // Fade out effect
        
        setTimeout(() => {
            menuGrid.innerHTML = ''; // Clear current items
            
            // Filter data from database.js
            const filteredData = categoryFilter === 'all' 
                ? window.menuData 
                : window.menuData.filter(item => item.category.includes(categoryFilter));
            
            filteredData.forEach(item => {
                // Determine Veg/Non-Veg Badge
                const badgeClass = item.type === 'veg' ? 'veg-box' : 'nonveg-box';
                const dotClass = item.type === 'veg' ? 'veg-dot' : 'nonveg-dot';
                
                const cardHTML = `
                    <div class="menu-card" onclick="openModal(${item.id})">
                        <div class="card-img-box">
                            <img src="${item.img}" alt="${item.name}" loading="lazy">
                            <div class="diet-indicator">
                                <div class="mark-box ${badgeClass}"><div class="mark-dot ${dotClass}"></div></div>
                            </div>
                        </div>
                        <div class="menu-details">
                            <div class="menu-title-row">
                                <h3>${item.name}</h3>
                                <span class="menu-price">₹${item.price}</span>
                            </div>
                            <p class="menu-desc-short">${item.desc}</p>
                            <span class="order-prompt">View Details & Order <i class="fas fa-chevron-right"></i></span>
                        </div>
                    </div>
                `;
                menuGrid.insertAdjacentHTML('beforeend', cardHTML);
            });
            
            menuGrid.style.opacity = 1; // Fade in effect
        }, 300);
    };

    // Initialize initial render (All Items)
    renderMenuItems('all');

    // --- 5. CATEGORY FILTER LOGIC ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            // Add active class to clicked button
            e.currentTarget.classList.add('active-filter');
            
            // Get filter value and render
            const filterValue = e.currentTarget.getAttribute('data-filter');
            renderMenuItems(filterValue);
        });
    });

    // --- 6. ADVANCED MODAL (POPUP) LOGIC ---
    const modal = document.getElementById('item-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');

    // Make openModal globally accessible via window object (since it's called from inline HTML onclick)
    window.openModal = (itemId) => {
        // Find item in database
        currentSelectedItem = window.menuData.find(item => item.id === itemId);
        if(!currentSelectedItem) return;

        // Populate Modal Data
        document.getElementById('modal-image').src = currentSelectedItem.img;
        document.getElementById('modal-category').textContent = currentSelectedItem.type === 'veg' ? 'Pure Veg' : 'Non-Veg';
        document.getElementById('modal-category').style.color = currentSelectedItem.type === 'veg' ? '#2ecc71' : '#e74c3c';
        document.getElementById('modal-category').style.borderColor = currentSelectedItem.type === 'veg' ? '#2ecc71' : '#e74c3c';
        
        document.getElementById('modal-title').textContent = currentSelectedItem.name;
        document.getElementById('modal-price').textContent = `₹${currentSelectedItem.price}`;
        document.getElementById('modal-desc').textContent = currentSelectedItem.desc;

        // Populate Badge in Modal
        const badgeHTML = currentSelectedItem.type === 'veg' 
            ? `<div class="mark-box veg-box"><div class="mark-dot veg-dot"></div></div>`
            : `<div class="mark-box nonveg-box"><div class="mark-dot nonveg-dot"></div></div>`;
        document.getElementById('modal-diet-badge').innerHTML = badgeHTML;

        // Show Modal
        modal.classList.add('show-modal');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('show-modal');
        document.body.style.overflow = 'auto';
    };

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // --- 7. SMART WHATSAPP ROUTING ---
    // Globally accessible function for WhatsApp buttons
    window.sendWhatsAppOrder = (phone, managerName) => {
        if (!currentSelectedItem) return;

        // Professional formatting for the order
        const message = `Hello ${managerName} (Indian Food Forest),\n\nI am browsing your website and would like to place an order request for:\n\n🍽️ *Item:* ${currentSelectedItem.name}\n💰 *Price:* ₹${currentSelectedItem.price}\n\nPlease confirm availability. Thank you!`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    };

    // --- 8. INITIALIZE SWIPER CAROUSEL (Gallery) ---
    // Ensure Swiper is loaded from CDN in index.html before initializing
    if (typeof Swiper !== 'undefined') {
        new Swiper(".gallery-swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
    }
});
          
