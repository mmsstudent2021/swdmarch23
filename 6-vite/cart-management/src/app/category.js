import { categoryLists } from "../core/selectors";
import { products } from "../core/variables";
import { productRender } from "./product";

export const categoryRender = (list) => {
  list.forEach((el) => categoryLists.append(createCategoryUi(el)));
};

export const createCategoryUi = (categoryName) => {
  const btn = document.createElement("button");
  btn.classList.add("category-badge","whitespace-nowrap");
  btn.innerText = categoryName;


  return btn;
};


