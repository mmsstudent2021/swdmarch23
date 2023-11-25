import {
  createCourseFormHandler,
  editCourseFormHandler,
  recordGroupHandler,
} from "./handlers";
import { createCourseForm, editCourseForm, recordGroup } from "./selectors";

const listeners = () => {
  createCourseForm.addEventListener("submit", createCourseFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  editCourseForm.addEventListener("submit", editCourseFormHandler);
};

export default listeners;
