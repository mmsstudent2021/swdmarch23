import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productRender } from "./app/product";
import { cartBtnHandler, categoryListsHandler } from "./core/handlers";
import { cartBtn, categoryLists, closeCart } from "./core/selectors";
import { categories, products } from "./core/variables";

export class Shop {
  preRender() {
    categoryRender(categories);
    productRender(products);
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    closeCart.addEventListener("click", cartBtnHandler);
    categoryLists.addEventListener("click",categoryListsHandler)
  }

  observer(){
    cartObserver()
  }

  init() {
    console.log("Shop App Start");
    this.observer()
    this.preRender();
    this.listener();
  }
}
