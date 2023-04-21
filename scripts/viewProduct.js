import * as ContactService from "../services/ContactServices.js";

window.addEventListener('DOMContentLoaded', () => {
    const productId = window.location.href.split('=')[1];
   if (productId) {
    ContactService.getProduct(productId).then((productResponse) => {
    const product = productResponse.data;
    if (product) {
        ContactService.getCategory(product.categoryId).then((categoryResponse) => {
         const category = categoryResponse.data;
         if(category) {
            displayProducts(product, category);
         }
        })
        .catch((error) => {
            console.error(error);
        })
    }
    })
    .catch((error) => {
        console.error(error);
    })
   }
 });


 const displayProducts = (product, category) => {
    const contactRowElement = document.querySelector('#card1');
    let contactDetailsElement = "";
    if (product && Object.keys(product).length > 0 && category && Object.keys(category).length > 0) {
        contactDetailsElement = `
            <div class="col-sm-3">
                    <img alt=""
                         class="img-fluid w-75 rounded-circle shadow-lg"
                         src="${product.imageUrl}">
                </div>
                <div class="col-sm-8 offset-1">
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
                        <li class="list-group-item">
                            Description : <span class="fw-bold">${product.description}</span>
                        </li>
                        <li class="list-group-item">
                            Category : <span class="fw-bold">${category.name}</span>
                        </li>
                    </ul>
                </div>
        `;
    }
    contactRowElement.innerHTML = contactDetailsElement;
};


