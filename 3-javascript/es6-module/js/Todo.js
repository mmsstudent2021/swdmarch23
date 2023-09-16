import { appTitle, counter, lists, saveBtn, textInput } from "./elements.js";
import { saveBtnHandler } from "./handler.js";

export default class Todo {
  preRenderUi() {
    app.append(appTitle);
    app.append(textInput);
    app.append(saveBtn);
    app.append(lists);
    app.append(counter);
  }

  listener(){
    saveBtn.addEventListener("click", saveBtnHandler);
  }

  init() {
    console.log("Todo app start");
    this.preRenderUi()
    this.listener()
  }
}
