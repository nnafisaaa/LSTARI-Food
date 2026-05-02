// Placeholder image service
const placeholderBase = "https://picsum.photos";

// Get random image with seed for consistency
function getImage(category, index) {
    const seeds = {
        makanan: [
            101,102,103,104,105,106,107,108,109,110,
            111,112,113,114,115,116,117,118,119,120,
            121,122,123,124,125,126,127,128,129,130,
            131,132,133,134,135,136,137,138
        ],
        minuman: [
            201,202,203,204,205,206,207,208,
            209,210,211,212,213,214,215,216
        ]
    };

    return `${placeholderBase}/400/300?random=${seeds[category][index]}`;
}

function getImageLarge(category, index) {
    const seeds = {
        gallery: [301, 302, 303, 304, 305]
    };
    return `${placeholderBase}/1200/600?random=${seeds[category][index]}`;
}

function getAvatar(index) {
    return `${placeholderBase}/100/100?random=${40 + index}`;
}

const menuItems = {
  makanan: [
    // NASI GORENG
    { name: "Nasi Goreng Rawon", description: "Nasi goreng dengan cita rasa rawon khas", price: "Rp 60.000", image: getImage('makanan', 0) },
    { name: "Nasi Goreng Ayam Ngohiong", description: "Nasi goreng dengan ayam ngohiong spesial", price: "Rp 60.000", image: getImage('makanan', 1) },
    { name: "Nasi Goreng Teriyaki", description: "Nasi goreng dengan saus teriyaki", price: "Rp 60.000", image: getImage('makanan', 2) },

    // MIE
    { name: "Mie Ayam Merah", description: "Mie ayam dengan saus merah khas", price: "Rp 55.000", image: getImage('makanan', 3) },
    { name: "Mie Ayam Putih", description: "Mie ayam klasik dengan topping ayam", price: "Rp 55.000", image: getImage('makanan', 4) },
    { name: "Mie Ayam Kombinasi", description: "Perpaduan mie ayam merah & putih", price: "Rp 60.000", image: getImage('makanan', 5) },
    { name: "Bakmi Goreng Ayam Merah", description: "Bakmi goreng dengan ayam merah", price: "Rp 60.000", image: getImage('makanan', 6) },

    // NASI
    { name: "Nasi Hainan Ayam Merah", description: "Nasi hainan dengan ayam merah", price: "Rp 55.000", image: getImage('makanan', 7) },
    { name: "Nasi Hainan Ayam Putih", description: "Nasi hainan ayam klasik", price: "Rp 55.000", image: getImage('makanan', 8) },
    { name: "Nasi Hainan Kombinasi", description: "Ayam merah & putih dalam satu porsi", price: "Rp 60.000", image: getImage('makanan', 9) },
    { name: "Nasi Kakap Bakar", description: "Ikan kakap bakar dengan nasi", price: "Rp 60.000", image: getImage('makanan', 10) },
    { name: "Nasi Ayam Ngohiong", description: "Ayam ngohiong gurih dengan nasi", price: "Rp 55.000", image: getImage('makanan', 11) },
    { name: "Nasi Ayam Bakar Sambal Ijo", description: "Ayam bakar dengan sambal ijo", price: "Rp 55.000", image: getImage('makanan', 12) },
    { name: "Nasi Ayam Lada Hitam", description: "Ayam dengan saus lada hitam", price: "Rp 55.000", image: getImage('makanan', 13) },
    { name: "Nasi Ayam Saus Inggris", description: "Ayam dengan saus khas Inggris", price: "Rp 60.000", image: getImage('makanan', 14) },
    { name: "Nasi Ayam Saus Bangkok", description: "Ayam saus pedas manis Bangkok", price: "Rp 55.000", image: getImage('makanan', 15) },
    { name: "Nasi Ayam Geprek", description: "Ayam geprek pedas nikmat", price: "Rp 55.000", image: getImage('makanan', 16) },
    { name: "Nasi Iga Bakar Madu", description: "Iga bakar dengan madu", price: "Rp 60.000", image: getImage('makanan', 17) },
    { name: "Nasi Chicken Butter", description: "Ayam saus butter creamy", price: "Rp 60.000", image: getImage('makanan', 18) },
    { name: "Nasi Patty Steak", description: "Patty steak dengan nasi", price: "Rp 55.000", image: getImage('makanan', 19) },

    // SUP
    { name: "Nasi Rawon Iga", description: "Rawon iga dengan nasi", price: "Rp 60.000", image: getImage('makanan', 20) },
    { name: "Nasi Kakap Woku", description: "Ikan kakap dengan bumbu woku", price: "Rp 60.000", image: getImage('makanan', 21) },
    { name: "Mushroom Soup", description: "Sup jamur creamy", price: "Rp 35.000", image: getImage('makanan', 22) },
    { name: "Sweet Corn Soup", description: "Sup jagung manis hangat", price: "Rp 35.000", image: getImage('makanan', 23) },

    // PASTA
    { name: "Fettuccine Carbonara", description: "Pasta creamy carbonara", price: "Rp 60.000", image: getImage('makanan', 24) },
    { name: "Spaghetti Bolognese", description: "Spaghetti dengan saus daging", price: "Rp 60.000", image: getImage('makanan', 25) },
    { name: "Spaghetti Aglio Olio", description: "Pasta bawang putih & olive oil", price: "Rp 60.000", image: getImage('makanan', 26) },
    { name: "Spaghetti Tuna Aglio Olio", description: "Aglio olio dengan tuna", price: "Rp 60.000", image: getImage('makanan', 27) },
    { name: "Spaghetti Cordon Blue", description: "Spaghetti dengan cordon blue", price: "Rp 60.000", image: getImage('makanan', 28) },

    // SANDWICH
    { name: "Club Sandwich", description: "Sandwich isi lengkap", price: "Rp 60.000", image: getImage('makanan', 29) },
    { name: "Tuna Sandwich", description: "Sandwich tuna segar", price: "Rp 60.000", image: getImage('makanan', 30) },

    // BREAKFAST
    { name: "Shakshuka", description: "Telur saus tomat khas timur tengah", price: "Rp 55.000", image: getImage('makanan', 31) },
    { name: "Chicken Crispy Sandwich", description: "Sandwich ayam crispy", price: "Rp 55.000", image: getImage('makanan', 32) },
    { name: "Big Breakfast", description: "Menu sarapan lengkap", price: "Rp 55.000", image: getImage('makanan', 33) },
    { name: "Rosti and Egg", description: "Kentang rosti dengan telur", price: "Rp 55.000", image: getImage('makanan', 34) },

    // SNACK
    { name: "Sampler", description: "Aneka snack dalam satu porsi", price: "Rp 55.000", image: getImage('makanan', 35) },
    { name: "French Fries", description: "Kentang goreng renyah", price: "Rp 35.000", image: getImage('makanan', 36) },
    { name: "Chicken Wings", description: "Sayap ayam gurih", price: "Rp 40.000", image: getImage('makanan', 37) }
  ],

  minuman: [
    // COFFEE
    { name: "Single Espresso", description: "Espresso shot", price: "Rp 21.000", image: getImage('minuman', 0) },
    { name: "Double Espresso", description: "Double espresso", price: "Rp 21.000", image: getImage('minuman', 1) },
    { name: "Americano", description: "Kopi hitam ringan", price: "Rp 32.000", image: getImage('minuman', 2) },
    { name: "Long Black", description: "Strong black coffee", price: "Rp 32.000", image: getImage('minuman', 3) },
    { name: "Latte", description: "Kopi susu creamy", price: "Rp 37.000", image: getImage('minuman', 4) },
    { name: "Caramel Latte", description: "Latte dengan caramel", price: "Rp 39.000", image: getImage('minuman', 5) },
    { name: "Hazelnut Latte", description: "Latte rasa hazelnut", price: "Rp 39.000", image: getImage('minuman', 6) },
    { name: "Mochaccino", description: "Kopi coklat creamy", price: "Rp 39.000", image: getImage('minuman', 7) },

    // NON COFFEE
    { name: "Taro", description: "Minuman taro creamy", price: "Rp 39.000", image: getImage('minuman', 8) },
    { name: "Chocolate", description: "Coklat hangat/dingin", price: "Rp 39.000", image: getImage('minuman', 9) },
    { name: "Green Tea", description: "Matcha segar", price: "Rp 39.000", image: getImage('minuman', 10) },
    { name: "Red Velvet", description: "Minuman red velvet", price: "Rp 39.000", image: getImage('minuman', 11) },

    // TEA
    { name: "Lychee Tea", description: "Teh leci segar", price: "Rp 25.000", image: getImage('minuman', 12) },
    { name: "Lemon Tea", description: "Teh lemon segar", price: "Rp 25.000", image: getImage('minuman', 13) },
    { name: "Wintermelon Tea", description: "Teh wintermelon", price: "Rp 25.000", image: getImage('minuman', 14) },

    // AIR
    { name: "Air Mineral", description: "Air mineral", price: "Rp 10.000", image: getImage('minuman', 15) }
  ]
};

