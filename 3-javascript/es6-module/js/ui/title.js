export const createTitle = (titleText) => {
    const title = document.createElement("h1");
    title.innerText = titleText;
    return title;
}