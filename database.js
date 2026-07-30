/* ==========================================================
   PART 3: DYNAMIC MENU DATABASE (JSON STRUCTURE)
   Engineered by QwickDesk Solutions for Indian Food Forest
========================================================== */

const menuData = [
    // --- VEG STARTERS & TANDOORI ---
    {
        id: 1,
        name: "Paneer Tikka (Tandoori)",
        category: "veg tandoori",
        type: "veg",
        price: 190,
        desc: "Fresh cottage cheese cubes marinated in aromatic forest spices, yogurt, and roasted in a traditional clay oven. Served with mint chutney.",
        img: "https://images.unsplash.com/photo-1599487405270-861c834a3174?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Veg Crispy",
        category: "veg chinese",
        type: "veg",
        price: 170,
        desc: "Assorted fresh vegetables batter-fried until golden crisp, tossed in a tangy, spicy oriental sauce. Perfect crunch in every bite.",
        img: "https://images.unsplash.com/photo-1585238341210-9403e1e24749?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Mushroom Chilli",
        category: "veg chinese",
        type: "veg",
        price: 180,
        desc: "Fresh button mushrooms wok-tossed with bell peppers, green chillies, and dark soy sauce. A spicy delight.",
        img: "https://images.unsplash.com/photo-1626076495147-3860bb6e2324?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Hariyali Paneer Tikka",
        category: "veg tandoori",
        type: "veg",
        price: 200,
        desc: "Cottage cheese marinated in a rich blend of mint, coriander, spinach, and spices, smoked perfectly in the tandoor.",
        img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=800&auto=format&fit=crop"
    },

    // --- NON-VEG STARTERS & TANDOORI ---
    {
        id: 5,
        name: "Tandoori Chicken (Half)",
        category: "nonveg tandoori",
        type: "nonveg",
        price: 210,
        desc: "Spring chicken marinated overnight in our secret signature spices, Kashmiri red chili, and hung curd. Char-grilled to perfection.",
        img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Chicken Lollipop",
        category: "nonveg chinese",
        type: "nonveg",
        price: 210,
        desc: "Juicy chicken wings shaped into lollipops, coated in a spicy red batter and deep-fried. Served with hot garlic sauce.",
        img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Chicken Seekh Kebab",
        category: "nonveg tandoori",
        type: "nonveg",
        price: 220,
        desc: "Minced chicken mixed with earthy spices, wrapped on skewers and grilled over charcoal. Juicy, tender, and intensely flavorful.",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82bea3c8ca?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Dragon Chicken",
        category: "nonveg chinese",
        type: "nonveg",
        price: 210,
        desc: "Strips of chicken wok-tossed with fiery red chilies, roasted cashews, and dark soy sauce. For those who love the heat.",
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop"
    },

    // --- SOUPS & NOODLES ---
    {
        id: 9,
        name: "Chicken Manchow Soup",
        category: "nonveg chinese",
        type: "nonveg",
        price: 130,
        desc: "A dark brown soup prepared with various vegetables, chicken, scallions, and thickened with broth and corn flour. Topped with crispy noodles.",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Veg Hakka Noodles",
        category: "veg chinese",
        type: "veg",
        price: 130,
        desc: "Classic Indo-Chinese noodles wok-tossed with shredded cabbage, carrots, bell peppers, and light soy sauce.",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 11,
        name: "Chicken Schezwan Noodles",
        category: "nonveg chinese",
        type: "nonveg",
        price: 160,
        desc: "Spicy and fiery noodles tossed with shredded chicken and our in-house special Schezwan sauce.",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop"
    },

    // --- BIRYANI & MAIN COURSE ---
    {
        id: 12,
        name: "Chicken Tikka Biryani",
        category: "nonveg",
        type: "nonveg",
        price: 230,
        desc: "Premium long-grain basmati rice layered with smoky chicken tikka pieces, caramelized onions, and saffron. Dum-cooked to lock in the aroma.",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Mutton Biryani",
        category: "nonveg",
        type: "nonveg",
        price: 260,
        desc: "Tender pieces of mutton cooked slowly with fragrant spices and layered with premium basmati rice. A royal feast.",
        img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Paneer Biryani",
        category: "veg",
        type: "veg",
        price: 180,
        desc: "Aromatic basmati rice cooked with marinated paneer cubes, fresh herbs, and traditional whole spices.",
        img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=800&auto=format&fit=crop"
    },
    
    // --- DESSERTS ---
    {
        id: 15,
        name: "Brownie with Ice Cream",
        category: "veg",
        type: "veg",
        price: 150,
        desc: "Warm, gooey chocolate brownie topped with a scoop of premium vanilla ice cream and hot chocolate fudge sauce.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
    }
];

// This variable will be used globally in app.js
window.menuData = menuData;
