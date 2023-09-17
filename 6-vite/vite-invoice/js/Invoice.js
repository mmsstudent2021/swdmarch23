import { newItemFormHandler, printerHandler, recordFormHandler } from "./app/handler";
import { newItemForm, printer, recordForm } from "./app/selectors";
import { productItemRender, productOptionRender } from "./product";

export default class Invoice {
  initialRender() {
    productOptionRender();
    productItemRender();
  }

  listener() {
    recordForm.addEventListener("submit", recordFormHandler);
    newItemForm.addEventListener("submit", newItemFormHandler);
    printer.addEventListener("click",printerHandler)
  }

  init() {
    console.log("Invoice App Start");

    this.initialRender();

    this.listener();
  }
}
