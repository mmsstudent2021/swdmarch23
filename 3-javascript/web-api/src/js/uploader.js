const form = document.querySelector("#form");
const photos = document.querySelector("#photos");
const uploaderUi = document.querySelector("#uploaderUi");

// click event forward ui to file input
uploaderUi.addEventListener("click", () => {
  photos.click();
});

const selectedPhotoPreview = (event) => {
  event.preventDefault();

  //   [...photos.files].forEach(...)

  // 1.get file
  for (let photo of photos.files) {
    // file reader instance
    const fileReader = new FileReader();

    // file reader event
    fileReader.addEventListener("load", (event) => {
      //console.log(event.target.result); // url

      //create new img
      const img = new Image();
      // set url as src of img
      img.src = event.target.result;
      img.classList.add("object-cover", "object-top","rounded-lg","h-24");

      // append to doc
      uploaderUi.append(img);
    });

    // read file
    fileReader.readAsDataURL(photo);
  }
};

photos.addEventListener("change", selectedPhotoPreview);
