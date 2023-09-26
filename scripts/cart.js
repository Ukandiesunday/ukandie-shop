   export let  cart = JSON.parse(localStorage.getItem("data")) ||[];

function saveToStorage(){
localStorage.setItem("data", JSON.stringify(cart));
}

export function increment(productId){
    let searchItem = cart.find((cartItem) =>
      cartItem.productId === productId
    );
  if(searchItem === undefined){
      cart.push({
      productId:productId,
      quantity:1
      });
    }else{
      searchItem.quantity += 1 ;
    }
    saveToStorage()
}

export function decrement(productId){
    let searchItem = cart.find((cartItem)=> cartItem.productId === productId);

  if(searchItem === undefined)return;
    else if(searchItem.quantity === 0)return
  else{
    searchItem.quantity -= 1
    };
  
  cart = cart.filter((cartItem)=> cartItem.quantity !== 0);
  saveToStorage();
}


export function removeFromCart(productId){
  cart = cart.filter((cartItem)=> cartItem.productId !== productId)
  saveToStorage();
}




