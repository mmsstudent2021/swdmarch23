import { Drawer } from "flowbite";

export const createCourseForm = document.querySelector("#createCourseForm");
export const editCourseForm = document.querySelector("#editCourseForm");
export const recordUiTemplate = document.querySelector("#recordUiTemplate");
export const recordGroup = document.querySelector("#recordGroup");
export const recordEdit = document.querySelector("#record-edit");

// options with default values
const options = {
  placement: "right",
  backdrop: true,
  bodyScrolling: false,
  edge: false,
  edgeOffset: "",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onHide: () => {
    console.log("drawer is hidden");
  },
  onShow: () => {
    console.log("drawer is shown");
  },
  onToggle: () => {
    console.log("drawer has been toggled");
  },
};

// instance options object
const instanceOptions = {
  id: "record-edit",
  override: true,
};

export const editDrawer = new Drawer(recordEdit, options, instanceOptions);
