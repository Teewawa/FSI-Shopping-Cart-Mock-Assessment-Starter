let quantityDown = document.getElementById("quantity-down");
let quantityUp = document.getElementById("quantity-up");
let totalQuantity = document.querySelector(".total-quantity");
//Shopping cart quantity begins with 1
let quantity = 1;

//Event listener for "-" to remove 1 from the quantity
quantityDown.addEventListener("click", function () {
  //total quantitly cannot drop below 0
  if (quantity > 0) {
    quantity = quantity - 1;
    totalQuantity.innerHTML = "Quantity: " + quantity;
  }
});

//Event listener for "+" to add 1 from the quantity
quantityUp.addEventListener("click", function () {
  quantity = quantity + 1;
  totalQuantity.innerHTML = "Quantity: " + quantity;
});
