import { delBtnHandler } from "../handler.js";

export const createLi = (text) => {
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText = "delete";

    li.append(delBtn);

    const textNode = document.createTextNode(" "+text);

    li.append(textNode);

    delBtn.addEventListener("click",delBtnHandler)
    return li;
}