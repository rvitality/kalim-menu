import "./scss/main.scss";

import { DATA } from "./data";

const categories = document.querySelectorAll(".options__item");
const productsContainer = document.querySelector(".products");

const displayProduct = item => {
    const { name, photo, prices, description } = item;

    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
        <div class="photo">
            <img
                src="${photo}"
                alt="${name}"
            />
        </div>
            <div class="details">
                <div class="details__price">₱ 15.99</div>
                <h2 class="details__name">${name}</h2>
                <p class="details__desc">
                    ${description}
                </p>
                <div class="details__link">
                    <span>Order Now</span>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                    </svg>
                </div>
        </div>`;

    productsContainer.appendChild(product);
};

categories.forEach(category => {
    category.addEventListener("click", e => {
        const targetId = e.target.id;
        if (!targetId) return;

        const products =
            DATA.find(product => {
                const productCategoryName = product.category.split(" ").join("-").toLowerCase();
                return productCategoryName === targetId;
            })?.products || [];

        // if (!products.length) return;

        productsContainer.innerHTML = "";

        products.forEach(product => displayProduct(product));
    });
});
console.log(DATA);
