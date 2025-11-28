// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Load best sellers on homepage
function loadBestSellers() {
    fetch('php/get_best_sellers.php')
        .then(response => response.json())
        .then(data => {
            const bestSellersGrid = document.getElementById('best-sellers-grid');
            if (bestSellersGrid) {
                bestSellersGrid.innerHTML = '';
                data.forEach(product => {
                    const productItem = createProductItem(product);
                    bestSellersGrid.appendChild(productItem);
                });
            }
        })
        .catch(error => console.error('Error loading best sellers:', error));
}

// Load all products on products page
function loadProducts() {
    fetch('php/get_products.php')
        .then(response => response.json())
        .then(data => {
            const productsGrid = document.getElementById('products-grid');
            if (productsGrid) {
                productsGrid.innerHTML = '';
                data.forEach(product => {
                    const productItem = createProductItem(product);
                    productsGrid.appendChild(productItem);
                });
            }
        })
        .catch(error => console.error('Error loading products:', error));
}

function createProductItem(product) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p class="price">₱${product.price}</p>
            <button class="btn">Add to Cart</button>
        </div>
    `;
    return productItem;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load content based on current page
document.addEventListener('DOMContentLoaded', function() {
    loadBestSellers();
    loadProducts();
});
