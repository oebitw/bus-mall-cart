/* global Cart */
'use strict';

// let productsCart=[];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();

}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  for (let i=1; i<table.length ; i--){


    table.deleteRow( table.rows[i] );

  }

  
// document.querySelector('tr').innerHTML='';


}






// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let tBody= document.querySelector('tbody')
  for(let i=0 ; i<cart.items.length; i++){
  let trElement = document.createElement('tr');
  tBody.appendChild(trElement);
  let tDataOne = document.createElement('td')
  trElement.appendChild(tDataOne);
  tDataOne.textContent= `X`;
  let tDataTwo = document.createElement('td');
  trElement.appendChild(tDataTwo);
  tDataTwo.textContent=`${cart.items[i].quantity}`
  let tDataThree = document.createElement('td');
  trElement.appendChild(tDataThree);
  tDataThree.textContent=`${cart.items[i].product}`;
  
  
}



  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}
function removeItemFromCart(event) {

  event.preventDefault();
  if ( event.target.textContent === 'X' )
  {
    let XtabeleData = event.target;

    let deletedRow = XtabeleData.parentNode;

    for ( let i = 0 ; i < cart.items.length; i++ )
    {
        cart.removeItem( i );
        // // TODO: Save the cart back to local storage
        localStorage.setItem( 'cart', JSON.stringify( cart.items ) );
        deletedRow.remove();
    }
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart()
}
// This will initialize the page and draw the cart on screen

// function getData() {
//   const data = localStorage.getItem( 'cart' );
//   if ( data ) {
//     const objData = JSON.parse( data );
//     productsCart= objData;

//     renderCart();

//   }
// }
// getData();
renderCart();
