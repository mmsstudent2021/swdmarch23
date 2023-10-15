import Swal from "sweetalert2";
import { cartBtnHandler } from "../core/handlers";
import {
  cartBtnCount,
  cartCount,
  cartItems,
  cartTotalAmount,
} from "../core/selectors";
import { removeCartAddedBtn } from "./product";

export const createCartUi = ({ id, image, price, title }) => {
  const cart = document.createElement("div");
  cart.setAttribute("product-id", id);
  cart.classList.add("cart-item");
  cart.innerHTML = `
    <div class=" group mb-5 ">
        <img
        class="h-[80px] mb-[-40px] ps-4 relative z-10"
        src="${image}"
        alt=""
        />
        <div class="border p-4 pt-12 shadow bg-white border-neutral-400 text-neutral-700 relative">
       
        <button class='cart-remove-btn absolute top-4 right-4 opacity-0 translate-x-10 duration-200 group-hover:opacity-100 group-hover:translate-x-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
        <p class="font-bold line-clamp-1 mb-3">${title}</p>
            

       
        <div class="flex justify-between">
            <p class='hidden'>Price : $ <span class='original-price'>${price}</span></p>
            <p class="text-neutral-500"> $ <span class='cart-cost'>${price}</span></p>
            <div
            class="flex justify-between items-center w-[120px] bg-neutral-100"
            >
            <button class="px-2 py-1 bg-neutral-300 cart-q-decrement ">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 12H6"
                />
                </svg>
            </button>

            <p class="flex-grow text-end pe-2 cart-q">1</p>


            <button class="px-2 py-1 bg-neutral-300 cart-q-increment">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                />
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>   
    `;
  const cartRemoveBtn = cart.querySelector(".cart-remove-btn");
  cartRemoveBtn.addEventListener("click", cartRemoveBtnHandler);

  const cartQuantityDecrement = cart.querySelector(".cart-q-decrement");
  cartQuantityDecrement.addEventListener("click", cartQuantityDecrementHandler);

  const cartQuantityIncrement = cart.querySelector(".cart-q-increment");
  cartQuantityIncrement.addEventListener("click", cartQuantityIncrementHandler);

  return cart;
};

export const cartRemoveBtnHandler = (event) => {
  const currentCart = event.target.closest(".cart-item");
  const productId = currentCart.getAttribute("product-id");
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    // confirmButtonColor: "rgb(64,64,64)",
    // cancelButtonColor: "rgb(245,245,245)",
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      currentCart.classList.add("animate__animated", "animate__hinge");
      currentCart.addEventListener("animationend", () => {
        currentCart.remove();
        removeCartAddedBtn(productId);
      });
    }
  });
};

export const cartQuantityIncrementHandler = (event) => {
  const currentCart = event.target.closest(".cart-item");
  const currentQuantity = currentCart.querySelector(".cart-q");
  const currentCartPrice = currentCart.querySelector(".original-price");
  const currentCartCost = currentCart.querySelector(".cart-cost");

  currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;

  currentCartCost.innerText =
    currentCartPrice.innerText * currentQuantity.innerText;
};

export const cartQuantityDecrementHandler = () => {
  const currentCart = event.target.closest(".cart-item");
  const currentQuantity = currentCart.querySelector(".cart-q");
  const currentCartPrice = currentCart.querySelector(".original-price");
  const currentCartCost = currentCart.querySelector(".cart-cost");

  if (currentQuantity.innerText > 1) {
    currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
    currentCartCost.innerText =
      currentCartPrice.innerText * currentQuantity.innerText;
  }
};

export const calculateCartAmountTotal = () => {
  const cartCost = app.querySelectorAll(".cart-cost");
  return [...cartCost]
    .reduce((pv, cv) => pv + parseFloat(cv.innerText), 0)
    .toFixed(2);
};

export const calculateCartCount = () => {
  const carts = app.querySelectorAll(".cart-item");
  return carts.length;
};

export const cartObserver = () => {
  const observerOptions = {
    childList: true,
    subtree: true,
  };
  const observer = new MutationObserver(() => {
    cartTotalAmount.innerText = calculateCartAmountTotal();
    cartCount.innerText = cartBtnCount.innerText = calculateCartCount();
  });
  observer.observe(cartItems, observerOptions);
};
