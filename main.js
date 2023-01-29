import "./scss/main.scss";

import { DATA } from "./data";

const categories = document.querySelectorAll(".options__item");
const productsContainer = document.querySelector(".products");

categories.forEach(category => {
    category.addEventListener("click", e => {
        const targetId = e.target.id;
        if (!targetId) return;

        const products =
            DATA.find(product => {
                const productCategoryName = product.category.split(" ").join("-").toLowerCase();
                return productCategoryName === targetId;
            })?.products || [];

        if (!products.length) return;
    });
});
console.log(DATA);