function loadMenu(category) {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer || !menuItems[category]) return;

    menuContainer.innerHTML = '';

    menuItems[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">${item.price}</div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function initPage() {
    setDynamicImages();
    setupMobileNav();
    setupSmoothScroll();
    loadMenu('makanan');
}

document.addEventListener('DOMContentLoaded', initPage);

// Gallery Functions
function changeGallery(direction) {
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    } else if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    }
    
    updateGallery();
}

function setGallery(index) {
    currentGalleryIndex = index;
    updateGallery();
}

function updateGallery() {
    const mainImage = document.getElementById('main-image');
    const thumbs = document.querySelectorAll('.thumb');
    
    // Update main image
    mainImage.src = galleryImages[currentGalleryIndex];
    mainImage.alt = `Gallery Image ${currentGalleryIndex + 1}`;
    
    // Update thumbnails
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentGalleryIndex);
    });
}

// Set dynamic images for hero, about, CTA sections
function setDynamicImages() {
    // Hero section background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('assets/hero.png') center/cover no-repeat`;
    }
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundAttachment = 'fixed';
}


// Mobile Navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (navOverlay) {
            navOverlay.classList.toggle('active');
        }
    });
    
    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            if (navOverlay) {
                navOverlay.classList.remove('active');
            }
        });
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
});

// Prevent double tap zoom on buttons and links on mobile
document.addEventListener('touchend', function(e) {
    if (e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.classList.contains('btn-primary') ||
        e.target.classList.contains('tab-btn')) {
        e.preventDefault();
        e.target.click();
    }
}, false);

// Improve mobile viewport on orientation change
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) hamburger.classList.remove('active');
        }
    }, 100);
});
