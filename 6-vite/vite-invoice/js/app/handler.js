import { Offcanvas } from "bootstrap";
import { createItem } from "../product";
import { addRecord, calculateRecordCostTotal, updateRecord } from "../record";
import { myInventory, productSelect, recordForm, totalCost } from "./selectors";
import { products } from "./variables";

export const recordFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(recordForm);

  const currentProduct = products.find(
    (product) => product.id == formData.get("productSelect")
  );

  const isExistedProduct = document.querySelector(
    `[row-product-id='${currentProduct.id}']`
  );

  if (isExistedProduct) {
    updateRecord(currentProduct, formData.get("quantityInput"));
  } else {
    addRecord(currentProduct, formData.get("quantityInput"));
  }

  recordForm.reset();
};

export const newItemFormHandler = (event) => {
  event.preventDefault();
  const newProduct = {};
  const formData = new FormData(newItemForm);
  newProduct.id = products[products.length - 1].id + 1;
  newProduct.name = formData.get("new_item_name");
  newProduct.price = formData.get("new_item_price");

  itemLists.append(createItem(newProduct));
  productSelect.append(new Option(newProduct.name, newProduct.id));
  products.push(newProduct);

  newItemForm.reset();
};

export const printerHandler = () => {
  print();
  document.querySelectorAll(".record-row").forEach((el) => el.remove());
  totalCost.innerText = 0;
};


export const inventoryBtnHandler = () => {
  const myInventoryOffcanvas = new Offcanvas(myInventory,{
    backdrop : "static"
  });
  console.log(myInventoryOffcanvas);
  myInventoryOffcanvas.show()
  myInventory.addEventListener("hide.bs.offcanvas",() => {
    console.log("U close Inventory");
  })
}