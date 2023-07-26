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

let productsListUrl = '/products.json';

async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;

            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }
                cards = cards +
                    '<div class="col-xl-4 col-lg-4 col-md-6">' +
                    '  <div class="card single-productList-view" id="produclist' + product.id + '">' +
                    '    <div class="product-list-img">' +
                    '      <img src="images/' + product.imageName + '.png" class="card-img-top" alt="Product Image">' +
                    '      <div class="listproduct-hover hide show-icon">' +
                    '        <div class="container">' +
                    '          <div class="row">' +
                    '            <div class="col-4">' +
                    '              <img src="images/cart.png" alt="">' +
                    '            </div>' +
                    '            <div class="col-4">' +
                    '             <img src="images/view.png" alt="">' +
                    '            </div>' +
                    '            <div class="col-4">' +
                    '             <img src="images/wishlist.png" alt="">' +
                    '            </div>' +
                    '           </div>' +
                    '         </div>' +
                    '       </div>' +
                    '       ' + isNewDiv + '' +
                    '     </div>' +
                    '     <div class="card-body listProduct-caption text-center">' +
                    '       <h4><a href="">' + product.name + '</a></h4>' +
                    '       <div class="listProduct-price">' +
                    '         <div class="d-flex justify-content-center">' +
                    '           <a href="#" class="product-prise">$' + product.priceAfterDiscount + '</a>' +
                    '           <a href="#" class="product-discount">$' + product.price + '</a>' +
                    '           <a href="#" class="product-off">' + product.off + '</a>' +
                    '         </div>' +
                    '       </div>' +
                    '       <div class="listProduct-stars d-flex justify-content-center">' +
                    '          ' + stars + '' +
                    '       </div>' +
                    '     </div>' +
                    '   </div>' +
                    '</div>';
            });
            document.querySelector('#productsListArea').innerHTML = cards;
        });
}

loadProducts(productsListUrl);

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