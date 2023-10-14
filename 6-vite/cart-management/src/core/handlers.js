import { productRender } from "../app/product";
import { cartBtn, cartUi } from "./selectors";
import { products } from "./variables";

export const searchBtnHandler = () => {};

export const cartBtnHandler = () => {
  cartUi.classList.toggle("translate-x-full");
  cartUi.classList.add("duration-300");
};

export const categoryListsHandler = (event) => {
  if (event.target.classList.contains("category-badge")) {
    const currentCategoryBtn = event.target;
    const currentCategory = currentCategoryBtn.innerText.toLowerCase();
    const lastActiveCategoryBtn = app.querySelector(".category-badge.active");
    lastActiveCategoryBtn.classList.toggle("active");

    // console.log(currentCategory);

    currentCategoryBtn.classList.add("active");
    productRender(
      products.filter(
        (product) =>
          product.category === currentCategory || currentCategory === "all"
      )
    );
  }
};

// export const cartBtnHandler = () => {

// }
