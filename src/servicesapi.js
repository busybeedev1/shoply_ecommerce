const BASE_URL = "https://dummyjson.com";


export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
}


export async function getProduct(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return response.json();
}


export async function searchProducts(query) {
    const response = await fetch(
        `${BASE_URL}/products/search?q=${query}`
    );

    return response.json();
}


export async function getCategories() {
    const response = await fetch(
        `${BASE_URL}/products/categories`
    );

    return response.json();
}