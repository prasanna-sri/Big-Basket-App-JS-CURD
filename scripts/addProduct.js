import * as ContactService from "../services/ContactServices.js";

window.addEventListener("DOMContentLoaded", () => {
    ContactService.getAllCategories().then((response) => {
   const category = response.data;
   if(category) {
   createInfoElement(category);
   }
    }).catch((error) => {
     console.error(error);
    });
});

const createInfoElement = (category) => {
  const categoryElement = document.querySelector("#category-input");
  let categoryRow = `<option value="">Select an Option</option>`;
  for (let category1 of category) {
categoryRow += ` <option value="${category1.id}">${category1.name}</option>`
  }
  categoryElement.innerHTML = categoryRow;
};


const createNew = document.querySelector("#add-contact-form");
createNew.addEventListener('submit', (event) => {
    event.preventDefault();
    const createProductForm = {
   name: document.querySelector("#name-input").value,
   imageUrl : document.querySelector("#image-input").value,
   price : document.querySelector("#price-input").value,
   quantity : document.querySelector("#quantity-input").value,
   categoryId: document.querySelector("#category-input").value,
   description : document.querySelector("#description-input").value,
    }

if(createProductForm) {
    ContactService.createProduct(createProductForm).then((response) => {
      console.log(response, "data")

    if(response && response.data) {
      console.log(response.data, "data")
        window.location.href = "../pages/adminProduct.html"; 
    }
    }).catch((error) => {
    console.error(error);
    });
}
})

const imageElement = document.querySelector('#image-input');
const displayImage = document.querySelector("#display-image");
imageElement.addEventListener('change', (event) => {
const imageUrl = event.target.value;
displayImage.setAttribute('src', imageUrl);
})

