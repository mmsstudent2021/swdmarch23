// Selector
const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");

// function
const calculateArea = (w, h) => w * h;

const handleClick = () => {
  const area = calculateArea(width.valueAsNumber, height.valueAsNumber);

  result.innerText = `${width.value} ft * ${height.value} ft = ${area} sqft `;

  width.value = null;
  height.value = null;
};

const store = () => {
    lists.innerHTML += `<li>${result.innerText}</li>`;
    result.innerText = null;
}

const clear = () => {
    result.innerText = null;
}

// process

calculate.addEventListener("click", handleClick);
storeBtn.addEventListener("click",store)
clearBtn.addEventListener("click",clear)
