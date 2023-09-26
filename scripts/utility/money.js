// To calculate each product price added to cart
 export function calculateMoney(price){
 return price / 100;
}

//To calculate initial cost summary
  let iprice
export function calcInitialPrice(initPrice){
  iprice = initPrice;
  return iprice / 100;
}

//To calculate tax
   let tax
export function calcTax(taxRate){
  tax = (((taxRate) / 100) * 0.1).toFixed(2);
  return tax;
 }

 //To calculate total price of product after tax
export function calcTotalBill(totalPrice){
  return ((((tax + iprice) * 100) + totalPrice) / 100).toFixed(2)

 }