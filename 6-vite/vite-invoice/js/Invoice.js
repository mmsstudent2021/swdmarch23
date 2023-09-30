import { inventoryBtnHandler, newItemFormHandler, printerHandler, recordFormHandler } from "./app/handler";
import { inventoryBtn, newItemForm, printer, recordForm } from "./app/selectors";
import { productItemRender, productOptionRender } from "./product";
import { recordObserver } from "./record";

export default class Invoice {

  observer(){
    recordObserver()
  } 

  initialRender() {
    productOptionRender();
    productItemRender();
  }

  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click",printerHandler);
    inventoryBtn.addEventListener("click",inventoryBtnHandler)
  }

  init() {
    console.log("Invoice App Start");

    this.observer();

    this.initialRender();

    this.listener();
  }
}
