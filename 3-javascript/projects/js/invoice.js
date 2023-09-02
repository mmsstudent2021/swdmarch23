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

// selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordAddBtn = app.querySelector("#recordAddBtn");
const records = app.querySelector("#records");
const totalCost = app.querySelector("#totalCost");

// functions

const createProductOption = (product) => {
  const option = document.createElement("option");
  option.value = product.price;
  option.innerText = product.name;
  return option;
};

const createRecordRow = (product, quantity) => {
  const tr = document.createElement("tr");
  const cost = product.price * quantity;
  tr.innerHTML = `
    <td>1</td>
    <td>${product.name}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end">${quantity}</td>
    <td class="text-end row-cost">${cost}</td>
    `;

  return tr;
};

const costTotal = () => {
  let total = 0;
  const rowCosts = document.querySelectorAll(".row-cost");
  rowCosts.forEach((rowCost) => {
    total += parseFloat(rowCost.innerText);
  });

  totalCost.innerText = total;
  return total;
};

// process

products.forEach((product) =>
  productSelect.append(new Option(product.name, product.id))
);

recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submit");
  const data = new FormData(recordForm);
  console.log(data.get("productSelect"));
  console.log(data.get("quantityInput"));

  const currentProduct = products.find(
    (product) => product.id == data.get("productSelect")
  );

  records.append(createRecordRow(currentProduct, data.get("quantityInput")));

  recordForm.reset();

  costTotal()
});
