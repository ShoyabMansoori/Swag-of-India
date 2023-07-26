// adding header and footer

// $(function () {
//     $("#main-header").load("header.html");
//     $("#main-footer").load("footer.html");
// });

// header and footer section
$(document).ready(function () {
    fetch('/header.html')
        .then(response => response.text())
        .then(function (headerHtml) {
            $('#main-header').html(headerHtml);
        });

    fetch('/footer.html')
        .then(response => response.text())
        .then(function (footerHtml) {
            $('#main-footer').html(footerHtml);
        });
});

// hide arrow
document.getElementById("scrollup").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
}

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scrollup');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (scroll > 1200) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    } else {
        document.getElementById('scrollup').classList.remove('show');
        document.getElementById('scrollup').classList.add('hide');
        document.getElementById('scrollup').removeEventListener('click', scrolled);
    }
});

// on hover of any product cade

// document.querySelectorAll('.product-hover').forEach(product => {
//     product.classList.add('hide');
// });

// document.querySelectorAll('div[id^="product"]').forEach(product => {
//     product.addEventListener('mouseover',event=>{
//         product.classList.add('blur');
//         product.querySelector('.product-img').querySelector('.product-hover').classList.remove('hide');
//         product.querySelector('.product-img').querySelector('.product-hover').classList.add('show');
//     })
//     product.addEventListener('mouseout',event=>{
//         product.classList.remove('blur');
//         product.querySelector('.product-img').querySelector('.product-hover').classList.add('hide');
//         product.querySelector('.product-img').querySelector('.product-hover').classList.remove('show');
//     })
// });

function addToCart(product) {
    // Get cart items from localStorage
    let myCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProduct = myCart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment the quantity
    } else {
        product.quantity = 1;
        myCart.push(product); // Add the product to the cart
    }

    // Save the updated cart items in localStorage
    localStorage.setItem('cart', JSON.stringify(myCart));

    window.location.href = "./cart.html";
    // Get cart items from localStorage
    // use JSON.parse to convert the string into array
    // if product already exist, then icrement the quantity
    // else push the product in the myCart array
    // use JSON.stringify before pushing the myCart into localStorage
    // save myCart in the localStorage
}