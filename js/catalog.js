/* global Product, Cart */

'use strict';

let productsCart=[];

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let optionElement;
  for (let i in Product.allProducts) {
    optionElement= document.createElement('option');
    selectElement.appendChild(optionElement)
    optionElement.textContent= `${Product.allProducts[i].name}`;
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();

  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  
  cartPreview.innerHTML='';
  updateCartPreview();
  
  localStorage.setItem('cart', JSON.stringify(productsCart));
  


}

let listEl;
let quantityEl;
let clicks=0;
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  quantityEl =parseInt(document.getElementById('quantity').value);
  listEl = document.getElementById('items').value;
  clicks ++;

  const newCartItem = new CartItem(listEl,quantityEl);
  productsCart.push(newCartItem);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let counter = document.getElementById('itemCount');
  counter.textContent = `${clicks}`;
}

let cartPreview=document.getElementById('cartContents');

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let ulElement;
  ulElement = document.createElement('ul');

  cartPreview.appendChild(ulElement);

  for (let i=0 ; i<productsCart.length; i++){

    
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`YOUR ORDER ${productsCart[i].product} , ${productsCart[i].quantity}`;
    console.log(`YOUR ORDER ${productsCart[i].product} , ${productsCart[i].quantity}`)
    // console.log(productsCart)
  }

}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

// function getData() {

//   const data = localStorage.getItem( 'cart' );
//   if ( data ) {

//     const objData = JSON.parse( data );
//     productsCart= objData;

//     updateCartPreview();

    

//   }
// }


populateForm();

// getData();

