import * as ContactService from "../services/ContactServices.js";

window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllProducts().then((response) => {
       const productsInfo = response.data;
       displayProducts(productsInfo);
    })
    .catch((error) => {
    console.error(error);
    });
})

const displayProducts = (productsInfo) => {
const displayCardElement = document.querySelector('#card');
let displayCard = "";
    for(let product of productsInfo) {
  displayCard += `<div class="col-sm-2">
               <div class="card">
                  <div class="card-header text-center">
                   <a href = "../pages/viewProduct.html?productId=${product.id}">
                   <img width="50" height = "50" alt="" class="w-50 shadow-lg" src="${product.imageUrl}">
                   </a>
                  </div>
                  <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Name : <span class="fw-bold">${product.name}</span>
                        </li>
                        <li class="list-group-item">
                            Price : <span class="fw-bold">${product.price}</span>
                        </li>
                        <li class="list-group-item">
                            Qty : <span class="fw-bold">${product.quantity}</span>
                        </li>
                    </ul>
                  </div>
               </div>
            </div>`
}
displayCardElement.innerHTML = displayCard;
};