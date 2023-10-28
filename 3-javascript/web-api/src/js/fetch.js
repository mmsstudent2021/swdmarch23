// const f = fetch("./src/js/data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
