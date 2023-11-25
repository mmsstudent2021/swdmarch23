import Swal from "sweetalert2";

export const url = (pathName, baseUrl = "http://localhost:5173/api") => {
  return baseUrl + pathName;
};

export const disabledForm = (selector) => {
  selector
    .querySelectorAll("input")
    .forEach((el) => el.setAttribute("disabled",true));
  selector
    .querySelectorAll("button")
    .forEach((el) => el.setAttribute("disabled",true));
};

export const enableForm = (selector) => {
    selector
      .querySelectorAll("input")
      .forEach((el) => el.removeAttribute("disabled"));
    selector
      .querySelectorAll("button")
      .forEach((el) => el.removeAttribute("disabled"));
  };
  

export const toast = (title, icon = "success") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon,
    title,
  });
};
