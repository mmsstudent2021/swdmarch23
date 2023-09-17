import { itemLists, productSelect } from "./app/selectors";
import { products } from "./app/variables";

export const productOptionRender = () => {
  products.forEach(({ id, name }) =>
    productSelect.append(new Option(name, id))
  );
};

export const productItemRender = () => {
  products.forEach(({ name, price }) =>
  itemLists.append(createItem({name,price}))
  );
};

export const createItem = ({ name, price }) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
    <div class="d-flex justify-content-between">
      <p class=" mb-0">${name}</p>
      <p class=" mb-0 text-black-50"><span>${price}</span> MMK</p>
    </div>
    
    `;
  return li;
};
