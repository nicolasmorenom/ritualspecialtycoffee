document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function addToCart() {
    // This is a placeholder function.
    // In a real e-commerce site, this would:
    // 1. Add the product to a shopping cart (local storage or server-side).
    // 2. Update a cart icon/count.
    // 3. Potentially redirect to a cart page or show a confirmation.
    alert('Ritual Specialty Coffee added to cart! (This is a demo, no actual purchase made.)');
    console.log('Product added to cart: Ritual Signature Ground Coffee (240g)');
}
