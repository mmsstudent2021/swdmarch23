// variables
const products = [
  {
    id: 1,
    name: "Domain Sale",
    price: 15,
  },
  {
    id: 2,
    name: "Web Design",
    price: 150,
  },
  {
    id: 3,
    name: "Graphic Design",
    price: 100,
  },
  {
    id: 4,
    name: "Web Development",
    price: 500,
  },
  {
    id: 5,
    name: "Application Development",
    price: 1000,
  },
  {
    id: 6,
    name: "Maintenance",
    price: 50,
  },
];

let rowCount = 1;

// selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordAddBtn = app.querySelector("#recordAddBtn");
const records = app.querySelector("#records");
const totalCost = app.querySelector("#totalCost");
const printer = app.querySelector("#printer");

// functions

const createProductOption = (product) => {
  const option = document.createElement("option");
  option.value = product.price;
  option.innerText = product.name;
  return option;
};

const createRecordRow = (product, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("row-product-id", product.id);
  tr.classList.add("record-row");
  const cost = product.price * quantity;
  tr.innerHTML = `
    <td class='row-num'></td>
    <td>${product.name}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end row-quantity-control">
      <i class='bi bi-dash row-quantity-decrement'></i>
      <span class="row-quantity">
      ${quantity}
      </span>
      <i class='bi bi-plus row-quantity-increment'></i>
    </td>
    <td class="text-end row-control">
    <span class='row-cost'>${cost}</span>
    <button class='btn btn-sm btn-primary row-delete '>
      <i class='bi bi-trash3'></i>
    </button>
    </td>
    `;

  const deleteRow = () => {
    if (confirm("Are U sure to delete ?")) {
      tr.remove();
      costTotal();
    }
  };

  const rowDelete = tr.querySelector(".row-delete");
  rowDelete.addEventListener("click", deleteRow);

  const rowQuantityIncrement = tr.querySelector(".row-quantity-increment");
  rowQuantityIncrement.addEventListener("click", () => {
    updateExistedRecord(product, 1);
  });

  const rowQuantityDecrement = tr.querySelector(".row-quantity-decrement");
  rowQuantityDecrement.addEventListener("click", () => {
    updateExistedRecord(product, -1);
  });

  return tr;
};

const costTotal = () => {
  // let total = 0;
  // const rowCosts = document.querySelectorAll(".row-cost");
  // console.log([...rowCosts]);
  // rowCosts.forEach((rowCost) => {
  //   total += parseFloat(rowCost.innerText);
  // });

  totalCost.innerText = [...document.querySelectorAll(".row-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  // return total;
};

const addNewRecord = (product, quantity) => {
  records.append(createRecordRow(product, quantity));
};

const updateExistedRecord = (product, quantity) => {
  const row = document.querySelector(`[row-product-id='${product.id}']`);
  const currentRowQuantity = row.querySelector(".row-quantity");
  const currentRowCost = row.querySelector(".row-cost");

  if (quantity < 0) {
    if (currentRowQuantity.innerText > 1) {
      currentRowQuantity.innerText =
        parseFloat(currentRowQuantity.innerText) + parseFloat(quantity);

      currentRowCost.innerText = currentRowQuantity.innerText * product.price;
    }
  } else {
    currentRowQuantity.innerText =
      parseFloat(currentRowQuantity.innerText) + parseFloat(quantity);
    currentRowCost.innerText = currentRowQuantity.innerText * product.price;
  }
};

const handleRecordFrom = (event) => {
  event.preventDefault();
  const data = new FormData(recordForm);

  const currentProduct = products.find(
    (product) => product.id == data.get("productSelect")
  );

  const isExistedProduct = document.querySelector(
    `[row-product-id='${currentProduct.id}']`
  );

  if (isExistedProduct) {
    updateExistedRecord(currentProduct, data.get("quantityInput"));
  } else {
    addNewRecord(currentProduct, data.get("quantityInput"));
  }

  recordForm.reset();
  costTotal();
};

// process

products.forEach((product) =>
  productSelect.append(new Option(product.name, product.id))
);

recordForm.addEventListener("submit", handleRecordFrom);

printer.addEventListener("click", () => {
  print();
});
