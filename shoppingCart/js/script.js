
// UI buttons
let addToCartBtn = document.getElementsByClassName('addto-cart');
let removeFromCartBtn = document.getElementsByClassName('cart-remove-btn');

// loop through the buttons to add eventlistener
for (var i = 0; i < addToCartBtn.length; i++) {
    let atcButton = addToCartBtn[i];
    atcButton.addEventListener('click', addToCart);
    // console.log(atcButton);
}


for (var i = 0; i < removeFromCartBtn.length; i++) {
    let removeBtn = removeFromCartBtn[i];
    removeBtn.addEventListener('click', removeFromCart)
    
}

// function for showing alerts
function showAlerts(message, className) {
    let alertDiv = document.createElement('div');
    

    alertDiv.className = `alert ${className} center`; // creating alert class
    alertDiv.appendChild(document.createTextNode(message));
    
    //console.log(alertDiv);

    let firstDiv = document.getElementById('first-div');
    let firstRow= document.getElementById('first-row');
    firstDiv.insertBefore(alertDiv, firstRow);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);

}

// function to add item to cart
function addToCart(e) {
    let shopItem = e.target.parentElement;
    let itemTitle = shopItem.getElementsByClassName('item-title')[0].innerText;
    let itemPrice = shopItem.getElementsByClassName('price')[0].innerText;

    
    addItemToCart(itemTitle, itemPrice);
    
    e.preventDefault();
}
// functon that create innerHTML table row and append to the cart table 
function addItemToCart(title, price) {
    let cartItemRow = document.createElement('tr');
    let cartTbody = document.getElementById('cart-body');
    //console.log(cartItemRow);
    let cartItemName = document.getElementsByClassName('cart_item_title');
    // console.log(cartItemName[0]);

    for(var i=0; i<cartItemName.length; i++) {
        if(cartItemName[i].innerText == title) { // checling an item is alredy in the cart
            showAlerts('This item is already in your list! Please select another...', 'error');
            return;
        }
    }
  
    let cartItemRowData = // creating the row that will be added
        `
        <tr class="cart_item_row">
            <td class="cart_item_title">${title}</td>
            <td class="cart-item-price">${price}</td>
            <td><button class=" btn btn-danger cart-remove-btn">remove</button></td>
        </tr>
        `
    cartItemRow.innerHTML = cartItemRowData;
    cartTbody.appendChild(cartItemRow);


    showAlerts("The item is successfully added to the cart!", "success");
    
    // adding an eventlistener to remove the item that is added by the function
    cartItemRow.getElementsByClassName('cart-remove-btn')[0].addEventListener('click', removeFromCart); 
    //console.log(cartItemRow);
    

    
    //console.log(cartTbody);
}

// function to remove an item from cart
function removeFromCart(e) {
    let removeBtn = e.target.parentElement.parentElement; //targetting the table row 
    removeBtn.remove();

    showAlerts("The item is successfully removed from the cart!", "success");

    e.preventDefault();
}


