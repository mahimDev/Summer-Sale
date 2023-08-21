let total = 0;
function clickElementValue(target) {
  const elementValue = document.getElementById("input-field");
  const listCount = elementValue.childElementCount;
  const item = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.classList.add("list-none");
  li.innerHTML = `${listCount + 1}. ${item}`;
  elementValue.appendChild(li);

  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

  const totalSum = parseFloat(total) + parseFloat(price);
  // console.log(totalSum.toFixed(2))
  total = totalSum;
  const totalPrice = document.getElementById("total-price").innerText = total.toFixed(2);


  const btn = document.getElementById("parchase-btn");

  if(totalPrice > 0) {
    btn.removeAttribute("disabled");
  }
  // active coupon apply btn
  if(totalPrice >= 200){
    document.getElementById("apply-btn").removeAttribute("disabled")
  }
  // return product;
}
// utility
function getTextValue(textElement){
  const amountElement = document.getElementById("total-price");
  const amountString = amountElement.innerText;
  const amount = parseFloat(amountString);
  return amount;
}
// coupon code using functionality
function couponApplyBtn(){
  const couponCode = "SELL200";
  const totalPrice = getTextValue("total-price");
  const couponInputValue = document.getElementById("coupon-input").value;
  if(couponInputValue === couponCode){
    const makeDiscount = (totalPrice / 100) * 20;
    const discount = makeDiscount.toFixed(2);
    document.getElementById("discount-price").innerHTML = discount;
    const totalNewBalance = totalPrice - discount;
    const newBalance = totalNewBalance.toFixed(2);
    document.getElementById("product-price").innerHTML = newBalance;
  }else{
    alert("Invalid coupon code!");
    return;
  }
}
// go home click event

 function goHomeBtn(){
  document.getElementById("total-price").innerHTML = 0.00.toFixed(2);
  document.getElementById("discount-price").innerHTML = 0.00.toFixed(2);
  document.getElementById("product-price").innerHTML = 0.00.toFixed(2);
  const elementValue = document.getElementById("input-field");
  elementValue.innerHTML = "";
  const couponInputValue = document.getElementById("coupon-input");
  couponInputValue.value = '';
  // disabled btn
  document.getElementById("apply-btn").setAttribute("disabled","true");
  document.getElementById("parchase-btn").setAttribute("disabled","true");
}







// document
//   .getElementById("coupon-input")
//   .addEventListener("keyup", function (event) {
//     const couponCode = event.target.value;
//     const apply = document.getElementById("apply-btn");
//     if (couponCode === "SELL200") {
//       apply.removeAttribute("disabled");
//     } else {
//       apply.setAttribute("disabled", true);
//     }
//   });

// const discountPrice = totalPrice / 100;
// const discount = discountPrice * 20;
// const discountTotal = (document.getElementById("discount-price").innerText =
//   discount);

// const productPrice = total - discountTotal;
// const productPriceToFixed = productPrice.toFixed(2);
// document.getElementById("product-price").innerText = productPrice;