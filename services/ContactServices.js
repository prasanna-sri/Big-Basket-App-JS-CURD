//@url : http://localhost:9000/products
const serverUrl = "http://localhost:9000";

/**
	@usage : to get all products
    @method : GET
    @body : no-params
    @url : http://localhost:9000/products
*/
export const getAllProducts = () => {
    const dataUrl = `${serverUrl}/products`;
    return axios.get(dataUrl);
};


/**
	@usage : get a product
    @method : GET
    @body : no-params
    @url : http://localhost:9000/products/:productId
*/
export const getProduct = (productId) => {
    const dataUrl = `${serverUrl}/products/${productId}`;
    return axios.get(dataUrl);
};

/**
	@usage : create a product
    @method : POST
    @body : name, imageUrl, price, quantity, description, categoryId
    @url : http://localhost:9000/products/
*/
export const createProduct = (product) => {
    const dataUrl = `${serverUrl}/products`;
    return axios.post(dataUrl, product);
};

/**
	@usage : Update a product
    @method : PUT
    @body : name, imageUrl, price, quantity, description, categoryId
    @url : http://localhost:9000/products/:productId
*/
export const updateProduct = (product, productId) => {
    const dataUrl = `${serverUrl}/products/${productId}`;
    return axios.put(dataUrl, product);
};

/**
	@usage : Delete a product
    @method : DELETE
    @body : no-params
    @url : http://localhost:9000/products/:productId
*/
export const deleteProducts = (productId) => {
    const dataUrl = `${serverUrl}/products/${productId}`;
    return axios.delete(dataUrl);
};

/**
	@usage : Get all categories
    @method : GET
    @body : no-params
    @url : http://localhost:9000/categories/
*/
export const getAllCategories = () => {
    const dataUrl = `${serverUrl}/categories`;
    return axios.get(dataUrl);
};

/**
	@usage : Get a Category
    @method : GET
    @body : no-params
    @url : http://localhost:9000/categories/:categoryId
*/
export const getCategory = (categoryId) => {
    const dataUrl = `${serverUrl}/categories/${categoryId}`;
    return axios.get(dataUrl);
};