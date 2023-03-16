async function getProductsData() {
    const response = await fetch ('https://dummyjson.com/products')
    const { products } = await response.json();
    console.log(products)

    return products;

}

getProductsData();

async function getProductsCategories() {
    const response = await fetch ('https://dummyjson.com/products/categories')
    const categories = await response. json();
console.log (categories);
return categories;

}

async function createCategoryButtons() {
    const categories = await getProductsCategories ();

    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
    const button = document .createElement ('button');
    button.classList.add('category-button');
    button.innerText = category;
    categoryList.append(button);
    });

}
    createCategoryButtons();