 
import {cart, increment, decrement} from "./cart.js";
import {products} from "./products.js";

let shop = document.querySelector(".js-product-grid");
renderHTML();
function renderHTML() {
return(shop.innerHTML = products.map((product)=>{
 let searchItem = cart.find((cartItem)=> cartItem.id === product.id)||[]; // To keep our quantity intact when page is refreshed;
  return ` 
  <div class="product-container">
    <div class="image-container">
      <img src="${product.image}" alt="khaki-sneakers" class="product-image">
    </div>
    <div class="product-name">
        ${product.name} 
    </div>
    <div class="price-container">
      <div class="product-price">$${(product.priceCent)/100}</div>
      <div class="old-price">$${(product.oldpriceCent)/100}</div>
    </div>
    <div class="product-rating-container">
      <img src="images/icons/product-rating-${(product.rating.stars)*10}.png" alt="ratings" class="rating-stars">
      <div class="product-rating-count">(${product.rating.count})</div>
    </div>
    <div class="select-product-quantity">
      <div class="units-left">${product.unit} units left</div>
     <div class="btns-container js-btns-container-${product.id}">
     <button class="decrease-btn js-decrease-btn-${product.id}">-</button> 
      <div class="update" id="update-${product.id}">${searchItem.quantity === undefined ? 0 : searchItem.quantity}</div>
      <button class="increase-btn js-increase-btn-${product.id}">+</button>
    </div>
    </div>
    <div class="shop-chant">uShop Express</div>
    <button class="add-to-cart-btn js-add-to-cart-btn"  const data-product-id = ${product.id}>Add to cart</button>
  </div>
 ` 
}).join(""));
}
//Header login
const user = document.querySelector(".user-icon");
const account = document.querySelector(".account")
user.addEventListener("click",()=>{
account.classList.toggle("open")
})

const btns = document.querySelectorAll(".js-add-to-cart-btn")
 btns.forEach((button)=>{
  button.addEventListener("click",() => {
    console.log("hello")
    const productId = button.dataset.productId;
    update(productId);
    updateCartTotalQty();
    addMessage("product updated")
   
    button.style.display="none"
    document.querySelector(`.js-btns-container-${productId}`).style.opacity = "1"

   // To decrease cartQty via  minus (-) button
   const decreaseBtn = document.querySelectorAll(`.js-decrease-btn-${productId}`);
   decreaseBtn.forEach((decreaseBtn)=>{
      decreaseBtn.addEventListener("click",()=>{
        decrement(productId);
         update(productId);
         updateCartTotalQty();
       })
    })
    
    // To increase cartQty when pressing plus (+) button 
    document.querySelectorAll(`.js-increase-btn-${productId}`)
    .forEach((increaseBtn)=>{
      increaseBtn.addEventListener("click",()=>{
      increment(productId)
        update(productId);
        updateCartTotalQty();
        addMessage("product added successfully");
      })
    })
  })
})
//To display add to cart notification
addMessage ();
function addMessage (popUpMessage){
  const messages =  document.getElementById("cart-message");
    messages.textContent = popUpMessage;
    !messages.classList.contains("popUp") &&
     messages.classList.add("popUp") 
    setTimeout(()=>{
    messages.classList.remove("popUp");
    },1000)
}
  
// TO update each quantity in cart
function update(productId){
  let searchItem = cart.find((cartItem) =>
    cartItem.productId === productId
   );
   if(searchItem){
    document.getElementById(`update-${productId}`).innerHTML= searchItem.quantity;
   }
    updateCartTotalQty();
}

// To render cart total quantity on the page.
updateCartTotalQty()
function updateCartTotalQty(){
  let total = cart.map((cartItem)=>cartItem.quantity).reduce((prevQuantity, nextQuantity) => prevQuantity + nextQuantity, 0);
  document.querySelector(".cart-total-quantity").innerHTML = total;
}

 // To set current year in footer
 const year = new Date().getFullYear();
 const copyRight = document.querySelector('.js-copy-right');
 copyRight.innerHTML= `<span>&copy;Copyright</span> ${year}. All rights reserved. Coded by &lt; ukandieSunday /&gt;`

 // To show preloader
 const loader = document.getElementById("preloader");
 window.addEventListener("load",()=>{
  loader.style.display="none";
 })














