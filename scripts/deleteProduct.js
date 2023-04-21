import * as ContactService from "../services/ContactServices.js";

window.addEventListener('DOMContentLoaded', () => {
const productId = window.location.href.split('=')[1];
if (productId)
ContactService.deleteProducts(productId).then((response) => {
if (response && response.data) {
window.location.href = '../pages/adminProduct.html';
}
}).catch((error) => {
console.error(error);
})
});