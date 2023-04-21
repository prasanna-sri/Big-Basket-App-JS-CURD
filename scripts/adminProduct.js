import * as ContactService from "../services/ContactServices.js";

window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllProducts().then((response) => {
     const productsInfo = response.data;
     displayTable(productsInfo);
    })
    .catch((error) => {
    console.log(error);
    });
})

const displayTable = (productsInfo) => {
const tableElement = document.querySelector('#table-body')
let tableRows = "";
productsInfo.forEach((product, index) => {
tableRows += ` <tr>
<td>${index+1}</td>
<td>
<img width="50" height="50" src="${product.imageUrl}" class=" rounded-circle shadow-lg">
</td>
<td>${product.name}</td>
<td>${product.price}</td>
<td>${product.quantity}</td>
<td>
    <a id="btn-update" href= "./editProduct.html?productId=${product.id}" class="btn text-light">UPDATE</a>
    <a id="btn-delete" href="./deleteProduct.html?productId=${product.id}" class="btn text-light">DELETE</a>
</td>
</tr>`
});
tableElement.innerHTML = tableRows;
}