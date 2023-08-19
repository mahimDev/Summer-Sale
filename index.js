let total = 0;
function clickElementValue(target){
const elementValue = document.getElementById('input-field');
const item = target.childNodes[3].childNodes[3].innerText

 const li = document.createElement('li')
 li.innerText = item
 elementValue.appendChild(li)

const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

total = parseFloat(total) + parseFloat(price)

const totalPrice = document.getElementById('total-price').innerText = total

const discountPrice = totalPrice / 100;
const discount = discountPrice * 20
const discountTotal = document.getElementById('discount-price').innerText = discount;

const productPrice = total - discountTotal;

const product = document.getElementById('product-price').innerText = productPrice
return product;

}