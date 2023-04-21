import * as ContactService from "../services/ContactServices.js";


/**
 * When the page is loaded
 */
window.addEventListener('DOMContentLoaded', () => {
   productsFromServer();
   categoriesFromServer();
});

/**
 * When change happens on Image-Input Field
 * @type {Element}
 */
const imageElement = document.querySelector("#image-input");
const displayImageElement = document.querySelector("#display-image");
imageElement.addEventListener('change', (event) => {
    const imageUrl = event.target.value;
    displayImageElement.setAttribute('src', imageUrl);
});

/**
 * Submit the form data
 * @type {Element}
 */
const formElement = document.querySelector("#edit-contact-form");
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    sendFormToServer();
});


const productsFromServer = () => {
    const productId = window.location.href.split('=')[1];
    if (productId) {
     ContactService.getProduct(productId).then((response) => {
         const product = response.data;
         if (product) {
             displayProduct(product);
         }
     })
     .catch((error) => {
     console.error(error);
     })
    }
};

const categoriesFromServer = () => {
    ContactService.getAllCategories().then((response) => {
    const categories = response.data;
    if (categories) {
        displayCategories(categories);
    }
    })
    .catch((error) => {
        console.error(error);
    })
};

const displayCategories = (categories) => {
    const selectElement = document.querySelector('#category-input');
    let optionsElement = ` <option value="">Select a Group</option>`;
    for (let category of categories) {
        optionsElement += `<option value="${category.id}">${category.name}</option>`
    }
    selectElement.innerHTML = optionsElement;
};

const displayProduct = (product) => {
    document.querySelector("#name-input").value = product.name;
    document.querySelector("#image-input").value = product.imageUrl;
    document.querySelector("#price-input").value = product.price;
    document.querySelector("#quantity-input").value = product.quantity;
    document.querySelector("#category-input").value = product.categoryId;
    document.querySelector("#description-input").value = product.description;
    document.querySelector("#display-image").setAttribute('src', product.imageUrl);
};

const sendFormToServer = () => {
    const product = {
        name: document.querySelector("#name-input").value,
        imageUrl: document.querySelector("#image-input").value,
        price : document.querySelector("#price-input").value,
        quantity : document.querySelector("#quantity-input").value,
        categoryId: document.querySelector("#category-input").value,
        description : document.querySelector("#description-input").value,
    }
    const productId = window.location.href.split("=")[1];
    if (product && productId) {
        ContactService.updateProduct(product, productId).then((response) => {
            if (response && response.data) {
                window.location.href = "../pages/adminProduct.html";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
};
