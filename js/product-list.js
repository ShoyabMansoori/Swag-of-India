// product quntity counter "product view"

jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function (e) {
    let $input = $(this).prev('input.qty');
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $('.quantity').on('click', '.minus',
    function (e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
});

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


// product on hover show cart, wishlist, button 

// document.querySelectorAll('.listproduct-hover').forEach(productList => {
//     productList.classList.add('hide');
// });

// document.querySelectorAll('div[id^="produclist"]').forEach(productList => {
//     productList.addEventListener('mouseover',event=>{
//         productList.querySelector('.product-list-img').classList.add('blur');
//         productList.querySelector('.product-list-img').querySelector('.listproduct-hover').classList.remove('hide');
//         productList.querySelector('.product-list-img').querySelector('.listproduct-hover').classList.add('show');
//     })
//     productList.addEventListener('mouseout',event=>{
//         productList.querySelector('.product-list-img').classList.remove('blur');
//         productList.querySelector('.product-list-img').querySelector('.listproduct-hover').classList.add('hide');
//         productList.querySelector('.product-list-img').querySelector('.listproduct-hover').classList.remove('show');
//     })
// });

function addToCart(product) {
  // document.getElementById("demo").onclick = function () {
  //     location.href = "./cart.html";
  // };

  function addToCart(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');
    //get localstorage cart product list
    getProductsFromLocalStorage();
    //update cart product list
    addProduct();
    //update number of items
    updateCartCount(cartIsEmpty);
    //update total price
    updateCartTotal(trigger.data('price'), true);
    //show cart
    cartWrapper.removeClass('empty');
  }

  function addProduct() {

    productId = productId + 1;
    var productName = document.getElementById('reebok').innerHTML;
    var productPrice = document.getElementById('p_price').getAttribute('data- value');
    var image = document.getElementById("main_img").src;
    var productSize = document.getElementById('size').value;
    var productColor = document.getElementById('color').value;
    value = parseFloat(productPrice).toFixed(2);

    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + image + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + productName + '</a></h3><span class="price">' + productPrice + '</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + productSize + '</a><a class="delete-item">' + productColor + '</a><div class="quantity"><label for="cd-product-' + productId + '">Qty</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');

    cartList.append(productAdded);

    let products = [{ 'productId': productId + 1, image: image, name: productName, price: productPrice, size: productSize, color: productColor }];

    localStorage.setItem('products', JSON.stringify(products));

  }

  function getProductsFromLocalStorage() {
    const cs = localStorage.getItem('products');
    if (cs === null) {
      addProduct();
    } else {
      $.each(cs.products, function (key, value) {
        cartList.prepend($('<li class="product"><div class="product-image"><a href="#0"><img src="' + value.image + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + value.name + '</a></h3><span class="price">${value.price}</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + value.size + '</a><a class="delete-item">' + value.color + '</a><div class="quantity"><label for="cd-product-' + value.productId + '">Qty</label><span class="select"><select id="cd-product-' + value.productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'));
      });
    }
  }

  // Get cart items from localStorage
  // use JSON.parse to convert the string into array
  // if product already exist, then icrement the quantity
  // else push the product in the myCart array
  // use JSON.stringify before pushing the myCart into localStorage
  // save myCart in the localStorage
}