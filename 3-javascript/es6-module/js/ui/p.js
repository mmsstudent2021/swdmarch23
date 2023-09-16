export const createCounter = (count,text) => {
    const p = document.createElement("p");
    p.innerHTML = `${text} : <span id="counter">${count}</span>`;

    return p;
}