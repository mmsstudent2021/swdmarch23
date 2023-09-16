import { createSaveButton } from "./ui/button.js";
import { createInput } from "./ui/input.js";
import { createCounter } from "./ui/p.js";
import { createTitle } from "./ui/title.js";
import { createUl } from "./ui/ul.js";

export const appTitle = createTitle("Todo App");
export const textInput = createInput();
export const saveBtn = createSaveButton("Save");
export const lists = createUl();

export const counter = createCounter(0,"Total List");
