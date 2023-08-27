// Selectors
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

// functions

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeRandomId = (length) => {
  let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  // console.log(char.length);
  let result = "";

  for (let i = 1; i <= length; i++) {
    result += char[getRndInteger(0, char.length)];
  }

  return result;
};

const countList = () => {
  const totalList = lists.querySelectorAll(".list").length;

  totalListCounter.innerText = totalList;

  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;

  if (totalList === 0) {
    lists.innerHTML = `<p class='text-center empty-stage'>There is no List</p>`;
  } else {
    lists.querySelector(".empty-stage")?.remove();
  }
};

const createList = (listText) => {
  const checkerId = makeRandomId(10);

  const list = document.createElement("div");
  list.classList.add("list");

  list.innerHTML = `
  <div
      class="border border-2 border-primary p-3 d-flex justify-content-between align-items-start mb-3"
    >
      <div class="form-check list-checker">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="${checkerId}"
        />
        <label
          class="form-check-label list-label"
          for="${checkerId}"
        >
          ${listText}
        </label>
      </div>

      <div class="list-control">
        <button class="btn btn-outline-primary list-edit-btn">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-outline-primary list-del-btn">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  
  `;

  const listDelBtn = list.querySelector(".list-del-btn");
  listDelBtn.addEventListener("click", () => {
    const decision = window.confirm("Are U sure to Delete ?");
    decision && list.remove();

    countList();
  });

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    // console.log("U check");
    countList();
  });

  const listEditBtn = list.querySelector(".list-edit-btn");
  const listLabel = list.querySelector(".list-label");

  listEditBtn.addEventListener("click", () => {
    console.log("U edit");
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    editInput.classList.add("form-control");

    listLabel.innerText = null;
    listLabel.append(editInput);

    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    });
  });

  return list;
};

// Processes

countList();
addBtn.addEventListener("click", () => {
  lists.append(createList(textInput.value));
  countList();
  textInput.value = null;
});


const obj = {
  a : "aaa",
  b : "bbb",
  // c : {
  //   x : "xxx",
  //   y : "yyy",
  //   z : "zzz"
  // }

}

console.log(obj.a);
console.log(obj.b);
console.log(obj?.c);
console.log(obj?.c?.y);